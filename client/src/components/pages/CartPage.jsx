import { useParams } from "react-router-dom";
import { useDispatch} from "react-redux";
import NavBar from "../organs/HomeSection/Navbar/Navbar";
import { useEffect } from "react";
import { CartInLoading } from "../../redux/CartItems/CartItems";
import CartDetail from "../organs/CartPage/CartPage";
const CartPage = ()=>{
   
    const dispatch = useDispatch()
    const {id} = useParams()
    const urlParams = new URLSearchParams(window.location.search)
    const qty = Number(urlParams.get('qty') || 1)

    useEffect(()=>{
        dispatch(CartInLoading({id, qty}))
    }, [id, qty, dispatch])

  
    return (
        <>
        <NavBar/>
        <CartDetail/>
        </>
    )
}
export default CartPage;