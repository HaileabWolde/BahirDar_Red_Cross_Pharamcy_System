import {ErrorHandler} from "../middlewares/ErrorHandler.js"
import UserSchema from "../model/UserModel.js"

export const signup = async (req,res, next)=>{
    const { UserName: name, email, password, userType, confirmpassword} = req.body

    try{
      if(confirmpassword){
        if(password !== confirmpassword)
        return next(ErrorHandler(500, 'Password is mismatched'))
      }
        const User = await UserSchema.findOne({email})
        if(User){
            return next(ErrorHandler(500, 'User Already Exists'))
        }
        const result = await UserSchema.create({
            name,
            email,
            password,
            userType
        })
        const token = result.createJWT()
        const {password: pass, ...rest} = result._doc
        res.status(200).json({rest, token})
    }
    catch(error){
        return next(error)
    }
}

export const signin = async (req, res, next)=>{
    const {email, password} = req.body
  
    try{
        const user = await UserSchema.findOne({email})
        if(!user){
            return next(ErrorHandler(500, `User Doesn't Exist`))
        }
        const checkpassword = await user.isPasswordmatched(password)
        if(!checkpassword){
            return next(ErrorHandler(500, 'Wrong Credentials'))
        }
        const token = user.createJWT()
        const {password: pass , ...rest} = user._doc
        return res.status(200).json({rest, token});
  
    }
    catch(error){
        return next(error)
    }
  }