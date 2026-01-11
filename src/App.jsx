import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Page/Home'
import Project from './Page/Project'
import Agency from './Page/Agency'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'


const App = () => {

  useGSAP(()=>{

    const tl=gsap.timeline();

    tl.from('.star',{
      height:0,
      stagger:{
        amount:-0.1
      }
    })
    tl.to('.star',{
     y:'100%',
      stagger:{
        amount:-0.1
      }
    })

  })

  return (

    <div>
      <div className="h-screen w-screen flex fixed z-30 ">
          <div className="star h-full w-1/5 bg-black"></div>
          <div className="star h-full w-1/5 bg-black"></div>
          <div className="star h-full w-1/5 bg-black"></div>
          <div className="star h-full w-1/5 bg-black"></div>
          <div className="star h-full w-1/5 bg-black"></div>
    </div>
    
    
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Project' element={<Project/>} />
      <Route path='/Agency' element={<Agency/>} />
      </Routes>

    
    </div>
  )
}

export default App
