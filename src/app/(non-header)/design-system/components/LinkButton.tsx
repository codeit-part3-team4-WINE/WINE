import Link from 'next/link';

interface LinkButtonProps {
  title: string;
  description?: string;
  slug: string;
}

/**
 * LinkButton 컴포넌트
 *
 * @param title - 제목
 * @param description - 상세 설명 (선택)
 * @param slug - 이동할 url을 설정합니다. 기본적으로 `/design-system/` 까지 되어 있어, 상세 페이지에 해당하는 라우터만 string으로 전달해주시면 됩니다.
 *
 * @example
 * ```tsx
 * <LinkButton description='View all icons' slug='ui-icon' title='Icons' />
 * ```
 */
export default function LinkButton({
  title,
  description,
  slug,
}: LinkButtonProps) {
  return (
    <Link
      className='block rounded-lg border border-gray-200 bg-white p-6 transition-colors hover:bg-gray-50'
      href={`/design-system/${slug}`}
    >
      <h2 className='text-xl font-semibold text-gray-900'>{title}</h2>
      <p className='mt-2 text-gray-600'>{description}</p>
    </Link>
  );
}
