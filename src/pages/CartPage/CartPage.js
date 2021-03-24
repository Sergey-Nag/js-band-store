import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import Cart from '../../components/Cart/Cart';
import CartPurchase from '../../components/Cart/CartPurchase';
import CartEmpty from '../../components/Cart/CartEmpty';

export default function CartPage() {
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    document.title = `Cart (${cart.length})`;
  }, [cart.length]);

  return (
    <>
      <Header />
      <CartPurchase />
      {cart.length === 0 && <CartEmpty />}
      {cart.length > 0 && <Cart items={cart} />}
    </>
  );
}
