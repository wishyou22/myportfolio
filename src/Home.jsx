import { ShoppingBag } from 'phosphor-react'
import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1><ShoppingBag></ShoppingBag></h1>
        <Link to="/about">shop</Link>
    </div>
    
  )
}

export default Home