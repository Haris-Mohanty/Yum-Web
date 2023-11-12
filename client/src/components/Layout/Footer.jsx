import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstaIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          bgcolor: "#B2BEB5",
          color: "#006666",
          padding: 2,
        }}
      >
        <Typography variant={isSmallScreen ? "subtitle1" : "h5"}>
          All Rights Reserved &copy; Haris Mohanty!
        </Typography>
        <Box
          sx={{
            my: 2,
            "& svg": {
              fontSize: "35px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "#004c4c",
              transform: "scale(1.3)",
              transition: "all 400ms linear",
            },
          }}
        >
          <FacebookIcon />
          <YouTubeIcon />
          <InstaIcon />
          <TwitterIcon />
        </Box>
      </Box>
    </>
  );
};

export default Footer;
