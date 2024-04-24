import { Link} from "react-router-dom";
import {Text} from "../../atoms/Text";
import {Image} from "../../atoms/Image";
import  redCross  from "../../../assets/red-cross.png";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
const Footer = ()=>{
     
    return (
        <footer className="w-full bg-gray-100 pt-[50px] shadow-lg pb-[60px] border-t">
            <section className="max-w-5xl mx-auto flex  items-center md:flex-row justify-center gap-[50px]">
                
                    <div 
                    className="flex flex-col items-center gap-6 ">
                        <div className="flex items-center gap-4">
                            <h1 className="flex text-4xl font-signiture text-[#FE0013] items-center">
                                Red Cross
                            </h1>
                        <Image
                    image={redCross}
                    className="h-20"
                    alt="red_cross"
                    />
                        </div>
                        <h1 className="flex  text-2xl font-serif font-semibold items-center text-[#1C274C]">
                              BahirDar Red Cross
                            </h1>
                            <p className="text-base  font-light text-[#1C274C]">We put your health first , making it <br/>
easy to get medication when you want.</p>  
                    </div>
                    <div className="flex flex-col">

                    <h1 className="text-2xl capitalize font-serif font-bold text-[#1C274C]">
                            Browse 
                            <ul className="mt-4 flex flex-col gap-2">
                                <li>
                                  
                                    <a href="#HOME" className="text-base font-serif  hover:underline">
                                        <p className=" text-base font-serif  hover:underline font-light text-[#1C274C]">Home</p></a>
                                </li>
                                <li>
                                   
                                    <a href="#ABOUT US" className="text-base font-serif text-[#4F717F] hover:text-[#6F9FB1] hover:underline">
                                        <p className="font-light text-[#1C274C]">Contact</p></a>
                                </li>
                             
                                    <li>
                                   
                                    <a href="#SOLUTIONS" className="text-base font-serif hover:underline"><p className="font-light text-[#1C274C]">About</p></a>
                                </li>
                              
                            </ul>
                        </h1>
                    </div>
                    <div className="flex flex-col">

                    <h1 className="text-2xl capitalize font-serif font-bold text-[#1C274C]">
                             Services
                            <ul className="mt-4 flex flex-col gap-2">
                                <li>
                                  
                                    <p className="text-base  font-light text-[#1C274C]">Online_consultation</p>
                                </li>
                                <li
                               >
                                   
                                    <p className="text-base  font-light text-[#1C274C]">Order drugs</p>
                                </li>
                                <li
                              
                             >
                                  
                                    <p className="text-base  font-light text-[#1C274C]">Health News</p>
                                </li>
                            </ul>
                        </h1>
                    </div>
                    <div className="flex flex-col">

                        <h1 className="text-2xl capitalize font-serif font-bold text-[#1C274C]">
                            Contact 
                        </h1>
                        <ul className="mt-4 flex flex-col gap-2">
                            <li className=" flex gap-2 items-center">
              
                                 <FaMapMarkerAlt color="#1C274C" size={18}/>
                                <p className="text-base  font-light text-[#1C274C]">Bahir Dar, kebele 03</p>
                            </li>
                            <li className="flex gap-2 items-center">
               
                                <FaEnvelope color="#1C274C" size={18}/>
                                <p className="text-base  font-light text-[#1C274C]">bahirdarredcross@gmail.com</p>
                            </li>
         
                            <li className="flex gap-2 items-center">
                                <FaPhone color="#1C274C" size={18}/>
                                <p className="text-base  font-light text-[#1C274C]">About</p>
                            </li>
          
                        </ul>
    
</div>
              
            </section>
        </footer>
    )
}
export default Footer