import React from 'react'
import { styled } from "styled-components";


export const StyledNight = styled.div`
background-color: ${(props) => (props.nightMode ? "#7E60BF" : "#FFE1FF")};
color: ${(props) => (props.nightMode ? "#FFE1FF" : "#7E60BF")};
`;