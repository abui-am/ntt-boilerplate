import { NextPage } from 'next';

import TrendingCuration from '@/components/curations/Trending';

const Home: NextPage = () => {
  return (
    <div>
      <div className="mt-6">
        <TrendingCuration />
      </div>

      <div className="mt-6">
        <TrendingCuration />
      </div>
    </div>
  );
};

export default Home;
