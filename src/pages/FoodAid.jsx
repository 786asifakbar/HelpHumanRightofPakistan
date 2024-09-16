import PassPro from "./PassPro";
import LeftPro from "./leftPro";



const FoodAid = () => {

    return(
   <>
    <PassPro backImgsrc = "/Web-Icon.png "
      secImg = "/food.jpg"
      title = "Food Distribute"
      p = "Food Aid At Help Human rights, we believe that access to nutritious food is a fundamental human right. Our Food Aid program is dedicated to combating hunger and food insecurity within our community. We provide essential meals and groceries to individuals and families in need,ensuring that no one goes hungry. From distributing food packages to organizing community kitchens, our efforts are focused on delivering sustenance and hope to those struggling to make ends meet.Through partnerships with local farmers, food banks, and volunteers, we are able to offer a variety of fresh and nutritious foods. Our goal is not only to alleviate immediate hunger but also to promote healthy eating habits and improve overall well-being.We prioritize reaching the most vulnerable populations, including children, the elderly,and those facing financial hardships." 
    />
    

      <LeftPro imgsrc ="/food4.jpg"
      heading = "Your Donations Help Us Create This Impact"
       pera ="Donations are the lifeline of our Food Aid program. Every contribution helps us purchase food supplies, expand our reach, and improve the quality of our services.With your support, we can source more nutritious food, ensuring that the meals we provide are balanced and nourishing. This is particularly important for children and the elderly,who require specific nutrients for healthy growth and aging. Your donations also enable us to increase the frequency and scale of our food distributions. This means we can serve more people, more often, and in more locations. Whether it's through emergency food packages during crises or regular meal services, your generosity ensures that we can meet the growing demand for food assistance in our community."
     />
   </>
  )
}
export default FoodAid;