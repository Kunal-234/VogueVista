
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
// import Home  from "./Component/Home/Home";
import  Navbar from "./Component/Navbar/Navbar";
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import Footer from './Component/Footer/Footer';
import banner_mens from './Component/Assets/banner_mens.png'
import banner_womens from './Component/Assets/banner_women.png'
import banner_kids from './Component/Assets/banner_kids.png'
import Sign from './Pages/Sign';


function App() {
  return (
    <>
    <div className="mx-4">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>} />
      <Route path='/mens' element={<ShopCategory banner={banner_mens} category="men"/>} />
      <Route path='/womens' element={<ShopCategory banner={banner_womens} category="women"/>} />
      <Route path='/kids' element={<ShopCategory banner={banner_kids} category="kid"/>} />
      <Route path='/product' element={<Product/>} >
         <Route path=':productId' element={<Product/>} />
      </Route>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/LoginSignup' element={<LoginSignup/>} />
      <Route path='/sign' element={<Sign/>} />
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
    </>
 
  );
}

export default App;
