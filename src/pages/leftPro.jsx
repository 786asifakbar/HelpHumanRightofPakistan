

const LeftPro = (props) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg shadow-lg overflow-hidden">
        <div className="md:w-1/2 flex items-center justify-center">
          <img data-aos="fade-right"
        data-aos-duration="3000"
            src={props.imgsrc}
            alt="Placeholder"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4" data-aos="fade-up"
        data-aos-duration="3000">{props.heading}</h2>
          <p className="text-gray-700 text-justify" data-aos="fade-up"
        data-aos-duration="3000">
        {props.pera}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftPro;
