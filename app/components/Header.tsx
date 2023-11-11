import { UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
  return (
    <div className='flex items-center justify-between px-2 py-3 border-b-2 border-gray-500 dark:bg-slate-300'>
        <div className='flex gap-6 items-center'>
          <Link href='/'>
            <Image src='/Logo.png' width={70} height={70} alt='Uber main logo'/>
            </Link>
        </div>
        <UserButton/>
    </div>
  )
}

export default Header