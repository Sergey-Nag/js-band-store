import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const useRequestError = () => {
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const user = useSelector((state) => state.user);
  const books = useSelector((state) => state.books);
  const purchase = useSelector((state) => state.purchase);

  useEffect(() => {
    let message = null;

    if (user.error) {
      message = {
        title: 'Authorization Error',
        message: user.error.message,
      };
    } else if (books.error) {
      message = {
        title: 'Books Loading Error',
        message: books.error.message,
      };
    } else if (purchase.error) {
      message = {
        title: 'Purchase Error',
        message: purchase.error.message,
      };
    }

    setError(!!message);
    setErrorMessage(message);
  }, [user.error, books.error, purchase.error]);

  return {
    isError,
    errorMessage,
  };
};

export default useRequestError;
