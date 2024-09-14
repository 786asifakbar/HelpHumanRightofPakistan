import PassPro from "./PassPro";
import { Typography} from "@mui/material";


const ChildrenHospital = () => {
  return (
    <>
    
      <PassPro 
        backImgsrc="/Web-Icon.png"
        secImg="/health3.jpg"
        title="Children Hospital"
        p={`Children's hospitals are vital institutions that offer specialized care for the most vulnerable members of society—children. In many regions around the world, these hospitals face enormous challenges, from lack of resources to being situated in conflict zones. Human rights organizations play a crucial role in supporting these hospitals, ensuring that every child has access to proper healthcare, regardless of their location or socio-economic background. Children’s hospitals specialize in treating illnesses that are unique to or more prevalent in children, such as congenital disorders, childhood cancers, and infectious diseases. These hospitals also provide pediatric surgery, mental health services, and rehabilitation for children who have faced physical or emotional trauma.`}
           rep={`However, many of these hospitals are underfunded, especially in regions impacted by war, natural disasters, or extreme poverty. The needs of these hospitals often far exceed their available resources, and this is where human rights organizations step in.`}
      />

 <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100">
      {/* Left Side - Video */}
      <div className="w-full md:w-1/2 p-4">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-80"
            src="/hospital.mp4"
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
        <Typography variant="h4" gutterBottom className="text-center md:text-left">
          Children Hospital
        </Typography>
        <Typography variant="body1" className="text-justify md:text-left">
         Join us for a historic moment in the promotion of The Help Human Rights Organization of Pakistan is proud to announce the opening ceremony of its efforts across multiple sectors, including health, education, food security, and legal aid. With the presence of our esteemed guests, Maulana Bashir Farooqi and Major Saeed Jatoon colonel Amir, this event promises to be a powerful start to our mission. We will also be showcasing our commitment to supporting the elderly in our old age home, providing medicine support to those in need, and providing a safe and nurturing environment for orphans. And that is not all, we are also embarking on our biggest project yet: the construction of a Help Children s Hospital in Lee Market, Karachi.
        </Typography>
      </div>
    </div>
    </>
  );
}

export default ChildrenHospital;