import { useState } from "react"
import Item from "./item"

export default function Menu({ items, Setitems }) {

    function handleClick(){
        if(window.confirm("You are redirected to admin panel. Are you sure you want to proceed?")){

            window.location.href="http://localhost:5173/"
        }
    }
    function handleqtyChange(name, newQty) {
        Setitems(prevItems =>
            prevItems.map(item =>
                item.name === name ? { ...item, qty: newQty } : item
            )
        )
    }

    return <>
    <div className="px-9 mt-1  w-full flex justify-end items-center">
        <button onClick={handleClick} className="bg-slate-200 font-medium px-3 font-serif rounded-lg">Admin</button>
    </div>
        <div className="flex p-3 w-full justify-center mt-7 ">
            <div className="w-[96%] h-full bg-[#FEFEFE] shadow-md rounded-xl flex flex-col items-center p-1 justify-center ">
                <h1 className="text-center font-semibold text-3xl  ">Menu</h1>
                <div class="border-t-2 border-dashed mt-2 border-[#d9d9d9] w-full"></div>

                <div className="items bg-white w-full flex justify-center">
                    <ul className="w-full flex flex-col items-center  p-4 ml-2 justify-center">
                        {items.length === 0 ? (
                            <h1>No items available</h1>
                        ) : (
                            items.map(item => (
                                <Item key={item.name} name={item.name} qty={item.qty} onqtychange={handleqtyChange} />
                            ))
                        )}


                    </ul>
                </div>
            </div>
        </div>
    </>
}