import React, { MutableRefObject} from 'react';
import ReactMapGL from 'react-map-gl';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import 'mapbox-gl/dist/mapbox-gl.css';
// @ts-ignore
import Geocoder from 'react-map-gl-geocoder'

const CustomMap = () => {

  const mapBoxToken = process.env.REACT_APP_MAP_TOKEN!;

  const mapRef: MutableRefObject<any> = React.useRef();
  const geocoderRef: MutableRefObject<any> = React.useRef();
  const [viewport, setViewport] = React.useState({
    width: 600,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  const handleViewportChange = React.useCallback(newViewport => setViewport(newViewport), []);
  const handleGeocoderViewportChange = React.useCallback(
    (newViewport) => {
      const defaultOverrides = {transitionDuration: 500};
      return handleViewportChange({
        ...newViewport,
        ...defaultOverrides
      })
    },
    [handleViewportChange]
  )


  return (
    <div>
      <div
      ref={geocoderRef}
      style={{position: 'absolute', top: 20, left: 20, zIndex: 1}}
      />
      <ReactMapGL ref={mapRef} mapboxApiAccessToken={mapBoxToken} {...viewport}
                  onViewportChange={handleViewportChange}/>

      <Geocoder
        mapRef={mapRef}
        containerRef={geocoderRef}
        mapboxApiAccessToken={mapBoxToken}
        onViewportChange={handleGeocoderViewportChange}
        position='top-left'

      />

    </div>
  )
}

export default CustomMap;
