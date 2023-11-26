import React, { useEffect } from 'react'
import './App.css';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Home from './Pages/Home/Home';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Product from './Pages/Products/Product';
import Carts from './Pages/Carts/Carts';
import NavBar from './Component/NavBar/NavBar';
import { useDispatch} from 'react-redux';
import supabase from './supabase';
import { setUser } from './slices/userSlices';

function App() {
  const dispatch = useDispatch();
  const getUser = async() => {
    const {data} =await supabase.auth.getSession();
    if(data.session){
      dispatch(setUser((data.session.user)));
    }
   
  }
  useEffect(() => {
    getUser();
  },[])
  return ( 
    
    <div className="App">
     <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/product-details/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<Carts/>}/>
     </Routes>
     </BrowserRouter>
    </div>

  );
}

export default App;
