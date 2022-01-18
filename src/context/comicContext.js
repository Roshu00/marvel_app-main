import React, { useEffect, useState } from "react";
import { getComicsStartWith, loadMoreComics } from "../helpers/comicApi";

export const ComicContext = React.createContext();

const ComicProvider = ({ children }) => {
  const [response, setResponse] = useState([]);
  const [data, setData] = useState({
    count: 0,
    limit: 0,
    offset: 0,
    results: [],
    total: 0,
  });
  const [loading, setLoading] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = async (search) => {
    try {
      setResponse([]);
      setSearch(search);
      setLoading(true);
      const response = await getComicsStartWith(search);
      setData(response.data);
      setResponse(response);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLoadMore = async () => {
    try {
      setButtonLoading(true);
      const range = data.offset + data.limit;
      const response = await loadMoreComics(search, range);
      const joined = data.results.concat(response.data.results);
      const count = data.count + response.data.count;
      setData({
        count,
        limit: response.data.limit,
        offset: range,
        results: joined,
        total: response.data.total,
      });
      setButtonLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log(response);
    console.log("data", data);
  }, [response, data]);

  return (
    <ComicContext.Provider
      value={{
        handleSearch,
        handleLoadMore,
        buttonLoading,
        loading,
        response,
        data,
      }}
    >
      {children}
    </ComicContext.Provider>
  );
};

export default ComicProvider;
