import { useNavigate } from "react-router-dom";
import { CardOne } from "../../molecules/CardOne";
// @ts-ignore
import profile from "../../../assets/home.jpg";
const HeroSection = ()=>{
    const navigate = useNavigate()
    return (
        <div id="HOME" className="w-full mt-[100px]">
            <CardOne
            cardClass="h-[500px]"
            cardSrc={profile}
            textWrapperClass="h-full flex items-center px-8"
            >
                <div className="flex flex-col">
                <h1 className='capitalize md:text-4xl text-2xl font-serif font-semibold leading-8 mb-8 text-[#1C274C]'>
          Life's better when <br/> you're healthy !!
        </h1>
        <p className='text-xl  font-light leading-8 mb-8 text-[#1C274C]'>We put your health first , making it easy <br/> to get medication when you want.  Here you find <br/>25% discount drugs and medecines.</p>
        <button onClick={()=>navigate('/search')} className='md:place-self-start font-sans px-6 py-2 bg-[#008CC1] text-white text-md font-semibold rounded hover:shadow-lg hover:scale-110 duration-500'>Get Now</button>
                </div>
            </CardOne>
        </div>
    )
}
export default HeroSection;