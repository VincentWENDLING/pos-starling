import { useState } from "react"

const CartItem = (props: any) => {

    let [count, setCount] = useState(props.count)

    const updateCount = (add: boolean): void => {
        if (add) {
            setCount(count++)
        }
        else {
            setCount(count === 1 ? 1 : count--)
        }
    }

    return (
        <div className="flex justify-between items-center p-4">
            <span>{props.name}: {props.price}€  {(count > 1) ? `x${count}` : ''}</span>
            <div className="flex gap-1">
                <button className="w-12 h-12 bg-slate-600 border border-solid border-black" onClick={()=>updateCount(true)} >+</button>
                <button className="w-12 h-12 bg-slate-600 border border-solid border-black" onClick={()=>updateCount(false)} >-</button>
            </div>
        </div>
    )

}


export default CartItem