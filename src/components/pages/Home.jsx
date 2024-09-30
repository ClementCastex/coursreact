import React, { useContext } from 'react';
import { styled } from "styled-components";
import { NightModeContext } from "../../context/NightModeContext";

import { StyledNight } from "../atoms/Container/NightStyle";


const Home = ({ children }) => {
  const nightModeContext = useContext(NightModeContext);
  return (<StyledNight nightMode={nightModeContext.nightMode}>{children}</StyledNight>);
};

export default Home;
