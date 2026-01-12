import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import React, { useRef } from 'react';
import { ScrollTrigger } from 'gsap/all';

const Agency = () => {

  gsap.registerPlugin(ScrollTrigger);

 const Arraylist= ['https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7',
  'https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64',
  'https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991',
  'https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2',
  'https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6','https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a',
  'https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847',
  'https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6']
  
  const imgDivRef =useRef();
  const imgRef=useRef(null);

   useGSAP(function(){
    gsap.to(imgDivRef.current,{
          scrollTrigger:{
            trigger:imgDivRef.current,
            start:'top 30%',
            end:'top -170%',
            scrub:true,
            pin:true,
            onUpdate:(elem)=>{
            let index= (Math.floor(elem.progress * Arraylist.length));
            if(index<8)
            imgRef.current.src= Arraylist[index];
          else{
             imgRef.current.src= Arraylist[7];
          }
            console.log(Arraylist[index]);

          }
          },
    })
   })
  
  return (

    <div>
        <div ref={ imgDivRef } className="h-[41vh] w-[15vw] absolute top-34 left-92 rounded-3xl overflow-hidden">
          <img ref={imgRef} className="bg-cover" src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"></img>
        </div>
        <div className="text-white relative top-[64vh]">
           <div className="">
                 <div className="font-[font2]">
                <h1 className="text-[20vw] leading-[17vw] uppercase text-center">Soixan7e <br/>Douze</h1>
             </div>
             <div className="ml-[39%] font-[font1] w-[60vw] mt-[10vh]">
                 <p className="text-[4vw] leading-[4.5vw]">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
            </div>
           </div>
        </div>
       
  </div>
  )
}

export default Agency
