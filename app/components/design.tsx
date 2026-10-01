'use client'

import Image from "next/image"
import { use, useState } from "react"
import Think from "./think"



export default  function DesignPage(){
  const [rating, setRating]=useState<number |null>(null)
  const [submit ,setSubmit]=useState(false)


  const nums=[1,2,3,4,5]

  return(

    <div className="space-y-6 p-4 w-full  bg-[hsl(213,19%,18%)] rounded-lg shadow-4xl md:w-1/4 ">
      {
        submit?(<Think rating={rating}/>):(
      <div className="space-y-6 ">
      <div className="bg-[hsl(216,12%,54%)]/10 w-11 h-11 flex items-center justify-center rounded-full ">
      <Image src={"/images/icon-star.svg" } height={15} width={15} alt="proIcon"
      className="rounded-full shadow-2xl"
      />
      </div>

      <h1 className="font-black text-2xl">How did we do?</h1>
      <p className="text-[hsl(217,12%,63%)]">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
       <div className="  flex gap-4 ">
        {nums.map((num)=>(
          <button
          key={num}
          onClick={()=>setRating(num)}

           className={`bg-[hsl(216,12%,54%)]/10  rounded-full hover:cursor-pointer p-3 shadow-2xl text-[hsl(217,12%,63%)] font-bold w-full shadow-2xl text-center" ${rating===num ?"bg-white text-black":"bg-bg-[hsl(216,12%,54%)]/10 text-[hsl(217,12%,63%)] hover:bg-[hsl(25,97%,53%)] hover:text-black"}`}>{num}</button>
        ))}
       </div>
       <button
       onClick={()=>setSubmit(true)}
       disabled={rating===null}
        className="bg-[hsl(25,97%,53%)] p-3 rounded-full text-black font-extrabold w-full">Submit</button>
      </div>)
      }

    </div>
  )

}