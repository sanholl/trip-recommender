import React, { useEffect, useState } from "react";
import { chatResponse } from "../../api/ChatGptApi";
import { Container, Title, List } from "./ChatResponse.styles";
import { usePlaceState } from "../../../../entities/KakaoMap/lib/context/PlaceProvider";
import { ChatResponseProps } from "trip-recommender";

const ChatResponse = ({ openAiKey }: ChatResponseProps) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const placeState = usePlaceState();
  const place = placeState.selectedPlace;

  useEffect(() => {
    if (place && place.address) {
      fetchResponse();
    }
  }, [place]);

  const fetchResponse = async () => {
    setLoading(true);
    try {
      if (place && place.address) {
        const response = await chatResponse(place.address, openAiKey);
        setRecommendation(response);
      }
    } catch (error) {
      console.error("send message error", error);
      setRecommendation("추천을 가져오는 중 문제가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <List>
        <Title>Trip Recommendation</Title>

        {isLoading ? (
          <p>Loading...</p>
        ) : recommendation ? (
          <p>Recommendations: {recommendation}</p>
        ) : (
          <p>주소를 선택해주세요.</p>
        )}
      </List>
    </Container>
  );
};

export default ChatResponse;