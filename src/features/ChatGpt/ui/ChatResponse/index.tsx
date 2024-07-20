import React, { useEffect, useState } from "react";
import { chatResponse } from "../../api/ChatGptApi";
import { Container, Title, List, Message, UserMessage, LoadingMessage } from "./ChatResponse.styles";
import { ChatResponseProps } from "trip-recommender";

const ChatResponse = ({ keyword, openAiKey }: ChatResponseProps) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [messages, setMessages] = useState<{ type: 'user' | 'bot' | 'loading'; content: string }[]>([]);

  useEffect(() => {
    if (keyword && !isLoading) {
      setMessages(prev => [...prev, { type: 'user', content: keyword }]);
      fetchResponse(keyword);
    }
  }, [keyword]);

  const fetchResponse = async (message: string) => {
    setLoading(true);
    setMessages(prev => [...prev, { type: 'loading', content: '...loading' }]);
    try {
      const response = await chatResponse(message, openAiKey);
      setMessages(prev => prev.filter(msg => msg.type !== 'loading')); // Remove loading message
      setMessages(prev => [...prev, { type: 'bot', content: response }]);
    } catch (error) {
      console.error("send message error", error);
      setMessages(prev => prev.filter(msg => msg.type !== 'loading')); // Remove loading message
      setMessages(prev => [...prev, { type: 'bot', content: "추천을 가져오는 중 문제가 발생했습니다." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <List>
        <Title>Trip Recommendation</Title>
        {messages.map((msg, index) => (
          msg.type === 'user' ? (
            <UserMessage key={index}>{msg.content}</UserMessage>
          ) : msg.type === 'bot' ? (
            <Message key={index}>{msg.content}</Message>
          ) : (
            <LoadingMessage key={index}>{msg.content}</LoadingMessage>
          )
        ))}
      </List>
    </Container>
  );
};

export default ChatResponse;
