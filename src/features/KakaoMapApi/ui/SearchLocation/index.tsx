import React, { FormEvent, useEffect, useRef, useState } from "react";
import { PlaceType, SearchLocationProps } from "trip-recommender";
import { useMap } from "../../../../entities/KakaoMap/lib/context/useMap";
import { usePlaceDispatch } from "../../../../entities/KakaoMap/lib/context/PlaceProvider";
import { Container, Form, Input, Item, List } from "./SearchLocation.styles";


const SearchLocation = ({ onUpdatePlaces, onSelect }:SearchLocationProps) => {
  const map = useMap();
  const [keyword, setKeyword] = useState('');
  const [places, setPlaces] = useState<PlaceType[]>([]);
  const placeService = useRef<kakao.maps.services.Places | null>(null);
  const placeDispatch = usePlaceDispatch();
  
  useEffect(() => { 
    if(placeService.current) {
      return;
    }

    placeService.current = new kakao.maps.services.Places();
  }, []);

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchPlaces(keyword);
  }
  const searchPlaces = (keyword:string) => {
    if (!keyword.replace(/^\s+|\s+$/g, '')) {
        alert('키워드를 입력해주세요!');
        return;
    }

    if(!placeService.current) {
      //TODO - placeService.current error handling
      return;
    }
    
    placeService.current.keywordSearch( keyword, (data, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const placeInfos = data.map(placeSearchResultItem => {
          return {
            id: placeSearchResultItem.id,
            position: new kakao.maps.LatLng(Number(placeSearchResultItem.y), Number(placeSearchResultItem.x)),
            title: placeSearchResultItem.place_name,
            address: placeSearchResultItem.address_name
          }
        })
        
        onUpdatePlaces(placeInfos);
        setPlaces(placeInfos);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
          alert('검색 결과가 존재하지 않습니다.');
          return;
      } else if (status === kakao.maps.services.Status.ERROR) {
          alert('검색 결과 중 오류가 발생했습니다.');
          return;
      }
    }); 
  }
  const handleItemClick = (place:PlaceType) => {
    placeDispatch({
      type: 'SET_PLACE',
      payload: place
    });
    map.setCenter(place.position);
    map.setLevel(4);
    onSelect(place.id);
  }


  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input value={keyword} onChange={(e) => {
          setKeyword(e.target.value);
        }} />
      </Form>
      <List>
        {
          places.map((item, index) => {
            return (
              <Item key={item.id} onClick={() => handleItemClick(item)}>
                <label>{`${index + 1}. ${item.title}`}</label>
                <span>{item.address}</span>
              </Item>
            )
          })
        }
      </List>
    </Container>
  );
}

export default SearchLocation;