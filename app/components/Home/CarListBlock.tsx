import { carsData } from "@/mock/CarsData.js";
import CarItem from "./CarItem";
import { useState } from "react";
import { useRouter } from "next/navigation";
function CarListBlock(distance:{distance:number}) {
  const [activeIndex,setIndexIndex] =useState(1);
  const[chooseCar,setChooseCar]=useState({
    id:2,
    name:'Comfort',
    seat:4,
    dest:'Newer cars with extra legroom',
    amount:44,
    image:'/UberComfort.png'
  })
  const route =useRouter()
  
  return (
    <div className='p-2 overflow-auto h-[355px]'>
      <h2 className='text-xl font-bold pb-2'>Recommended</h2>
      {carsData.map((car,index)=>(
        <div 
        key={car.id} 
        onClick={()=>{
          setIndexIndex(index)
          setChooseCar(car)
        }}
        className={`flex md:block lg:flex justify-between flex-1 items-center cursor-pointer p-2 ${activeIndex === index && 'border-2 border-gray-400 rounded-xl bg-slate-200' }`} >
          <CarItem car={car} tariff={distance}/>
        </div>
      ))}
        <div className='flex justify-between item-center fixed bottom-[1px] left-0 bg-slate-100 md:w-[33%] md:p-1 lg:p-3 w-full p-3 z-10'>
          <p className=' p-2 md:text-[12px] lg:text-[14px]'>Make payment for</p>
          <button 
          onClick={()=>{
            route.push('/payment?amount='+(chooseCar.amount*distance.distance).toFixed(2))
          }}
          className='p-2 bg-black text-white rounded-xl md:text-[12px] lg:text-[14px] font-semibold'>Request for {chooseCar.name}</button>
        </div>
    </div>
  );
}

export default CarListBlock;
