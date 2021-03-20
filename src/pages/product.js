import React from 'react';
import Header from '../components/Header';
import ProductSingle from '../components/ProductSingle';
import image from '../img/unknown-guy.svg';

export default function product({ match, history }) {
  const ITEMS = [
    {
      id: '123',
      title: 'Book Name 1',
      author: 'T. Test',
      price: 15,
      cover: image,
    },
    {
      id: '456',
      title: 'Book Name 2',
      author: 'T. Test',
      price: 15,
      cover: image,
    },
    {
      id: '789',
      title: 'Book Name 3',
      author: 'T. Test',
      price: 15,
      cover: image,
    },
    {
      id: '112',
      title: 'Book Name 4',
      author: 'T. Test',
      price: 15,
      cover: image,
    },
    {
      id: '134',
      title: 'Book Name 5',
      author: 'T. Test',
      price: 15,
      cover: image,
    },
  ];

  const prod = ITEMS.find(({ id }) => id === match.params.id);

  if (!prod) history.push('/404');

  return (
    <>
      <Header />
      <ProductSingle product={prod} />
    </>
  );
}
