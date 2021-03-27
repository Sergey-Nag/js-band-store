import React from 'react';
import './Spinner.scss';

export default function Spinner({ as }) {
  if (as === 'span') {
    return (
      <span
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      />
    );
  }
  return (
    <div className="spinner-border d-block mx-auto mt-5" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}
