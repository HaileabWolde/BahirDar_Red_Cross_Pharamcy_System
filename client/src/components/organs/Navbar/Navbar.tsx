import { 
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
// @ts-ignore
import Logo from "../../../assets/Rcross.jpg";
import { NavLinks } from "../../particles/NavLinks";
import { List } from "../../atoms/List";

const NavBar = () => {
  return (
    <header className="w-full bg-white overflow-hidden fixed  top-0 left-0  shadow-lg pb-1">
      <nav
        className={`px-8 xl:px-0 max-w-6xl mx-auto flex justify-between items-center`}>
          <div className="flex gap-3">
          <img
          className="w-22 h-[92px] cursor-pointer "
          src={Logo}
          alt="Logo"
        />
         <p className='flex justify-center text-4xl font-signiture text-[#FE0013] items-center'>Red Cross </p>
          </div>
       
        <div>
         
          <div className="lg:flex hidden items-center lg:flex-row lg:gap-2 mt-6 ">
            <ul className={`flex items-center justify-center gap-4 xl:gap-6`}>
              {NavLinks.map((navlink, index) => {
                return (
                  <List className="text-lg mt-2" key={index}>
                    <a
                      href={`#${navlink.name}`}
                      className="text-[#EA0063]  
                  rounded-lg
                font-semibold font-serif text-xl">
                      {navlink.name}
                    </a>
                  </List>
                );
              })}
            </ul>
           
            <div className="flex flex-row gap-2 items-center cursor-pointer mt-2 ">
              <FaShoppingCart color="#1C274C" size={22} />
              {/* <FaBell color="#1C274C" size={22} /> */}
              <FaUser color="#1C274C" size={22} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
