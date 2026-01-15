import { Button, Checkbox, Label, Radio, TextInput } from "flowbite-react";
import type { FC } from "react";
import { HiCreditCard, HiLockClosed, HiTruck } from "react-icons/hi";

const CheckoutPages: FC = function () {
    return (
        <div className="p-4 py-8 dark:bg-gray-900 max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Checkout Form */}
                <div className="lg:col-span-8">
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm">1</span>
                            Shipping Information
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="first-name" value="First Name" />
                                <TextInput id="first-name" placeholder="John" required />
                            </div>
                            <div>
                                <Label htmlFor="last-name" value="Last Name" />
                                <TextInput id="last-name" placeholder="Doe" required />
                            </div>
                            <div className="md:col-span-2">
                                <Label htmlFor="address" value="Address" />
                                <TextInput id="address" placeholder="123 Street Name" required />
                            </div>
                            <div>
                                <Label htmlFor="city" value="City" />
                                <TextInput id="city" placeholder="New York" required />
                            </div>
                            <div>
                                <Label htmlFor="zip" value="ZIP / Postal Code" />
                                <TextInput id="zip" placeholder="10001" required />
                            </div>
                        </div>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm">2</span>
                            Payment Method
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 border border-blue-600 bg-blue-50 dark:bg-blue-900/20 rounded-xl cursor-pointer">
                                <Radio id="credit-card" name="payment" defaultChecked />
                                <div className="flex-1">
                                    <Label htmlFor="credit-card" className="font-bold cursor-pointer">Credit Card</Label>
                                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Safe and Secure</p>
                                </div>
                                <HiCreditCard className="w-8 h-8 text-blue-600" />
                            </div>

                            <div className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-700 rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
                                <Radio id="paypal" name="payment" />
                                <div className="flex-1">
                                    <Label htmlFor="paypal" className="font-bold cursor-pointer">PayPal</Label>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">Redirect to PayPal</p>
                                </div>
                                <div className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded"></div>
                            </div>

                            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 mt-4">
                                <div className="space-y-4">
                                    <div>
                                        <Label htmlFor="card-number" value="Card Number" />
                                        <TextInput id="card-number" placeholder="0000 0000 0000 0000" required icon={HiCreditCard} />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="expiry" value="Expiry Date" />
                                            <TextInput id="expiry" placeholder="MM/YY" required />
                                        </div>
                                        <div>
                                            <Label htmlFor="cvv" value="CVV" />
                                            <TextInput id="cvv" placeholder="123" required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="flex items-center gap-2 mb-8">
                        <Checkbox id="terms" required />
                        <Label htmlFor="terms" className="text-sm text-gray-500">
                            I agree to the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                        </Label>
                    </div>

                    <Button size="xl" className="w-full md:w-fit px-12">
                        Confirm and Pay $610.00
                    </Button>
                </div>

                {/* Sidebar Summary */}
                <div className="lg:col-span-4">
                    <div className="p-6 bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-2xl">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Order Summary</h3>
                        <div className="space-y-4 mb-6">
                            <div className="flex gap-4">
                                <img src="https://flowbite.com/docs/images/blog/image-1.jpg" className="w-16 h-16 rounded-lg object-cover" alt="Thumb" />
                                <div className="flex-1">
                                    <h4 className="text-sm font-bold dark:text-white">Premium Wireless Headphones</h4>
                                    <p className="text-xs text-gray-500">Qty: 1</p>
                                    <p className="text-sm font-bold dark:text-white mt-1">$299.00</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <img src="https://flowbite.com/docs/images/blog/image-2.jpg" className="w-16 h-16 rounded-lg object-cover" alt="Thumb" />
                                <div className="flex-1">
                                    <h4 className="text-sm font-bold dark:text-white">MacBook Pro 14"</h4>
                                    <p className="text-xs text-gray-500">Qty: 1</p>
                                    <p className="text-sm font-bold dark:text-white mt-1">$1,999.00</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3 pt-6 border-t border-gray-100 dark:border-gray-700">
                            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                                <span>Subtotal</span>
                                <span className="font-bold text-gray-900 dark:text-white">$2,298.00</span>
                            </div>
                            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                                <span>Shipping</span>
                                <span className="font-bold text-green-600">Free</span>
                            </div>
                            <div className="flex justify-between text-lg font-extrabold text-gray-900 dark:text-white pt-3">
                                <span>Total</span>
                                <span>$2,298.00</span>
                            </div>
                        </div>

                        <div className="mt-8 space-y-4">
                            <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-lg text-sm font-medium">
                                <HiTruck className="w-5 h-5" />
                                Estimated delivery: Oct 20 - Oct 22
                            </div>
                            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 text-gray-500 rounded-lg text-xs">
                                <HiLockClosed className="w-5 h-5 flex-shrink-0" />
                                Your personal data will be used to process your order and support your experience throughout this website.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPages;
