import React from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useLocation } from 'react-router-dom'
const stair = () => {
    const Locate=useLocation().pathname;
    console.log(Locate);
    useGSAP(()=>{
    
    const tl=gsap.timeline();
    //  t1.to(ParentRef.current,{
    //   display:'block'
    // })
    tl.from('.star',{
      height:0,
      stagger:{
        amount:-0.15
      }
    })
    tl.to('.star',{
     y:'100%',
      stagger:{
        amount:-0.15
      }
    })
    // t1.to(ParentRef.current,{
    //   display:'none'
    // })
    // tl.to('.star',{
    //  y:'0%'
    // })
  },Locate)

  return (
    
    <div   >
         <div className="h-screen w-screen flex fixed z-30 ">
          <div className="star h-full w-1/5 bg-black"></div>
          <div className="star h-full w-1/5 bg-black"></div>
          <div className="star h-full w-1/5 bg-black"></div>
          <div className="star h-full w-1/5 bg-black"></div>
          <div className="star h-full w-1/5 bg-black"></div>
          </div>
     </div>
  )
}

export default stair
