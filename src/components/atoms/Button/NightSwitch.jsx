import React, { useContext } from "react";
import { styled } from "styled-components";
import { NightModeContext } from "../../../context/NightModeContext";

const StyledNightSwitch = styled.div``;
const NightSwitch = () => {
  const nightModeContext = useContext(NightModeContext);
  return (
    <StyledNightSwitch
      onClick={() => {
        nightModeContext.switchNightMode();
      }}
    >
      NightSwitch
    </StyledNightSwitch>
  );
};

export default NightSwitch;
