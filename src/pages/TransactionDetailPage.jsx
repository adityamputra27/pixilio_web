import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/Button';

const TransactionDetailPage = () => {
    const { id } = useParams();
    // In a real app, fetch transaction details based on id
    const transaction = {
        id: 'txn_123',
        date: '2024-07-20',
        total: 78.00,
        status: 'Paid',
        products: [
            { id: 1, name: '3D Illustration Pack', price: 29.00 },
            { id: 2, name: 'Mobile App UI Kit', price: 49.00 },
        ],
    };

    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-dark-navy mb-4">Transaction Details</h1>
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-4">
                    <strong>Order ID:</strong> {transaction.id}
                </div>
                <div className="mb-4">
                    <strong>Date:</strong> {transaction.date}
                </div>
                <div className="mb-4">
                    <strong>Total Amount:</strong> ${transaction.total.toFixed(2)}
                </div>
                <div className="mb-4">
                    <strong>Payment Status:</strong> <span className="bg-green-200 text-green-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded-full">{transaction.status}</span>
                </div>

                <h2 className="text-2xl font-bold text-dark-navy mt-8 mb-4">Products Purchased</h2>
                <ul className="space-y-4">
                    {transaction.products.map(product => (
                        <li key={product.id} className="flex justify-between items-center">
                            <div>
                                <div className="font-bold">{product.name}</div>
                                <div>${product.price.toFixed(2)}</div>
                            </div>
                            {transaction.status === 'Paid' && (
                                <Button>Download</Button>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TransactionDetailPage;
