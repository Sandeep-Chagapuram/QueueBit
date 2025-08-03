import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
export default function Start() {

  const [item, setItem] = useState({ name: "", price: "", qty: 0 })
  const [items,setItems] = useState([])
  async function addIntoMenu(){
    await fetch("http://localhost:3000/owner/addIntoMenu",{
      method:"POST",
      headers:{"content-type": "application/json"},
      body:JSON.stringify(item)
    })
  }
  const getMenu = async () => {
    const res = await fetch("http://localhost:3000/owner/menu")
    const data = await res.json()
    setItems(data)
  }
  function handleChange(e) {
    if (e.target.name == "price") {
      setItem({ ...item, [e.target.name]: Number(e.target.value) })
    }
    else {
      setItem({ ...item, [e.target.name]: e.target.value })
    }
  }
  function handleSubmit(e) {
    // e.preventDefault()
    addIntoMenu()
    // setItems([...items,item])
    setItem({name: "", price: "", qty: 0})
  }
  async function handleClear(){
    await fetch("http://localhost:3000/owner/clearMenu")
    getMenu()
  }
  useEffect(()=>{
    getMenu()
  },[],)
  return (
    <>
      <div className='my-5 w-full flex flex-col gap-8 items-center justify-center'>
        <div className='w-36 cursor-pointer py-5 font-medium h-8 bg-gradient-to-br from-[#c34848e2] to-[#a96d6db9] shadow-md hover:scale-110 transition-all rounded-md flex mt-3 justify-center items-center'>
          <Link to="/Active">Open the store</Link>
        </div>
        <div className="w-5/6 h-[22rem] bg-[#F1F5F9]

 shadow-lg rounded-xl flex items-center justify-center">
          <div className="flex flex-col items-center gap-3 " >
            <div className="font-semibold text-center text-2xl flex flex-col gap-3 mb-6">Add items into the menu
              <div className="text-lg text-slate-700 font-medium">Enter price per gram</div>
            </div>
            <form onSubmit={handleSubmit} className="w-5/6 flex flex-col items-center gap-4 " >
              <input className="py-2 px-4 w-60 rounded-md border border-[#b7b6b669]" type="text" onChange={handleChange} name="name" placeholder="Enter item name" value={item.name} />
              <input className="py-2 border border-[#b7b6b669] px-4 w-60 rounded-md" type="text" onChange={handleChange} name="price" placeholder="Enter item price" value={item.price} />
              <div className="flex w-full justify-between mt-5">
                <button className="bg-[#4c6497c4] hover:bg-[#4c6497de] px-3 py-2 rounded-lg text-[#fffefe] hover:scale-105 transition-all font-semibold" type="submit" >Add item</button>
                <button className="bg-[#6179aec4] hover:bg-[#4c6497de] px-3 py-2 rounded-lg text-[#fffefe] font-semibold hover:scale-105 transition-all"  type="button"onClick={handleClear} >Clear Menu</button>
              </div>
              

            </form>
          </div>
        </div>
        <div className="w-5/6 rounded-md min-h-3 bg-[#F1F5F9] shadow-lg pt-8 pb-11 flex flex-col items-center mb-9 p-3">
          <h1 className="font-semibold text-2xl mb-3">Menu Items</h1>
            {items.length==0?<h1>No items in the menu</h1>:<ul>
              <li className="font-medium text-xl flex gap-9 justify-center w-80 mb-2"><p className="flex justify-center w-1/2">Item Name</p><p className="flex justify-center w-1/2">Item Price</p></li>
              { 
                items.map((item)=>{
              return <li className="font-normal m-1 justify-around w-80 text-xl flex gap-9"><p className="flex justify-center w-1/2">{item.name}</p><p className="flex justify-center w-1/2">{item.price}</p></li>
            })}
              
              </ul>}

        </div>
        
      </div>
    </>
  )
}