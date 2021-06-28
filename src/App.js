import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart } from "./components";

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

  console.log(cart);

  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      {/*<Products products={products} onAddToCart={handleAddToCart} />*/}
      <Cart cart={cart} />
    </div>
  );
};

export default App;
