import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Button } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';

// Tailwind CSS Styles
const ImageCarousel = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl mx-auto p-4">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="swiper-container"
        >
          <SwiperSlide>
            <div className="flex items-center justify-center h-80 bg-blue-300 rounded-lg">
              <img src="https://via.placeholder.com/600x400" alt="Slide 1" className="object-cover h-full w-full rounded-lg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-80 bg-blue-300 rounded-lg">
              <img src="https://via.placeholder.com/600x400" alt="Slide 2" className="object-cover h-full w-full rounded-lg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-80 bg-blue-300 rounded-lg">
              <img src="https://via.placeholder.com/600x400" alt="Slide 3" className="object-cover h-full w-full rounded-lg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-center h-80 bg-blue-300 rounded-lg">
              <img src="https://via.placeholder.com/600x400" alt="Slide 4" className="object-cover h-full w-full rounded-lg" />
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Navigation Buttons */}
        <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
          <Button
            className="swiper-button-prev"
            color="primary"
            variant="contained"
            startIcon={<ArrowBack />}
          >
            Prev
          </Button>
          <Button
            className="swiper-button-next"
            color="primary"
            variant="contained"
            endIcon={<ArrowForward />}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;