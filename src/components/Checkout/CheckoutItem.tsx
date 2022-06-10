import { _CartItem } from "../../assets/types"


const CheckoutItem = ({cartItem}: any) => {

    return (
        <span className="text-white text-2xl">{cartItem.name}: {cartItem.price}€  {(cartItem.count > 1) ? `x${cartItem.count}` : ''}</span>
    )

}

export default CheckoutItem