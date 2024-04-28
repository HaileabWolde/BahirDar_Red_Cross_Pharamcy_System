import { useState, useEffect} from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";
import { CardOne } from "../molecules/CardOne";
import { motion } from "framer-motion";
import { StartInLogIn } from "../../redux/User/User";
// @ts-ignore
import SignupImage from "../../assets/signup.jpg";


const Signup = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [Error, setError] = useState(false)
    const {isLoading, error} =  useSelector((state)=> state.user)

    const formik = useFormik({
        initialValues: {
            UserName: "",
            email: "",
            password: "",
            confirmpassword: ""  
        },
        validationSchema: Yup.object({
            UserName: Yup.string().max(15, "Must be 20 characters or less").required("Please Provide a UserName"),
            email: Yup.string().email("Invalid Email Address").required("Please Provide an Email Addresss"),
            password: Yup.string()
            .required('No password provided.') 
            .min(4, 'Password is too short - should be 4 chars minimum.'),
            confirmpassword: Yup.string().min(4, 'Password is too short - should be 4 chars minimum.').required('Required')
        }),
        onSubmit: (values)=>{
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
        className=""
        >
             <CardOne
        isCover={true}
        cardClass="w-full h-screen flex flex-col justify-center"
        cardSrc={SignupImage}
        >
           <div className="max-w-lg mx-auto flex flex-col items-center bg-white shadow-md border rounded-lg pt-[30px] pb-[30px]">
                    <h1 className="text-center capitalize text-4xl font-serif font-semibold text-[#1C274C]">SIGNUP</h1>
                   <p className='text-center text-xl italic  font-semibold text-[#1C274C]'>Welcome to BahirDar  RedCross Pharmacy System</p>
                   <form
                   className="flex flex-col gap-4 w-[60%] mt-2" 
                   onSubmit={formik.handleSubmit}>
                        <input
                        placeholder="User Name"
                        type="text"
                        name="UserName"
                        value={formik.values.UserName}
                        className=" rounded-lg border-2 border-[#54ACDB] px-2 md:py-1 py-2 outline-none"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange} 
                        />
                        {formik.touched.UserName && formik.errors.UserName ? <p className="text-center text-xs text-[#EA0063] italic font-semibold">{formik.errors.UserName}</p> : null}
                         <input 
                        placeholder="Email" 
                        type="email" 
                        name="email"
                        value={formik.values.email} 
                        onBlur={formik.handleBlur}
                        className="rounded-lg border-2 border-[#54ACDB] px-2 md:py-1 py-2 outline-none"
                        onChange={formik.handleChange}/>
                           {formik.touched.email && formik.errors.email ? <p className="text-center text-xs text-[#EA0063] italic font-semibold">{formik.errors.email}</p> : null}
                        <input
                        placeholder="Password" 
                        type="password" 
                        value={formik.values.password}
                        onBlur={formik.handleBlur} 
                        name="password" 
                        className=" rounded-lg border-2 border-[#54ACDB] px-2 md:py-1 py-2 outline-none"
                        onChange={formik.handleChange}/>
                         {formik.touched.password && formik.errors.password ? <p className="text-center text-xs text-[#EA0063] italic font-semibold">{formik.errors.password}</p> : null}
                         <input
                        placeholder="Confirm Password" 
                        type="password" 
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmpassword} 
                        name="confirmpassword" 
                        className="rounded-lg border-2 border-[#54ACDB] px-2 md:py-1 py-2 outline-none"
                        onChange={formik.handleChange}/>
                          {formik.touched.confirmpassword && formik.errors.confirmpassword ? <p className="text-center text-xs text-[#EA0063] italic font-semibold">{formik.errors.confirmpassword}</p> : null}
                         <button type='submit' className='flex bg-[#0C85C6] text-white text-xl cursor-pointer items-center justify-center md:py-2 py-3 rounded-lg mb-6 font-serif hover:scale-105 duration-500 hover:bg-[#54ACDB]'>
                          {
                            isLoading ? 
                           'Loading'
                           : 'SIGN UP'
                          }
                        </button>
                        {
                            Error && 
                            <p className="text-center text-lg text-[#EA0063]">{error}</p>
                        }
                   </form>
                   <p className='md:text-md text-xl font-serif text-[#1C274C] italic'>Have an account? <button  onClick={()=> navigate('/login')} className='capitalize text-[#0C85C6] text-xl font-serif cursor-pointer hover:scale-105 hover:text-[#54ACDB] duration-200 p-0 hover:underline'>LogIn</button></p>
           </div>
        </CardOne>
        </motion.div>
       
    )
}
export default Signup;