import { useEffect } from "react"
import Menu from "./components/Menu"
import Navbar from "./components/Navbar"
import Summary from "./components/Summary"
import { useState } from "react"
import { data } from "react-router-dom"
function App() {

  const [items, Setitems] = useState([])


  

  const getMenu = async () => {
    const res = await fetch("http://localhost:3000/owner/menu")
    const data = await res.json()
    Setitems(data)
    // console.log(data)
  }
  useEffect(() => {
    document.title="client"
    getMenu()
  }, [])



  return <>
    <main>
      <Navbar />
      <Menu items={items} Setitems={Setitems} />
      <Summary items={items} />

    </main>
  </>
}
export default App