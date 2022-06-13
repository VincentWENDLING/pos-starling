
const Item = ({name, price, addItem}: any) => {
    return (
        <div className="w-full h-full flex justify-center text-center items-center bg-primary-container text-on-primary-container shadow-md shadow-black rounded-xl text-2xl" 
             onClick={()=>addItem(name, price, 1)}>
            {name}: {price}€
        </div>
    )
}

export default Item