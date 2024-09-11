import { useState } from 'react';
import { IconButton, Container } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

// Sample images (replace these with your own image URLs)
const images = [
  'https://via.placeholder.com/800x400?text=Work+1',
  'https://via.placeholder.com/800x400?text=Work+2',
  'https://via.placeholder.com/800x400?text=Work+3',
  'https://via.placeholder.com/800x400?text=Work+4',
  'https://via.placeholder.com/800x400?text=Work+5',
  'https://via.placeholder.com/800x400?text=Work+6',
  'https://via.placeholder.com/800x400?text=Work+7',
  'https://via.placeholder.com/800x400?text=Work+8',
  'https://via.placeholder.com/800x400?text=Work+9',
  'https://via.placeholder.com/800x400?text=Work+10',
  'https://via.placeholder.com/800x400?text=Work+11',
  'https://via.placeholder.com/800x400?text=Work+12',
  'https://via.placeholder.com/800x400?text=Work+13',
  'https://via.placeholder.com/800x400?text=Work+14',
  'https://via.placeholder.com/800x400?text=Work+15',
  'https://via.placeholder.com/800x400?text=Work+16',
  'https://via.placeholder.com/800x400?text=Work+17',
  'https://via.placeholder.com/800x400?text=Work+18',
  'https://via.placeholder.com/800x400?text=Work+19',
  'https://via.placeholder.com/800x400?text=Work+20',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <Container maxWidth="lg" className="relative my-10">
      <div className="relative w-full overflow-hidden">
        {/* Image slider */}
        <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="min-w-full h-80 md:h-96">
              <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Previous button */}
        <IconButton
          onClick={prevSlide}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-200"
        >
          <ArrowBackIos />
        </IconButton>

        {/* Next button */}
        <IconButton
          onClick={nextSlide}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-lg hover:bg-gray-200"
        >
          <ArrowForwardIos />
        </IconButton>
      </div>

      {/* Dots for slide indicator */}
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-400'} transition-colors duration-300`}
          ></div>
        ))}
      </div>
    </Container>
  );
};

export default Carousel;