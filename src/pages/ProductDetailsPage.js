import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <Container>
      <Image src={product.image} alt={product.title} loading="lazy" />
      <Info>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
        <Price>${product.price.toFixed(2)}</Price>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 20px;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin-right: 20px;
`;

const Info = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  margin-bottom: 10px;
`;

const Description = styled.p`
  margin-bottom: 20px;
`;

const Price = styled.p`
  font-size: 24px;
  color: #555;
`;

export default ProductDetailsPage;
