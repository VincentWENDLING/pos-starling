
const Cart = (props: any) => {

    let cart = props.cart
    let setCart = props.setCart

    let cartItems = cart.map((item: any)=>
        <li className="text-white" key={Math.random()} /*ugly Math.random*/ >{item.name} {item.price}€</li>    
    )

    return (
        <section className="w-4/12 bg-slate-900">
            <ul>
                {cartItems}
            </ul>
        </section>
    )
}


export default Cart