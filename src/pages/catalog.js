import React from 'react';
import Catalog from '../components/Catalog';
import CatalogControls from '../components/CatalogControls';
import Header from '../components/Header';
import image from '../img/unknown-guy.svg';

export default function catalog() {
  const ITEMS = [
    {
      title: 'Book Name 1',
      author: 'T. Test',
      price: 15,
      cover: image,
    },
    {
      title: 'Book Name 2',
      author: 'T. Test',
      price: 15,
      cover: image,
    },
    {
      title: 'Book Name 3',
      author: 'T. Test',
      price: 15,
      cover: image,
    },
    {
      title: 'Book Name 4',
      author: 'T. Test',
      price: 15,
      cover: image,
    },
    {
      title: 'Book Name 5',
      author: 'T. Test',
      price: 15,
      cover: image,
    },
  ];

  return (
    <div>
      <Header />
      <CatalogControls />
      <Catalog items={ITEMS} />
    </div>
  );
}
