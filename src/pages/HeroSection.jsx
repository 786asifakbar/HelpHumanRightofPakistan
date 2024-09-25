// src/components/HeroSection.js
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
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <SuportPage/>
    </>
  );
};

export default HeroSection;