import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";

const FooterContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #161616;
  color: #fff;
  height: 60px;
  margin-top: 50px;
  align-items: center;
  padding: 30px;
  justify-content: space-between;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>@Marvel api provided this informations</p>
      <p>Site made for practice by Roshu</p>
    </FooterContainer>
  );
};

export default Footer;
