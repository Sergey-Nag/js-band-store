import React from 'react';
import Header from '../../components/Header';
import Cart from '../../components/Cart/Cart';

export default function CartPage() {
  const ITEMS = [
    {
      id: '123',
      title: 'Book Name 1',
      author: 'T. Test',
      price: 15,
    },
    {
      id: '456',
      title: 'Book Name 2',
      author: 'T. Test',
      price: 15,
    },
    {
      id: '134',
      title: 'Book Name 5',
      author: 'T. Test',
      price: 15,
    },
  ];

  return (
    <>
      <Header />
      <Cart items={ITEMS} />
    </>
  );
}
