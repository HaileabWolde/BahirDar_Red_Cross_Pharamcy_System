import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { StartInLoading } from "../../../redux/Drugs/drugs";

interface DrugsStateONE {
    drugs: {
        AllDrugs: null | [],
        Error: null | boolean | {},
        Loading: boolean | string,
    }
}

const Drugs = ()=>{
    const dispatch = useDispatch()
    const { AllDrugs} = useSelector((state: DrugsStateONE) => state.drugs)

    useEffect(() =>{
        dispatch(StartInLoading())
    }, [dispatch]);

    console.log( AllDrugs)
   return (
    <div>
        <h1>Drugs</h1>
    </div>
   )
}
export default Drugs;