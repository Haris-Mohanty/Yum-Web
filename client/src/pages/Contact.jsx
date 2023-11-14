import React from "react";
import Layout from "../components/Layout/Layout";
import { Box, Button, TextField, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ mt: 8, p: 4 }}>
        <Box sx={{ m: "auto" }}>
          <Typography variant="h4" component="h1">
            Contact Us
          </Typography>
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
            <Button
              type="submit"
              variant="contained"
              sx={{ bgcolor: "#006666" }}
            >
              Send
            </Button>
          </form>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;
