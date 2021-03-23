import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Catalog from '../../components/Catalog/Catalog';
import CatalogControls from '../../components/CatalogControls';
import Header from '../../components/Header';
import Spinner from '../../components/Spinner/Spinner';
import { loadBooks } from '../../store/actions/booksActions';

export default function CatalogPage({ history }) {
  document.title = 'Catalog';
  const user = useSelector((state) => state.user);
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  if (!user.token) history.push('/');

  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);

  return (
    <>
      <Header />
      <CatalogControls />
      {books.isLoading && <Spinner size="lg" center />}
      {!books.isLoading && <Catalog items={books.catalog} />}
    </>
  );
}
