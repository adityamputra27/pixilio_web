import React from 'react';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';

const LandingPage = () => {
    const featuredProducts = [
        {
            id: 1,
            name: '3D Illustration Pack',
            category: 'Illustration',
            price: 29,
            image: 'https://via.placeholder.com/300x200',
        },
        {
            id: 2,
            name: 'Mobile App UI Kit',
            category: 'UI Kit',
            price: 49,
            image: 'https://via.placeholder.com/300x200',
        },
        {
            id: 3,
            name: 'Presentation Template',
            category: 'Presentation',
            price: 19,
            image: 'https://via.placeholder.com/300x200',
        },
        {
            id: 4,
            name: 'Video Intro Animation',
            category: 'Video Template',
            price: 39,
            image: 'https://via.placeholder.com/300x200',
        },
    ];
    return (
        <div>
            {/* Navbar */}
            <nav className="bg-white shadow-md">
                <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                    <div className="text-2xl font-bold font-outfit text-pixilio-blue">Pixilio</div>
                    <div className="hidden md:flex space-x-6">
                        <a href="/products" className="text-dark-navy hover:text-pixilio-blue">Presentation</a>
                        <a href="/products" className="text-dark-navy hover:text-pixilio-blue">Design</a>
                        <a href="/products" className="text-dark-navy hover:text-pixilio-blue">Video Templates</a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="/login" className="text-dark-navy hover:text-pixilio-blue">Login</a>
                        <a href="/register">
                            <Button>Register</Button>
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="bg-gray-100 py-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold font-outfit text-dark-navy">High-Quality Digital Products</h1>
                    <p className="text-xl text-gray-600 mt-4 font-inter">Explore our collection of templates, designs, and more.</p>
                    <a href="/products">
                        <Button className="mt-8">Browse Products</Button>
                    </a>
                </div>
            </header>

            {/* Featured Products */}
            <section className="py-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center text-dark-navy mb-12">Featured Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {featuredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-dark-navy text-white py-12">
                <div className="container mx-auto text-center">
                    <div className="text-lg font-bold font-outfit">Pixilio</div>
                    <div className="flex justify-center space-x-6 mt-4">
                        <a href="#" className="hover:text-cyan">Facebook</a>
                        <a href="#" className="hover:text-cyan">Twitter</a>
                        <a href="#" className="hover:text-cyan">Instagram</a>
                    </div>
                    <p className="mt-8 text-sm">&copy; 2024 Pixilio. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
