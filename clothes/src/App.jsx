import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Service from "./Service";
const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
     <Route path="Service" element={<Service/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;
