// src/components/HeroSection.js
import TypingEffect from 'react-typing-effect';

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="your-video-file.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div>
          <h1 className="text-8xl md:text-6xl font-bold mb-4 bg-red-600 w-40 rounded-md">
            HELP 
          </h1>
          <TypingEffect
            text={['HUMAN', 'RIGHT','ORGINAZTION']}
            speed={50}
            eraseSpeed={50}
            eraseDelay={2000}
            typingDelay={1000}
            className="text-2xl md:text-4xl font-medium"
          />
          <p className="mt-4 text-lg md:text-xl">
        
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;