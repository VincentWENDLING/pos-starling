import { useState } from 'react'

import Cart from './components/Cart/Cart'
import Menu from './components/Menu/Menu'

function App() {

  const [cart, setCart]:any = useState([])
  const [orderNum, setOrderNum]:any = useState(1)

  const [pageSelected, setPageSelected]:any = useState("caisse")

  const getCurrentPage = ()=> {
      if (pageSelected === 'caisse') {
        return (
          <div className="flex gap-2 h-full">
            <Menu cart={cart} setCart={setCart}/>
            <Cart cart={cart} setCart={setCart}/>
          </div>
        )
      }
      else if (pageSelected === 'menu') {
        return (
          <div className="h-full w-full bg-background text-on-background">
            TEXT
          </div>
        )
      }
  }

  return (
    <div className="App h-screen flex flex-col p-2">
      { getCurrentPage() }
      <div className="text-white h-10 w-full flex gap-2 pl-2 pr-2">
          <button className="w-1/2 rounded-lg bg-secondary text-on-secondary" onClick={()=>setPageSelected('caisse')}>Caisse</button>
          <button className="w-1/2 rounded-lg bg-secondary text-on-secondary" onClick={()=>setPageSelected('menu')}>Menu</button>
      </div>
    </div>
  )
}

export default App
