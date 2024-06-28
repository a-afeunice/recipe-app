import { useState } from 'react'
import './App.css'
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>I am getting started</h1>
      <Button title="Nice One"/>
      <Button title="Another One"/>
    </>
  )
}

export default App
