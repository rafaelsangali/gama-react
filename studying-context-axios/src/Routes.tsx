import { Routes, Route , BrowserRouter} from "react-router-dom"
import Blog from "./components/Blog/Blog"
import Contato from "./pages/Contato/Contato"
import Home from "./pages/Home/Home"

export default function Wrapper(){
return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contato" element={<Contato />}/>
        <Route path="/blog" element={<Blog />}/>
    </Routes>
    </BrowserRouter>
)
}