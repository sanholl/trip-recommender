import React from 'react';
import { Container, Image, Text } from "./ChatLoading.styles";
import Spinner from '../images/Spinner.gif';

export const ChatLoading = () => {

  return (
    <Container>
      <Image src={Spinner} alt="로딩" width="80%" />
      <Text>여행 추천 생성중</Text>
    </Container>
  );
}