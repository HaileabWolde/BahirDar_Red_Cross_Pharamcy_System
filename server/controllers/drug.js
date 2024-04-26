import DrugSchema from "../model/drugModel.js";

export const getDrugs = async(req, res, next)=>{
    try{
        const AllDrugs = await DrugSchema.find({})
        res.status(200).json(AllDrugs);
    }
    catch(error){
        next(error)
    }
}