import React, { useState } from 'react';

const Filter = ({ categories, priceRanges, handleFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    handleFilterChange(event.target.value, selectedPriceRange);
  };

  const handlePriceRangeChange = (event) => {
    setSelectedPriceRange(event.target.value);
    handleFilterChange(selectedCategory, event.target.value);
  };

  return (
    <div className='flex justify-center w-[90%]'>
      <div>
        <label htmlFor="category"></label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="priceRange"></label>
        <select id="priceRange" value={selectedPriceRange} onChange={handlePriceRangeChange}>
          <option value="">All Price Ranges</option>
          {priceRanges.map((range, index) => (
            <option key={index} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
