import React from "react";
import MarvelLogo from "../assets/Marvel_Logo.png";

//Importing MUI
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import SearchIcon from "@mui/icons-material/Search";
import MouseIcon from "@mui/icons-material/Mouse";
import AddIcon from "@mui/icons-material/Add";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";

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
      <Container>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", margin: "20px", color: "#101010 " }}
        >
          App created to help you find information about Marvel comics!
        </Typography>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginY: "20px",
          }}
        >
          <Typography variant="h4" color="#ED1D24">
            How to?
          </Typography>
          <ListItem divider>
            <SearchIcon fontSize="large" sx={{ margin: "10px" }} />
            <Typography variant="p">
              Enter starting words of the comic that you are serching for in
              search feald in navigation bar and press enter key to start
              searching
            </Typography>
          </ListItem>
          <ListItem divider>
            <MouseIcon fontSize="large" sx={{ margin: "10px" }} />
            <Typography variant="p">
              To see more information about comic click on it and window with
              more information will bee shown
            </Typography>
          </ListItem>
          <ListItem>
            <AddIcon fontSize="large" sx={{ margin: "10px" }} />
            <Typography variant="p">
              Too see more comic that match your search click button "Load more"
              on the bottom of the list and more comics will be loaded
            </Typography>
          </ListItem>
        </List>
      </Container>
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
