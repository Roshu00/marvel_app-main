import React from "react";

//Importing MUI
import { Box, Container } from "@mui/material";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material";

const CloseButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  min-width: 70px;
  min-height: 70px;
  z-index: 1;
`;
const ComicWindow = ({
  chosenComic,
  setChosenComic,
  active,
  CloseComicWindow,
}) => {
  return (
    <Container
      sx={{
        display: active ? "flex" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        minHeight: "100vh",
        minWidth: "100%",
        bgcolor: "rgba(0,0,0,0.4)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "90%",
          bgcolor: "#f0f0ec",
          height: "90vh",
          padding: "10px",
          position: "relative",
          borderRadius: "10px",
          overflowY: "scroll",
        }}
      >
        <CloseButton onClick={() => CloseComicWindow()}>
          <CloseIcon fontSize="large" />
        </CloseButton>
      </Box>
    </Container>
  );
};

export default ComicWindow;
