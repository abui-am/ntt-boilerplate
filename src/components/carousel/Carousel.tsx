import Carousel from 'react-multi-carousel';

const MultiCarousel = ({ children }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      partialVisibilityGutter: children.length > 1 ? 20 : 0,
    },
  };
  return (
    <Carousel
      swipeable
      draggable
      showDots={false}
      responsive={responsive}
      ssr // means to render carousel on server-side.
      //   infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl
      customTransition="all .5s"
      transitionDuration={500}
      partialVisible
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      deviceType="desktop"
      dotListClass="custom-dot-list-style"
    >
      {children}
    </Carousel>
  );
};

export default MultiCarousel;
