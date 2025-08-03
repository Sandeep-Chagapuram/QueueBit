import Start from './components/Start'
import { useEffect } from 'react'

function App() {

  useEffect(()=>{
    document.title="owner"
  },[])
  return (
    <>
    <Start/>
    </>
  )
}

export default App
