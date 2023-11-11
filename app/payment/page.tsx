"use client";
import { Elements } from "@stripe/react-stripe-js";
import { StripeElementsOptionsMode, loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckOutForm from "../components/Payment/CheckOutForm";
import { useSearchParams } from "next/navigation";
import { POST } from "../api/create-intent/route";

function Payment() {
  const params = useSearchParams();
  const amountOfRide = params.get("amount")!;
  const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY!);
  const options:StripeElementsOptionsMode | null = {
    mode:"payment",
    amount: Math.round(Number(amountOfRide) * 100),
    currency: 'uah',
  };
    return (
      <Elements stripe={stripe} options={options} children={<CheckOutForm amount={amountOfRide} />}/>
        
    );
  

}

export default Payment;
