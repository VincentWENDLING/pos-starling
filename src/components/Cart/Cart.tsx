import { useState } from "react"

import useModal from "../../assets/hooks"

import CartItem from "./CartItem"
import Checkout from "../Checkout/Checkout"

import { _CartItem } from "../../assets/types"
import { getSumCart } from "../../assets/utils"

import TrashCan from '../../assets/svg/trash.svg'

const Cart = (props: any) => {

    let cart = props.cart
    let setCart = props.setCart

    const [orderPlace, setOrderPlace]:any = useState("Sur place")
    const [isShown, toggle]:any = useModal()

    // value is either +1 or -1
    const updateItemCount = (id: number, value: number) => {
        let cartItems:Array<_CartItem> = [...cart]

        for (let i = cartItems.length-1; i>=0; i--) {
            let item = cartItems[i]
            if (item.id === id) {
                item.count += value
            }

            if (item.count === 0) {
                cartItems.splice(i, 1)
            }
        }

        setCart(cartItems)
    }

    const duplicateItem = (id: number) => {
        let cartItems:Array<_CartItem> = [...cart]

        for (let i = 0; i<cartItems.length; i++) {
            let item: _CartItem = cartItems[i]
            if (item.id === id) {
                cartItems.splice(i, 0, {
                    id: Math.random(), // ugly too, needs to change
                    name: item.name,
                    price: item.price,
                    count: 1
                })
                break // infinite loop without break
            }
        }
        setCart(cartItems)
    }

    let cartItems = cart.map((item: any) =>
        <li className="text-white" key={Math.random()} /*ugly Math.random, need a proper way to define the key*/ >
            <CartItem id={item.id} name={item.name} price={item.price} count={item.count} updateItemCount={updateItemCount} duplicateItem={duplicateItem} />
        </li>
    )

    return (
        <section className="h-full w-4/12 bg-slate-900 p-2">
            <div className="flex flex-col justify-center items-center gap-1 h-1/6">
                <div className="flex w-full h-1/2 gap-1">
                    <p className="w-1/2 h-full flex justify-center items-center bg-slate-400">N°42</p>
                    <button className="flex justify-center items-center w-1/2 h-full bg-red-500 hover:bg-red-400" onClick={() => setCart([])}>
                        <img className="h-10" src={TrashCan} alt="Trash can" />
                    </button>
                </div>
                <div className="flex w-full h-1/2 justify-between gap-1">
                    <button className={`w-1/3 ${(orderPlace==="Sur place") ? 'bg-slate-500' : 'bg-slate-300'}`} onClick={()=>setOrderPlace("Sur place")}>
                        Sur place
                    </button>
                    <button className={`w-1/3 ${(orderPlace==="Terrasse") ? 'bg-slate-500' : 'bg-slate-300'}`} onClick={()=>setOrderPlace("Terrasse")}>
                        Terrasse
                    </button>
                    <button className={`w-1/3 ${(orderPlace==="À emporté") ? 'bg-slate-500' : 'bg-slate-300'}`} onClick={()=>setOrderPlace("À emporté")}>
                        À emporté
                    </button>
                </div>
            </div>
            <ul className="h-4/6 overflow-scroll">
                {cartItems}
            </ul>
            <div className="flex flex-col gap-2 h-1/6">
                <div className="h-1/2 flex justify-center items-center text-2xl gap-2">
                    <p className="flex items-center justify-center w-3/4 h-full text-on-tertiary-container bg-tertiary-container">Total: {getSumCart(cart)}€</p>
                    <button className="w-1/4 h-full text-sm text-on-tertiary-container bg-tertiary-container">Envoyer sans paiement</button>
                </div>
                <button className="text-on-secondary text-2xl bg-secondary h-1/2 w-full" onClick={cart.length > 0 ? toggle : null}>Checkout</button>
            </div>
            <Checkout isShown={isShown} hide={toggle} cart={cart} setCart={setCart} />
        </section>
    )
}


export default Cart