// src/components/HeroSection.js
// import TypingEffect from 'react-typing-effect';
import ShadiMubark from './ShadiMubark';
import FoodAid from './FoodAid';
import HelpEducation from './HelpEducation';
import SuportPage from './SuportPage';



const HeroSection = () => {
  return (
    <>
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-auto h-screen lg:w-screen lg:h-full md:w-full md:h-screen sm:w-full sm:h-screen  object-cover"
      >
        <source src="../../public/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center text-left  h-screen  text-white">
        <div>
          {/* <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-red-600 w-40 rounded-md">
            
          </h1> */}
          {/* <TypingEffect
            text={['HELP HUMAN RIGHT ORGINAZTION']}
            speed={50}
            eraseSpeed={50}
            eraseDelay={2000}
            typingDelay={1000}
            className="font-bold text-red-600 text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-7xl
            space-y-96 ml-12
            "
          /> */}
          <p className="mt-4 text-lg md:text-xl">
        
          </p>
        </div>
      </div>
    </div>
    <SuportPage />
    <ShadiMubark />
    <FoodAid />
    <HelpEducation/>
    </>
  );
};

export default HeroSection;