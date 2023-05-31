import { useState } from 'react'

import './App.css'
import Header from './assets/Components/Topbar/Header'

import TodoForm from './assets/Components/Home/TodoForm'
function App() {
  // geekonomy

  return (
    
    <div className='cona'>
   <Header/>
   <div className='components_container'>
   
    <TodoForm/>
   </div>
   </div>
 
  )
}

export default App
