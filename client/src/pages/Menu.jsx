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
  Typography,
} from "@mui/material";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";

const Menu = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState("");

  const openSocialMediaModal = (link) => {
    setCopiedLink(link);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
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
            <Facebook />
          </IconButton>
          <IconButton>
            <Twitter />
          </IconButton>
          <IconButton>
            <Instagram />
          </IconButton>
        </Box>
      </Modal>
    </Layout>
  );
};

export default Menu;
