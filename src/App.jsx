import './App.css'
import FormRender from './components/FormRender'
import AccordianRender from './components/AccordianRender'
import { useState } from 'react'

function App() {
  const[showAccordian,setShowAccordian]=useState(false)

  return (
    <>
   <FormRender/>
   <button onClick={()=>setShowAccordian((pvs)=>!pvs)}>Show Accordian</button>
   {showAccordian && (
    <AccordianRender/>
   )}
   
    </>
  )
}

export default App
