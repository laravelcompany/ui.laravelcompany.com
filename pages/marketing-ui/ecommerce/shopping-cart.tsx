import { Button, TextInput } from "flowbite-react";
import type { FC } from "react";
import { HiArrowLeft, HiOutlineShoppingBag, HiPlus, HiMinus, HiTrash } from "react-icons/hi";

const ShoppingCart: FC = function () {
    return (
        <div className="p-4 py-8 dark:bg-gray-900 max-w-screen-xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
                <HiOutlineShoppingBag className="w-8 h-8 text-blue-600" />
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Shopping Cart</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-8 space-y-6">
                    {[1, 2].map((i) => (
                        <div key={i} className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm">
                            <div className="w-full sm:w-32 h-32 flex-shrink-0 bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden">
                                <img
                                    src={`https://flowbite.com/docs/images/blog/image-${i}.jpg`}
                                    alt="Product"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="flex-1 w-full">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                        Premium Wireless Headphones V{i}
                                    </h3>
                                    <button className="text-gray-400 hover:text-red-500 transition-colors">
                                        <HiTrash className="w-5 h-5" />
                                    </button>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 items-center flex gap-2">
                                    <span className="inline-block w-4 h-4 rounded-full bg-blue-500"></span> Blue | Size: One Size
                                </p>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center border border-gray-200 dark:border-gray-600 rounded-lg">
                                        <button className="p-2 text-gray-500 hover:text-black dark:hover:text-white"><HiMinus className="w-4 h-4" /></button>
                                        <span className="w-8 text-center text-sm font-semibold dark:text-white">1</span>
                                        <button className="p-2 text-gray-500 hover:text-black dark:hover:text-white"><HiPlus className="w-4 h-4" /></button>
                                    </div>
                                    <p className="text-xl font-bold text-gray-900 dark:text-white">$299.00</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    <a href="#" className="inline-flex items-center text-blue-600 font-semibold hover:underline">
                        <HiArrowLeft className="mr-2 w-5 h-5" />
                        Continue Shopping
                    </a>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-4">
                    <div className="p-6 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl sticky top-8">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Order Summary</h2>

                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                <span>Subtotal</span>
                                <span className="font-semibold text-gray-900 dark:text-white">$598.00</span>
                            </div>
                            <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                <span>Shipping</span>
                                <span className="font-semibold text-green-600">Free</span>
                            </div>
                            <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                <span>Tax</span>
                                <span className="font-semibold text-gray-900 dark:text-white">$12.00</span>
                            </div>
                            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex justify-between">
                                <span className="text-lg font-bold text-gray-900 dark:text-white">Total</span>
                                <span className="text-lg font-bold text-gray-900 dark:text-white">$610.00</span>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <Label htmlFor="coupon" className="sr-only">Coupon Code</Label>
                                <div className="flex gap-2">
                                    <TextInput id="coupon" placeholder="Coupon Code" className="flex-1" />
                                    <Button color="gray" outline>Apply</Button>
                                </div>
                            </div>
                            <Button size="xl" className="w-full">
                                Proceed to Checkout
                            </Button>
                        </div>

                        <div className="mt-6 flex flex-col items-center gap-4">
                            <p className="text-xs text-gray-500 dark:text-gray-400">Secure Checkout Powered by Stripe</p>
                            <div className="flex gap-3 opacity-50 grayscale hover:grayscale-0 transition-all">
                                {/* Simplified icons for demo */}
                                <div className="w-10 h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
                                <div className="w-10 h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
                                <div className="w-10 h-6 bg-gray-300 dark:bg-gray-600 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Label: FC<{ htmlFor: string; className?: string; children: React.ReactNode }> = ({ htmlFor, className, children }) => (
    <label htmlFor={htmlFor} className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white ${className}`}>
        {children}
    </label>
);

export default ShoppingCart;
