import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import { CardOne } from "../molecules/CardOne";
import { motion } from "framer-motion";
import { StartInLogIn } from "../../redux/User/User";
// @ts-ignore
import SignupImage from "../../assets/signup.jpg";
import Message from "../molecules/message";
import Loading from "../molecules/Loading";


const Signup = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isLoading, error} =  useSelector((state)=> state.user)
    const [formdata, setFormData] = useState({
        UserName: "",
        email: "",
        password: "",
        confirmpassword: ""
    })
  
    const handleChange = (e)=>{
        setFormData({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        
        dispatch(StartInLogIn({
            formdata: {
              UserName: formdata.UserName,
              email: formdata.email,
              password: formdata.password,
              confirmpassword: formdata.confirmpassword,
            },
            navigate,
          }))
      
    }
    
    return (
        <motion.div
        initial={{opacity : 0}}
        animate={{opacity : "100%"}}
        transition={{duration: 1.2}}
        exit={{opacity : 0}}
        className=""
        >
             <CardOne
        isCover={true}
        cardClass="w-full h-screen flex flex-col justify-center"
        cardSrc={SignupImage}
        >
           <div className="max-w-2xl mx-auto flex flex-col items-center bg-white shadow-md border rounded-lg pt-[50px] pb-[50px] gap-4">
                    <h1 className="text-center capitalize text-4xl font-serif font-semibold text-[#1C274C]">SIGNUP</h1>
                   <p className='text-center text-xl italic  font-semibold text-[#1C274C]'>Welcome to BahirDar  RedCross Pharmacy System</p>
                   <form
                   className="flex flex-col gap-4 w-[60%]" 
                   onSubmit={handleSubmit}>
                        <input
                        placeholder="User Name"
                        type="text"
                        name="UserName"
                        value={formdata.UserName}
                        className=" rounded-lg border-2 border-[#54ACDB] px-2 md:py-1 py-2 outline-none"
                        onChange={handleChange} 
                        />
                         <input 
                        placeholder="Email" 
                        type="email" 
                        name="email"
                        value={formdata.email} 
                        className="rounded-lg border-2 border-[#54ACDB] px-2 md:py-1 py-2 outline-none"
                        onChange={handleChange}/>
                        <input
                        placeholder="Password" 
                        type="password" 
                        value={formdata.password} 
                        name="password" 
                        className=" rounded-lg border-2 border-[#54ACDB] px-2 md:py-1 py-2 outline-none"
                        onChange={handleChange}/>
                         <input
                        placeholder="Confrim Password" 
                        type="password" 
                        value={formdata.confirmpassword} 
                        name="confirmpassword" 
                        className="rounded-lg border-2 border-[#54ACDB] px-2 md:py-1 py-2 outline-none"
                        onChange={handleChange}/>
                         <button type='submit' className='flex bg-[#0C85C6] text-white text-xl cursor-pointer items-center justify-center md:py-2 py-3 rounded-lg mb-6 font-serif hover:scale-105 duration-500 hover:bg-[#54ACDB]'>
                          {
                            isLoading ? 'Loading' : 'SIGN UP'
                          }
                        </button>
                        {
                            error && 
                            <Message variant='danger'>
                                {error}
                            </Message>
                        }
                   </form>
                   <p className='md:text-md text-xl font-serif text-[#1C274C] italic'>Have an account? <button  onClick={()=> navigate('/login')} className='capitalize text-[#0C85C6] text-xl font-serif cursor-pointer hover:scale-105 hover:text-[#54ACDB] duration-200 p-0 hover:underline'>LogIn</button></p>
           </div>
        </CardOne>
        </motion.div>
       
    )
}
export default Signup;