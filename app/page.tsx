"use client"
import SearchForm from "./components/Home/SearchForm";
import { useState } from "react"
import GoogleMapSection from "./components/Home/GoogleMap";
import { LoadScript } from "@react-google-maps/api";
export type FieldTypes = {
  lat: number;
  lng: number;
  name: string;
  label: string;
} ;


export default function Home() {
  const [source, setSource] = useState<FieldTypes>(
    {
          lat: 0,
          lng: 0,
          name: '',
          label:''
        }
  );
  const [destination, setDestination] = useState<FieldTypes>(

    {
          lat: 0,
          lng: 0,
          name: '',
          label:''
        }
  );

  return (
        <LoadScript
        libraries={['places']}
        googleMapsApiKey='AIzaSyChvhc0pkiHubul1Na-eHbYBB3sCtkUuB4'
        >
        <div className="m-3 grid grid-cols-1 md:grid-cols-3">
          <div >
            <SearchForm source={source} setSource={setSource} destination={destination} setDestination={setDestination}/>
          </div>
          <div className=" col-span-2">
            <GoogleMapSection source={source}  destination={destination} /> 
          </div>
        </div>
        </LoadScript>
  );
}
