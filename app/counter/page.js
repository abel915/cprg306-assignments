import { useState } from "react"

export default function CounterPage(){
 const[count ,setCount]= useState(0);
const increment = ()=>{
    let currentCount = count.valueOf();
    setCount(count + 1);
}
 return(
        <main className="p-4">
        <h1 className="text-2xl">Counter</h1>
            <p>current Count:{}</p>
            <button className="bg-blue-500 text-amber-50">
                onClick={}

            </button>
        </main>


    )



}