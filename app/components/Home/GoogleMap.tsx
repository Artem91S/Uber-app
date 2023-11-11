import {
  DirectionsRenderer,
  GoogleMap,
  MarkerF,
  OverlayView,
  OverlayViewF,
} from "@react-google-maps/api";
import React, { useCallback, useMemo, useState } from "react";

export type FieldTypes = {
  lat: number;
  lng: number;
  name: string;
  label: string;
};
type Props = {
  source: FieldTypes;
  destination: FieldTypes;
};

function GoogleMapSection({ source, destination }: Props) {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [direction, setDirections] = useState();
  const [center, setCenter] = useState({
    lat: 0,
    lng: 0,
  });
  const containerStyle = {
    width: "100%",
    height: "85vh",
  };

  const directionRoute = () => {
    const DirectionsService = new google.maps.DirectionsService();
    DirectionsService.route(
      {
        origin: { lat: source.lat, lng: source.lng },
        destination: { lat: destination?.lat!, lng: destination?.lng! },
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result:any, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          
            setDirections(result);
        

     
        } else {
          console.error("My service error");
        }
      }
    );
  };
  const changeSource = useMemo(() => {
    if (source?.name?.length! > 0 && map) {
      map.panTo({
        lat: source.lat!,
        lng: source.lng!,
      });
      setCenter({
        lat: source.lat!,
        lng: source.lng!,
      });
    }
    if (source?.name.length! > 0 && destination?.name?.length! > 0) {
      directionRoute();
    }
  }, [source]);

  const changeDestination = useMemo(() => {
    if (destination?.name?.length! > 0 && map) {
      map.panTo({
        lat: destination?.lat!,
        lng: destination?.lng!,
      });
      setCenter({
        lat: destination?.lat!,
        lng: destination?.lng!,
      });
    }
    if (source?.name.length! > 0 && destination?.name.length! > 0) {
      directionRoute();
    }
  }, [destination]);
  const onLoad = useCallback(function callback(map: google.maps.Map | null) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map?.fitBounds(bounds);

    setMap(map);
  }, []);
  const onUnmount = useCallback(function callback(map: google.maps.Map | null) {
    setMap(null);
  }, []);
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <MarkerF
        position={{ lat: source.lat, lng: source.lng }}
        icon={{
          url: "/source.png",
          scaledSize: {
            equals: Boolean,
            width: 20,
            height: 20,
          },
        }}
      >
        <OverlayViewF
          position={{ lat: source.lat, lng: source.lng }}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <div className="p-2 bg-white rounded-xl">
            <p className="uppercase font-bold">from:{source.label}</p>
          </div>
        </OverlayViewF>
      </MarkerF>

      <MarkerF
        position={{ lat: destination?.lat!, lng: destination?.lng! }}
        icon={{
          url: "/dest.png",
          scaledSize: {
            equals: Boolean,
            width: 20,
            height: 20,
          },
        }}
      >
        <OverlayViewF
          position={{ lat: destination?.lat!, lng: destination?.lng! }}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <div className="p-3 bg-white rounded-xl">
            <p className="uppercase font-bold">to:{destination?.label}</p>
          </div>
        </OverlayViewF>
      </MarkerF>

      <DirectionsRenderer
        directions={direction}
        options={{
          polylineOptions: {
            strokeColor: "#000",
            strokeWeight: 3,
          },
          suppressMarkers: true,
        }}
      />
    </GoogleMap>
  );
}

export default GoogleMapSection;
