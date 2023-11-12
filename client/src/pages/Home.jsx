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
          m: "4rem 0 0 0",
          backgroundImage: `url(${Banner})`,
          height: "90vh",
          display:"flex",
          justifyContent:'center',
          alignItems:"center"
        }}
      >
        <Box>
          <Typography variant="h5">Food Website</Typography>
          <Typography variant="subtitle1">Best Food In India!</Typography>
          <Link to={"/menu"}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
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
