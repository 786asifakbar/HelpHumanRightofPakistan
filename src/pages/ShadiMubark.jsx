
import { NavLink } from 'react-router-dom';



function ShadiMubark() {
  return (
    <>     
      {/* Color overlay */}
      <div className="absolute inset-0 bg-gray-40 opacity-50"> </div> 
      <div className="lg:w-1/2  lg:pr-8"></div>
            <h1 className="text-7xl font-bold pt-16 text-center text-black" data-aos="fade-down"
        data-aos-duration="3000"> Married Cermony of Poor People </h1>
            <p className="text-lg text-black text-center ">        
  </p>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col">
              <img src="../../public/hall.jpg" alt="First" className="w-full h-64 object-cover" />
              <img src="../../public/hall2.jpg" alt="Second" className="w-full h-64 object-cover" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <h1 className="text-3xl font-bold mb-4 text-gray-900"><span> Support for Married Poor People </span></h1>
              <p className="mb-4 text-gray-700 text-justify">
              Our program is committed to helping poor individuals overcome financial obstacles related to marriage.
              We provide essential support to ensure they can afford the costs associated with wedding ceremonies and
              related functions.
              Our program is committed to helping poor individuals overcome financial obstacles related to marriage.
              We provide essential support to ensure they can afford the costs associated with wedding ceremonies and
              related functions.
              Our program is committed to helping poor individuals overcome financial obstacles related to marriage.
              We provide essential support to ensure they can afford the costs associated with wedding ceremonies and
              related functions.
               Join us in our mission to ease the burden on those in need and help them celebrate their special moments with dignity and joy.
              </p>
              <button className=" mt-7 px-26 py-2 bg-red-600 text-white rounded hover:bg-red-400 hover:text-red-600"><NavLink to='Mission.jsx'>Read More</NavLink> </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default ShadiMubark;
