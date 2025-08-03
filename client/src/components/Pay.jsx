import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Pay({ total,items }) {
  let token
  const sendOrder = async()=>{
     const ordered_items = items.filter(item=>item.qty>0)
        token = await getToken()
        token = token+1
        const user = {token:token,order:[]}
        ordered_items.forEach(item=>{
          user.order.push(item)
        })
    await fetch("http://localhost:3000/owner/addOrder",{
      method:"POST",
      headers:{ "Content-Type":"application/json"},
      body: JSON.stringify(user)
    })
  }
  const getToken = async()=>{
    const res = await fetch("http://localhost:3000/owner/token")
    const data = await res.text()

    
    return parseInt(data)
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const navigate = useNavigate()

  const loadRazorpay = (amount) => {
    const options = {
      // key: enter you razorpay key here,
      amount: amount * 100,
      currency: "INR",
      name: "QueueBit",
      description: "Test Transaction",
      handler: async function (response) {
        await sendOrder()
        navigate('/Waiting', { state: { auth: true,token } })


      },
      prefill: {
        name: "Sandeep",
        email: "sandeep@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#3399cc"
      },
      mobile: true,
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return <>
    <div className="flex justify-center w-full mt-9">
      <button onClick={() => loadRazorpay(total)} className=" bg-zinc-950 text-white w-20 py-2 rounded-2xl shadow-lg font-semibold font-sans text-2xl hover:scale-105 transition-all">PAY</button>
    </div>
  </>
}