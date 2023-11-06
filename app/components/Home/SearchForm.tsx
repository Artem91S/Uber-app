"use client";
import { useContext, useEffect } from "react";
import Input from "../Input";
import { SourcePlaceContext } from "@/context/SourcePlace";
import { DestinationPlaceContext } from "@/context/DestinationPlace";

function SearchForm() {
  const { source } = useContext(SourcePlaceContext);
  const {destination} = useContext(DestinationPlaceContext);

  useEffect(() => {
    if(source){
      console.log(source);
    }
    if(destination){
      console.log(destination);
    }
  }, [source,destination]);

  return (
  <>
    <div className=" m-3 border-2 border-gray-400 rounded-xl p-3 flex flex-col gap-6">
      <h3 className="text-[20px] font-bold">Get a ride</h3>
      <Input type="source" />
      <Input type="destination" />
      <button className="bg-black p-3 w-full text-white rounded-xl mt-3">
        Search
      </button>
    </div>
    {<div>
    <p>{source?.label}</p>
    <p>{source?.lat}</p>
    <p>{source?.lnb}</p>
    <p>{source?.name}</p>
    </div>}
    </>
  );
}

export default SearchForm;
