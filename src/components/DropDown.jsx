import React, { useState } from "react";

//Import MUI
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";

const DropDown = ({ title, available, items }) => {
  const [active, setActive] = useState(false);
  return (
    <ListItem
      divider
      sx={{ width: "100%", flexDirection: "column", userSelect: "none" }}
    >
      <Typography
        color={active ? "primary" : ""}
        variant="h6"
        onClick={(acive) => setActive(!active)}
        sx={{
          display: "flex",
          justifyContent: "center",
          cursor: "pointer",
          width: "100%",
        }}
      >
        {`${title} (${available})`}
      </Typography>
      <Collapse in={active}>
        <List>
          {items.map((item, id) => (
            <ListItem
              divider
              key={id}
              sx={{ display: "flex", flexDirection: "column" }}
            >
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="p">{item.role}</Typography>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </ListItem>
  );
};

export default DropDown;
