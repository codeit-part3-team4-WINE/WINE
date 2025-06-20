'use client';

import { useEffect, useState } from 'react';

import { submitReview } from '@/actions/review';
import WineIcon from '@/app/assets/icons/wine';
import Button from '@/components/Button';
import InputRange from '@/components/InputRange';
import InputTextArea from '@/components/InputTextArea';
import Modal from '@/components/Modal/Modal';
import ModalBody from '@/components/Modal/ModalBody';
import ModalClose from '@/components/Modal/ModalClose';
import ModalContent from '@/components/Modal/ModalContent';
import ModalFooter from '@/components/Modal/ModalFooter';
import ModalHeader from '@/components/Modal/ModalHeader';
import ModalTitle from '@/components/Modal/ModalTitle';
import MultiSelect from '@/components/MultiSelect';
import StarRating from '@/components/StarRating';

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

export interface Review {
  id: number;
  reviewText: string;
  rating: number;
  aroma: string[];
  lightBold: number;
  smoothTannic: number;
  drySweet: number;
  softAcidic: number;
  wineId: number;
}

interface ReviewModalProps {
  wineId: number;
  wineName: string;
  onSuccess?: () => void;
  initialReview?: Review;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function ReviewModal({
  isOpen,
  setIsOpen,
  wineId,
  wineName,
  onSuccess,
  initialReview,
}: ReviewModalProps) {
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
  const [isPending, setIsPending] = useState(false);

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
    setRating(initialReview.rating);

    const reverseMap = Object.fromEntries(
      Object.entries(AROMA_MAP).map(([kor, eng]) => [eng, kor]),
    );
    const aromaKor = initialReview.aroma
      .map((eng: string) => reverseMap[eng])
      .filter(Boolean);

    setSelected(aromaKor as string[]);
  }, [initialReview]);

  const handleChange = (name: keyof typeof values, value: number) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setErrorMessage('');
    setIsPending(true);

    if (!reviewText.trim()) {
      setErrorMessage('리뷰 내용을 입력해 주세요.');
      setIsPending(false);
      return;
    }

    if (rating === 0) {
      setErrorMessage('별점을 최소 1점 이상 선택해 주세요.');
      setIsPending(false);
      return;
    }

    if (selected.length === 0) {
      setErrorMessage('기억에 남는 향을 하나 이상 선택해 주세요.');
      setIsPending(false);
      return;
    }

    const formData = new FormData();
    formData.append('wineId', String(wineId));
    formData.append('reviewText', reviewText);
    formData.append('rating', String(rating));
    formData.append(
      'aroma',
      JSON.stringify(selected.map((kor) => AROMA_MAP[kor])),
    );
    formData.append('lightBold', String(values.lightBold));
    formData.append('smoothTannic', String(values.smoothTannic));
    formData.append('drySweet', String(values.drySweet));
    formData.append('softAcidic', String(values.softAcidic));

    if (reviewId !== null) {
      formData.append('reviewId', String(reviewId));
    }

    const result = await submitReview(undefined, formData);

    if (result.success) {
      onSuccess?.();
      setIsOpen(false);
    } else {
      setErrorMessage(result.message || '리뷰 등록 중 오류가 발생했습니다.');
    }

    setIsPending(false);
  };

  return (
    <Modal externalIsOpen={isOpen} onExternalChange={setIsOpen}>
      <ModalContent className='xl:max-w-[50rem]'>
        <ModalHeader>
          <ModalTitle> {reviewId ? '리뷰 수정' : '리뷰 등록'}</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <div className='mt-6 flex items-center gap-4'>
            <WineIcon size='40' />
            <div className='flex flex-col text-xl'>
              <h2 className='font-semibold'>{wineName || '와인 이름 없음'}</h2>
              <StarRating size={24} value={rating} onChange={setRating} />
            </div>
          </div>

          <div className='mt-4'>
            <InputTextArea
              placeholder='후기를 작성해 주세요'
              size='lg'
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
          </div>

          <div className='mt-6 flex flex-col gap-4 text-lg'>
            <h2>와인의 맛은 어땠나요?</h2>
            <InputRange
              className='max-w-[452px]'
              values={values}
              onChange={handleChange}
            />
          </div>

          <div className='mt-6 flex flex-col gap-4 text-lg'>
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
          {errorMessage && (
            <p className='mt-3 text-sm text-red-500'>{errorMessage}</p>
          )}
        </ModalBody>
        <ModalFooter>
          <ModalClose />

          <ModalClose asChild>
            <Button
              className='flex-1'
              loading={isPending}
              size='sm'
              variant='secondary'
              onClick={() => setIsOpen(false)}
            >
              취소
            </Button>
          </ModalClose>

          <Button
            className='flex-2'
            loading={isPending}
            size='sm'
            variant='primary'
            onClick={handleSubmit}
          >
            {reviewId ? '리뷰 수정' : '리뷰 등록'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
