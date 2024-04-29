import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {Routes, Route, useLocation} from "react-router-dom";
// @ts-ignore
import {animateScroll} from "react-scroll";
import { AnimatePresence } from "framer-motion";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import SingleDrug from "./components/pages/SingleDrug";
import CartPage from "./components/pages/CartPage";

interface userType {
  user: {
    userInfo: {
      name: string
    }
  }
}
function App() {
  const {userInfo} = useSelector((state:userType)=> state.user)
  const directory = useLocation();

  useEffect(() => {
  
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [directory.pathname]);
  return (
    
       <div className="w-full overflow-hidden">
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/> 
            <Route path="/drugs/:id" element={<SingleDrug/>}/>
            <Route path="/cart/:id" element={userInfo && userInfo.name ? <CartPage/> : <Navigate to='/login'/>}/>
          </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
