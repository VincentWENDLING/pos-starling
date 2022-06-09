import { useState } from 'react'

import Cart from './components/Cart/Cart'
import Menu from './components/Menu/Menu'

function App() {

  const [cart, setCart]:any = useState([])
  const [orderNum, setOrderNum]:any = useState(1)

  return (
    <div className="App h-screen flex flex-col">
      <div className="flex gap-2 p-2 h-full">
        <Menu cart={cart} setCart={setCart}/>
        <Cart cart={cart} setCart={setCart}/>
      </div>
      <div className="text-white h-10">
        <div>
          
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default App
