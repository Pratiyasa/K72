import React from 'react'
import Video from '../home/Video'

const HomeTop = () => {
  return (
   <>
       <div className='font-[font1] text-center p-5'>
           <div className="text-[9.5vw] uppercase text-white leading-[8.5vw] font-medium flex items-center justify-center" >L'étincelle</div>
           <div className="text-[9.5vw] uppercase text-white leading-[8.5vw] font-medium flex items-center justify-center" >qui <div className=" h-[7vw] w-[16vw] rounded-full overflow-hidden bg-amber-50"><Video/></div>génère</div>
           <div className="text-[9.5vw] uppercase text-white leading-[8.5vw] font-medium flex items-center justify-center">la créativité</div>
    </div>
   </>
  )
}

export default HomeTop
