import { Container, Typography, Box } from '@mui/material';
import AboutImage from '../../public/bg1.jpg'; // Replace with your image path
import AboutImg2 from '../../public/bg2.jpg';
import AboutImg from '../../public/bg3.jpg';


const About = () => {
  return (
    <Container maxWidth="lg" className="py-10">
      {/* Section 1: Text Left, Image Right */}
      <Box className="flex flex-col md:flex-row items-center my-10">
        {/* Left Content */}
        <Box className="md:w-1/2 p-5">
          <Typography variant="h4" className="font-bold mb-4">
          Dedicated to Supporting Human Rights Organizations Worldwide
          </Typography>
          <Typography variant="body1" className="text-gray-700">
          At Help Human Right Organization of Pakistan , we are committed to standing by human rights organizations as they tirelessly work to uphold justice, equality, and dignity for all. We understand 
          the challenges they face, and that ’ s why we provide comprehensive support to ensure their voices are heard and their missions are fulfilled.
          Through logistical, financial, and emotional support, we empower these organizations to remain focused on their critical advocacy for human rights. Whether organizing grassroots campaigns, offering legal assistance, or providing emotional care to activists, we ensure that these defenders of justice can continue their invaluable work without hindrance.
          Together, we strive for a world where equality prevails and every individual’s rights are protected. Our support is a testament to our belief that everyone deserves to live free from oppression and discrimination.
          </Typography>
        </Box>

        {/* Right Image */}
        <Box className="md:w-1/2 p-5">
          <img
            src={AboutImage}
            alt="Human Rights Support"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </Box>
      </Box>

      {/* Section 2: Image Left, Text Right */}
      <Box className="flex flex-col md:flex-row-reverse items-center my-10">
        {/* Right Content */}
        <Box className="md:w-1/2 p-5">
          <Typography variant="h4" className="font-bold mb-4">
          Championing Universal Freedom and Dignity for All
          </Typography>
          <Typography variant="body1" className="text-gray-700">
          At Help Human Right Organization of Pakistan, we believe that freedom and dignity 
          are fundamental rights that belong to every individual, regardless of their background or 
          circumstances. Our mission is to support those who tirelessly 
          advocate for these essential values, standing alongside human rights defenders who
           dedicate their lives to protecting the vulnerable and marginalized.
          We are committed to ensuring that the voices of the oppressed are heard, and their rights 
          are upheld. By partnering with organizations and individuals who share our passion 
          for justice, we help build a world where every person is treated with the dignity they
          deserve and has the freedom to live without fear or discrimination.
          </Typography>
        </Box>

        {/* Left Image */}
        <Box className="md:w-1/2 p-5">
          <img
            src={AboutImg2} // You can replace this with another image if you prefer
            alt="Justice and Equality"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </Box>
      </Box>

      {/* Section 3: Text Left, Image Right */}
      <Box className="flex flex-col md:flex-row items-center my-10">
        {/* Left Content */}
        <Box className="md:w-1/2 p-5">
          <Typography variant="h4" className="font-bold mb-4">
          Creating a Better Future Together
          </Typography>
          <Typography variant="body1" className="text-gray-700">
           we believe that building a better future starts with standing
           up for human rights. By supporting those who champion equality, justice, and dignity,
           we can create lasting change in the world.
           Every action counts—whether it’s through volunteering, making donations,
           or forming partnerships, your contribution plays a vital role in 
           helping human rights organizations continue their critical work.
           Together, we have the power to uplift communities, protect the vulnerable,
           and ensure that everyones rights are respected and upheld.
           Join us in making a difference. Let s build a brighter, more just future, 
           one step at a time.
          </Typography>
        </Box>

        {/* Right Image */}
        <Box className="md:w-1/2 p-5">
          <img
            src={AboutImg}
            alt="Join the Movement"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </Box>
      </Box>
    </Container>
  );
};
export default About