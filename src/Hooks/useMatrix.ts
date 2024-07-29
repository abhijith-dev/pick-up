export interface MatrixProps {
   row:number,
   column:number
};

const randomNumber = ():number => {
  const array = [0,1,0,1,0,0,0,1,1,0,1,0,1,1];
  const y = array[Math.floor(Math.random()*array.length)];
  return y;
}

const getSpans = (col:number): Array<number> => {
    const cols:number[]= [];

    for(let i=0; i< col ; i++){
        const x  = randomNumber()
        cols.push(x);
    }
    return cols;
}


const useMatrix = (props:MatrixProps) => {
   const { row,column } = props; // 3,3

   const  matrix : Array<Array<number>> = [];

   for(let i=0 ; i < row ; i++){
      const spans = getSpans(column);
      matrix.push(spans);
   }
   
   return {
      matrix
   }
};


export default useMatrix;