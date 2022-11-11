import { useState } from "react"


export const useCounter = ( initialValue = 10 ) => {

  const [ counter, setCounter ] = useState( initialValue )

  const increment = ( value = 1 ) => {
    setCounter( counter + value );
  }

  const dencrement = (  value = 1 ) => {
    setCounter( counter - value );
  }

  const reset = () => {
    setCounter( initialValue );
  }



  return {
    counter: counter,
    increment: increment,
    dencrement: dencrement,
    reset: reset
  }



}
