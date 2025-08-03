import { useEffect } from "react"
import Navbar from "./Navbar"
import { useLocation } from "react-router-dom"
import { useState } from "react"
export default function Waiting() {
    const location = useLocation()
    const auth = location.state?.auth
    const token = location.state?.token
    if (auth == true) {

        return <>
            <Navbar />
            <div className="w-full flex justify-center ">
                <div className="py-11 rounded-3xl shadow-md  px-5 flex flex-col mt-20 items-center md:w-[70%] max-w-md w-[90%]  bg-[#f1f1f1d8] border border-[#9c9c9c34]">
                    <h1 className=" mb-9 text-center font-semibold mt-8 text-3xl">Thank you for ordering</h1>
                    <p className="text-lg text-center mt-5  w-full">Your token number is:</p>
                    <div className="w-full flex justify-center mt-3">
                        <div className="h-24 w-24 rounded-[50%] bg-black flex justify-center items-center font-bold mt-2 text-white text-5xl">{token}</div>
                    </div>
                    <div className="w-full flex justify-center items-center flex-col">
                       
                        <p className="text-xl my-9 text-center font-medium text-[#131313ca] px-5">Please wait until your order is being prepared</p>
                        <p className="font-thin">We will be calling you soon</p>

                    </div>
                </div>
            </div>
        </>
    }
    else {
        return <>
            <h1>Page is not available until you pay..</h1>
        </>
    }
}