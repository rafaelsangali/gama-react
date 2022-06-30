import { useContext } from "react";
import { ButtonContext } from "../../context/ButtonContext";
import Header from "../Header/Header";

// interface ContextProps{
//     count: number
//     setCount: number
// }

export default function Blog(){
 const {count, setCount} = useContext(ButtonContext)
    return (
        <>
        <Header />
        <h1> página blog</h1>
        <button 
        onClick={() => setCount(count + 1)}
        > 
        counter {count}
        </button>
        </>
    )
}