
const Item = (props: any) => {
    return (
        <div className="w-full h-full flex justify-center text-center items-center bg-primary-container text-on-primary-container shadow-md shadow-black rounded-xl text-2xl" 
             onClick={()=>props.addItem(props.name, props.price, 1)}>
            {props.name}: {props.price}€
        </div>
    )
}

export default Item