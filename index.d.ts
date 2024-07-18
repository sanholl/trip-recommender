declare module 'trip-recommender' {
  // import { ReactNode } from 'react';
  export interface KakaoMapScriptLoaderProps {
    children: ReactNode,
    kakaoMapAppKey: string
  }
  export interface MapMarkerProps {
    place: PlaceType
    index: number
    showInfo?: boolean
  }
  export interface PlaceType {
    id: string
    position: kakao.maps.LatLng
    title: string
    address: string
  }
  export interface MapMarkerControllerProps {
    places: PlaceType[]
    selectedPlaceId: string
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
  export const KakaoMapScriptLoader: React.FC<PropsWithChildren<KakaoMapScriptLoaderProps>>;
  export const SearchLocation: React.FC<SearchLocationProps>;
  export const MapMarker: React.FC<MapMarkerProps>;
  export const DynamicMap: React.FC<PropsWithChildren<DynamicMapProps>>;
  export const MapMarkerController:  React.FC<MapMarkerControllerProps>;
}