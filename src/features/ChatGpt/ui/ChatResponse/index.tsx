import React, { useEffect, useState } from "react";
import { chatResponse } from "../../api/ChatGptApi";
import { Container, Title, List } from "./ChatResponse.styles";
import { ChatLoading } from "../../../../shared/ui/ChatLoading";
import { RecommendationList } from "../RecommendationList";
import { Error } from "../../../../shared/ui/Error";
import { ChatResponseProps, ChatResponseType } from "@types";

export const ChatResponse = ({ keyword, openAiKey }: ChatResponseProps) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [response, setResponse] = useState<ChatResponseType>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (keyword) {
      fetchResponse(keyword);
    }
  }, [keyword]);

  const fetchResponse = async (keyword: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await chatResponse(keyword, openAiKey);
      setResponse(JSON.parse(response));
    } catch (error) {
      console.error("send message error", error);
      setError("추천을 가져오는 중 문제가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <List>
        <Title>TRIP RECOMMENDER</Title>
        {isLoading ? (
          <ChatLoading />
        ) : error ? (
          <Error message={error}/>
        ) : (
          response && <RecommendationList response={response} />
        )}
      </List>
    </Container>
  );
};