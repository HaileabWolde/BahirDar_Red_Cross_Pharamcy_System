import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
// @ts-ignore
import LoginImage from "../../assets/login.png"
import { Image } from "../atoms/Image";

interface IState {
    Data: {
        email: "",
        password: ""
    }
}
const Login = ()=>{
    const navigate = useNavigate()
    const [formdata, setFormData] = useState<IState["Data"]>({
        email: "",
        password: ""
    })
    const handleSubmit = ()=>{

    }
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }
   
    return (
        <motion.div
        initial={{opacity : 0}}
        animate={{opacity : "100%"}}
        transition={{duration: 1.2}}
        exit={{opacity : 0}}
        className="w-full h-full">
            <div className="max-w-6xl mx-auto flex justify-between">
                <div className="h-[100vh]  w-[40%] flex flex-col justify-center gap-6">
                   
                   <h1 className="text-center capitalize text-4xl font-serif font-semibold text-[#1C274C]">LOGIN</h1>
                   <p className='text-center text-xl italic  font-semibold text-[#1C274C]'>Welcome to BahirDar  RedCross Pharmacy System</p>
                   <form
                   className="flex flex-col gap-4" 
                   onSubmit={handleSubmit}>
                        <input 
                        placeholder="Email" 
                        type="email" 
                        value={formdata.email} 
                        name="email"
                        className="w-[90%] rounded-lg border-2 border-[#54ACDB] px-2 md:py-1 py-2 outline-none"
                        onChange={handleChange}/>
                        <input
                        placeholder="Password" 
                        type="password" 
                        value={formdata.password} 
                        name="password" 
                        className="w-[90%] rounded-lg border-2 border-[#54ACDB] px-2 md:py-1 py-2 outline-none"
                        onChange={handleChange}/>
                        <button type='submit' className='flex  w-[90%] bg-[#0C85C6] text-white text-xl cursor-pointer items-center justify-center md:py-2 py-3 rounded-lg mb-6 font-serif hover:scale-105 duration-500 hover:bg-[#54ACDB]'>
                            LOGIN
                        </button>
                   </form>
                   <p className='md:text-md text-xl font-serif text-[#1C274C] italic'>Don't have an account? <button  onClick={()=> navigate('/signup')} className='capitalize text-[#0C85C6] text-xl font-serif cursor-pointer hover:scale-105 hover:text-[#54ACDB] duration-200 p-0 hover:underline'>Sign up</button></p>
                </div>
                <Image 
                className="w-[70%] pb-[20px]"
                alt="Login"
                image={LoginImage}
                objectCover="object-fit"
                />
            </div>
        </motion.div>
    )
}
export default Login;