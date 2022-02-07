import React from "react";
// import COMPONENTS
import Jumbotron from "./Jumbotron";
// IMPORT MUI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LoadingButton from "@mui/lab/LoadingButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";
import { Box } from "@mui/system";

const LiCard = styled(Card)`
  cursor: pointer;
  transition: 0.2s ease;
  :hover {
    transform: scale(1.05);
  }
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 0;
  right: -3em;
  border-radius: 50%;
  min-width: 40px;
  min-height: 40px;
`;

const CardItem = ({ title, description, id, thumbnail, OpenComicWindow }) => {
  return (
    <LiCard
      sx={{
        minWidth: 150,
        maxWidth: 150,
        margin: "10px",
        height: "340px",
        padding: "5px",
      }}
      onClick={() => OpenComicWindow(id)}
    >
      <CardMedia
        component="img"
        image={`${thumbnail.path}/portrait_incredible.${thumbnail.extension}`}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          {title.length > 30 ? title?.slice(0, 30) : title}
        </Typography>
      </CardContent>
    </LiCard>
  );
};

const ComicCards = ({
  comics,
  handleLoadMore,
  loading,
  search,
  resetData,
  OpenComicWindow,
  chosenComic,
}) => {
  return (
    <>
      {comics.length > 0 ? (
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              position: "relative",
              width: "90%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            {comics.map((comic, id) => (
              <CardItem
                id={id}
                key={comic.id}
                thumbnail={comic.thumbnail}
                title={comic.title}
                description={comic.description}
                OpenComicWindow={OpenComicWindow}
              />
            ))}
            <CloseButton onClick={resetData}>
              <CloseIcon />
            </CloseButton>
          </Box>
          <LoadingButton
            onClick={handleLoadMore}
            loading={loading}
            loadingIndicator="Loading..."
            variant="outlined"
          >
            Load More
          </LoadingButton>
        </Container>
      ) : (
        <>
          {search ? <h1>There are no comics matching the search!!</h1> : <> </>}
          <Jumbotron />
        </>
      )}
    </>
  );
};

export default ComicCards;
