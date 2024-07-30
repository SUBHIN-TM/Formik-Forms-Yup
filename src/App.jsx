import './App.css'
import { useState } from 'react';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';

function App() {
  const [selectedForm, setSelectedForm] = useState(null)


  const renderForm = () => {
    if(selectedForm=='form1'){
      return <Form1 />
    }
    else if(selectedForm=='form2'){
      return   <Form2 />
    }else if(selectedForm=='form3'){
      return   <Form3 />
    }
   
  }
  return (
    <>
    <div style={{ display: 'flex', gap: 20 ,marginBottom:"20px" }}>
      <button onClick={() => setSelectedForm('form1')}>Show Form 1</button>
      <button onClick={() => setSelectedForm('form2')}>Show Form 2</button>
      <button onClick={() => setSelectedForm('form3')}>Show Form 3</button>
    </div>
     {renderForm()}
    </>
    
  )
}

export default App
