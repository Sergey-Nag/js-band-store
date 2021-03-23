import React from 'react';
import Header from '../../components/Header';
import ProductSingle from '../../components/ProductSingle/ProductSingle';
import image from '../../img/unknown-guy.svg';

export default function ProductPage({ match, history }) {
  const ITEMS = [
    {
      id: '1',
      title: 'Book Name 1',
      author: 'T. Test',
      price: 15,
      cover: image,
    },
    {
      id: '2',
      title: 'Book Name 2',
      author: 'T. Test',
      price: 15,
      cover: image,
    },
    {
      id: '3',
      title: 'Book Name 3',
      author: 'T. Test',
      price: 15,
      cover: image,
    },
    {
      id: '4',
      title: 'Book Name 4',
      author: 'T. Test',
      price: 15,
      cover: image,
    },
    {
      id: '5',
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
