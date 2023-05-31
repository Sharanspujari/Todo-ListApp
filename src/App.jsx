import { useState } from 'react'

import './App.css'
import Header from './assets/Components/Topbar/Header'
import Sidebar from './assets/Components/Topbar/Sidebar/Sidebar'
function App() {
  // geekonomy

  return (
    <>
    <div className='main_container'>
   <Header/>
   <Sidebar/>
   </div>
    </>
  )
}

export default App
