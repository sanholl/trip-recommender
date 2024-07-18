import React, { FC, PropsWithChildren, ReactNode, useEffect, useState } from "react"
import { KakaoMapScriptLoaderProps } from "trip-recommender";


const KakaoMapScriptLoader: FC<PropsWithChildren<KakaoMapScriptLoaderProps>> = ({children, kakaoMapAppKey}) => {
  const [mapScriptLoaded, setMapScriptLoaded] = useState(false);
  
  useEffect(() => {
    const mapScripts = document.getElementById('kakao-map-script');

    if(mapScripts && !window.kakao) {
      return;
    }
    
    // <script></script>
    const script = document.createElement('script');
    script.id = 'kakao-map-script';
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoMapAppKey}&libraries=services&autoload=false`;
    script.onload = () => {
      window.kakao.maps.load(() => {
        setMapScriptLoaded(true);
      });
    }
    script.onerror = () => {
      setMapScriptLoaded(false);
    }

    document.getElementById('root')?.appendChild(script);
  }, []);
  
  return (
    <>
    {
      mapScriptLoaded ? children : (
        <div>
          지도를 가져오는 중입니다.
        </div>
      )
    }
    </>
  )
}

export default KakaoMapScriptLoader;