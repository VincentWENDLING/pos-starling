import { useState } from "react"

import Category from "./Category"
import Item from './Item'

import { _Item, _CartItem, _Category } from '../../assets/types'
import { includesItem, getItemIndex } from '../../assets/utils'

const Menu = (props: any) => {

    let cart = props.cart
    let setCart = props.setCart

    let [selectedCategory, setSelectedCategory] = useState("")

    let categories: Array<_Category> = [
        {
            name: "Burgers",
            items: [
                {
                    name: "Strasburger",
                    price: 10,
                },
                {
                    name: "Bleu",
                    price: 9,
                }
            ]
        },
        {
            name: "Boissons",
            items: [
                {
                    name: "Canada Dry",
                    price: 2
                },
                {
                    name: "Coca",
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
                },
                {
                    name: "Frite Cocktail",
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
                },
                {
                    name: "Cookie Peanut Butter",
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
                },
                {
                    name: "Tablier",
                    price: 20
                }
            ]
        },
    ]

    const addItem = (name: string, price: number, count: number)=>{
        let cartItems: Array<_CartItem> = [...cart]
        if (includesItem(cartItems, name))
        {
            cartItems[getItemIndex(cart, name)].count++
        }
        else {
            cartItems.push({
                id: Math.random(), //ugly too, needs to change
                name: name,
                price: price,
                count: count
            })
        }
        setCart(cartItems)
    }

    let listCategories: any = categories.map((category)=>
        <li  className="h-full" key={category.name}><Category name={category.name} setCat={setSelectedCategory}/></li>
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
        <section className="w-8/12 bg-slate-900 flex flex-col gap-2 p-2">
            <div id="categories" className="h-1/6 bg-slate-800">
                <ul className="w-full h-full grid grid-flow-col auto-cols-fr p-2 gap-2 ">
                    {listCategories}
                </ul>
            </div>
            <div id="items" className="h-5/6 bg-slate-800 ">
                <ul className="grid grid-cols-4 gap-2 p-2">
                    {listItems}
                </ul>
            </div>
        </section>     
    )
}

export default Menu