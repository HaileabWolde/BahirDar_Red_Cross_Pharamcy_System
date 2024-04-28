import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { Link } from "react-router-dom";
import { Card } from "../../../molecules/Card";
import { Text } from "../../../atoms/Text";
import { StartInLoading } from "../../../../redux/Drugs/drugs";

interface DrugsStateONE {
    drugs: {
        AllDrugs: null | any,
        Error: null | boolean | {},
        Loading: boolean | string,
    }
}

interface Drug {
    _id: string,
    name: string,
    image: string,
    description: string,
    price: number
}

const Drugs = ()=>{
    const dispatch = useDispatch()
    const { AllDrugs,  Loading} = useSelector((state: DrugsStateONE) => state.drugs)

    useEffect(() =>{
        dispatch(StartInLoading())
    }, [dispatch]);

    const [expandedCards, setExpandedCards] = useState<Array<number | boolean>>(() => {
        const length = AllDrugs?.length;
        const initialArray: Array<number | boolean> = [];
        for (let i = 0; i < length; i++) {
          initialArray.push(false);
        }
        return initialArray;
      });

  const handleRead = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>, index:number) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedCards((prev) => {
      const newExpandedCards = [...prev];
      newExpandedCards[index] = !newExpandedCards[index];
      return newExpandedCards;
    });
  };

  const truncateText = (text:string , characterLimit:number) => {
    if (text.length <= characterLimit) {
        return text;
      }
  
      const truncatedText = text.substr(0, characterLimit);
      return truncatedText;
  };
   return (
    <div className="flex flex-col items-center pb-[100px] gap-6">

        <h1 className="text-center capitalize text-5xl font-serif font-semibold text-[#1C274C]">Drugs</h1>
        <div className='w-24 border-2 border-[#008CC1]  rounded-lg shadow-lg'></div>
        <p className='text-md  font-semibold text-[#1C274C]'>Explore our medicinal wonders for a Healthier You !!!</p>
        {
            Loading && <h1>Loading</h1>
        }
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3  max-w-6xl mx-auto gap-4">
            {
                AllDrugs?.map((drug: Drug, index:number)=> {
                    return (
                       
                            <Card
                            cardClass="bg-white flex flex-col items-center  cursor-pointer hover:shadow-xl rounded-xl border border-[#1C274C] p-8"
                            imageWrapperClass="w-28 h-28"
                            imageAlt={drug.name}
                            imageSrc={drug.image}
                            textWrapperClass="mt-2 w-full flex flex-col items-center text-center"
                            >
                                <Text as="h4" className="font-serif uppercase rounded">
                                     {drug.name}
                                </Text>
                                <p className="text-md   font-sans italic  font-light">{ expandedCards[index] ? drug.description : truncateText(drug.description, 200)} <span>  <button className="font-semibold hover:underline" onClick={(e)=> handleRead(e, index)}>{expandedCards[index] ? 'Less' : '... Read More'}</button> </span></p>
                                <Text className="w-full flex justify-between">
                                    <p className="font-semilight font-serif">{drug.price} <span className="font-bold font-mono">Birr</span></p>
                                    
                                    <Link to={`/drugs/${drug._id}`}>
                                        <h1 className="text-lg text-[#EA0063] font-serif hover:scale-105 hover:text-red-700">ADD</h1>
                                    </Link>
                                </Text>

                            </Card> 
                        
                    )
                })
            }
        </div>
    </div>
   )
}
export default Drugs;