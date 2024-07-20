import React, { useState } from "react";
import { Container, RemoveButton, ToggleButton } from "./SidebarContainer.styles";
import ChatResponse from "../../features/ChatGpt/ui/ChatResponse";
import { SearchLocation, SidebarContainerProps } from "trip-recommender";
import { usePlaceDispatch, usePlaceState } from "../../entities/KakaoMap/lib/context/PlaceProvider";



const SidebarContainer = ({ places, setPlaces, setSelectedPlaceId }: SidebarContainerProps) => {
  const [recommendations, setRecommendations] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const placeState = usePlaceState();
  const place = placeState.selectedPlace;
  const placeDispatch = usePlaceDispatch();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Container isOpen={isSidebarOpen} isRecommendationOpen={!!place}>
        <SearchLocation
          onUpdatePlaces={(places) => {
            setPlaces(places);
          }}
          onSelect={(placeId) => {
            setSelectedPlaceId(placeId);
          }}
        />
        { place && <ChatResponse /> }
      </Container>
      <RemoveButton 
        isRecommendationOpen={!!place}
        isOpen={isSidebarOpen}
        onClick={() =>  placeDispatch({ type: 'CLEAR_PLACE' })}
      >
        X
      </RemoveButton>
      <ToggleButton
        isOpen={isSidebarOpen}
        isRecommendationOpen={!!place}
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? "<" : ">"}
      </ToggleButton>
    </>
  );
};

export default SidebarContainer;