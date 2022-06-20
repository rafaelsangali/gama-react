import Box from "../../components/Box/Box";
import Header from "../../components/Header/Header";

function Home() {
  return (
    <>
    <Header />
    <Box background="cinza">
      <h2> conteúdo 1</h2>
    </Box>     
    <Box background="rosa">
      <h2> conteúdo 2</h2>
    </Box>   
    </>
  );
}

export default Home;
