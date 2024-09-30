import React, { useContext } from "react";
import { styled } from "styled-components";
import { NightModeContext } from "../../../context/NightModeContext";

const StyledMenuBar = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: ${(props) => (props.nightMode ? "#433878" : "#E4B1F0")};
  color: ${(props) => (props.nightMode ? "#E4B1F0" : "#433878")};
`;

const MenuBar = ({ children }) => {
  const nightModeContext = useContext(NightModeContext);
  return (
    <StyledMenuBar nightMode={nightModeContext.nightMode}>
      {children}
    </StyledMenuBar>
  );
};

export default MenuBar;
