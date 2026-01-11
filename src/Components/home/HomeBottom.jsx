import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const HomeBottom = () => {

  return (
    
    <div className="font-[font2] font-bold uppercase flex justify-center items-center gap-2 absolute bottom-0 left-[20%]">
      <Link className="hover:text-[#D3FD50] hover:border-[#D3FD50] text-[6vw] mr-2 px-4 py-2 leading-[5vw]  text-white border-3 border-white rounded-full" to='/Project'>Projects</Link>
      <Link className="hover:text-[#D3FD50] hover:border-[#D3FD50] text-[6vw] mr-2 px-4 py-2 leading-[5vw] text-white border-3 border-white rounded-full " to='/Agency'>Agence</Link>
    </div>
  )
}

export default HomeBottom
