import React from "react";
import { Container, Emoji, Text } from "./Error.styles";
import { ErrorProps } from "@types";

export const Error = ({ message }: ErrorProps) => {
  return (
    <Container>
      <Emoji
        role="img"
        aria-label="smiling face with sunglass"
      >
        🤐
      </Emoji>
      <Text>{message}</Text>
    </Container>
  );
};