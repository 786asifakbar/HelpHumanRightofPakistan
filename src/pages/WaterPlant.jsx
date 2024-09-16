import PassPro from "./PassPro";
import LeftPro from "./leftPro";

const WaterPlant = () => {
  return (
    <>
      <PassPro 
        backImgsrc="/Web-Icon.png"
        secImg="/waterplant1.jpeg"
        title="Water Plant"
        p={`A water treatment plant is a facility that processes raw water to make it safe for human consumption,
           industrial use, and environmental discharge. The main stages in water treatment include coagulation 
           and flocculation, sedimentation, filtration, and disinfection. These processes remove contaminants like
           bacteria, viruses, sediments, and chemicals, ensuring the water meets safety standards.

           Fixing Issues in Water Treatment Plants
           Fixing issues in water treatment plants involves several key steps:
           1. **Assessment and Diagnosis**: Identify the problems through inspections, testing water quality, and assessing the condition of equipment and infrastructure.
           2. **Maintenance and Upgrades**: Repair or replace faulty equipment, upgrade outdated systems, and implement new technologies to improve efficiency and reliability.`}
        rep={`Investment in Water Treatment Plants
           Investment in water treatment plants can vary widely depending on the size of the plant, the scope of the necessary upgrades, and the specific technologies implemented. Generally, investments cover:`}
      />
    
      <LeftPro 
        imgsrc="/waterplant.jpeg"
        heading="Your Donations Help Us Create This Impact"
        pera={`Investment in Water Treatment Plants
               Investment in water treatment plants can vary widely depending on the size of the plant, the scope of the necessary upgrades, and the specific technologies implemented. Generally, investments cover
               Infrastructure: Construction of new facilities or expansion of existing ones.Technology: Implementation of advanced treatment technologies, automation systems, and monitoring equipment.Training: Development programs for staff to ensure proper operation and maintenance of the plant. Compliance: Measures to meet regulatory requirements and improve environmental sustainability
               Typical Investment Costs: Small to medium-sized plants might require investments ranging from a few million to tens of millions of dollars.
               Large-scale plants, especially those serving major urban areas or requiring significant technological upgrades, can see investments in the hundreds of millions or even billions of dollars.
              `}
      />
    </>
  );
}

export default WaterPlant;