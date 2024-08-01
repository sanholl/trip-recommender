import React from 'react';
import { Container, Text } from "./ChatLoading.styles";
import Image from 'next/image';

export const ChatLoading = () => {
  return (
    <Container>
      <div style={{ width: '80%', position: 'relative', height: 'auto' }}>
        <Image src="/Spinner.gif" alt="로딩" layout="responsive" width={100} height={100} />
      </div>
      <Text>여행 추천 생성중</Text>
    </Container>
  );
};