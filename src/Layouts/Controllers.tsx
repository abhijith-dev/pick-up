import classNames from "classnames";
import { ChangeEvent, useState } from "react";

type ControllersProps = {
    setDimension:Function,
    setTab:Function
}

const CURRENT_BALANCE = 2250;

const Controllers = (props:ControllersProps) => {
    const { setDimension,setTab } = props;
    const [handledAmount,setHandledAmount] = useState('');
    const [error,setError] = useState(false);

    const changeDimesions = (event:ChangeEvent<HTMLSelectElement>) => {
      const { value } = event.target;
      setDimension([value,value]);
    };

    const handleAmount = (event:ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      if(Number(value) > CURRENT_BALANCE){
        setError(true)
      }
      else{
        setError(false)
      }

      setHandledAmount(value)
      
    }

    const startGame = () => {
        setTab(2)
    }

  
    return (
      <div className="flex flex-col w-full items-center gap-2">
        <label>Purchse Balance : </label>
        <p className="text-[20px] font-bold">{CURRENT_BALANCE}.00</p>
        <label htmlFor="">Choose Dimesions</label>
        <select id="select" onChange={changeDimesions} lang="en" className="text-[#fff] bg-box shadow-md w-36 h-10 text-center px-2 outline-none text-[14px]" defaultValue={'3x3'}>
            <option value={3} >3x3</option>
            <option value={4} >4x4</option>
            <option value={5} >5x5</option>
        </select>
        <label>
            Amount
        </label>
        <input type="number" value={handledAmount} onChange={handleAmount} className="text-[#fff] bg-box shadow-md w-36 h-10 text-center px-2 outline-none text-[14px]" placeholder="eg:100" />
         {error && <span className="text-red-600 font-semibold text-[12px]">Insufficient balance</span>}
        <button 
        onClick={startGame}
        disabled={error} 
        className={classNames("uppercase font-bold px-10 py-3 bg-box shadow-md rounded-md",{
            "opacity-60": error
        })}>
            Start Game
        </button>
      </div> 
    )
};

export default Controllers;
