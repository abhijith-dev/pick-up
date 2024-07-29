import Box from '../Components/Box';
import useMatrix, { MatrixProps } from '../Hooks/useMatrix';

type BoardProps ={
  dimension:number[]
}

const GameBoard = (props:BoardProps) => {
   const { dimension } = props;
   const Mprops: MatrixProps = {
      row:dimension[0],
      column:dimension[1]
    }
    const { matrix  } = useMatrix(Mprops);

    const columns:number = matrix.length;
    const columsGirds:number[] = [...Array(columns)].map((_, i) => i);
    
    return (
       <div className='flex flex-row'>
        {
          columsGirds.map((_,index)=> (
            <div key={index}>
           {
          columsGirds.map((position,_) => (
            <Box key={position} show={false} status={false} value={matrix[index][position]} />
          ))
          }
        </div>
          ))
        }
       </div>
    )
};

export default GameBoard;