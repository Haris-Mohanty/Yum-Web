import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <Box sx={{ mt: 10 }}>
        <Box>
          <Typography variant="h5">Food Website</Typography>
          <Typography variant="subtitle1">Best Food In India!</Typography>
          <Link>
            <Button>Order Now</Button>
          </Link>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
