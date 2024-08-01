import React from "react";
import {
  Container,
  ListItem,
  ActivityContainer,
  ActivityTitle,
  ActivitySubtitle,
  ActivityDescription,
  ActivityLink,
  Divider,
  Number,
  Span,
  RecommendedMenu,
  Request
} from "./RecommendationList.styles";
import { RecommendationListProps } from "@types";


export const RecommendationList = ({ response }: RecommendationListProps) => {
  const recommendation = response.recommendation;
  const destination = response.destination;

  return (
    <Container>
      <Request>
        <Span>{ destination }</Span>
        <br/>일정 추천입니다.
      </Request>
      
      {recommendation.tripActivities.map((act, index) => {
        const { placeType, name, description, location, link, recommendedMenu } = act;

        return (
          <ListItem key={index} isLast={index === recommendation.tripActivities.length-1}>
            <Number type={placeType}>{index + 1}</Number>
            <ActivityLink
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ActivityContainer>
                <ActivityTitle>{name}</ActivityTitle>
                <ActivitySubtitle>{placeType}</ActivitySubtitle>
                <ActivityDescription>{location}</ActivityDescription>
                <Divider />
                <ActivityDescription>
                  <Span>추천</Span> {description}
                </ActivityDescription>
                {recommendedMenu && <RecommendedMenu>{recommendedMenu}</RecommendedMenu>}
              </ActivityContainer>
            </ActivityLink>
          </ListItem>
        );
      })}
    </Container>
  );
};