import PassPro from "./PassPro";
import LeftPro from "./leftPro"; // Ensure correct case for file names

// Import images with correct relative paths
import backImg from "../../public/Web-Icon.png";
import secImg from "../../public/Medicine3.jpg";
import imgsrc from "../../public/Medicine4.jpg";

const MedicineCharity = () => {
  return (
    <>
      <PassPro
        backImgsrc={backImg}
        secImg={secImg}
        title="Medicine Charity"
        p="At Help Human Rights, our Medical Charity program is dedicated to providing essential medical care to those who cannot afford it. We offer a range of services, from basic health check-ups to critical treatments, ensuring that everyone has access to the healthcare they need. Our mission is to alleviate suffering, promote health, and improve the quality of life for individuals facing financial barriers to medical care. We partner with healthcare professionals, clinics, and hospitals to deliver high-quality medical services to underserved communities. Our program focuses on addressing urgent medical needs, supporting chronic illness management, and providing preventive care to reduce future health issues. By offering these services, we aim to bridge the gap between those in need and the healthcare they deserve."
      />

      <LeftPro
        imgsrc={imgsrc}
        heading="Your Donations Help Us Create This Impact"
        pera="Donations are vital to the success and expansion of our Medical Charity program. Your contributions directly fund medical treatments, medications, and healthcare services for those who cannot afford them. With your support, we can cover the costs of consultations, diagnostic tests, surgeries, and other critical medical interventions, ensuring that individuals receive the care they need without the burden of financial stress. Financial support also helps us to improve and maintain our healthcare facilities and services. This includes purchasing medical equipment, stocking essential supplies, and funding the operational costs of our clinics. By investing in these areas, we enhance our ability to provide effective and comprehensive care."
      />
    </>
  );
};

export default MedicineCharity;
