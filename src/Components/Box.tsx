import classNames from "classnames";
import { useEffect, useState } from "react";

export type BoxProps = {
    value: number,
    show:boolean,
    status:boolean,
};

const Bomb =  require('../Assets/Images/bomb.png');
const Diamond = require('../Assets/Images/diamond.png');

const Box = (props:BoxProps) => {
   const [triggered,setTriggered] = useState(false); 
   const [closeGame,setCloseGame] = useState(false);


   const wrapTheGame  = ()  => {

   }
   
   useEffect(()=> {

    if(closeGame){
       wrapTheGame();
    }

   },[closeGame])

   const updateGame = (value:number) => {
    if(value === 0) {
      setTimeout(()=>{
         setCloseGame(true)
      },300);
    }
 }

   const toggleTrigger = () => {
    setTriggered(true);
    updateGame(value);
   };
    
   const { value } = props;  
   return (
     <div onClick={toggleTrigger} className={classNames("box scale-animation",{
        "flip-animation":triggered,
        "!bg-red-600": triggered && value === 0,
     })}>
       <div className={classNames({
        "hide": !triggered,
        "show":triggered
     })}>
       {
         value === 0  && <img src={Bomb} alt="fail" className="w-28 h-28" /> 
       }
       {
         value === 1  && <img src={Diamond} alt="fail" className="w-28 h-28" /> 
       }
      </div> 
     </div>
   )
};

export default Box;