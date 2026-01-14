import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { useLocation } from 'react-router-dom'


const stair = (props) => {
    const Locate=useLocation().pathname;
    const ParentRef= useRef(null);
    const pageRef=useRef(null);
    console.log(Locate);
    useGSAP(()=>{
    
    const tl=gsap.timeline();
     tl.from(ParentRef.current,{
      display:'block',
       delay:-0.2
    })
    tl.from('.star',{
      height:0,
      stagger:{
        amount:-0.2
      }
    })
    tl.to('.star',{
     y:'100%',
      stagger:{
        amount:-0.2
      }
    })
    tl.to(ParentRef.current,{
      display:'none'
    })
    // tl.to('.star',{
    //  y:'0%'
    // })
    gsap.from(pageRef.current,{
      opacity:0,
      delay:1.18,
      scale:1.2
    })
  },Locate)
     {props.children}
    console.log(props.children);
  return (
    
    <div>
      <div ref={ParentRef} className="h-screen w-full z-30 top-0 fixed" >
         <div className="h-full w-full flex ">
          <div className="star h-full w-1/5 bg-black"></div>
          <div className="star h-full w-1/5 bg-black"></div>
          <div className="star h-full w-1/5 bg-black"></div>
          <div className="star h-full w-1/5 bg-black"></div>
          <div className="star h-full w-1/5 bg-black"></div>
          </div>
     </div>
    <div  ref={pageRef}>
          {props.children}
    </div>
    </div>
  )
}

export default stair
