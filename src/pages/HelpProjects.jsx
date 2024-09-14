import { Button } from '@mui/material';


const services = [
  { name: "Free Children Hospital", icon: "🏥", link: "/children-hospital" },
  { name: "Orphanage Home", icon: "🏠", link: "/Orphans" },
  { name: "Old Age Home", icon: "👴👵", link: "/OldAgeHome" },
  { name: "Ration Distribution", icon: "🍞", link: "/FoodAid" },
  { name: "Marriage Support", icon: "💍", link: "/ShadiMubark" },
  { name: "Free Education", icon: "📚", link: "/HelpEducation" },
  { name: "Legal Aid Support", icon: "⚖️", link: "/LegalAid" },
  // { name: "Ambulance Service", icon: "🚑", link: "/AmbulanceService" },
];

const HelpProjects = () => {
  return (
    <div className="bg-white py-10 mb-12">
      <h1 className="text-black text-6xl text-center font-bold mb-16">Help Human Rights Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:px-10">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center hover:bg-red-600 border-2 border-dashed border-red-500 p-6 rounded-lg shadow-md">
            <span className="text-5xl mb-4">{service.icon}</span>
            <h3 className="text-lg font-semibold text-center mb-4">{service.name}</h3>
            <Button
              variant="contained"
              href={service.link}
              style={{ backgroundColor:'red',color:'white'}}
            >
              More Details
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpProjects;