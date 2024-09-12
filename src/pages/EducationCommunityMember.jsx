import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';



const members = [
 
  // Education Community Membership
  {
    id:1,
    name: 'David Johnson',
    designation: 'Education Community Member',
    community: 'Education',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },

  {
    id:2,
    name: 'David Johnson',
    designation: 'Education Community Member',
    community: 'Education',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },

  {
    id:3,
    name: 'David Johnson',
    designation: 'Education Community Member',
    community: 'Education',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },

  {
    id:4,
    name: 'David Johnson',
    designation: 'Education Community Member',
    community: 'Education',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
  },

 
];




const EducationCommunityMember = () => {
  return (
    <> 
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <Typography variant="h4" className="text-center font-bold mb-8">
        Education Community Member
        </Typography>
        
        <Grid container spacing={3}>
          {members.map((member) => (
            <Grid item key={member.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardMedia
                  component="img"
                  alt={member.name}
                  height="200"
                  image={member.image} // Replace with member's image
                  className="object-cover"
                />
                <CardContent className="text-center">
                  <Typography variant="h6" className="font-bold">
                    {member.name}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    {member.designation}
                  </Typography>
                  <Typography variant="body2" className="text-gray-500">
                    {member.community}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
    </>
  );
};
export default EducationCommunityMember;