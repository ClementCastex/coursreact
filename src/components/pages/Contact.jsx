import React, { useContext } from 'react';
import { styled } from "styled-components";
import { NightModeContext } from "../../context/NightModeContext";
import { StyledNight } from "../atoms/Container/NightStyle";


const Contact = () => {
  const nightModeContext = useContext(NightModeContext);
  return (<StyledNight nightMode={nightModeContext.nightMode}>Contact</StyledNight>);
};

export default Contact;
