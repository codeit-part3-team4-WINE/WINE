import LinkButton from './components/LinkButton';

/**
 * 링크를 추가하는 부분을 컴포넌트로 분리하였습니다.
 * 예시 코드처럼 LinkButton 컴포넌트를 추가해서 사용해주시면 됩니다.
 *
 * @example
 * ```tsx
 * <LinkButton description='View all icons' slug='ui-icon' title='Icons' />
 * ```
 */
export default function DesignSystem() {
  return (
    <div className='p-8'>
      <div className='grid gap-4'>
        <LinkButton
          description='View all button variations and examples'
          slug='ui-button'
          title='Button Components'
        />

        <LinkButton description='View all icons' slug='ui-icon' title='Icons' />

        <LinkButton
          description='View all rating summary examples'
          slug='ui-rating-summary'
          title='Rating Summary Components'
        />

        <LinkButton
          description='View all profileImg examples'
          slug='ui-profileImg'
          title='ProfileImg Components'
        />

        <LinkButton
          description='View all selectbox variations and examples'
          slug='ui-selectbox'
          title='Selectbox Components'
        />

        <LinkButton
          description='View all radio variations and examples'
          slug='ui-radio'
          title='Radio Components'
        />
        <LinkButton
          description='View all wine-details components and examples'
          slug='ui-wine-details'
          title='Wine Details Components'
        />

        <LinkButton
          description='View all Recommend Wine Item examples'
          slug='ui-recommend-wine-item'
          title='Recommend Wine Item Components'
        />

        <LinkButton
          description='View all Dual Range Slider examples'
          slug='ui-dual-range-slider'
          title='Dual Range Slider Components'
        />

        <LinkButton
          description='View all multi select examples'
          slug='ui-multi-select'
          title='Multi Select Components'
        />
      </div>
    </div>
  );
}
