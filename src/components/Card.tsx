import React from 'react';

interface CardProps {
  header: React.ReactNode;
  body: React.ReactNode;
  footer: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ header, body, footer }) => (
  <div className="border rounded shadow-sm p-4">
    <div className="mb-2">{header}</div>
    <div className="mb-4">{body}</div>
    <div>{footer}</div>
  </div>
);

export default Card;
