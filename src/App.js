import "./baseCss/reset.css";
import "./baseCss/variaveis.css";
import "./baseCss/base.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { commerce } from "./pages/commerce";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Chamada from './components/Chamada';
import ComoConseguir from './components/ComoConseguir';
import Produtos from './components/Produtos/Produtos';
import Videos from './components/Videos';
import Footer from './components/Footer';
import Finalizar from './components/Finalizar/Finalizar';

function App() {

  
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({})
  const [errorMessage, setErrorMessage] = useState('')

  const fetchProducts = async () => {
      const { data } = await commerce.products.list();
      setProducts(data);
    }


  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

   const handleAddToCart = async (productId, quantity) => {
      const item = await commerce.cart.add(productId, quantity);

      setCart(item.cart);
    }

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

 
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };


  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };
  useEffect(() => {
    fetchCart();
    fetchProducts();
  }, []);

  return (
    <Router>
      <Header totalItems={cart.total_items} />
      <Switch>

        <Route path="/" exact>
          <Chamada />
          <ComoConseguir />
          <Produtos products={products} onAddToCart={handleAddToCart} />
          <Videos />
          <Footer />
        </Route>

        <Route path="/carrinho">
          <Cart
            cart={cart}
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
          />
        </Route>

        <Route path="/finalizar">
            <Finalizar
            cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage}
             />
        
        </Route>



      </Switch>
        
    </Router>
  );
}
export default App;
