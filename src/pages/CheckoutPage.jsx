import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

const CheckoutPage = () => {
    return (
        <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-dark-navy mb-8">Checkout</h1>
            <div className="flex flex-col lg:flex-row -mx-4">
                {/* Cart Summary */}
                <div className="lg:w-1/2 px-4">
                    <div className="border rounded-lg p-6">
                        <h2 className="text-xl font-bold text-dark-navy mb-4">Cart Summary</h2>
                        <div className="flex justify-between mb-2">
                            <span>3D Illustration Pack</span>
                            <span>$29.00</span>
                        </div>
                        <div className="flex justify-between mb-2">
                            <span>Mobile App UI Kit</span>
                            <span>$49.00</span>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between font-bold">
                            <span>Total</span>
                            <span>$78.00</span>
                        </div>
                    </div>
                </div>

                {/* Billing Information */}
                <div className="lg:w-1/2 px-4 mt-8 lg:mt-0">
                    <div className="border rounded-lg p-6">
                        <h2 className="text-xl font-bold text-dark-navy mb-4">Billing Information</h2>
                        <div className="space-y-4">
                            <Input type="text" placeholder="Full Name" />
                            <Input type="email" placeholder="Email Address" />
                            <Input type="text" placeholder="Address" />
                            <div className="flex space-x-4">
                                <Input type="text" placeholder="City" />
                                <Input type="text" placeholder="Postal Code" />
                            </div>
                        </div>

                        <h2 className="text-xl font-bold text-dark-navy mt-8 mb-4">Payment Method</h2>
                        <div className="space-y-4">
                            <div className="border rounded-lg p-4 flex items-center">
                                <input type="radio" name="payment" id="credit-card" className="mr-4" />
                                <label htmlFor="credit-card">Credit Card</label>
                            </div>
                            <div className="border rounded-lg p-4 flex items-center">
                                <input type="radio" name="payment" id="paypal" className="mr-4" />
                                <label htmlFor="paypal">PayPal</label>
                            </div>
                            <div className="border rounded-lg p-4 flex items-center">
                                <input type="radio" name="payment" id="e-wallet" className="mr-4" />
                                <label htmlFor="e-wallet">e-Wallet</label>
                            </div>
                        </div>

                        <Button className="w-full mt-8">Place Order</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
