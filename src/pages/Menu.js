import React from "react";
import { MenuList } from "../Data/data";
import Layout from "../components/layout/Layout";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "390px", m: 5 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography sx={{textAlign:"center"}} variant="h4" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography sx={{textAlign:"center"}} variant="body2">{menu.description}</Typography>
                <Typography sx={{textAlign:"center",mt:2}} variant="h5">RS{menu.price}</Typography>
                <CardActions>

                </CardActions>
                <Button sx={{bgcolor:"black",color:"white",alignContent:"center"}} size="small" >
                Order now

                </Button>
                
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
