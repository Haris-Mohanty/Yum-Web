import React from "react";
import Layout from "../components/Layout/Layout";
import { MenuList } from "../data/data";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
    <Layout>
      <Box
        mt={8}
        p={2}
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {MenuList.map((menu, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: "370px",
              m: 2,
            }}
          >
            <CardActionArea>
              <CardMedia
                sx={{
                  height: "370px",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {menu.name}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  {menu.desc}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
