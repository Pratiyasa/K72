import React from 'react'
import Video from '../Components/home/Video'
import HomeBottom from '../Components/home/HomeBottom'
import HomeTop from '../Components/home/HomeTop'


const Home = () => {
  return (
    <>
    <div className="h-screen w-screen fixed">
      <Video/>
    </div>
    <div className="h-screen w-screen relative flex flex-col ">
       <HomeTop/>
       <div className="absolute right-0 top-[56vh] text-white w-[20vw]">K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</div>
       <HomeBottom/>
    </div>
    </>
  )
}

export default Home
