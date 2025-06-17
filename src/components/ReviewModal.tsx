'use client';

import { useActionState, useEffect, useState } from 'react';

import { submitReview } from '@/actions/review';
import CloseIcon from '@/app/assets/icons/close';
import WineIcon from '@/app/assets/icons/wine';
import Button from '@/components/Button';
import InputRange from '@/components/InputRange';
import InputTextArea from '@/components/InputTextArea';
import MultiSelect from '@/components/MultiSelect';

import StarRating from './StarRating';

export const AROMA_MAP: Record<string, string> = {
  체리: 'CHERRY',
  베리: 'BERRY',
  오크: 'OAK',
  바닐라: 'VANILLA',
  후추: 'PEPPER',
  제빵: 'BAKING',
  풀: 'GRASS',
  사과: 'APPLE',
  복숭아: 'PEACH',
  시트러스: 'CITRUS',
  트로피컬: 'TROPICAL',
  미네랄: 'MINERAL',
  꽃: 'FLOWER',
  담뱃잎: 'TOBACCO',
  흙: 'EARTH',
  초콜릿: 'CHOCOLATE',
  스파이스: 'SPICE',
  카라멜: 'CARAMEL',
  가죽: 'LEATHER',
};

interface Review {
  id: number;
  reviewText: string;
  rating: number;
  aroma: string[];
  lightBold: number;
  smoothTannic: number;
  drySweet: number;
  softAcidic: number;
}

export default function ReviewModal({
  wineId,
  onSuccess,
  onClose,
  initialReview,
}: {
  wineId: number;
  onSuccess?: () => void;
  onClose?: () => void;
  initialReview?: Review;
}) {
  const [values, setValues] = useState({
    lightBold: 5,
    smoothTannic: 5,
    drySweet: 5,
    softAcidic: 5,
  });

  const [reviewText, setReviewText] = useState('');
  const [selected, setSelected] = useState<string[]>([]);
  const [rating, setRating] = useState(0);
  const [reviewId, setReviewId] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!initialReview) return;

    setReviewId(initialReview.id);
    setValues({
      lightBold: initialReview.lightBold,
      smoothTannic: initialReview.smoothTannic,
      drySweet: initialReview.drySweet,
      softAcidic: initialReview.softAcidic,
    });
    setReviewText(initialReview.reviewText);
    setSelected(initialReview.aroma);
    setRating(initialReview.rating);
  }, [initialReview]);

  type SubmitResult = { success: boolean; message?: string };
  const [result, formAction, isPending] = useActionState<
    SubmitResult,
    FormData
  >(async (_prev, formData) => await submitReview(undefined, formData), {
    success: false,
    message: '',
  });

  useEffect(() => {
    if (result.success) {
      onSuccess?.();
      onClose?.();
      alert(reviewId ? '리뷰 수정 성공!' : '리뷰 등록 성공!');
    } else if (result.message) {
      setErrorMessage(result.message);
    }
  }, [result, onSuccess, onClose, reviewId]);

  const handleChange = (name: keyof typeof values, value: number) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    setErrorMessage('');

    if (!reviewText.trim()) {
      setErrorMessage('리뷰 내용을 입력해 주세요.');
      return;
    }
    if (rating === 0) {
      setErrorMessage('별점을 최소 1점 이상 선택해 주세요.');
      return;
    }
    if (selected.length === 0) {
      setErrorMessage('기억에 남는 향을 하나 이상 선택해 주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('wineId', String(wineId));
    formData.append('reviewText', reviewText);
    formData.append('rating', String(rating));

    const convertedAroma = selected
      .map((kor) => AROMA_MAP[kor])
      .filter(Boolean);
    formData.append('aroma', JSON.stringify(convertedAroma));

    formData.append('lightBold', String(values.lightBold));
    formData.append('smoothTannic', String(values.smoothTannic));
    formData.append('drySweet', String(values.drySweet));
    formData.append('softAcidic', String(values.softAcidic));

    if (reviewId !== null) formData.append('reviewId', String(reviewId));

    formAction(formData);
  };

  return (
    <div className='mx-auto w-3xl'>
      <div className='flex justify-between text-xl'>
        <h2>{reviewId ? '리뷰 수정' : '리뷰 등록'}</h2>
        <div className='cursor-pointer' onClick={onClose}>
          <CloseIcon size='30' />
        </div>
      </div>

      <div className='mt-10 flex items-center gap-4'>
        <WineIcon size='50' />
        <div className='flex flex-col text-2xl'>
          <h2>와인 ID: {wineId}</h2>
          <StarRating size={28} value={rating} onChange={setRating} />
        </div>
      </div>

      <div className='mt-5'>
        <InputTextArea
          placeholder='후기를 작성해 주세요'
          size='lg'
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
      </div>

      <div className='text-2lg mt-10 flex flex-col gap-5'>
        <h2>와인의 맛은 어땠나요?</h2>
        <InputRange values={values} onChange={handleChange} />
      </div>

      <div className='text-2lg mt-10 flex flex-col gap-5'>
        <h2>기억에 남는 향이 있나요?</h2>
        <MultiSelect
          selectedValues={selected}
          title=''
          onSelectionChange={(value) => setSelected(value as string[])}
        >
          <div className='flex flex-wrap gap-3'>
            {Object.keys(AROMA_MAP).map((aroma) => (
              <MultiSelect.Option key={aroma} value={aroma}>
                {aroma}
              </MultiSelect.Option>
            ))}
          </div>
        </MultiSelect>
      </div>

      <div className='mt-8 flex w-full justify-center'>
        <Button
          className='w-full max-w-[480px]'
          disabled={isPending}
          size='lg'
          variant='primary'
          onClick={handleSubmit}
        >
          {isPending
            ? reviewId
              ? '수정 중...'
              : '등록 중...'
            : reviewId
              ? '리뷰 수정하기'
              : '리뷰 남기기'}
        </Button>
      </div>

      {errorMessage && (
        <p className='mt-4 text-sm text-red-500'>{errorMessage}</p>
      )}
    </div>
  );
}
