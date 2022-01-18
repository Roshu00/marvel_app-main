import React, { useContext } from "react";
import { ComicContext } from "../context/comicContext";
// IMPORT ICONS
import { BsSearch } from "react-icons/bs";
// IMPORTING MUI
import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const NavigationBar = () => {
  const Comics = useContext(ComicContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value === "") {
      return;
    } else {
      Comics.handleSearch(e.target[0].value);
    }
  };
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "20px" }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "center", backgroundColor: "#ED1D24" }}>
          <Search>
            <SearchIconWrapper>
              <BsSearch />
            </SearchIconWrapper>
            <form onSubmit={handleSubmit}>
              <StyledInputBase
                placeholder="Search.."
                inputProps={{ "aria-label": "search" }}
              />
            </form>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
