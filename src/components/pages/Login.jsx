import React, { useContext } from 'react';
import { styled } from "styled-components";
import { NightModeContext } from "../../context/NightModeContext";

import { StyledNight } from "../atoms/Container/NightStyle";


const Login = () => {
  const nightModeContext = useContext(NightModeContext);
  return( <StyledNight nightMode={nightModeContext.nightMode}>Connectez vous les chacalitos</StyledNight>);
};

export default Login;
