import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import "../../styles/HeaderStyles.css";

const Header = () => {
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "#B2BEB5" }}>
          <Toolbar>
            {/* LOGO */}
            <Box width={"9%"} ml={2}>
              <Link to={"/"}>
                <img src={logo} alt="Logo" width={"100%"} />
              </Link>
            </Box>

            {/* NAV MENU */}
            <Box
              ml={"auto"}
              sx={{ display: { xs: "none", sm: "none", md: "block" } }}
            >
              <ul className="nav-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
