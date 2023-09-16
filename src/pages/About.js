import React from "react";
import Layout from "../components/layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box sx={{my:15,textAlign:"center"}}>
        <Typography sx={{my:2,fontFamily:"poppins"}} variant="h4">Welcome to khizzz Restaurent</Typography>
        <Typography sx={{my:2}} variant="h8">
          Fast food is a popular and convenient dining option that has become a
          staple in many people's lives. It typically consists of
          quick-to-prepare and easily accessible meals, often served in
          restaurants or through drive-thru services. Fast food establishments
          offer a wide variety of menu items, ranging from classic burgers and
          fries to international favorites like tacos and pizza. One of the
          defining features of fast food is its speed of service. Customers can
          place their orders and receive their meals within minutes, making it
          an ideal choice for individuals with busy schedules or those looking
          for a quick bite on the go. This quick turnaround time is achieved
          through efficient kitchen operations and standardized recipes
        </Typography>
        <br/>
        <Typography sx={{my:3}} variant="h8">Desi food, also known as traditional South Asian cuisine, is a flavorful and diverse culinary tradition that boasts a rich tapestry of flavors and textures. This cuisine is characterized by its use of aromatic spices, herbs, and ingredients that create a symphony of tastes in every dish. From the savory delights of biryani and butter chicken to the fiery heat of vindaloo and the comforting warmth of lentil daal, desi food offers a mouthwatering journey through the subcontinent's culinary heritage. Whether you're savoring a plate of crispy pakoras, fragrant saffron-infused rice, or a succulent tandoori kebab, desi food is a celebration of culture, tradition, and the art of culinary craftsmanship</Typography>

      </Box>
    </Layout>
  );
};

export default About;
