"use client";
// import { DestinationPlaceContext } from "@/context/DestinationPlace";
// import { SourcePlaceContext } from "@/context/SourcePlace";
import Image from "next/image";
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Option } from "react-google-places-autocomplete/build/types";
import { SingleValue } from "react-select";
export type FieldTypes = {
  lat: number;
  lng: number;
  name: string;
  label: string;
};
type Props = {
  type: string;
  source:FieldTypes;
  destination:FieldTypes;
  setSource:Dispatch<SetStateAction<FieldTypes>>;
  setDestination:Dispatch<SetStateAction<FieldTypes>>;
};

const Input = ({ type,source,setSource,destination,setDestination }: Props) => {
  const [value, setValue] = useState<Option | null>(null);
  const [placeholder, setPlaceholder] = useState("");
  // const { setSource } = useContext(SourcePlaceContext);
  // const { setDestination } = useContext(DestinationPlaceContext);

  useEffect(() => {
    type === "source"
      ? setPlaceholder("Pickup Location")
      : setPlaceholder("Dropoff Location");
  }, []);
  const getLatAndLng = (places: SingleValue<Option>, type: string) => {
    const placeId = places?.value.place_id;
    const serves = new google.maps.places.PlacesService(
      document.createElement("div")
    );
    serves.getDetails({ placeId }, (place, status) => {
      if (status === "OK" && place?.geometry && place.geometry.location) {
        if (type === "source") {
          setSource({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            name: place.formatted_address!,
            label: place.name!,
          });
        } else {
          setDestination({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            name: place.formatted_address!,
            label: place.name!,
          });
        }
      }
    });
  };

  return (
    <div className="flex items-center gap-2 bg-slate-200 rounded-xl p-2">
      <Image
        src={type === "source" ? "/source.png" : "/dest.png"}
        alt={type === "source" ? type : type}
        width={17}
        height={17}
      />
      <GooglePlacesAutocomplete
        selectProps={{
          value,
          onChange: (place: SingleValue<Option>) => {
            getLatAndLng(place, type);
            setValue(place);
          },
          components: {
            DropdownIndicator: false,
          },
          placeholder: placeholder,
          className: "w-full",
          styles: {
            dropdownIndicator: (base) => ({
              display: "none",
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "#00ffff00",
              outline: "none",
              border: "none",
            }),
          },
        }}
      />
    </div>
  );
};

export default Input;
