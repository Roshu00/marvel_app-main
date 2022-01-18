import React from "react";

import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

const Loader = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
