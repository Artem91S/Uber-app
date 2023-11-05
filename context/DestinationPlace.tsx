import { createContext } from "react";

const initialValue ={
  destination:{
    lat: 0,
    lnb: 0,
    name: '',
    label:''
  },
  setDestination:() => {}
} 
type FieldTypes = {
  lat: number;
  lnb: number;
  name: string;
  label: string;
};
type ContextType = {
  destination: FieldTypes;
  setDestination: (values:FieldTypes)=>void;
};

export const DestinationPlaceContext =createContext<ContextType >(initialValue);