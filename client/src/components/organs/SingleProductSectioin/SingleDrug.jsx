import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import { StartInLoading } from "../../../redux/Drug/drug";
const Drugdetail = ()=>{
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()
    const {singleDrug} = useSelector((state)=> state.drug)
    const {id} = useParams()

    useEffect(()=>{
        dispatch(StartInLoading(id))
    }, [id, dispatch])
  
    return (
        <div className="mt-[100px] max-w-6xl mx-auto  flex flex-row justify-between pt-[100px] pb-[50px] gap-4 items-center">
            <img src={singleDrug?.image} alt={singleDrug?.name} className="w-[250px] h-[250px] rounded-lg shadow-md"/>
            <div className="flex flex-col gap-4 px-12">
                <h1 className="text-center capitalize text-5xl font-serif font-semibold text-[#1C274C]">{singleDrug?.name}</h1>
                <p className='text-md font-light text-[#1C274C]'>{singleDrug?.description}</p>
            </div>
            <div className="border shadow-lg rounded-lg bg-white px-12 py-12 flex flex-col gap-2">
                <p className="text-center font-semibold">{singleDrug.price} Birr</p>
                <select 
                value={qty}
                className="bg-gray-100 text-black w-full outline-none cursor-pointer text-center font-serif py-2"
                onChange={(e)=>setQty(e.target.value)}
                >
                   {[...Array(singleDrug.countInStock).keys()].map((x)=>(
                                           <option key={x+1} value={x+1}>{x+1}</option>
                                  ))} 
                </select>
                <button  
                className='w-[20vw]  bg-[#0C85C6] text-white text-sm cursor-pointer  md:py-2   rounded-lg  font-serif hover:scale-105 duration-500 hover:bg-[#54ACDB]'>
                    ADD TO CART
                </button>
            </div>
        </div>
    )
}
export default Drugdetail