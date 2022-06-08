export type _Item = {
    name: string,
    price: number,
}

export type _CartItem = {
    id: number
    name: string,
    price: number,
    count: number
}

export type _Category = {
    name: string,
    items: Array<_Item>
}