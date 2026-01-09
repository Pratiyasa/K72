import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Page/Home'
import Project from './Page/Project'
import Agency from './Page/Agency'


const App = () => {
  return (
    <div className="text-black">
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Project' element={<Project/>} />
      <Route path='/Agency' element={<Agency/>} />
      </Routes>

    </div>
  )
}

export default App
