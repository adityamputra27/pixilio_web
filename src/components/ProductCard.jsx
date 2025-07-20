import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-gray-500">{product.category}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-pixilio-blue">${product.price}</span>
          <button className="bg-dark-navy text-white font-bold py-2 px-4 rounded hover:bg-cyan">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
