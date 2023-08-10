import logo from './logo.svg';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import About from './About';
import Products from './Products'
import Contact from './Contact';
import SingleProduct from './SingleProduct';
import Cart from './Cart';
function App() {
  return (
   
    <Router>
      <Routes> 
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/product' element={<Products/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/singleproduct' element={<SingleProduct/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </Router>



 

   
  );
}

export default App;
