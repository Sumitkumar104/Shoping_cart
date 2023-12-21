import React from 'react';

export default function Product({ data }) {
  const styles = {
    container: {
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px',
      width: '300px',
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
    description: {
      margin: '8px 0',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      marginBottom: '8px',
    },
    price: {
      color: 'green',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>{data.title}</div>
      <p style={styles.description}>{data.description}</p>
      <img style={styles.image} src={data.image} alt="Product" />
      <p style={styles.price}>{`$${data.price}`}</p>
    </div>
  );
}
