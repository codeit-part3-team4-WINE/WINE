import ReviewActionButton from './components/ReviewActionButton';
import WineFilterSidebar from './components/WineFilterSidebar';
import WineListContainer from './components/WineListContainer';
import WineRecommendationSection from './components/WineRecommendationSection';
import WineSearchBar from './components/WineSearchBar';

export default function WinesPage() {
  return (
    <div className='relative grid min-h-screen grid-cols-[auto_1fr_auto] grid-rows-[auto_4rem_1fr_auto] gap-x-4 gap-y-14 xl:grid-cols-[auto_1fr] xl:gap-x-16'>
      <WineRecommendationSection />
      <WineSearchBar />
      <ReviewActionButton />
      <WineFilterSidebar />
      <WineListContainer />
    </div>
  );
}
