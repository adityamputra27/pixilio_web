import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const DashboardPage = () => {
    const transactions = [
        { id: 'txn_123', date: '2024-07-20', total: 78.00, status: 'Paid' },
        { id: 'txn_456', date: '2024-07-18', total: 29.00, status: 'Paid' },
    ];

    const purchasedAssets = [
        { id: 1, name: '3D Illustration Pack' },
        { id: 2, name: 'Mobile App UI Kit' },
    ];

    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-dark-navy mb-8">My Dashboard</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* My Transactions */}
                <div>
                    <h2 className="text-2xl font-bold text-dark-navy mb-4">My Transactions</h2>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className="text-left">Order ID</th>
                                    <th className="text-left">Date</th>
                                    <th className="text-left">Total</th>
                                    <th className="text-left">Status</th>
                                    <th className="text-left"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {transactions.map(txn => (
                                    <tr key={txn.id}>
                                        <td>{txn.id}</td>
                                        <td>{txn.date}</td>
                                        <td>${txn.total.toFixed(2)}</td>
                                        <td><span className="bg-green-200 text-green-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded-full">{txn.status}</span></td>
                                        <td>
                                            <Link to={`/dashboard/transactions/${txn.id}`} className="text-pixilio-blue hover:underline">
                                                Details
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Download Purchased Assets */}
                <div>
                    <h2 className="text-2xl font-bold text-dark-navy mb-4">Download Assets</h2>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <ul className="space-y-4">
                            {purchasedAssets.map(asset => (
                                <li key={asset.id} className="flex justify-between items-center">
                                    <span>{asset.name}</span>
                                    <Button>Download</Button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
