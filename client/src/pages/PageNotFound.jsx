import React from "react";
import Layout from "../components/Layout/Layout";

const PageNotFound = () => {
  return (
    <Layout>
      <Box textAlign="center" mt={4}>
      <Typography variant="h4">404 - Not Found</Typography>
      <Typography variant="body1">The page you are looking for does not exist.</Typography>
    </Box>

    </Layout>
  );
};

export default PageNotFound;
