import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { LOGOUT_USER } from '../../../../redux/User/User';
import { 
  FaShoppingCart,
} from "react-icons/fa";
// @ts-ignore
import Logo from "../../../../assets/Rcross.jpg";

interface userType {
  user:{
    userInfo: {
      name: string
    } | null
  }
}
const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {userInfo} =  useSelector((state: userType)=> state.user)

  const handleLogout = ()=>{
    dispatch(LOGOUT_USER())
  }
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
          {
            userInfo && userInfo.name ? 
            <div className='flex flex-row items-center  gap-5 cursor-pointer'>
                <div className='rounded-[50%] px-4 py-2 bg-[#1C274C] text-white font-serif'>
                { userInfo?.name?.charAt(0)}
                </div>
                < FaShoppingCart size={28} color='#1C274C'/>
                <button className='border-1 px-5 py-2 text-lg drop-shadow-md rounded font-serif font-semibold bg-[#1C274C] hover:bg-[#003366] text-white'
            onClick={()=>handleLogout()}>LOG OUT</button>
            </div> :  
            <button className='border-1 px-5 py-2 text-lg drop-shadow-md rounded font-serf font-semibold bg-[#1C274C] hover:bg-[#003366] text-white'
            onClick={()=>navigate('/login')}>LOG IN</button>
          }
            </ul>
    
      
      </nav>
    </header>
  );
};
export default NavBar;
