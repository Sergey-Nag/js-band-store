import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import Cart from '../../components/Cart/Cart';
import CartPurchase from '../../components/Cart/CartPurchase';
import CartEmpty from '../../components/Cart/CartEmpty';

export default function CartPage() {
  const cart = useSelector((state) => state.cart);
  const purchase = useSelector((state) => state.purchase);

  useEffect(() => {
    document.title = `Cart (${cart.length})`;
  }, [cart.length]);

  return (
    <>
      <Header />
      <CartPurchase isAvialable={cart.length > 0} />
      {purchase.isSending && <h2>Sending...</h2>}
      {purchase.isSuccess && <h2>Success...</h2>}
      {purchase.error.message && (
      <h2>
        Error
        {' '}
        {purchase.error.message}
      </h2>
      )}
      {cart.length === 0 && <CartEmpty />}
      {cart.length > 0 && <Cart items={cart} />}
    </>
  );
}
