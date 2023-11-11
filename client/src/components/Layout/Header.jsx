import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";

const Header = () => {
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "#B2BEB5" }}>
          <Toolbar>
            <Box width={"9%"} ml={2}>
              <Link to={"/"}>
                <img src={logo} alt="Logo" width={"100%"} />
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
