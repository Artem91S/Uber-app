"use client";
import {
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import Input from "../Input";
import CarListBlock from "./CarListBlock";
import { FieldTypes } from "@/type";
type Props = {
  source: FieldTypes;
  destination: FieldTypes;
  setSource: Dispatch<SetStateAction<FieldTypes>>;
  setDestination: Dispatch<SetStateAction<FieldTypes>>;
};

function SearchForm({ source, setSource, destination, setDestination }: Props) {

  const [distance, setDistance] = useState(0);
  const calculateTripDistance = () => {
    const distanceRM = google.maps.geometry.spherical.computeDistanceBetween(
      { lat: source.lat, lng: source.lng },
      { lat: destination.lat, lng: destination.lng }
    )   
    setDistance(+((distanceRM* 0.001653).toFixed(2)))
  };
  return (
    <div>
      <div className=" m-3 border-2 border-gray-400 rounded-xl p-3 flex flex-col gap-6 ">
        <h3 className="text-[20px] font-bold">Get a ride</h3>
        <Input
          setSource={setSource}
          setDestination={setDestination}
          type="source"
        />
        <Input
          setSource={setSource}
          setDestination={setDestination}
          type="destination"
        />
        <button
          onClick={calculateTripDistance}
          className="bg-black p-3 w-full text-white rounded-xl mt-3"
        >
          Search
        </button>
      </div>
      {distance !==0 && <CarListBlock distance={distance}/>}
    </div>
  );
}

export default SearchForm;
