import ReactDOM from "react-dom";
import { useState } from "react";

import Backspace from '../../assets/svg/backspace.svg'

import CheckoutItem from "./CheckoutItem";

import Back from '../../assets/svg/back.svg'

import { _CartItem } from "../../assets/types";

import { getSumCart } from "../../assets/utils";


const Checkout = ({isShown, hide, cart, setCart}: any) => {
    
    const sumCart: number = getSumCart(cart)

    const [amountPaid, setAmountPaid]: any = useState(0)
    const [amountDue, setAmountDue]: any = useState(0)
    const amountRemaining = Math.max(0, sumCart-amountPaid);


    const [enteredAmount, setEnteredAmount]: any = useState("")


    const changeEnteredAmount = (str: string):void => {
        if (enteredAmount === '' && (str === '.' || str === '.00')) return;
        if (enteredAmount === '0' && (str !=='.' && str !== '.00')) return;
        if (enteredAmount.includes('.')) {

            if (enteredAmount.slice(-1)==='.') { // if enterAmount ends with '.', we allow '.00'
                let tmp:string = enteredAmount.slice(0, -1) // removing last char
                setEnteredAmount(tmp+str)
                return 
            }
            else if (str === '.' || str === '.00') return;

            let decimals: Array<string> = enteredAmount.split('.')
            if (decimals[1].length >= 2) return

        }

        setEnteredAmount(enteredAmount+str)
    }

    const cartItems = cart.map((item: _CartItem)=>
        <li key={Math.random()}><CheckoutItem cartItem={item} /></li>    
    )   
    
    const pay = ( paymentMethod: string ) => {


        const getRoundedNumber = (number: number): number => { return Number(number.toFixed(2)) }

        let enteredAmount_:number = parseFloat(enteredAmount)

        if (isNaN(enteredAmount_)){
            return;
        } 


        let _amountPaid: number = amountPaid+enteredAmount_
        let _amountDue: number = Math.max(0, _amountPaid-sumCart)

        setAmountPaid(getRoundedNumber(_amountPaid))
        setAmountDue(getRoundedNumber(_amountDue))

        setEnteredAmount("")
    }

    const leave = () => {
        if (amountPaid >= sumCart) {
            setCart([])
            setAmountDue(0)
            setAmountPaid(0)
            setEnteredAmount("")
        }
        hide()
    }

    return isShown ?
        ReactDOM.createPortal(
            <>
                <div className="w-screen h-screen fixed top-0 left-0">
                    <div className="flex flex-col gap-8 w-1/2 h-[95%] mt-[2.5%] m-auto bg-slate-700 border-black border-solid border-2 rounded-2xl">
                        <div className="pt-4 flex items-center">
                            <img className="pl-4 invert w-1/12" src={Back} alt="back icon" onClick={leave}/>
                            <h1 className="text-4xl underline text-white w-11/12 text-center">Paiement</h1>
                        </div>
                        <div className="flex flex-col gap-4 mr-auto ml-auto w-5/6 h-full">
                            <ul className="w-full flex flex-col gap-4 p-4 h-2/6 overflow-y-scroll bg-slate-900 rounded-xl">
                                {cartItems}
                            </ul>
                            
                            <div className="text-white text-2xl">
                                <p>Total: {sumCart} €</p>
                                <p>Montant restant: {amountRemaining} €</p>
                                <p>Montant payé: {amountPaid} €</p>
                                <p>Montant dû: {amountDue} €</p>
                            </div>
                            <div className="flex h-1/3 w-full justify-center">
                                <div className="h-full grid grid-cols-3 w-3/4 text-center">
                                    <button className="bg-tertiary border-2 border-black border-solid" onClick={()=>changeEnteredAmount('7')}>7</button>
                                    <button className="bg-tertiary border-2 border-black border-solid" onClick={()=>changeEnteredAmount('8')}>8</button>
                                    <button className="bg-tertiary border-2 border-black border-solid" onClick={()=>changeEnteredAmount('9')}>9</button>
                                    <button className="bg-tertiary border-2 border-black border-solid" onClick={()=>changeEnteredAmount('4')}>4</button>
                                    <button className="bg-tertiary border-2 border-black border-solid" onClick={()=>changeEnteredAmount('5')}>5</button>
                                    <button className="bg-tertiary border-2 border-black border-solid" onClick={()=>changeEnteredAmount('6')}>6</button>
                                    <button className="bg-tertiary border-2 border-black border-solid" onClick={()=>changeEnteredAmount('1')}>1</button>
                                    <button className="bg-tertiary border-2 border-black border-solid" onClick={()=>changeEnteredAmount('2')}>2</button>
                                    <button className="bg-tertiary border-2 border-black border-solid" onClick={()=>changeEnteredAmount('3')}>3</button>
                                    <button className="bg-tertiary border-2 border-black border-solid" onClick={()=>changeEnteredAmount('0')}>0</button>
                                    <button className="bg-tertiary border-2 border-black border-solid" onClick={()=>changeEnteredAmount('.00')}>.00</button>
                                    <button className="bg-tertiary border-2 border-black border-solid" onClick={()=>changeEnteredAmount('.')}>.</button>
                                </div>
                                <div className="h-full flex flex-col w-1/4">
                                    <button className="bg-tertiary-container text-on-tertiary-container h-1/4 border-2 border-black border-solid" onClick={()=>pay("CB")}>CB</button>
                                    <button className="bg-tertiary-container text-on-tertiary-container h-1/4 border-2 border-black border-solid" onClick={()=>pay("Espece")}>Espece</button>
                                    <button className="bg-tertiary-container text-on-tertiary-container h-1/4 border-2 border-black border-solid" onClick={()=>pay("CV")}>CV</button>
                                    <button className="bg-tertiary-container text-on-tertiary-container h-1/4 border-2 border-black border-solid" onClick={()=>pay("TR")}>TR</button>
                                </div>
                            </div>
                            <div className="flex justify-between items-center -mt-4 border border-black border-solid text-2xl text-right text-white bg-slate-800">
                                <img className="pl-2 invert" src={Backspace} alt="backspace icon" onClick={()=>setEnteredAmount(enteredAmount.slice(0, -1))}/>
                                <p className="pr-2">{enteredAmount}€</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>,
            document.body
        ) : null;
}

export default Checkout;