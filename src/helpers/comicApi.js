export const getComicsStartWith = async (search) => {
  try {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/series?titleStartsWith=${search}&apikey=a62f9c41509713a2d4e943b547aa319a`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const loadMoreComics = async (search, offset) => {
  try {
    const response = await fetch(
      `https://gateway.marvel.com:443/v1/public/series?titleStartsWith=${search}&offset=${offset}&apikey=a62f9c41509713a2d4e943b547aa319a`
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
