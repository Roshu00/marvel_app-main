import React from "react";
// IMPORT MUI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LoadingButton from "@mui/lab/LoadingButton";
import { styled } from "@mui/material";
import { Box } from "@mui/system";

const LiCard = styled(Card)`
  cursor: pointer;
  transition: 0.2s ease;
  :hover {
    transform: scale(1.05);
  }
`;

const CardItem = ({ title, description, id, thumbnail }) => {
  return (
    <LiCard
      sx={{
        minWidth: 150,
        maxWidth: 150,
        margin: "10px",
        height: "340px",
        padding: "5px",
      }}
    >
      <CardMedia
        component="img"
        image={`${thumbnail.path}/portrait_incredible.${thumbnail.extension}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
          {title}
        </Typography>
      </CardContent>
    </LiCard>
  );
};

const ComicCards = ({ comics, handleLoadMore, loading }) => {
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
              width: "90%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            {comics.map((comic) => (
              <CardItem
                key={comic.id}
                thumbnail={comic.thumbnail}
                title={comic.title}
                description={comic.description}
              />
            ))}
          </Box>
          <LoadingButton
            onClick={handleLoadMore}
            loading={loading}
            loadingIndicator="Loading..."
            variant="outlined"
          >
            Load More Comics
          </LoadingButton>
        </Container>
      ) : (
        <h1>There are no comics matching the search!!</h1>
      )}
    </>
  );
};

export default ComicCards;
