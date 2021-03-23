import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import ProductSingle from '../../components/ProductSingle/ProductSingle';
import { loadBookById } from '../../store/actions/booksActions';
import Spinner from '../../components/Spinner';

export default function ProductPage({ match, history }) {
  document.title = 'Catalog';
  const user = useSelector((state) => state.user);
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  if (!user.token) history.push('/');
  const { id } = match.params;

  useEffect(() => {
    dispatch(loadBookById(id));
  }, [dispatch, id]);

  return (
    <>
      <Header />
      {books.isLoading && <Spinner size="lg" center />}
      {!books.isLoading && <ProductSingle product={books.single} />}
    </>
  );
}
