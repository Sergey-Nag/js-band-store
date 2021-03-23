import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import ProductSingle from '../../components/ProductSingle/ProductSingle';
import { loadBookById } from '../../store/actions/booksActions';
import Spinner from '../../components/Spinner';

export default function ProductPage({ match, history }) {
  const user = useSelector((state) => state.user);
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  if (!user.token) history.push('/');
  const { id } = match.params;

  useEffect(() => {
    dispatch(loadBookById(id));

    return () => console.log('unmount');
  }, [id, dispatch]);

  return (
    <>
      <Header />
      {books.isSingleLoading && <Spinner size="lg" center />}
      {!books.isSingleLoading && books.single && <ProductSingle product={books.single} />}
    </>
  );
}
