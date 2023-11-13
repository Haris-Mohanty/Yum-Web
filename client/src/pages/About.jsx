import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box sx={{ mt: 7, p: 5 }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            mb: 4,
            fontFamily: "verdana",
            fontWeight: "bold",
            color: "#006666",
            letterSpacing:1
          }}
        >
          Welcome to Our website!
        </Typography>
        <Typography
          variant="h6"
          sx={{ mb: 2, fontFamily: "popins", color: "#006666" }}
        >
          Welcome to Yum Web, where we believe that every meal should be an
          experience worth savoring. Born out of a passion for good food and a
          commitment to convenience, Yum Web is your go-to destination for
          seamless and delightful food ordering.
        </Typography>
        <Typography
          variant="h6"
          sx={{ mb: 2, fontFamily: "popins", color: "#006666" }}
        >
          At Yum Web, our mission is simple: to connect food lovers with the
          finest local restaurants, bringing a world of flavors right to your
          doorstep. We understand the joy that comes from a well-prepared meal,
          and we strive to make that joy accessible to everyone.
        </Typography>
        <Typography
          variant="h6"
          sx={{ mb: 2, fontFamily: "popins", color: "#006666" }}
        >
          Your satisfaction is our priority. We partner with reputable
          restaurants known for their commitment to quality and freshness. From
          the moment you place an order to the time it reaches your doorstep, we
          ensure that every step of the process is seamless and reliable.
        </Typography>
        <Typography
          variant="h6"
          sx={{ mb: 2, fontFamily: "popins", color: "#006666" }}
        >
          Embark on a culinary journey with Yum Web, and discover the joy of
          good food without the hassle. We invite you to join our growing
          community of food enthusiasts, where every meal is a celebration of
          flavor, convenience, and the joy of sharing great food with those you
          love.
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            textAlign: "center",
            fontWeight: "bold",
            color: "#006666",
          }}
        >
          Thank you for choosing Yum Web. Let's eat, enjoy, and savor the
          moments together!
        </Typography>
      </Box>
    </Layout>
  );
};

export default About;
