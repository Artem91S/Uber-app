import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div>
        <Image
          className="object-cover w-full h-full"
          src="/uberbanner.jpeg"
          width={700}
          height={1000}
          alt="banner Uber"
        />
      </div>
      <div className=" absolute top-20 right-2">
        <SignIn />
      </div>
    </>
  );
}
