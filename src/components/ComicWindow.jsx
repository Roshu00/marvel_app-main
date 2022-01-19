import React from "react";

//Importing MUI
import { Container } from "@mui/material";

const Window = ({}) => {
  return (
    <Container
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        minHeight: "100vh",
        minWidth: "100%",
        bgcolor: "black",
      }}
    ></Container>
  );
};

const ComicWindow = ({ chosenComic, setChosenComic, active }) => {
  return <>{active ? <Window /> : <></>}</>;
};

export default ComicWindow;
