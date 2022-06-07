import CartItem from "./CartItem"

import { _CartItem } from "../../assets/types"

import TrashCan from '../../assets/trash.svg'

const Cart = (props: any) => {

    let cart = props.cart
    let setCart = props.setCart

    // value is either +1 or -1
    const updateItemCount = (name: string, value: number) => {
        let cartItems:Array<_CartItem> = [...cart]
        cartItems.forEach((item: _CartItem) => {
            if (item.name === name) {
                if (value === -1) {
                    item.count = (item.count === 1) ? 1 : item.count-1
                }
                else item.count++
            }
        })
        setCart(cartItems)
    }

    let cartItems = cart.map((item: any) =>
        <li className="text-white" key={Math.random()} /*ugly Math.random, need a proper way to define the key*/ >
            <CartItem name={item.name} price={item.price} count={item.count} updateItemCount={updateItemCount} />
        </li>
    )

    return (
        <section className="w-4/12 bg-slate-900">
            <div className="flex justify-center items-center gap-1 h-24">
                <p className="w-1/2 h-full flex justify-center items-center bg-slate-700">Commande n°42</p>
                <button className="flex justify-center items-center w-1/2 h-full bg-red-800 hover:bg-red-700" onClick={() => setCart([])}>
                    <img className="h-10" src={TrashCan} alt="Trash can" />
                </button>
            </div>
            <ul>
                {cartItems}
            </ul>
        </section>
    )
}


export default Cart