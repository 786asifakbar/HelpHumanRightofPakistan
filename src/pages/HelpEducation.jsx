import PassPro from "./PassPro";
import EducationalPage from './PageOfEdu';
const HelpEducation = () => {
  return (
    
    <>

    <PassPro 
        backImgsrc="/Web-Icon.png"
        secImg="/education.jpg"
        title="Free Education for All"
        p={`Help Human Rights Organization is dedicated to promoting human rights through the power of education. We believe that education is a fundamental right and a crucial tool for empowering individuals and communities. Our mission is to provide free, high-quality educational resources and opportunities to everyone, regardless of their socio-economic status.
         Free Educational Programs
          Offering a wide range of courses and learning materials for various age groups and educational levels.
          Collaborating with volunteer educators and experts to deliver comprehensive and engaging content. 
          Accessible Learning Platforms:
          Utilizing online platforms to make education accessible to people worldwide.
          Ensuring that our resources are available in multiple languages to reach a diverse audience.`}
      />

    <EducationalPage />
</>
  )
}

export default HelpEducation;