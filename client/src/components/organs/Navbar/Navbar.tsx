import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { 
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
// @ts-ignore
import Logo from "../../../assets/Rcross.jpg";

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <header className="w-full bg-white overflow-hidden fixed  top-0 left-0  shadow-lg pb-1">
      <nav
        className={`px-8 xl:px-0 max-w-6xl mx-auto flex justify-between items-center`}>
          <div className="flex gap-3 cursor-pointer">
          <img
          className="w-22 h-[92px]"
          src={Logo}
          alt="Logo"
        />
         <h1 className='flex  text-4xl font-signiture text-[#FE0013] items-center'>Red Cross </h1>
          </div>
        
            <ul className={`lg:flex hidden items-center justify-center`}>
            <li className='text-2xl text-[#EA0063] font-serif mx-10 hover:scale-105 hover:text-red-700 duration-75 my-6 md:my-0'>
           <Link to='/'>Home</Link>
          </li>
          <li className='text-2xl text-[#EA0063] font-serif mx-10 hover:scale-105 hover:text-red-700 duration-75 my-6 md:my-0'>
          <Link to='/about'>About</Link>       
          </li>
          <li className='text-2xl text-[#EA0063] font-serif mx-10 hover:scale-105 hover:text-red-700 duration-75 my-6 md:my-0'>
          <Link to='/contact'>Contact</Link>
          </li>
          <button className='border-1 px-5 py-2 text-lg drop-shadow-md rounded font-sans font-semibold bg-[#2F4858] hover:bg-[#003366] text-white'
             onClick={()=>navigate('/login')}>LOG IN</button>
            </ul>
    
      
      </nav>
    </header>
  );
};
export default NavBar;
