import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardOne } from "../molecules/CardOne";
import { motion } from "framer-motion";
// @ts-ignore
import SignupImage from "../../assets/signup.jpg"

interface IState {
    Data: {
        UserName: "",
        email: "",
        password: "",
        confrimpassword: ""
    }
}
const Signup = ()=>{
    const [formdata, setFormData] = useState<IState["Data"]>({
        UserName: "",
        email: "",
        password: "",
        confrimpassword: ""
    })
    const navigate = useNavigate()
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = ()=>{

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
                        value={formdata.UserName}
                        className=" rounded-lg border-2 border-[#54ACDB] px-2 md:py-1 py-2 outline-none"
                        onChange={handleChange} 
                        />
                         <input 
                        placeholder="Email" 
                        type="email" 
                        value={formdata.email} 
                        name="email"
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
                        value={formdata.confrimpassword} 
                        name="confrimpassword" 
                        className="rounded-lg border-2 border-[#54ACDB] px-2 md:py-1 py-2 outline-none"
                        onChange={handleChange}/>
                         <button type='submit' className='flex bg-[#0C85C6] text-white text-xl cursor-pointer items-center justify-center md:py-2 py-3 rounded-lg mb-6 font-serif hover:scale-105 duration-500 hover:bg-[#54ACDB]'>
                          SIGN UP
                        </button>
                   </form>
                   <p className='md:text-md text-xl font-serif text-[#1C274C] italic'>Have an account? <button  onClick={()=> navigate('/login')} className='capitalize text-[#0C85C6] text-xl font-serif cursor-pointer hover:scale-105 hover:text-[#54ACDB] duration-200 p-0 hover:underline'>LogIn</button></p>
           </div>
        </CardOne>
        </motion.div>
       
    )
}
export default Signup;