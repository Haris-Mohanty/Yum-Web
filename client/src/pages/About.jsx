import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import logo from "../Assets/logo1.png";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import TapasIcon from "@mui/icons-material/Tapas";

const About = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Layout>
      <Box sx={{ mt: 7, p: 5 }}>
        <Box
          sx={{
            width: isSmallScreen ? "75%" : "43%",
            m: isSmallScreen ? 2 : "auto",
          }}
        >
          <img src={logo} alt="Logo of YumWeb" height={"100%"} width={"100%"} />
        </Box>
        <Typography
          variant={isSmallScreen ? "h5" : "h3"}
          sx={{
            textAlign: "center",
            mb: 4,
            mt: 5,
            fontFamily: "verdana",
            fontWeight: "bold",
            color: "#006666",
            letterSpacing: 1,
          }}
        >
          Welcome to Our website!
        </Typography>
        <Typography
          variant={isSmallScreen ? "subtitle1" : "h6"}
          sx={{ mb: 2, fontFamily: "popins", color: "#006666" }}
        >
          Welcome to Yum Web, where we believe that every meal should be an
          experience worth savoring. Born out of a passion for good food and a
          commitment to convenience, Yum Web is your go-to destination for
          seamless and delightful food ordering.
        </Typography>
        <Typography
          variant={isSmallScreen ? "subtitle1" : "h6"}
          sx={{ mb: 2, fontFamily: "popins", color: "#006666" }}
        >
          At Yum Web, our mission is simple: to connect food lovers with the
          finest local restaurants, bringing a world of flavors right to your
          doorstep. We understand the joy that comes from a well-prepared meal,
          and we strive to make that joy accessible to everyone.
        </Typography>

        <Typography
          variant={isSmallScreen ? "subtitle1" : "h6"}
          sx={{ fontFamily: "popins", color: "#006666" }}
        >
          Embark on a culinary journey with Yum Web, and discover the joy of
          good food without the hassle. We invite you to join our growing
          community of food enthusiasts, where every meal is a celebration of
          flavor, convenience, and the joy of sharing great food with those you
          love.
        </Typography>
      </Box>
      <Box
        sx={{
          mb: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& svg": {
            fontSize: "35px",
            cursor: "pointer",
            mr: 2,
          },
          "& svg:hover": {
            color: "#004c4c",
            transform: "scale(1.4)",
            transition: "all 400ms linear",
          },
        }}
      >
        <RestaurantIcon />
        <RestaurantMenuIcon />
        <TapasIcon />
      </Box>
      <Typography
        variant={isSmallScreen ? "subtitle1" : "h6"}
        sx={{
          mb: 2,
          p: 2,
          textAlign: "center",
          fontWeight: "bold",
          color: "#006666",
        }}
      >
        Thank you for choosing Yum Web. Let's eat, enjoy, and savor the moments
        together!
      </Typography>
    </Layout>
  );
};

export default About;
