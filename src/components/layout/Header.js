import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Link } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {
  const [MobileOpen, setMobileOpen] = useState(false);
  //handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!MobileOpen);
  };

  const drawer = (
    <box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography color={"goldenrod"} variant="h6" component="div" flexGrow={1}>
        <FastfoodIcon />
        Khizz Restaurent
      </Typography>
      <Divider/>
      <box sx={{ display: { xs: "none", sm: "block" } }}>
        <ul className="mobile-navigation">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/menu"}>menu</Link>
          </li>
          <li>
            <Link to={"/about"}>about</Link>
          </li>
          <li>
            <Link to={"/contact"}>contact</Link>
          </li>
        </ul>
      </box>
    </box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{flexGrow:1,my:3}}
            >
              <FastfoodIcon />
              Khizz Restaurent

            </Typography>
            <Divider/>

            
            
            <ul className="navigation-menu">
              <li>
                 <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/menu"}>menu</Link>
              </li>
              
              <li>
                <Link to={"/about"}>about</Link>
              </li>
              <li>
                <Link to={"/contact"}>contact</Link>
              </li>
            </ul>
          </Toolbar>
        </AppBar>

        <box component="nav">
          <Drawer
            variant="temporary"
            open={MobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </box>
        <box >
        <Toolbar/>
        </box>
        <Toolbar/>
      </Box>
    </>
  );
};

export default Header;






