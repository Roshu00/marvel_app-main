import React from "react";

//Importing MUI
import { Box, Container } from "@mui/material";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import DropDown from "./DropDown";
import List from "@mui/material/List";

const CloseButton = styled(Button)`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 50%;
  min-width: 70px;
  min-height: 70px;
  z-index: 1;
`;

const DropDownBox = styled(List)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const WiondowHeader = ({ thumbnail, title, description }) => {
  return (
    <Container
      sx={{
        width: "95%",
        display: "flex",
        flexWrap: "nowrap",
      }}
    >
      <img
        src={`${thumbnail.path}/portrait_incredible.${thumbnail.extension}`}
        alt="thumbnail"
      />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          maxHeight: "324px",
        }}
      >
        <Typography variant="h4">{title}</Typography>
        <Typography variant="p" sx={{ overflowY: "scroll" }}>
          {description}
        </Typography>
      </Container>
    </Container>
  );
};

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
        {!active ? (
          <></>
        ) : (
          <>
            <WiondowHeader
              thumbnail={chosenComic.thumbnail}
              title={chosenComic.title}
              description={chosenComic.description}
            />
            <DropDownBox>
              <DropDown
                title="Comics"
                available={chosenComic.comics.available}
                items={chosenComic.comics.items}
              />
              <DropDown
                title="Characters"
                available={chosenComic.characters.available}
                items={chosenComic.characters.items}
              />
              <DropDown
                title="Creators"
                available={chosenComic.creators.available}
                items={chosenComic.creators.items}
              />
              <DropDown
                title="Stories"
                available={chosenComic.stories.available}
                items={chosenComic.stories.items}
              />
            </DropDownBox>
          </>
        )}
        <CloseButton onClick={() => CloseComicWindow()}>
          <CloseIcon fontSize="large" />
        </CloseButton>
      </Box>
    </Container>
  );
};

export default ComicWindow;
