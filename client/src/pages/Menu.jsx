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

  const handleRedirect = (platform) => {
    const socialMediaLink = getSocialMediaLink(platform);
    const message = "Check out this awesome menu item!";
    window.open(`${socialMediaLink}${copiedLink}&message=${message}`, "_blank");
  };

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
                  height: "370px",
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

      {/* Modal */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
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
            p: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" id="modal-title" gutterBottom>
            Share on Social Media
          </Typography>
          <IconButton>
            <Facebook onClick={() => handleRedirect("facebook")} />
          </IconButton>
          <IconButton>
            <Twitter onClick={() => handleRedirect("twitter")} />
          </IconButton>
          <IconButton>
            <Instagram onClick={() => handleRedirect("instagram")} />
          </IconButton>
        </Box>
      </Modal>

      {/* Copy Link Notification */}
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
