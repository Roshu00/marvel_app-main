import React from "react";
import { useContext } from "react";
import { ComicContext } from "../context/comicContext";
import Loader from "./Loader";
import ComicCards from "./ComicCards";
import ComicWindow from "./ComicWindow";
// Import MUI
import Container from "@mui/material/Container";

const ComicList = () => {
  const Comics = useContext(ComicContext);

  return (
    <Container maxWidth="md">
      {Comics.loading ? (
        <Loader />
      ) : (
        <>
          <ComicCards
            comics={Comics.data.results}
            handleLoadMore={Comics.handleLoadMore}
            loading={Comics.buttonLoading}
            search={Comics.search}
            resetData={Comics.resetData}
            OpenComicWindow={Comics.OpenComicWindow}
            chosenComic={Comics.chosenComic}
          />
          <ComicWindow
            OpenComicWindow={Comics.OpenComicWindow}
            CloseComicWindow={Comics.CloseComicWindow}
            chosenComic={Comics.chosenComic}
            active={Comics.windowOpen}
          />
        </>
      )}
    </Container>
  );
};

export default ComicList;
