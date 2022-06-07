import { useState } from "react"

import Category from "./Category"
import Item from './Item'

type Item = {
    name: string,
    price: number
}

type Category = {
    name: string,
    items: Array<Item>
}

const Menu = (props: any) => {

    let cart = props.cart
    let setCart = props.setCart

    let [selectedCategory, setSelectedCategory] = useState("")

    let categories: Array<Category> = [
        {
            name: "Burgers",
            items: [
                {
                    name: "Strasburger",
                    price: 10
                }
            ]
        },
        {
            name: "Boissons",
            items: [
                {
                    name: "Canada Dry",
                    price: 2
                }
            ]
        },
        {
            name: "Frites",
            items: [
                {
                    name: "Frite BBQ",
                    price: 3
                }
            ]
        },
        {
            name: "Desserts",
            items: [
                {
                    name: "Cookie Choco",
                    price: 3
                }
            ]
        },
        {
            name: "Merch",
            items: [
                {
                    name: "Casquette",
                    price: 10
                }
            ]
        },
    ]

    const addItem = (name: string, price: number)=>{
        let cartItems: Array<Item> = [...cart]
        cartItems.push({
            name: name,
            price: price
        })
        setCart(cartItems)
    }

    let listCategories: any = categories.map((category)=>
        <li  className="h-36" key={category.name}><Category name={category.name} setCat={setSelectedCategory}/></li>
    )

    let listItems: any = []
    categories.forEach(category=>{
        if (category.name === selectedCategory) {
            category.items.forEach(item=>{
                listItems.push(
                    <li className="h-36" key={item.name}><Item name={item.name} price={item.price} addItem={addItem}/></li>
                )
            })
        }
    })

    return (
        <section className="w-8/12 bg-slate-900 flex flex-col gap-2">
            <div id="categories" className="h-1/2 bg-slate-800">
                <ul className="grid grid-cols-4 gap-2">
                    {listCategories}
                </ul>
            </div>
            <div id="items" className="h-1/2 bg-slate-800">
                <ul className="grid grid-cols-4 gap-2">
                    {listItems}
                </ul>
            </div>
        </section>     
    )
}

export default Menu