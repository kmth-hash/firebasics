import './App.css';
import Homepage from './pages/Homepage';
import {Route , BrowserRouter , Routes} from 'react-router-dom';
import ProductInfo from './pages/ProductInfo';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' exact element={<Homepage/>} />
          <Route path='/login' exact element={<Login/>} />
          <Route path='/register' exact element={<Register/>} />
          <Route path='/cart' exact element={<Cart/>} />
          <Route path='/info' exact element={<ProductInfo/>} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
