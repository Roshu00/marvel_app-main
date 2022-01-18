import React from 'react';
import ComicList from "./components/ComicList";
import NavigationBar from "./components/NavigationBar";
import ComicProvider from "./context/comicContext";

const App = () => {
  return (
    <>
      <ComicProvider>
        <NavigationBar />
        <ComicList />
      </ComicProvider>
      ;
    </>
  );
};

export default App;
