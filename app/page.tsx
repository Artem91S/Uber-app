"use client"
import GoogleMap from "./components/Home/GoogleMap";
import SearchForm from "./components/Home/SearchForm";
import { SourcePlaceContext } from "@/context/SourcePlace";
import { DestinationPlaceContext } from "@/context/DestinationPlace";
import { useState } from "react"
import GoogleMaps from "./components/Home/GoogleMap";

export default function Home() {
  const [source, setSource] = useState(null);
  const [destination, setDestination] = useState(null);

  return (
    <SourcePlaceContext.Provider value={{source,setSource}}>
      <DestinationPlaceContext.Provider value={{destination,setDestination}}>
        <div className="m-3 grid grid-cols-1 md:grid-cols-3">
          <div>
            <SearchForm />
          </div>
          <div className=" col-span-2">
            <GoogleMaps /> 
          </div>
        </div>
      </DestinationPlaceContext.Provider>
    </SourcePlaceContext.Provider>
  );
}
