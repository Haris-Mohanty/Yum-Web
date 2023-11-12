import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <Box sx={{ mt: 10, mb: 5 }}>
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
