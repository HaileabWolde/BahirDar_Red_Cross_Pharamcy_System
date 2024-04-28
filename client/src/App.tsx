import {Routes, Route} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import SingleDrug from "./components/pages/SingleDrug";
function App() {
  return (
    
       <div className="w-full overflow-hidden">
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/> 
            <Route path="/drugs/:id" element={<SingleDrug/>}/>
          </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
