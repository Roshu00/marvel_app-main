import React from "react";
import MarvelLogo from "../assets/Marvel_Logo.png";

//Importing MUI
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";

const JumbotronItem = ({ imageUrl, title, text }) => {
  return (
    <Card>
      <CardMedia component="img" image={imageUrl} />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="h6">{text}</Typography>
      </CardContent>
    </Card>
  );
};

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
      <Typography
        variant="h2"
        sx={{ textAlign: "center", margin: "20px", color: "#101010 " }}
      >
        App created to help you find information about Marvel comics!
      </Typography>
      <JumbotronItem
        imageUrl={MarvelLogo}
        title={`This data is provided by Marvel API`}
        text={
          "This API is used for practice purposes and does not have any advanced functionality"
        }
      />
    </Container>
  );
};

export default Jumbotron;
