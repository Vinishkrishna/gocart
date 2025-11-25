'use client'
import { addToCart, removeFromCart, uploadCart } from "@/lib/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "@clerk/nextjs";

const Counter = ({ productId }) => {

    const { cartItems } = useSelector(state => state.cart);

    const dispatch = useDispatch();
    const { getToken } = useAuth();

    const addToCartHandler = () => {
        dispatch(addToCart({ productId }))
        dispatch(uploadCart({ getToken }))
    }

    const removeFromCartHandler = () => {
        dispatch(removeFromCart({ productId }))
        dispatch(uploadCart({ getToken }))
    }

    return (
        <div className="inline-flex items-center gap-1 sm:gap-3 px-3 py-1 rounded border border-slate-200 max-sm:text-sm text-slate-600">
            <button onClick={removeFromCartHandler} className="p-1 select-none">-</button>
            <p className="p-1">{cartItems[productId]}</p>
            <button onClick={addToCartHandler} className="p-1 select-none">+</button>
        </div>
    )
}

export default Counter