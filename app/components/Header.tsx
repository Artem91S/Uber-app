import { UserButton } from "@clerk/nextjs"
import Image from "next/image"

const Header = () => {
  return (
    <div className='flex items-center justify-between px-2 py-3 border-b-2 border-gray-500'>
        <div className='flex gap-6 items-center'>
            <Image src='/Logo.png' width={70} height={70} alt='Uber main logo'/>
            <div className='flex gap-2 items-center'>
                <Image src='/taxi.jpeg' alt='taxi icon' width={17} height={17}/>
                <h2 className='text-sm'>Ride</h2>
            </div>
            <div className='flex gap-2 items-center'>
                <Image src='/box.jpeg' alt='box icon' width={17} height={17}/>
                <h2 className='text-sm'>Package</h2>
            </div>
        </div>
        <UserButton/>
    </div>
  )
}

export default Header