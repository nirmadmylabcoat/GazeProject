import React, { useState } from 'react';
import Filter from './Filter';

const Search = () => {
  const menCategories = [
    'Hoodies and Coats',
    'Shirts',
    'Oversized T-shirts',
    'Polo T-shirts',
    'Vests',
    'Jeans and Trousers',
    'Shorts',
    
  ];

  const womenCategories = [
    'Hoodies and Jackets',
    'Shirts',
    'Tops',
    'Jeans and Trousers',  
    'Shorts and Skirts',
    'Dresses',
    'Co-ords',
  ];

  const priceRanges = ['199-499', '500-999', '1000-1499', '1500-1999', '2000-2499'];

  const handleFilterChange = (category, priceRange) => {
    // Implement filtering logic here based on the selected category and price range
    console.log('Category:', category);
    console.log('Price Range:', priceRange);
  };

  return (
    <div>
      <Filter categories={menCategories} priceRanges={priceRanges} handleFilterChange={handleFilterChange} />

      <Filter categories={womenCategories} priceRanges={priceRanges} handleFilterChange={handleFilterChange} />
    </div>
  );
};

export default Search;
