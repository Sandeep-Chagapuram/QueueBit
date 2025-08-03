import { useState } from "react"

export default function Item(props){
    let newqty
    function handleDec(){
        if(props.qty>0) newqty=props.qty-1
        else newqty=0
        props.onqtychange(props.name,newqty)
    }
    return<>
    <li className="w-[95%] bg-[#f4f4f460] my-1 flex items-center rounded-xl">
    <div className=" pl-3 flex items-center justify-around w-full my-2">
        <div className="w-4/5 flex gap-5 font-semibold text-xl items-end">{props.name} <div className="font-thin text-xs">100g</div></div>
        <div className="w-1/5 flex items-center justify-center">
            <div onClick={()=>{props.onqtychange(props.name,props.qty+1)}} className="text-xl w-6 bg-[#e9b56de6] transition-all rounded-tl-xl font-extrabold rounded-bl-lg flex items-center justify-center hover:cursor-pointer select-none hover:scale-110 ">+</div>
            <div className="text-xl w-6 font-medium  flex items-center justify-center">{props.qty}</div>
            <div onClick={()=>{handleDec()}} className="text-xl w-6 rounded-tr-xl rounded-br-lg font-extrabold hover:scale-90 transition-all bg-[#e46363c7]  flex items-center justify-center hover:cursor-pointer select-none">-</div>
        </div>
    </div>
    </li>
    </>
}