import { useEffect } from "react"
import { useState } from "react"

export default function Queue({ order, removeuser, getCount }) {
    // console.log(order.order[0].item)
    const [orders, setOrders] = useState([])


    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("userData")) || []
        const removed = JSON.parse(localStorage.getItem("removedTokens")) || []

        const updatedOrders = order.map(item => {
            const storedItem = stored.find(s => s.token === item.token)
            return storedItem ? storedItem : { ...item, status: 'pending' }
        }).filter(item => !removed.includes(item.token))

        setOrders(updatedOrders)

    }, [order])

    useEffect(() => {
        if (orders.length > 0) {
            localStorage.setItem("userData", JSON.stringify(orders))
            // console.log("Updated localStorage:", orders)
        }
    }, [orders])

    function handleClick(e, token) {
        let btn = e.target
        // btn.innerText = "Waiting to collect"
        const updatedData = orders.map(item => {
            return item.token == token ? { ...item, status: "waitingToCollect" } : item
        })
        setOrders(updatedData)

    }
    async function handleDoubleClick(e, token) {
        const updatedData = orders.filter(item => item.token != token)
        setOrders(updatedData)
        localStorage.setItem("userData", JSON.stringify(updatedData))
        const removed = JSON.parse(localStorage.getItem("removedTokens")) || []
        if (!removed.includes(token)) {
            removed.push(token)
            localStorage.setItem("removedTokens", JSON.stringify(removed))
        }
        await removeuser(token)
        getCount()
    }

    return <>
        <div className="w-full my-1 flex justify-center mt-11">
            <div className="flex flex-col gap-1 w-[95%] min-h-32 bg-[#f5f5f5] rounded-xl px-1 pt-6 pb-9 items-center">

                {
                    orders.map((order, index) => {
                        return <div key={index} className="flex gap-1 justify-center items-center min-h-14 bg-[#598aa899] border  rounded-2xl shadow-md p-2 my-1 w-full sm:w-[90%]">

                            <div className="sm:w-[15%] flex items-center justify-start sm:pl-8">
                                <div className="h-14 w-14 rounded-[50%] bg-black flex justify-center items-center text-white text-3xl">{order.token}</div>
                            </div>
                            <div className="w-[90%] sm:w-[70%]">
                                <div className=" rounded-2xl flex justify-center bg-[#cfc39cce] items-center text-[10px] min-h-8 py-3 text-sm ">
                                    <ul className="grid grid-col-1 md:grid-cols-2 sm:grid-cols-3 gap-5">
                                        {order.order.map((item, index) => {
                                            return <li className="font-semibold text-lg bg-[#374151] text-white px-2 py-1 rounded-lg" key={index}>{item.name}- {item.qty * 100} g</li>
                                        })}
                                    </ul>
                                </div>

                            </div>
                            <div className="sm:w-[15%] flex justify-center items-center">
                                <button className={`h-8 flex justify-center items-center rounded-xl p-2 ${order.status == "waitingToCollect" ? "bg-green-600" : "bg-orange-600"}  text-sm cursor-pointer 
                    `} onClick={(e) => handleClick(e, order.token)} onDoubleClick={(e) => handleDoubleClick(e, order.token)}>Done</button>
                            </div>
                        </div>
                    })
                }

            </div>

        </div>

    </>
}