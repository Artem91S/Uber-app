import { createContext } from "react";


const initialValue ={
  source:{
    lat: 0,
    lnb: 0,
    name: '',
    label:''
  },
  setSource:() => {}
} 
type FieldTypes = {
  lat: number;
  lnb: number;
  name: string;
  label: string;
};
type ContextType = {
  source: FieldTypes;
  setSource:(values:FieldTypes)=>void
};

export const SourcePlaceContext = createContext<ContextType>(initialValue);
