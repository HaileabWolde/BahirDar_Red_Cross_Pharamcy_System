import DrugSchema from "../model/drugModel.js";
import { ErrorHandler } from "../middlewares/ErrorHandler.js";

export const getDrugs = async(req, res, next)=>{
    try{
        const AllDrugs = await DrugSchema.find({})
        res.status(200).json(AllDrugs);
    }
    catch(error){
        next(error)
    }
}

export const getSingleDrug = async(req, res, next)=>{
    const {id} = req.params
    try{
        const SingleDrug = await DrugSchema.findById(id)
        if(!SingleDrug) {
            return next(ErrorHandler(500, 'No Drug with this Id'))
        }
        res.status(200).json(SingleDrug)
    }
    catch(error){
        next(error)
    }
}