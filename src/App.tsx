import { useState } from 'react'

import Cart from './components/Cart/Cart'
import Menu from './components/Menu/Menu'

function App() {

  const [cart, setCart]:any = useState([])

  return (
    <div className="App flex gap-2 h-screen p-2">
      <Menu cart={cart} setCart={setCart}/>
      <Cart cart={cart} setCart={setCart}/>
    </div>
  )
}

export default App
