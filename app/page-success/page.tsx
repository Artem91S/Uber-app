"use-client"
import Image from "next/image"
import Link from "next/link"

function SuccessPayment() {

  return (
    <div className='flex w-full flex-col items-center relative'>
    <Image src='/uberconfirm.gif' alt='confirm order gift' width={500} height={500} className="w-full" />
    <div className='absolute'>
    <p className='text-center pt-4 font-bold'>You success book the car</p>
    <Link className='text-center p-4 cursor-pointer'href='/'>
    <button className='p-2 bg-black text-white rounded-xl text-center'>Go to home page</button>
    
    </Link>
    </div>
    </div>
  )
}

export default SuccessPayment