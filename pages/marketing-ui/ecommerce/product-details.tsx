import { Badge, Button, Rating, Tabs } from "flowbite-react";
import type { FC } from "react";
import { HiHeart, HiMinus, HiPlus, HiShieldCheck, HiShoppingCart, HiTruck } from "react-icons/hi";

const ProductDetails: FC = function () {
    return (
        <div className="p-4 py-8 dark:bg-gray-900 max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                {/* Gallery Section */}
                <div className="space-y-4">
                    <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                        <img
                            src="https://flowbite.com/docs/images/blog/image-1.jpg"
                            alt="Main product"
                            className="w-full h-[400px] lg:h-[600px] object-cover"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[1, 2, 3, 1].map((i, index) => (
                            <button key={index} className={`aspect-square rounded-lg overflow-hidden border-2 ${index === 0 ? 'border-blue-600' : 'border-transparent'}`}>
                                <img src={`https://flowbite.com/docs/images/blog/image-${i}.jpg`} alt="Thumb" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Info Section */}
                <div className="flex flex-col">
                    <div className="mb-6">
                        <Badge color="info" className="w-fit mb-4">Best Seller</Badge>
                        <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
                            Apple iMac 24" M1 Chip
                        </h1>
                        <div className="flex items-center gap-4 mb-4">
                            <Rating>
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                                <Rating.Star />
                            </Rating>
                            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">4.9 (128 reviews)</span>
                            <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Write a review</a>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-4xl font-extrabold text-gray-900 dark:text-white">$1,299.00</span>
                            <span className="text-xl text-gray-500 line-through dark:text-gray-400">$1,499.00</span>
                            <Badge color="failure" size="sm">Save 15%</Badge>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Color</h3>
                            <div className="flex gap-3">
                                {['bg-blue-500', 'bg-silver-400', 'bg-pink-500', 'bg-green-500'].map((color, i) => (
                                    <button key={i} className={`w-8 h-8 rounded-full border-2 ${i === 0 ? 'border-blue-600' : 'border-gray-200 dark:border-gray-700'} ${color}`} />
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Storage</h3>
                            <div className="flex flex-wrap gap-3">
                                {['256GB', '512GB', '1TB', '2TB'].map((size, i) => (
                                    <button key={i} className={`px-4 py-2 rounded-lg border-2 text-sm font-medium ${i === 1 ? 'border-blue-600 text-blue-600' : 'border-gray-200 dark:border-gray-700 dark:text-gray-300'}`}>
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                            <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg h-12">
                                <button className="p-3 text-gray-500 hover:text-black dark:hover:text-white"><HiMinus /></button>
                                <input type="text" className="w-12 text-center border-none bg-transparent dark:text-white focus:ring-0" value="1" readOnly />
                                <button className="p-3 text-gray-500 hover:text-black dark:hover:text-white"><HiPlus /></button>
                            </div>
                            <Button size="xl" className="flex-1">
                                <HiShoppingCart className="mr-2 h-5 w-5" />
                                Add to Cart
                            </Button>
                            <Button color="gray" size="xl" outline className="px-4">
                                <HiHeart className="h-5 w-5" />
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                <HiTruck className="w-6 h-6 text-blue-600" />
                                <div>
                                    <h4 className="text-sm font-bold dark:text-white">Free Delivery</h4>
                                    <p className="text-xs text-gray-500">Order over $100</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                <HiShieldCheck className="w-6 h-6 text-blue-600" />
                                <div>
                                    <h4 className="text-sm font-bold dark:text-white">1 Year Warranty</h4>
                                    <p className="text-xs text-gray-500">Full tech support</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <Tabs aria-label="Product info" style="underline">
                            <Tabs.Item active title="Description">
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                    The new iMac features a 24-inch 4.5K Retina display with over 11.3 million pixels and 500 nits of brightness.
                                    It's powered by the revolutionary M1 chip, which integrates the CPU, GPU, Neural Engine, and more onto a single system on a chip.
                                </p>
                            </Tabs.Item>
                            <Tabs.Item title="Specifications">
                                <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
                                    <li className="flex justify-between border-b pb-2"><span>Display</span><span className="font-bold text-gray-900 dark:text-white">24" 4.5K Retina</span></li>
                                    <li className="flex justify-between border-b pb-2"><span>Chip</span><span className="font-bold text-gray-900 dark:text-white">Apple M1 (8-core CPU)</span></li>
                                    <li className="flex justify-between border-b pb-2"><span>Memory</span><span className="font-bold text-gray-900 dark:text-white">8GB Unified Memory</span></li>
                                </ul>
                            </Tabs.Item>
                            <Tabs.Item title="Reviews">
                                <p className="text-gray-500">Reviews content goes here...</p>
                            </Tabs.Item>
                        </Tabs>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
