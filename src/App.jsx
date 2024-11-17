import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { SideBar } from "./components/SideBar";
import { Routes,Route } from "react-router-dom";


function App() {
  return (
    <div className=" flex flex-col-reverse sm:flex sm:flex-row">
    <SideBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </div>
  );
}

export default App;
