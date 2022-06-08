import CartItem from "./CartItem"

import { _CartItem } from "../../assets/types"

import TrashCan from '../../assets/svg/trash.svg'

const Cart = (props: any) => {

    let cart = props.cart
    let setCart = props.setCart

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

    const getSumCart = ():number => {
        let sum:number = 0;

        cart.forEach((item:_CartItem)=>{
            sum+=(item.price * item.count)
        })
        return sum
    }

    return (
        <section className="h-full w-4/12 bg-slate-900 p-2">
            <div className="flex justify-center items-center gap-1 h-1/6">
                <p className="w-1/2 h-full flex justify-center items-center bg-slate-700">Commande n°42</p>
                <button className="flex justify-center items-center w-1/2 h-full bg-red-800 hover:bg-red-700" onClick={() => setCart([])}>
                    <img className="h-10" src={TrashCan} alt="Trash can" />
                </button>
            </div>
            <ul className="h-4/6">
                {cartItems}
            </ul>
            <div className="h-1/6">
                <div className="h-1/2 flex justify-center items-center text-white text-2xl bg-purple-900">
                    Total: {getSumCart()}€
                </div>
                <button className="text-white text-2xl bg-green-900 h-1/2 w-full" >Checkout</button>
            </div>
        </section>
    )
}


export default Cart