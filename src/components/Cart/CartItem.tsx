import Duplicate from '../../assets/svg/duplicate.svg'
import Edit from '../../assets/svg/edit.svg'

const CartItem = ({id, name, price, count, duplicateItem, updateItemCount}: any) => {

    return (
        <div className="flex justify-between items-center p-4">
            <span>{name}: {price}€  {(count > 1) ? `x${count}` : ''}</span>
            <div className="flex gap-1">
                <button className="flex justify-center w-12 h-12 bg-slate-600 border border-solid border-black">
                    <img className="w-1/2 invert" src={Edit} alt="Edit Icon" />
                </button>
                <button className="flex justify-center w-12 h-12 bg-slate-600 border border-solid border-black" 
                    onClick={() => duplicateItem(id)}>
                    <img className="w-1/2 invert" src={Duplicate} alt="Duplicate Icon" />
                </button>
                <button className="w-12 h-12 bg-slate-600 border border-solid border-black" onClick={() => updateItemCount(id, 1)} >+</button>
                <button className="w-12 h-12 bg-slate-600 border border-solid border-black" onClick={() => updateItemCount(id, -1)} >-</button>
            </div>
        </div>
    )

}


export default CartItem