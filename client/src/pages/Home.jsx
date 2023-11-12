import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Banner from "../Assets/banner.jpg";

const Home = () => {
  return (
    <Layout>
      <Box
        sx={{
          mt: 7,
          backgroundImage: `url(${Banner})`,
          height: "92vh",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          backgroundSize: "cover",
        }}
      >
        <Box sx={{ ml: 4, p: 4 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: "#006666", fontFamily:"verdana" }}
          >
            Food Website
          </Typography>
          <Typography variant="h6" sx={{ml:5}}>Best Food In India!</Typography>
          <Link to={"/menu"}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                mt: 2,
                ml:7,
                borderRadius: 2,
                backgroundColor: "#006666",
                boxShadow: "0 4px 8px rgba(0, 102, 102, 0.5)",
                "&:hover": {
                  backgroundColor: "#004c4c",
                  boxShadow: "0 6px 12px rgba(0, 102, 102, 0.7)",
                },
              }}
            >
              Order Now
            </Button>
          </Link>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
