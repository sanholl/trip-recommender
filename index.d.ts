declare module 'trip-recommender' {
  export interface PlaceType {
    id: string
    position: kakao.maps.LatLng
    title: string
    address: string
  }
  export type PlaceState = {
    selectedPlace: PlaceType | null;
  };
  
  export type PlaceAction =
    | { type: 'SET_PLACE'; payload: PlaceType }
    | { type: 'CLEAR_PLACE' };
  export interface PlaceProviderProps {
    children: ReactNode
  }
  export const PlaceProvider: React.FC<PropsWithChildren<PlaceProviderProps>>;
  
  export interface DynamicMapProps {
    children: ReactNode
  }
  export const DynamicMap: React.FC<PropsWithChildren<DynamicMapProps>>;
  
  export interface KakaoMapScriptLoaderProps {
    children: ReactNode,
    kakaoMapAppKey: string
  }
  export const KakaoMapScriptLoader: React.FC<PropsWithChildren<KakaoMapScriptLoaderProps>>;
  
  export interface MapMarkerProps {
    place: PlaceType
    index: number
    showInfo?: boolean
  }
  export const MapMarker: React.FC<MapMarkerProps>;
  
  export interface MapMarkerControllerProps {
    places: PlaceType[]
    selectedPlaceId: string
  }
  export const MapMarkerController:  React.FC<MapMarkerControllerProps>;
  
  export interface SearchLocationProps {
    onUpdatePlaces: (places: PlaceType[]) => void;
    onSelect: (placeId: string) => void;
  }
  export const SearchLocation: React.FC<SearchLocationProps>;
  
  export interface ChatResponseProps {
    openAiKey: string
  }
  export const ChatResponse: React.FC<ChatResponseProps>;
  
  export interface SidebarContainerProps {
    places: PlaceType[];
    setPlaces: React.Dispatch<React.SetStateAction<PlaceType[]>>;
    setSelectedPlaceId: React.Dispatch<React.SetStateAction<string>>;
  }
  export const SidebarContainer: React.FC<SidebarContainerProps>;
}