import { useState } from "react";
import Queue from "./Queue";
import Status from "./Status";
import { useEffect } from "react";

export default function Active() {
    const [orders,SetOrders] = useState([])
      const [count, setCount] = useState(0)

    const getOrders=async ()=>{
        const res= await fetch("http://localhost:3000/owner/orders")
        const data = await res.json()
        SetOrders(data)
        // console.log(data)
    }
    const getCount = async ()=>{
        const res = await fetch("http://localhost:3000/owner/count")
        const data = await res.text()
        setCount(data)
    }

    const removeuser=async (token)=>{
        // console.log(n)
        await fetch("http://localhost:3000/owner/removeUser",{
            method: "POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({token})
        })
        getOrders()
    }
    useEffect(()=>{
        getOrders()
        getCount()
    },[])
    return <>
        
        <Status count={count} setCount={setCount}/>
        {/* <Queue order={orders}/> */}
        {orders.length>0?<Queue order={orders} removeuser={removeuser} getCount={getCount}/>:<h1 className="text-2xl font-semibold text-center mt-36">No orders available</h1>}
        
    </>
}