import { info } from "console";
import { useEffect, useState } from "react";
import Box from "../../components/Box/Box";
import Header from "../../components/Header/Header";
import baseApi from "../../services/config";


function Home() {

// usando then
// useEffect(() => {
//  baseApi.get("/").then(({data}) => {console.log(data)})
// },[]);

//usando async
const [info, setInfo] = useState()
useEffect(() => {
  const i = async () => {
   return setInfo((await baseApi.get("/")).data)
  } 
 },[]);



  return (
    <>
    <Header />
    <Box background="cinza">
      <h2> {info}</h2>
    </Box>     
    <Box background="rosa">
      <h2> conteúdo 2</h2>
    </Box>   
    </>
  );
}

export default Home;
