import { Button, Card, Checkbox, Label, Radio, TextInput } from "flowbite-react";
import type { FC } from "react";
import { HiSearch } from "react-icons/hi";
import BlockSection from "../../../components/block-section";

const SearchFiltersPage: FC = function () {
    return (
        <>
            <SimpleSearch />
            <FilterSidebar />
            <AdvancedSearchForm />
        </>
    );
};

const SimpleSearch: FC = function () {
    return (
        <BlockSection
            title="Simple Search Bar"
            description="Standard search input with filter toggle"
        >
            <div className="mx-auto max-w-screen-md">
                <form className="flex items-center">
                    <label htmlFor="simple-search" className="sr-only">Search</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <HiSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        </div>
                        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required />
                    </div>
                    <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-primary-700 rounded-lg border border-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        <HiSearch className="w-5 h-5" />
                        <span className="sr-only">Search</span>
                    </button>
                </form>
            </div>
        </BlockSection>
    );
};

const FilterSidebar: FC = function () {
    return (
        <BlockSection title="Filter Dropdown / Sidebar" description="Filter options for lists">
            <Card>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-64 flex-shrink-0">
                        <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-semibold text-gray-900 dark:text-white">Filters</h3>
                                <button className="text-sm text-gray-500 hover:underline">Clear all</button>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <Checkbox id="cat-1" />
                                            <Label htmlFor="cat-1" className="ml-2">Electronics</Label>
                                        </div>
                                        <div className="flex items-center">
                                            <Checkbox id="cat-2" />
                                            <Label htmlFor="cat-2" className="ml-2">Clothing</Label>
                                        </div>
                                        <div className="flex items-center">
                                            <Checkbox id="cat-3" />
                                            <Label htmlFor="cat-3" className="ml-2">Books</Label>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Price Range</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <Radio id="price-1" name="price" />
                                            <Label htmlFor="price-1" className="ml-2">Under $25</Label>
                                        </div>
                                        <div className="flex items-center">
                                            <Radio id="price-2" name="price" />
                                            <Label htmlFor="price-2" className="ml-2">$25 - $100</Label>
                                        </div>
                                        <div className="flex items-center">
                                            <Radio id="price-3" name="price" />
                                            <Label htmlFor="price-3" className="ml-2">$100+</Label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="p-4 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg h-64 flex items-center justify-center text-gray-500">
                            Results Area
                        </div>
                    </div>
                </div>
            </Card>
        </BlockSection>
    )
}

const AdvancedSearchForm: FC = function () {
    return (
        <BlockSection title="Advanced Search Form" description="Form with multiple filter criteria">
            <Card>
                <form>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-3">
                            <div className="mb-2 block">
                                <Label htmlFor="search-keyword" value="Keywords" />
                            </div>
                            <TextInput id="search-keyword" placeholder="e.g. Project Manager" icon={HiSearch} />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="location" value="Location" />
                            </div>
                            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option>United States</option>
                                <option>Canada</option>
                                <option>United Kingdom</option>
                            </select>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="type" value="Job Type" />
                            </div>
                            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option>Full Time</option>
                                <option>Part Time</option>
                                <option>Contract</option>
                            </select>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="salary" value="Salary Range" />
                            </div>
                            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option>$50k - $80k</option>
                                <option>$80k - $120k</option>
                                <option>$120k+</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-6 flex justify-end gap-2">
                        <Button color="gray">Reset</Button>
                        <Button color="primary">Search Jobs</Button>
                    </div>
                </form>
            </Card>
        </BlockSection>
    )
}

export default SearchFiltersPage;
