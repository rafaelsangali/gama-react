import { useContext, useEffect, useState} from "react";
import Box from "../../components/Box/Box";
import Header from "../../components/Header/Header";
import { ButtonContext } from "../../context/ButtonContext";
import baseApi from "../../services/config";


function Home() {

// usando then
// useEffect(() => {
//  baseApi.get("/").then(({data}) => {console.log(data)})
// },[]);

//usando async
const [, setInfo] = useState()
useEffect(() => {
  const i = async () => {
   const response = (await baseApi.get("/"))
   setInfo(response.data)
  } 
  i()
 },[]);

const {count, setCount} = useContext(ButtonContext)


  return (
    <>
      <Header />
        <Box background="cinza">
          <>
            <h2> Conteúdo 1</h2>
            <button onClick={() => setCount(count + 1) }> counter {count}</button>
          </>
        </Box>     
        <Box background="rosa">
          <h2> conteúdo 2</h2>
        </Box>   
    </>
    
  )
}
export default Home;