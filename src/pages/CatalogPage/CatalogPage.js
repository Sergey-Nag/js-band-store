import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Catalog from '../../components/Catalog/Catalog';
import CatalogControls from '../../components/CatalogControls';
import Header from '../../components/Header';
import image from '../../img/unknown-guy.svg';

export default function CatalogPage({ history }) {
  document.title = 'Catalog';
  const user = useSelector((state) => state.user);

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

  if (!user.token) return <Redirect to="/404" />;

  return (
    <>
      <Header />
      <CatalogControls />
      <Catalog items={ITEMS} />
    </>
  );
}
