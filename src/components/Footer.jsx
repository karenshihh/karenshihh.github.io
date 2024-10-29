import React, { useState } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import Modal from "@mui/material/Modal";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from '@mui/material/styles';

const CustomFab  = styled(Fab)({
  backgroundColor: '#58a4b0!important',
  color: '#ffffff',
  '&:hover': {
    backgroundColor: '#373f51',
  },
});

const Footer = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: "80px",
          right: "20px",
          "& > :not(style)": { m: 1 },
        }}
      >
        <CustomFab
          aria-label="contact"
          onClick={handleOpen}
        >
          <ContactPageIcon/>
        </CustomFab>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="contact-modal-title"
        aria-describedby="contact-modal-description"
      >
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleClose}
        >
          <div
            className="bg-bluegray rounded-lg p-6 w-80"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2
                id="contact-modal-title"
                className="text-2xl font-bold font-custom text-white"
              >
                Let's connect!
              </h2>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </div>
            <List>
              <ListItem
                className="font-custom text-white"
                button
                component="a"
                href="mailto:kshih200@gmail.com"
              >
                <ListItemText primary="Email" />
              </ListItem>
              <ListItem
                className="font-custom text-white"
                button
                component="a"
                href="https://www.linkedin.com/in/karen-shih-b1345821a"
              >
                <ListItemText primary="LinkedIn" />
              </ListItem>
              <ListItem
                className="font-custom text-white"
                button
                component="a"
                href="https://github.com/taoitw"
              >
                <ListItemText primary="GitHub" />
              </ListItem>
            </List>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Footer;
