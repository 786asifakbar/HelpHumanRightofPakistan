import { useState, useEffect } from 'react';
import { IconButton, Container } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

// Sample images (replace these with your own image URLs)
const images = [
  '/bg1.jpg',
  '/bg2.jpg',
  '/bg3.jpg',
  '/bg4.jpg',
  '/edu4.jpg',
  '/edu5.jpg',
  '/donation4.jpg',
  '/img.jpg',
  '/img1.jpg',
  '/img2.jpg',
  '/orphan1.jpg',
  '/orphan2.jpg',
  '/img5.jpg',
  '/LegalAll2.jpg',
  '/LegalAll.jpg',
  '/img8.jpg',
  '/waterplant1.jpeg',
  '/img10.jpg',
  '/food.jpg',
  '/food2.jpg',
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

  // Auto-slide effect
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, [currentIndex]);

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