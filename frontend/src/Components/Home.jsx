import React, { useState } from 'react';
import Search from './Search';
import Laps_Products from './Laps_Product'; 



const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [productsData, setProductsData] = useState(Laps_Products);
  
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const filteredProducts = productsData.filter((product) =>
      product.title && product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div>
        <Search onChange={handleSearchChange} />
        <ul>
          {filteredProducts.map((product) => (
            <li key={product.title}>{product.title}</li>
          ))}
        </ul>
      </div>
    );
  };
  

export default Home ;
