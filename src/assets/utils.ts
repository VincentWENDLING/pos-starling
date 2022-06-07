import { _CartItem } from "./types"

export const includesItem = (cart: Array<_CartItem>, name: string):boolean => {
    for (let i = 0; i<cart.length; i++) {
        if (cart[i].name === name) return true
    }
    return false
}

export const getItemIndex = (cart: Array<_CartItem>, name: string): number => {
    for (let i = 0; i<cart.length; i++) {
        if (cart[i].name === name) return i 
    }
    return -1
}