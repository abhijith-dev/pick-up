import { useEffect, useState } from 'react';
import { GameBoard,Controllers  } from  './Widgets/index';

const  App = () => {
  //write some inital logics...

  //number of rows and coloumn
  const [dimension,setDimension] = useState([3,3]);
  const [tab,setTab] = useState(1);

  return (
    <main className="w-screen h-screen bg-base text-common">
      { tab === 1  && (
               <section className='w-full h-full flex justify-center items-center'>
               <Controllers setDimension={setDimension} setTab={setTab} />
             </section>
      )}
      {
        tab === 2 && (
          <section className='w-full h-full flex justify-center items-center'>
          <GameBoard dimension={dimension} />
          </section>
        )
      }
    </main>
  );
}

export default App;
