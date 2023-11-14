import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, TextField, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ mt: 8, p: 4 }}>
        <Box>
          <Typography>Contact Us</Typography>
        </Box>
        <Box sx={{ width: "40%", m: "auto" }}>
          <form>
            <TextField fullWidth margin="normal" label="Name" required />
            <TextField fullWidth margin="normal" label="Password" required />
            <TextField
              fullWidth
              multiline
              rows={4}
              margin="normal"
              label="Write your message"
              required
            />
          </form>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;
