import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { MenuList } from "../data/data";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Modal,
  Snackbar,
  Typography,
} from "@mui/material";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
import FileCopy from "@mui/icons-material/FileCopy";
import Close from "@mui/icons-material/Close";

const Menu = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState("");
  const [isCopySuccess, setIsCopySuccess] = useState(false);

  //******** OPEN MODAL LINK COPY *************/
  const openSocialMediaModal = () => {
    setCopiedLink(window.location.href);
    setModalOpen(true);
  };

  //*********** MODAL CLOSE ***********/
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  //*********** COPY ICON CLICK ***********/
  const handleCopyLink = () => {
    try {
      navigator.clipboard.writeText(copiedLink);
      setIsCopySuccess(true);
    } catch (err) {
      console.error("Unable to copy text: ", err);
      setIsCopySuccess(false);
    }
  };

  //*********** REDIRECT  ***********/
  const handleRedirect = (platform) => {
    const socialMediaLink = getSocialMediaLink(platform);
    const message = "Check out this awesome menu item!";
    window.open(`${socialMediaLink}${copiedLink}&message=${message}`, "_blank");
  };

  //*********** GET LINK AND PASS  ***********/
  const getSocialMediaLink = (platform) => {
    switch (platform) {
      case "facebook":
        return "https://www.facebook.com/sharer/sharer.php?u=";
      case "twitter":
        return "https://twitter.com/";
      case "instagram":
        return "https://www.instagram.com/";
      default:
        return "";
    }
  };

  return (
    <Layout>
      <Box
        mt={8}
        p={1}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {MenuList.map((menu, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: "370px",
              m: 2,
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          >
            <CardActionArea>
              <CardMedia
                sx={{
                  height: "300px",
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {menu.name}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  {menu.desc}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                sx={{ ml: "auto" }}
                onClick={openSocialMediaModal}
              >
                Share
              </Button>
              <IconButton aria-label="copy link" onClick={handleCopyLink}>
                <FileCopy sx={{ fontSize: 18 }} />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Box>

      {/********** Modal **********/}
      <Modal
        open={modalOpen}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
          }}
        >
          <IconButton
            aria-label="close"
            sx={{
              position: "absolute",
              top: 5,
              right: 5,
            }}
            onClick={handleCloseModal}
          >
            <Close sx={{ color: "red", fontSize:26 }} />
          </IconButton>
          <Typography variant="h6" id="modal-title" gutterBottom>
            Share on Social Media
          </Typography>
          <IconButton onClick={() => handleRedirect("facebook")}>
            <Facebook />
          </IconButton>
          <IconButton onClick={() => handleRedirect("twitter")}>
            <Twitter />
          </IconButton>
          <IconButton onClick={() => handleRedirect("instagram")}>
            <Instagram />
          </IconButton>
        </Box>
      </Modal>

      {/********** Copy Link Notification **********/}
      <Snackbar
        open={isCopySuccess}
        autoHideDuration={2000}
        onClose={() => setIsCopySuccess(false)}
        message="Link copied to clipboard!"
      />
    </Layout>
  );
};

export default Menu;
