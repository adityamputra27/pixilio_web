import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-center text-dark-navy">Login</h1>
                <form className="space-y-6">
                    <Input type="email" placeholder="Email Address" />
                    <Input type="password" placeholder="Password" />
                    <Button className="w-full">Login</Button>
                </form>
                <div className="text-center">
                    <Link to="/register" className="text-sm text-pixilio-blue hover:underline">
                        Don't have an account? Register
                    </Link>
                </div>
                <div className="text-center">
                    <Link to="#" className="text-sm text-gray-500 hover:underline">
                        Forgot Password?
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
