import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import * as Yup from 'yup';
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// @ts-ignore
import LoginImage from "../../assets/login.png"
import { Image } from "../atoms/Image";
import { StartInLogIn } from "../../redux/User/User";

const Login = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [Error, setError] = useState(false)
    const {isLoading, error} =  useSelector((state)=> state.user)

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid Email Address").required("Please Provide an Email Addresss"),
            password: Yup.string()
            .required('No password provided.') 
            .min(5, 'Password is too short - should be 5 chars minimum.'),
           
        }),
        onSubmit: (values) =>{
            dispatch(StartInLogIn({
                formdata: values,
                navigate
            }))
        }
    })
   
    useEffect(()=>{
        if(error){
            setError(true)
        }
        
    }, [error])

    useEffect(()=>{
        if(Error){
            const timeoutId = setTimeout(() => {
                setError(false);
              }, 4000);
          
              return () => {
                clearTimeout(timeoutId);
              };   
        }
    }, [Error])
    
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
                   onSubmit={formik.handleSubmit}>
                        <input 
                        placeholder="Email" 
                        type="email" 
                        onBlur={formik.handleBlur}
                        value={formik.values.email} 
                        name="email"
                        className="w-[90%] rounded-lg border-2 border-[#54ACDB] px-2 md:py-1 py-2 outline-none"
                        onChange={formik.handleChange}/>
                        {formik.touched.email && formik.errors.email ? <p className="text-center text-xs text-[#EA0063] italic font-semibold">{formik.errors.email}</p> : null}
                        <input
                        placeholder="Password" 
                        type="password" 
                        onBlur={formik.handleBlur}
                        value={formik.values.password} 
                        name="password" 
                        className="w-[90%] rounded-lg border-2 border-[#54ACDB] px-2 md:py-1 py-2 outline-none"
                        onChange={formik.handleChange}/>
                         {formik.touched.password && formik.errors.password ? <p className="text-center text-xs text-[#EA0063] italic font-semibold">{formik.errors.password}</p> : null}
                        <button type='submit' className='flex  w-[90%] bg-[#0C85C6] text-white text-xl cursor-pointer items-center justify-center md:py-2 py-3 rounded-lg mb-6 font-serif hover:scale-105 duration-500 hover:bg-[#54ACDB]'>
                        {
                            isLoading ? 
                           'Loading'
                           : 'LOG IN'
                          }
                        </button>
                        {
                            Error && 
                            <p className="text-center text-lg text-[#EA0063]">{error}</p>
                        }
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