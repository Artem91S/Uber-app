"use client"
import SearchForm from "./components/Home/SearchForm";
import { useEffect, useState } from "react"
import GoogleMapSection from "./components/Home/GoogleMap";
import { LoadScript } from "@react-google-maps/api";
import { FieldTypes } from "@/type";

type SuccessTypes={
  coords:{
    latitude:number;
    longitude:number;
  }
}
const initialValue = {
  lat: 0,
  lng: 0,
  name: '',
  label:''
}

export default function Home() {
  const [source, setSource] = useState<FieldTypes>(initialValue);
  const [destination, setDestination] = useState<FieldTypes>(initialValue);
useEffect(()=>{
  handleLocationOfUser()

},[])
  const handleLocationOfUser =()=>{
    if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(success)
    }
    else{
      console.log("Location is off");
      
    }
  }

  const success =(position:SuccessTypes)=>{   
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
  setSource( {
      lat:lat,
      lng:lng,
      name: 'My location',
      label:'Me'
    })
  }
    

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
