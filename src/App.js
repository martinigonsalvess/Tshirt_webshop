import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart, Checkout } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };
  //what is in the cart
  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
    //in short setCart(await commer.cart.retrieve())
  };

  //set items to cart
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  //Updating the quantity of a specific product, calling API features from Commerce js
  const handleUpdateCartQty = async (productId, quantity) => {
    const update = await commerce.cart.update(productId, { quantity });

    setCart(update.cart);
  };
  //Deleting a specific product, calling API features from Commerce js
  const handleRemoveFromCart = async (productId) => {
    const remove = await commerce.cart.remove(productId);

    setCart(remove.cart);
  };
  //Empty the Cart, calling API features from Commerce js
  const handleEmptyCart = async () => {
    const emptyCart = await commerce.cart.empty();

    setCart(emptyCart);
  };

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
