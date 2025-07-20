import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

const RegisterPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-center text-dark-navy">Create an Account</h1>
                <form className="space-y-6">
                    <Input type="text" placeholder="Full Name" />
                    <Input type="email" placeholder="Email Address" />
                    <Input type="password" placeholder="Password" />
                    <Input type="password" placeholder="Confirm Password" />
                    <div className="flex items-center">
                        <input type="checkbox" id="terms" className="mr-2" />
                        <label htmlFor="terms" className="text-sm text-gray-600">
                            I agree to the <a href="#" className="text-pixilio-blue hover:underline">Terms of Service</a>
                        </label>
                    </div>
                    <Button className="w-full">Register</Button>
                </form>
                <div className="text-center">
                    <Link to="/login" className="text-sm text-pixilio-blue hover:underline">
                        Already have an account? Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
