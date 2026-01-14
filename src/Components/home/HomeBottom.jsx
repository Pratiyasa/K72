import React from 'react'
import { Link  } from 'react-router-dom'

const HomeBottom = () => {

  return (
    
    
    <div className="font-[font2] font-bold uppercase flex justify-center items-center gap-2 absolute bottom-0 left-[20%] z-30">
      <Link className="hover:text-[#D3FD50] hover:border-[#D3FD50] text-[6vw] mr-2 px-4 py-2 leading-[5vw]  text-white border-3 border-white rounded-full" to='/Project'>Projects</Link>
      <Link className="hover:text-[#D3FD50] hover:border-[#D3FD50] text-[6vw] mr-2 px-4 py-2 leading-[5vw] text-white border-3 border-white rounded-full " to='/Agency'>Agence</Link>
     
    </div>
   
  )
}

export default HomeBottom


// import React from 'react'
// import { Link } from 'react-router-dom'

// const HomeBottom = () => {
//   return (
//     <div className="font-[font2] font-bold uppercase flex justify-center items-center gap-2 absolute bottom-0 left-[20%] z-50">
//       <Link
//         to="/Project"
//         className="hover:text-[#D3FD50] hover:border-[#D3FD50]
//         text-[6vw] mr-2 px-4 py-2 leading-[5vw]
//         text-white border-2 border-white rounded-full"
//       >
//         Projects
//       </Link>

//       <Link
//         to="/Agency"
//         className="hover:text-[#D3FD50] hover:border-[#D3FD50]
//         text-[6vw] mr-2 px-4 py-2 leading-[5vw]
//         text-white border-2 border-white rounded-full"
//       >
//         Agency
//       </Link>
//     </div>
//   )
// }

// export default HomeBottom

