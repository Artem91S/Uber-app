"use client";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckOutForm from "../components/Payment/CheckOutForm";
import { useSearchParams } from "next/navigation";

function Payment() {
  const params = useSearchParams();
  const amountOfRide = params.get("amount")!;
  const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY!);
  const options = {
    mode:'payment',
    amount: Math.round(Number(amountOfRide) * 100),
    currency: 'uah',
  };
  if(!options) {
    return (
      <Elements stripe={stripe} options={options} children={<CheckOutForm amount={amountOfRide} />}/>
        
    );
  
  }
}

export default Payment;
