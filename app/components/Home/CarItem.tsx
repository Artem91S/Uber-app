import Image from "next/image";
import { HiUser } from "react-icons/hi";
type PropsType = {
  car: {
    id: number;
    name: string;
    seat: number;
    dest: string;
    amount: number;
    image: string;
  };
  tariff: {
    distance: number;
}
};

function CarItem(props:PropsType) {
  const {car, tariff} =props
  return (
    <>
      <div className='flex gap-6 md:gap-2 md:py-4'>
        <Image src={car.image} alt={car.name}
        width={100} height={100}
        className='w-[80px] h-[80px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] '
        />
        <div className="flex flex-col gap-2 item-center">
          <h2 className="font-semibold flex gap-3">
            {car.name}
            <span className="flex gap-1 items-center">
              <HiUser />
              {car.seat}
            </span>
          </h2>
          <p className='w-[170px] sm:w-[300px] md:w-[90%] md:text-[14px]'>{car.dest}</p>
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-start ">
        <p className='font-semibold'>{(car.amount* tariff.distance).toFixed(2)}₴</p>
      </div>
    </>
  );
}

export default CarItem;
