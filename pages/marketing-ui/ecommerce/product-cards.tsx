import { Badge, Button, Card, Rating } from "flowbite-react";
import type { FC } from "react";
import { HiOutlineArrowRight, HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi";

const ProductCards: FC = function () {
    return (
        <div className="p-4 dark:bg-gray-900 max-w-screen-2xl mx-auto">
            <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Product Card Components
            </h1>
            <p className="mb-8 text-lg text-gray-500 dark:text-gray-400">
                Showcase your products with these beautiful and functional card layouts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Standard Product Card */}
                <Card
                    className="max-w-sm"
                    imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
                    imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
                >
                    <a href="#">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            Apple Watch Series 7 GPS, 41mm Starlight Aluminium Case
                        </h5>
                    </a>
                    <div className="mb-5 mt-2.5 flex items-center">
                        <Rating>
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star />
                            <Rating.Star filled={false} />
                        </Rating>
                        <span className="ml-3 mr-2 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                            5.0
                        </span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            $599
                        </span>
                        <Button size="sm">
                            Add to cart
                        </Button>
                    </div>
                </Card>

                {/* Product Card with Badge and Wishlist */}
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden relative group">
                    <Badge color="info" className="absolute top-4 left-4 z-10">
                        NEW
                    </Badge>
                    <button className="absolute top-4 right-4 z-10 p-2 bg-white/80 dark:bg-gray-700/80 rounded-full hover:text-red-600 transition-colors">
                        <HiOutlineHeart className="w-5 h-5" />
                    </button>
                    <div className="relative overflow-hidden">
                        <img
                            className="rounded-t-lg group-hover:scale-105 transition-transform duration-300 w-full h-48 object-cover"
                            src="https://flowbite.com/docs/images/blog/image-2.jpg"
                            alt="MacBook Pro"
                        />
                    </div>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                MacBook Pro 14" M2
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            The revolutionary M2 chip with 12-core CPU and 19-core GPU.
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">$1,999</span>
                            <Button color="gray" outline size="sm">
                                View Details
                                <HiOutlineArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Minimalist eCommerce Card */}
                <div className="max-w-sm group">
                    <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-700">
                        <img
                            src="https://flowbite.com/docs/images/blog/image-3.jpg"
                            alt="Headphones"
                            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <Button className="w-full" size="sm">
                                <HiOutlineShoppingCart className="mr-2 h-4 w-4" />
                                Quick Add
                            </Button>
                        </div>
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                                <a href="#">Sony WH-1000XM5</a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Midnight Blue</p>
                        </div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">$349</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCards;
