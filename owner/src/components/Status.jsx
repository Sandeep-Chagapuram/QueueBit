import { useEffect, useState } from "react"

export default function Status({ count, setCount }) {
    function handleClick() {
        localStorage.clear()
    }
    return <>
        <h1 className="text-center mt-5 font-light">⚠️ Seeing missing or outdated orders in the queue? Tap 'Troubleshoot' and reload the page to fix it instantly </h1>
        <div className="flex items-center mb-7 mt-6 mx-3 ">
            <button onClick={handleClick} className="px-5 py-2  text-white rounded-full mx-5 bg-slate-800">
                Trouble shoot
            </button>
            <div className="flex flex-col gap-1 bg-slate-100 p-3 rounded-lg ">
                <div className="flex  gap-2 items-center"><div className="h-4 w-4 rounded-[50%] bg-orange-600"></div>Customer is waiting</div>
                <div className="flex gap-2 items-center"><div className="h-4 w-4 rounded-[50%] bg-green-600"></div>Preparation done (call customer)</div>

                <div className="flex gap-2 items-center"><div className=" font-semibold text-xl ">Double tap- </div>Parcel has been given</div>
                
            </div>
        </div>
        <div className="border border-t-2 border-[#9191914e] border-dashed mb-11"></div>
        <div className="my-3 flex flex-col items-center  h-28">
            <div className="topLabel w-full h-4 flex  items-center justify-center">
                <div className="h-4 w-1/4  flex justify-start px-2 items-center text-lg font-medium mx-1 mb-4">Queue Count</div>
            </div>
            <div className="top w-full h-24 flex  items-center justify-center ">
                <div className="h-5/6 w-1/4 mx-1 rounded-2xl bg-[#d9d7d7bc] shadow-md flex justify-center items-center text-4xl">{count}</div>
            </div>
        </div>
    </>
}