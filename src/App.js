import React from "react";
import ComicList from "./components/ComicList";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import ComicProvider from "./context/comicContext";

const App = () => {
  return (
    <>
      <ComicProvider>
        <NavigationBar />
        <ComicList />
      </ComicProvider>
      <Footer />
    </>
  );
};

export default App;
