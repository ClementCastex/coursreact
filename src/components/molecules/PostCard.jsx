import React, { useState } from "react";
import { Container, Typo } from "../atoms";
import { styled } from "styled-components";
import { StyledCard } from "../atoms/Container/CardStyle";

const PostCard = ({
  title = "",
  children,
  defaultColor = "white",
  activatedColor = "blue",
}) => {
  const [color, setColor] = useState(false);
  const changeColor = (e) => {
    setColor(!color);
  };
  return (
    <StyledCard
      color={color ? activatedColor : defaultColor}
      onClick={changeColor}
    >
      <Container.Base>
        <Typo.Title>{title}</Typo.Title>
        <Typo.Paragraph>{children}</Typo.Paragraph>
      </Container.Base>
    </StyledCard>
  );
};

export default PostCard;
