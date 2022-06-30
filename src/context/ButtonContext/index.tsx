import { createContext, Dispatch, SetStateAction, useState } from "react";


interface IContextProps{
  count:number;
  setCount: Dispatch<SetStateAction<number>>
}

interface ButtonProviderProps {
  children?: JSX.Element;
}


export const ButtonContext = createContext<IContextProps>({ 
  count: 0,
  setCount: () => null 
})


export function ButtonProvider(props: ButtonProviderProps) {
  const [count, setCount] = useState(0)

  return (
    <ButtonContext.Provider
    value={{
      count,
      setCount,
    }
    }
    >
      {props.children}
    </ButtonContext.Provider>
    
    
  );
}



 