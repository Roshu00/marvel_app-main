import React from "react";

//Importing MUI
import Container from "@mui/material/Container";

const Jumbotron = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <h1>Jumbotron JEA</h1>
    </Container>
  );
};

export default Jumbotron;
