import { useNavigate } from "react-router-dom"
import { data } from "../../../particles/data"
const Services = ()=>{
    const navigate = useNavigate()
    return (
        <div className="mt-[30px] flex flex-col items-center pb-[100px]">
            <h1 className='items-center capitalize text-5xl font-serif font-semibold mb-5 text-center text-[#1C274C]'>Our Services</h1>
            <div className='w-24 border-2 border-[#008CC1] mb-12 rounded-lg shadow-lg'></div>
            <ul className="md:flex mt-[30px] max-w-5xl  mx-auto gap-6 cursor-pointer">
                {
                    data.map((singleItem)=> {
                        return (
                            <div key={singleItem.firstText} className='md:p-8 p-4 flex flex-col items-center gap-6 md:my-0 my-6 md:mx-0 mx-4 text-center border-2 border-[#008CC1] hover:shadow-2xl duration-500'>
              <img src={singleItem.renderImage} alt='service_icon' className='h-20' />
              <h1 className='text-2xl capitalize font-serif font-bold text-[#1C274C]'>{singleItem.firstText}</h1>
              <p className='text-md  font-light text-[#1C274C]'>{singleItem.secondText}</p>
              <button onClick={()=>navigate('/login')} className='text-[#1C274C] text-xl capitalize font-serif font-semibold px-3 py-2 border-2 border-[#008CC1] hover:bg-[#008CC1] hover:text-white duration-500'>{singleItem.btn_word}</button>
            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default Services