import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({destination, origin, onReady}) => (
  <MapViewDirections
    destination={destination}
    origin={origin}
    onReady={onReady}
    apikey="AIzaSyDPpDhsvoXdczYPCqMYLYbPXTZZCj4cqWc"
    strokeWidth={5}
    strokeColor="#7F34FF"
  />
);

export default Directions;
