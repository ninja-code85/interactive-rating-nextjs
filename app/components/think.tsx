'use client'
import Image from "next/image";
// import { useState } from "react";
type Thinkpro={
  rating:number |null
}
export default function Think({rating,}:Thinkpro){
  return(
    <div className="space-y-6 p-4 w-full bg-[hsl(213,19%,18%)] rounded-lg shadow-4xl flex flex-col items-center" >
      <div >
        <Image src={"/images/illustration-thank-you.svg" } alt="thinks page" height={150} width={150}/>
      </div>
      <p className="text-orange-400 bg-[hsl(216,12%,54%)]/10 p-2 rounded-full text-sm w-3/4 text-center">
        You selected {rating} out of 5
      </p>
        <h1 className="font-black text-3xl">Thank you!</h1>
        <p className="text-[hsl(217,12%,63%)]">We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </div>
  )
}