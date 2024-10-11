import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Link to={`/product/${product.id}`}>
        <Image src={product.image} alt={product.title} loading="lazy" />
        <Title>{product.title}</Title>
        <Price>${product.price.toFixed(2)}</Price>
      </Link>
    </Card>
  );
};

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

const Price = styled.p`
  font-size: 16px;
  color: #888;
`;

export default ProductCard;
