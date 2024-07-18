declare module 'trip-recommender' {
  // import { ReactNode } from 'react';
  export interface PlaceType {
    id: string
    position: kakao.maps.LatLng
    title: string
    address: string
  }

  export interface TestButtonProps {
    label: string;
    onClick: () => void;
  }
  export const TestButton: React.FC<TestButtonProps>;

  export interface SearchLocationProps {
    onUpdatePlaces: (places: PlaceType[]) => void;
    onSelect: (placeId: string) => void;
  }
  export const SearchLocation: React.FC<SearchLocationProps>;
}