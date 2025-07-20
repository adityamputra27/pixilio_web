import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const PaymentStatusPage = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const status = query.get('status'); // 'success' or 'failure'

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            {status === 'success' ? (
                <div>
                    <svg className="w-24 h-24 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h1 className="text-3xl font-bold text-dark-navy">Payment Successful!</h1>
                    <p className="text-gray-600 mt-2">Thank you for your purchase.</p>
                    <Link to="/dashboard" className="text-pixilio-blue hover:underline mt-8 inline-block">
                        Go to Dashboard
                    </Link>
                </div>
            ) : (
                <div>
                    <svg className="w-24 h-24 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <h1 className="text-3xl font-bold text-dark-navy">Payment Failed</h1>
                    <p className="text-gray-600 mt-2">Something went wrong. Please try again.</p>
                    <Link to="/checkout" className="text-pixilio-blue hover:underline mt-8 inline-block">
                        Back to Checkout
                    </Link>
                </div>
            )}
        </div>
    );
};

export default PaymentStatusPage;
