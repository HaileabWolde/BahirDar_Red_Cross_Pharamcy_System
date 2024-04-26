import {Routes, Route} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/pages/Home";
import Footer from "./components/organs/Footer/Footer";
function App() {
  return (
    
       <div className="w-full overflow-hidden">
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
          <Footer/>
        </AnimatePresence>
    </div>
  );
}

export default App;
