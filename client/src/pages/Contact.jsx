import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { Box, Button, TextField, Typography } from "@mui/material";

const Contact = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <Layout>
      <Box sx={{ mt: 8, p: 4, mb: 6 }}>
        <Box>
          <Typography
            variant="h4"
            component="h1"
            fontWeight={"bold"}
            fontFamily={"verdana"}
          >
            Contact Us
          </Typography>
        </Box>
        <Box sx={{ width: "40%", m: "auto", p: 3 }}>
          <form>
            <Typography variant="h5" sx={{ ml: 19, color: "#006666" }}>
              Write a message to us!
            </Typography>
            <TextField
              name="name"
              value={inputs.name}
              fullWidth
              margin="normal"
              label="Enter Your Name"
              required
            />
            <TextField
              name="email"
              value={inputs.email}
              fullWidth
              margin="normal"
              label="Enter Your Email"
              required
            />
            <TextField
              name="message"
              value={inputs.message}
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
              sx={{
                bgcolor: "#006666",
                width: "20%",
                display: "flex",
                float: "right",
                mt: 2,
              }}
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
