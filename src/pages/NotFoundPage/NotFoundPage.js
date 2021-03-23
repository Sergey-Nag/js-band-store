import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Wrapp from '../../components/Wrapp/Wrapp';

export default function NotFoundPage() {
  useEffect(() => {
    document.title = '404 • Page not found';
  }, []);

  return (
    <Wrapp>
      <div className="col pt-5">
        <h1 className="text-center">404 Page not found</h1>
        <div className="text-center">
          <Link to="/">Return to main page</Link>
        </div>
      </div>
    </Wrapp>
  );
}
