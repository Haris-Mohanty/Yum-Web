import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
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

  //Handle menu click
  const HandleDrawerToggle = () => {
    setToggler(!toggler);
  };

  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "#B2BEB5" }}>
          <Toolbar>
            {/************** LOGO ***************/}
            <Box width={isSmallScreen ? "41%" : "10%"} ml={2}>
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
              <IconButton aria-label="menu" onClick={HandleDrawerToggle}>
                <MenuIcon
                  sx={{
                    fontSize: 35,
                    color: "#006666",
                    fontWeight: "bold",
                  }}
                />
              </IconButton>
            </Box>

            {/*********************** NAV MENU ITEMS *********************/}
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

        {/***************** SMALL DEVIDE SHOW DRAWER **************/}
        <Drawer
          anchor="right"
          open={toggler}
          onClose={HandleDrawerToggle}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
          }}
        >
          <List sx={{ width: "120px" }}>
            <ListItem
              component={Link}
              to="/"
              sx={{ color: "#006666", textAlign: "center" }}
            >
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem
              component={Link}
              to="/menu"
              sx={{ color: "#006666", textAlign: "center" }}
            >
              <ListItemText primary="Menu" />
            </ListItem>
            <ListItem
              component={Link}
              to="/about"
              sx={{ color: "#006666", textAlign: "center" }}
            >
              <ListItemText primary="About" />
            </ListItem>
            <ListItem
              component={Link}
              to="/contact"
              sx={{ color: "#006666", textAlign: "center" }}
            >
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Drawer>
      </Box>
    </>
  );
};

export default Header;
