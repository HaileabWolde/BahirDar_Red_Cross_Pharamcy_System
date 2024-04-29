import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../organs/HomeSection/Navbar/Navbar";
import { useEffect } from "react";
import { CartInLoading } from "../../redux/CartItems/CartItems";
const CartPage = ()=>{
    const {cartItems} = useSelector((state)=> state.cart)
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
        </>
    )
}
export default CartPage;