import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';

const ProductDetailPage = () => {
    const { id } = useParams();
    // In a real app, you would fetch the product data based on the id
    const product = {
        id: 1,
        name: '3D Illustration Pack',
        category: 'Illustration',
        price: 29,
        image: 'https://via.placeholder.com/800x600',
        description: 'A beautiful pack of 3D illustrations for your next project. Includes 20 high-quality illustrations in various formats.',
        tags: ['3D', 'Illustration', 'Design'],
    };

    const relatedProducts = [
        { id: 2, name: 'Mobile App UI Kit', category: 'UI Kit', price: 49, image: 'https://via.placeholder.com/300x200' },
        { id: 3, name: 'Presentation Template', category: 'Presentation', price: 19, image: 'https://via.placeholder.com/300x200' },
        { id: 4, name: 'Video Intro Animation', category: 'Video Template', price: 39, image: 'https://via.placeholder.com/300x200' },
    ];

    return (
        <div className="container mx-auto px-6 py-8">
            <div className="flex flex-col lg:flex-row -mx-4">
                <div className="lg:w-1/2 px-4">
                    <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-lg" />
                </div>
                <div className="lg:w-1/2 px-4 mt-8 lg:mt-0">
                    <h1 className="text-3xl font-bold text-dark-navy">{product.name}</h1>
                    <div className="mt-2">
                        {product.tags.map(tag => (
                            <span key={tag} className="bg-gray-200 text-gray-700 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded-full">{tag}</span>
                        ))}
                    </div>
                    <p className="text-gray-600 mt-4">{product.description}</p>
                    <div className="text-4xl font-bold text-pixilio-blue mt-6">${product.price}</div>
                    <div className="mt-8 flex space-x-4">
                        <Button>Add to Cart</Button>
                        <Button className="bg-dark-navy hover:bg-cyan">Buy Now</Button>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <h2 className="text-2xl font-bold text-dark-navy mb-8">Related Products</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {relatedProducts.map(p => (
                        <ProductCard key={p.id} product={p} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
