import React from "react";

import styled from "@emotion/styled";

const Section = styled.section(
  `display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;`
);

const Text = styled.div({
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  color: "white",
  fontWeight: "bold",
  fontSize: 32
});

const Img = styled.img({
  maxHeight: "200px"
});

export const ImageWithOverlay = ({
    src,
    text,
    alt
}) => {
  return (
    <Section>
      <Img
        src={src}
        alt={alt}
        />
      <Text>{text}</Text>
    </Section>
  );
};
