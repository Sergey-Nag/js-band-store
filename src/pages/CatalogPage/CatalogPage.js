import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Catalog from '../../components/Catalog/Catalog';
import CatalogControls from '../../components/CatalogControls';
import Header from '../../components/Header';
import Spinner from '../../components/Spinner/Spinner';
import { loadBooks } from '../../store/actions/booksActions';

export default function CatalogPage({ history }) {
  const user = useSelector((state) => state.user);
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  if (!user.token) history.push('/');

  useEffect(() => {
    document.title = 'Catalog';

    dispatch(loadBooks());
  }, [dispatch]);

  return (
    <>
      <Header />
      <CatalogControls />
      {books.isCatalogLoading && <Spinner size="lg" center />}
      {!books.isCatalogLoading && <Catalog items={books.catalog} />}
    </>
  );
}
