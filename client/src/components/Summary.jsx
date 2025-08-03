import Pay from "./Pay"
export default function Summary({items}){
    const total = items.reduce((sum,item)=>sum+item.qty*item.price,0)
    const ordered_items = items.filter((item)=>item.qty>0)
    return <>
    <div className="flex p-3 w-full mt-3 flex-col items-center gap-3">
        <div className="bg-[#FEFEFE] shadow-md rounded-xl w-[96%]">
            <div className="text-center font-semibold text-3xl py-2">Summary</div>
            <div class="border-t-2 border-dashed mt-2 border-[#d9d9d9] w-full"></div>
            <div className="p-3">
                <ul className="flex flex-col items-center">
                    <li className="mb-2 flex justify-around w-full"><div className="w-1/3 flex justify-center font-semibold">Item</div><div className="w-1/3 flex justify-center font-semibold">Quantity <div className="font-normal text-sm flex items-center mx-1 mb-2">(100g)</div></div><div className="w-1/3 flex justify-center font-semibold">Price</div></li>
                    {
                        ordered_items.length>0? ordered_items.map(item=>{
                        return <li key={item.name} className="flex justify-center w-full rounded-lg bg-[#f8f8f8cb]"><div className="w-1/3 flex justify-center">{item.name}</div><div className="w-1/3 flex justify-center">{item.qty}</div><div className="w-1/3 flex justify-center">{item.qty * item.price}</div></li>
                    }):<h1 className="my-5">No items ordered</h1>
                    }
                </ul>
                <br />
                <hr />
                <div className="w-[96%] flex justify-center py-3 px-8 mx-4"><div className="w-1/2 font-bold justify-center flex text-xl">Total</div> <div className="w-1/2 font-bold justify-center flex text-2xl">{total}</div></div>
            </div>
        </div>
        <Pay total={total} items={items}/>
    </div>
    </>
}