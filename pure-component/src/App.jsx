import { useState } from 'react'
import './App.css'
import PureCounter from './components/PureComponent'
import SimpleCounter from './components/SimpleComponent'
function App() {

  return (
    <>
    <PureCounter/>
    <SimpleCounter/>
    </>
  )
}

export default App
