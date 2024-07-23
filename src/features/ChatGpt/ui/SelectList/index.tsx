import React, { useState } from "react";
import {
  Container,
  Divider,
  Emoji,
  Option,
  OptionsContainer,
  SelectLocation,
  Subtitle,
  Title,
  AnimatedSelectLocation,
  Button,
} from "./SelectList.styles";

export const SelectList = () => {
  const [selectedWho, setSelectedWho] = useState<string[]>([]);
  const [selectedInterest, setSelectedInterest] = useState<string[]>([]);

  const whoList = ["혼자", "가족과 함께", "연인과 함께", "친구와 함께", "아이와 함께", "반려견과 함께", "기타"];
  const interestList = ["활동적인 스타일", "여유롭게 힐링", "문화/예술/역사", "쇼핑", "맛있는게 최고"];

  const toggleWho = (who: string) => {
    setSelectedWho((prev) => {
      return prev.includes(who) ? prev.filter((opt) => opt !== who) : [...prev, who];
    });
  };
  const toggleInterest = (interest: string) => {
    setSelectedInterest((prev) => {
      return prev.includes(interest) ? prev.filter((opt) => opt !== interest) : [...prev, interest];
    });
  };

  const handleCreatePlan = () => {
    console.log("일정 생성하기 버튼 클릭됨");
  };

  return (
    <Container>
      <SelectLocation>
        <Emoji
          role="img"
          aria-label="smiling face with sunglass"
        >
          😎
        </Emoji>
        <Title>누구와 떠나나요?</Title>
        <Subtitle>다중 선택이 가능해요.</Subtitle>
        <OptionsContainer>
          {whoList.map((who) => (
            <Option
              key={who}
              selected={selectedWho.includes(who)}
              onClick={() => toggleWho(who)}
            >
              {who}
            </Option>
          ))}
        </OptionsContainer>
      </SelectLocation>
      <Divider />
      {selectedWho.length > 0 && (
        <AnimatedSelectLocation>
          <Emoji
            role="img"
            aria-label="beach with umbrella"
          >
            🏖
          </Emoji>
          <Title>선호하는 여행 스타일</Title>
          <Subtitle>다중 선택이 가능해요.</Subtitle>
          <OptionsContainer>
            {interestList.map((interest) => (
              <Option
                key={interest}
                selected={selectedInterest.includes(interest)}
                onClick={() => toggleInterest(interest)}
              >
                {interest}
              </Option>
            ))}
          </OptionsContainer>

        </AnimatedSelectLocation>
      )}
      { selectedInterest.length > 0 && (
        <SelectLocation>
          <AnimatedSelectLocation>
            <Button onClick={handleCreatePlan}>일정 생성하기</Button> 
          </AnimatedSelectLocation>
        </SelectLocation>
      )}
    </Container>
  );
};