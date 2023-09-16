import React from "react";
import Layout from "../components/layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact Khizz Restaurent</Typography>
        <p>
          "Welcome to Khizzz Restaurant, where the aromatic spices of South
          Asian cuisine come to life. Our menu is a tantalizing fusion of
          tradition and innovation, offering a culinary journey that captures
          the essence of authentic flavors. Join us in the heart of taste and
          tradition, where each dish is a masterpiece of flavor, color, and
          culture. Discover the vibrant world of Khizzz today!" 🍽️🌶️
          #KhizzzCuisine #TasteTheTradition #CulinaryJourney
        </p>
        
      </Box>
      <Box
      
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                  (toll-free)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} />{" "}
                  khizer.rajput@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 03224406697
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      
      <Box
        sx={{
          m: 3,
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
       
      </Box>
    </Layout>
  );
};

export default Contact;
