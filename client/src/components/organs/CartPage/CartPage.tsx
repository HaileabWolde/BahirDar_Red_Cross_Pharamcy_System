import { useSelector } from "react-redux"
import { Card } from "../../molecules/Card"

interface userType {
    user:{
      userInfo: {
        name: string
      } | null
    }
    cart: {
      cartItems: {
        name: string,
        image: string
      }[]
    }
  }
const CartDetail = ()=>{

    const {cartItems} = useSelector((state: userType)=> state.cart)
    return (
        <div className="mt-[100px] pt-[30px]">
            <h1 className="text-center capitalize text-4xl font-serif font-semibold text-[#1C274C]">Shopping Cart</h1>
            <div className="max-w-6xl mx-auto md:flex gap-4 justify-between mt-[50px]">
                <div className="flex flex-col gap-3 flex-1">
                    {
                        cartItems?.map((singleItem)=> {
                            return (
                                <Card
                                cardClass="w-full bg-white flex  items-center rounded-xl border p-4 shadow-md"
                                imageWrapperClass="w-28 h-28"
                                imageAlt={singleItem.name}
                                imageSrc={singleItem.image}
                                textWrapperClass="flex gap-4"
                                >
                                    <h1 className="text-xl font-serif font-semibold text-[#1C274C] ">{singleItem.name}</h1>
                                </Card>
                            )
                        })
                    }
                </div>

                <div className="border shadow-md rounded-lg ">
                    <h1>Respectufully Fuck u</h1>
                </div>
            </div>
        </div>
    )
}
export default CartDetail