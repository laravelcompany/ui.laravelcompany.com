import { Breadcrumb, Button, Checkbox, Dropdown, Label, Select, TextInput } from "flowbite-react";
import type { FC } from "react";
import { HiAdjustments, HiChevronDown, HiHome, HiSearch, HiViewGrid, HiViewList } from "react-icons/hi";

const ProductLists: FC = function () {
    return (
        <div className="p-4 dark:bg-gray-900 max-w-screen-2xl mx-auto">
            <Breadcrumb aria-label="Breadcrumb" className="mb-4">
                <Breadcrumb.Item href="#" icon={HiHome}>
                    Home
                </Breadcrumb.Item>
                <Breadcrumb.Item href="#">E-commerce</Breadcrumb.Item>
                <Breadcrumb.Item>Product Lists</Breadcrumb.Item>
            </Breadcrumb>

            <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">
                All Products
            </h1>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2">
                    <TextInput
                        id="search"
                        placeholder="Search products..."
                        icon={HiSearch}
                        className="w-full md:w-80"
                    />
                    <Button color="gray" outline>
                        <HiAdjustments className="mr-2 h-4 w-4" />
                        Filters
                    </Button>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <span>Sort by:</span>
                        <Dropdown label="Newest" inline>
                            <Dropdown.Item>Price: Low to High</Dropdown.Item>
                            <Dropdown.Item>Price: High to Low</Dropdown.Item>
                            <Dropdown.Item>Most Popular</Dropdown.Item>
                            <Dropdown.Item>Newest</Dropdown.Item>
                        </Dropdown>
                    </div>
                    <div className="hidden border-l border-gray-200 pl-4 md:flex items-center gap-2 dark:border-gray-700">
                        <button className="p-2 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 rounded-lg">
                            <HiViewGrid className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-blue-600 bg-blue-50 dark:bg-gray-700 rounded-lg">
                            <HiViewList className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar Filters */}
                <aside className="hidden lg:block space-y-6">
                    <div>
                        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">Categories</h3>
                        <div className="space-y-3">
                            {['Electronics', 'Clothing', 'Home & Garden', 'Books', 'Toys'].map((cat) => (
                                <div key={cat} className="flex items-center gap-2">
                                    <Checkbox id={cat} />
                                    <Label htmlFor={cat}>{cat}</Label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">Price Range</h3>
                        <div className="flex items-center gap-2">
                            <TextInput id="min" placeholder="Min" />
                            <span className="text-gray-500">-</span>
                            <TextInput id="max" placeholder="Max" />
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">Rating</h3>
                        <div className="space-y-3">
                            {[4, 3, 2, 1].map((star) => (
                                <div key={star} className="flex items-center gap-2 cursor-pointer hover:text-blue-600 dark:text-gray-400">
                                    <Checkbox id={`star-${star}`} />
                                    <Label htmlFor={`star-${star}`} className="flex items-center">
                                        {star}+ Stars
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* Product Grid */}
                <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="group relative border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden flex flex-col">
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 group-hover:opacity-75 h-48">
                                    <img
                                        src={`https://flowbite.com/docs/images/blog/image-${(i % 3) + 1}.jpg`}
                                        alt="Product"
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="p-4 flex flex-col flex-1">
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <p className="text-xs text-blue-600 font-semibold mb-1 uppercase tracking-tight">Electronics</p>
                                            <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                                                <a href="#">
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    Premium Wireless Headphones V{i}
                                                </a>
                                            </h3>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900 dark:text-white">$299</p>
                                    </div>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
                                        Experience crystal clear sound with adaptive noise canceling technology.
                                    </p>
                                    <div className="mt-auto">
                                        <Button size="xs" className="w-full">Add to Cart</Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 flex justify-center">
                        <Button color="gray">Load More Products</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductLists;
