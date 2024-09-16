import PassPro from "./PassPro";
import LeftPro from "./leftPro";

const Health = () => {
  return (
    <>
      <PassPro 
        backImgsrc="/Web-Icon.png"
        secImg="/health4.jpg"
        title="Care Your Health"
        p={`At Help Human Rights, we are committed to providing essential healthcare services to underserved communities.Our Healthcare Support program focuses on delivering comprehensive medical care to individuals who lack access to basic health services.We offer a range of services, including medical check-ups, treatment for chronic conditions, emergency care, and preventive health programs.Our goal is to improve health outcomes, prevent disease, and promote overall well-being. We operate clinics and partner with healthcare professionals to ensure that quality medical care is available to those who need it most. By addressing both immediate health needs and long-term care, we aim to reduce health disparities and support a healthier, more resilient community.`}
      />

      <LeftPro 
        imgsrc="/health3.jpg"
        heading="Your Donations Help Us Create This Impact"
        pera={`Donations are crucial in enabling us to provide high-quality healthcare services. Your contributions directly support the cost of medical supplies, equipment, and medications needed for patient care.With your help, we can ensure that our clinics are well-stocked and equipped to handle a wide range of medical conditions. Financial support also allows us to fund essential services such as health screenings, vaccinations, and treatment for chronic diseases.These services are vital for preventing illness and managing health conditions, ultimately improving the quality of life for individuals in our care.`}
      />
    </>
  );
}
export default Health;
