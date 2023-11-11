import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { StripeElements } from "@stripe/stripe-js";
import { FormEvent } from "react";

type Props ={
    amount:string
}
function CheckOutForm({amount}:Props) {
    const stripe =useStripe();
    const elements:StripeElements| null =useElements();

    const handleSubmit =async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(elements==null) 
        {return;}

        const { error:submitError} =await elements?.submit();
        if(submitError)
        {return;}

        const response =await fetch('api/create-intent',{
            method:'POST',
            body:JSON.stringify({
                amount:amount
            })
        })

        const secretKey =await response.json()

        await stripe?.confirmPayment({
            clientSecret:secretKey,
            elements,
            confirmParams:{
                return_url:"http://localhost:3000/page-success"
            }
        })
        
    }
  return (

    <div className='flex justify-center items-center py-5 md:py-10' >
        <form onSubmit={handleSubmit} className=' flex flex-col gap-6 sm:w-[50%]'>
            <PaymentElement className=''/>
            <button className='p-2 bg-black text-white rounded-xl mt-5 text-center '>To Pay</button>
        </form>
    </div>
  )
}

export default CheckOutForm