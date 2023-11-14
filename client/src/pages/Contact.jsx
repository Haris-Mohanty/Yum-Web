import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setInputs({ name: "", email: "", message: "" });
    toast.success("Message sents successfully!");
  };

  return (
    <Layout>
      <ToastContainer />
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
          <form onSubmit={handleSubmit}>
            <Typography variant="h5" sx={{ ml: 19, color: "#006666" }}>
              Write a message to us!
            </Typography>
            <TextField
              name="name"
              value={inputs.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              label="Enter Your Name"
              required
            />
            <TextField
              name="email"
              value={inputs.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              label="Enter Your Email"
              required
            />
            <TextField
              name="message"
              value={inputs.message}
              onChange={handleChange}
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
