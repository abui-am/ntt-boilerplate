import trending from '@/constants/trending';

import MultiCarousel from '../carousel/Carousel';

const TrendingCuration = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Trending</h2>

      <div className="-mx-2">
        <MultiCarousel>
          {trending.items.map(({ volumeInfo }) => {
            return (
              <div className="px-2" key={volumeInfo.title}>
                <img
                  className="w-full h-48 object-cover object-cover rounded-md"
                  src={volumeInfo.imageLinks.thumbnail}
                  alt={volumeInfo.title}
                />
                <div className="mt-2">
                  <h2 className="font-bold">{volumeInfo.title}</h2>
                  <h3 className="text-sm">{volumeInfo.subtitle}</h3>
                </div>
              </div>
            );
          })}
        </MultiCarousel>
      </div>
    </>
  );
};

export default TrendingCuration;
