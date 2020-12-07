import React, {useEffect, useState, createRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

import {Container, ButtonText, Back} from './styles';
import {Search, Directions, Card} from '../../components';

import {getPixelSize} from '../../utils/maps';

import markerImage from '../../assets/images/pin.png';
import carImage from '../../assets/images/car.png';
import thumb from '../../assets/images/thumb.png';
import {CloseIcon} from '../../assets/icons';

Geocoder.init('AIzaSyDPpDhsvoXdczYPCqMYLYbPXTZZCj4cqWc');

const Main = () => {
  const [region, setRegion] = useState(null);
  const [destination, setDestination] = useState(null);
  const [duration, setDuration] = useState(null);
  const [location, setLocation] = useState(null);

  const mapViewRef = createRef();

  const handleLocationSelected = (data, {geometry}) => {
    const {
      location: {lat: latitude, lng: longitude},
    } = geometry;

    setDestination({
      latitude,
      longitude,
      title: data.structured_formatting.main_text,
    });
  };

  const getGeoCoderAddress = async ({latitude, longitude}) => {
    const response = await Geocoder.from({latitude, longitude});
    const address = response.results[0].formatted_address;
    // eslint-disable-next-line no-shadow
    const location = address.substring(0, address.indexOf(','));

    setLocation(location);
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
        getGeoCoderAddress(latitude, longitude);

        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        });
      },
      (error) => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  return (
    <Container>
      <MapView
          style={{flex: 1}}
          ref={mapViewRef}
          region={region}
          showsUserLocation
          loadingEnabled>
            {destination && (
              <>
                <Directions
                  origin={region}
                  destination={destination}
                  onReady={(result) => {
                    setDuration(Math.floor(result.duration));
                    if (mapViewRef) {
                      mapViewRef.current.fitToCoordinates(result.coordinates, {
                        edgePadding: {
                          top: getPixelSize(50),
                          bottom: getPixelSize(50),
                          left: getPixelSize(50),
                          right: getPixelSize(350),
                        },
                      });
                    }
                  }}
                />
                <Marker
                  coordinate={destination}
                  anchor={{x: 0, y: 0}}
                  image={markerImage}
                />
                <Marker
                  coordinate={region}
                  anchor={{x: 0, y: 0}}
                  image={carImage}
                  zIndex={5}
                />
              </>
            )}
      </MapView>
      {destination ? (
          <>
            <Back onPress={() => {setDestination(null);}}>
              <CloseIcon/>
            </Back>
            <Card
                location={destination.title}
                address={location}
                distance={2}
                name='Gregory Smith'
                price='$25.00'
                rating='4.9'
                thumbnail={thumb}
                time={duration}
            />
          </>)
          :
          (<Search onLocationSelected={handleLocationSelected}/>)
      }
    </Container>
  );
};

export default Main;
