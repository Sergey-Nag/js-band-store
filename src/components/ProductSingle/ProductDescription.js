import React from 'react';

export default function ProductDescription({ product }) {
  const {
    title,
    author,
    cover,
    description,
    level,
    tags,
  } = product;

  return (
    <div className="card">
      <div className="row">
        <div className="col">
          <img src={cover} className="w-100" alt="a" />
          <p className="p-4">{description}</p>
        </div>
        <div className="col">
          <div className="pt-4 pr-4">
            <h3>{title}</h3>
            <span className="text-muted h6">{author}</span>
            <p className="tags">
              {tags && tags.map((tag) => <span key={tag} className="badge badge-secondary">{tag}</span>)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
