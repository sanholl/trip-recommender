import React from 'react';
import { ChatResponse, SelectList, RecommendationList, ChatLoading, Error } from '../src/app';

const HomePage: React.FC = () => {
  const keyword = ''; // 적절한 초기값 설정
  const openAiKey = ''; // 적절한 초기값 설정
  const onSelection = (selection: any) => {}; // 적절한 함수 구현
  const message = ''; // 적절한 초기값 설정

  return (
    <div>
      <h1>Welcome to My Component Library</h1>
      <ChatResponse keyword={keyword} openAiKey={openAiKey} />
      <SelectList onSelection={onSelection} />
      <ChatLoading />
      <Error message={message} />
    </div>
  );
};

export default HomePage;
