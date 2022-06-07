const CartItem = (props: any) => {

    return (
        <div className="flex justify-between items-center p-4">
            <span>{props.name}: {props.price}€  {(props.count > 1) ? `x${props.count}` : ''}</span>
            <div className="flex gap-1">
                <button className="w-12 h-12 bg-slate-600 border border-solid border-black" onClick={() => props.updateItemCount(props.name, 1)} >+</button>
                <button className="w-12 h-12 bg-slate-600 border border-solid border-black" onClick={() => props.updateItemCount(props.name, -1)} >-</button>
            </div>
        </div>
    )

}


export default CartItem