import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Input from '../components/Input';

const ProductListPage = () => {
    const allProducts = [
        { id: 1, name: '3D Illustration Pack', category: 'Illustration', price: 29, image: 'https://via.placeholder.com/300x200' },
        { id: 2, name: 'Mobile App UI Kit', category: 'UI Kit', price: 49, image: 'https://via.placeholder.com/300x200' },
        { id: 3, name: 'Presentation Template', category: 'Presentation', price: 19, image: 'https://via.placeholder.com/300x200' },
        { id: 4, name: 'Video Intro Animation', category: 'Video Template', price: 39, image: 'https://via.placeholder.com/300x200' },
        { id: 5, name: 'Social Media Graphics', category: 'Design', price: 25, image: 'https://via.placeholder.com/300x200' },
        { id: 6, name: 'Website Landing Page', category: 'Design', price: 59, image: 'https://via.placeholder.com/300x200' },
        { id: 7, name: 'Corporate Identity Mockups', category: 'Design', price: 35, image: 'https://via.placeholder.com/300x200' },
        { id: 8, name: 'Animated Characters Pack', category: 'Video Template', price: 69, image: 'https://via.placeholder.com/300x200' },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Illustration', 'UI Kit', 'Presentation', 'Video Template', 'Design'];

    const filteredProducts = allProducts
        .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
        .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div>
            {/* Navbar - Assuming a global navbar is present */}
            <div className="container mx-auto px-6 py-8">
                <h1 className="text-3xl font-bold text-dark-navy mb-8">All Products</h1>

                <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                    <div className="w-full md:w-1/3">
                        <Input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="w-full md:w-auto mt-4 md:mt-0">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="border border-gray-300 rounded-md px-3 py-2"
                        >
                            {categories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-12">
                    <button className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-l">Prev</button>
                    <button className="bg-pixilio-blue text-white font-bold py-2 px-4">1</button>
                    <button className="bg-gray-200 text-gray-700 font-bold py-2 px-4">2</button>
                    <button className="bg-gray-200 text-gray-700 font-bold py-2 px-4 rounded-r">Next</button>
                </div>
            </div>
        </div>
    );
};

export default ProductListPage;
