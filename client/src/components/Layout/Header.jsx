import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import "../../styles/HeaderStyles.css";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [toggler, setToggler] = useState(false);

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "#B2BEB5" }}>
          <Toolbar>
            {/* LOGO */}
            <Box width={isSmallScreen ? "33%" : "10%"} ml={2}>
              <Link to={"/"}>
                <img src={logo} alt="Logo" width={"100%"} />
              </Link>
            </Box>

            {/********** Hamburger icon form small screen **********/}
            <Box
              sx={{
                display: { xs: "block", sm: "block", md: "none" },
                ml: "auto",
              }}
            >
              <IconButton aria-label="menu">
                <MenuIcon
                  sx={{ fontSize: 35, color: "#006666", fontWeight: "bold" }}
                />
              </IconButton>
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
