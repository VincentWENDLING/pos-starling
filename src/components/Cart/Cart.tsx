import CartItem from "./CartItem"

import TrashCan from '../../assets/trash.svg' 

const Cart = (props: any) => {

    let raw_cart = props.cart
    let setCart = props.setCart

    let cart:Array<any> = []

    const includesItem = (cart: Array<any>, name: string):boolean => {
        for (let i = 0; i<cart.length; i++) {
            if (cart[i].name === name) return true
        }
        return false
    }

    const getItemIndex = (cart: Array<any>, name: string): number => {
        for (let i = 0; i<cart.length; i++) {
            if (cart[i].name === name) return i 
        }
        return -1
    }

    raw_cart.forEach((item:any)=>{
        if (includesItem(cart, item.name)) {
            let i = getItemIndex(cart, item.name)
            if (i === -1) {
                console.error(`Item "${item.name}" is not in the cart`)
            }
            else {
                cart[i].count++
            }
        }
        else {
            cart.push({
                name: item.name,
                price: item.price,
                count: 1
            })
        }
    })

    let cartItems = cart.map((item: any)=>
        <li className="text-white" key={Math.random()} /*ugly Math.random*/ >
            <CartItem name={item.name} price={item.price} count={item.count} />
        </li>    
    )

    return (
        <section className="w-4/12 bg-slate-900">
            <div className="flex justify-center items-center gap-1 h-24">
                <p className="w-1/2 h-full flex justify-center items-center bg-slate-700">Commande n°42</p>
                <button className="flex justify-center items-center w-1/2 h-full bg-red-800 hover:bg-red-700" onClick={()=>setCart([])}>
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