import React, { useEffect, useState } from 'react';
import Product from '../Components/Product';

const Home = () => {
  const Api_Url = 'https://fakestoreapi.com/products';
  const [dataa, setdata] = useState([]);

  async function fetchdata() {
    try {
      const result = await fetch(Api_Url);
      const data = await result.json();
      setdata(data);
      console.log('fetchdata');
      console.log(data[1].title); // Access data directly, not dataa
    } catch (error) {
      console.log('There is an error fetching data:', error);
      setdata([]);
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className=''>
      {dataa.map((data) => (
        <Product key={data.id} data={data} />
      ))}
    </div>
  );
};

export default Home;
