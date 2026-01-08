import { Button, Card, Table } from "flowbite-react";
import type { FC } from "react";
import { HiEye, HiPencil, HiTrash } from "react-icons/hi";
import BlockSection from "../../../components/block-section";

const DataTablesPage: FC = function () {
    return (
        <>
            <BasicDataTable />
            <DataTableWithActions />
            <DataTableWithSearch />
            <DataTableWithPagination />
            <DataTableWithSorting />
            <DataTableWithFilters />
        </>
    );
};

const BasicDataTable: FC = function () {
    return (
        <BlockSection
            title="Basic Data Table"
            description="Simple data table with headers and rows"
        >
            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Product name</Table.HeadCell>
                        <Table.HeadCell>Category</Table.HeadCell>
                        <Table.HeadCell>Price</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Apple MacBook Pro 17"
                            </Table.Cell>
                            <Table.Cell>Laptop</Table.Cell>
                            <Table.Cell>$2999</Table.Cell>
                            <Table.Cell>
                                <span className="inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                                    In Stock
                                </span>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Microsoft Surface Pro
                            </Table.Cell>
                            <Table.Cell>Laptop PC</Table.Cell>
                            <Table.Cell>$1999</Table.Cell>
                            <Table.Cell>
                                <span className="inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                                    In Stock
                                </span>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Magic Mouse 2
                            </Table.Cell>
                            <Table.Cell>Accessories</Table.Cell>
                            <Table.Cell>$99</Table.Cell>
                            <Table.Cell>
                                <span className="inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300">
                                    Out of Stock
                                </span>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </BlockSection>
    );
};

const DataTableWithActions: FC = function () {
    return (
        <BlockSection
            title="Data Table with Actions"
            description="Table with action buttons for each row"
        >
            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>User</Table.HeadCell>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Role</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Actions</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                John Doe
                            </Table.Cell>
                            <Table.Cell>john@example.com</Table.Cell>
                            <Table.Cell>Admin</Table.Cell>
                            <Table.Cell>
                                <div className="flex items-center gap-2">
                                    <Button size="xs" color="gray">
                                        <HiEye className="mr-1 h-4 w-4" />
                                        View
                                    </Button>
                                    <Button size="xs" color="gray">
                                        <HiPencil className="mr-1 h-4 w-4" />
                                        Edit
                                    </Button>
                                    <Button size="xs" color="failure">
                                        <HiTrash className="mr-1 h-4 w-4" />
                                        Delete
                                    </Button>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Jane Smith
                            </Table.Cell>
                            <Table.Cell>jane@example.com</Table.Cell>
                            <Table.Cell>Editor</Table.Cell>
                            <Table.Cell>
                                <div className="flex items-center gap-2">
                                    <Button size="xs" color="gray">
                                        <HiEye className="mr-1 h-4 w-4" />
                                        View
                                    </Button>
                                    <Button size="xs" color="gray">
                                        <HiPencil className="mr-1 h-4 w-4" />
                                        Edit
                                    </Button>
                                    <Button size="xs" color="failure">
                                        <HiTrash className="mr-1 h-4 w-4" />
                                        Delete
                                    </Button>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </BlockSection>
    );
};

const DataTableWithSearch: FC = function () {
    return (
        <BlockSection
            title="Data Table with Search"
            description="Table with integrated search functionality"
        >
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search users..."
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                />
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Name</Table.HeadCell>
                        <Table.HeadCell>Position</Table.HeadCell>
                        <Table.HeadCell>Department</Table.HeadCell>
                        <Table.HeadCell>Salary</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Alice Johnson
                            </Table.Cell>
                            <Table.Cell>Senior Developer</Table.Cell>
                            <Table.Cell>Engineering</Table.Cell>
                            <Table.Cell>$120,000</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Bob Williams
                            </Table.Cell>
                            <Table.Cell>Product Manager</Table.Cell>
                            <Table.Cell>Product</Table.Cell>
                            <Table.Cell>$110,000</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </BlockSection>
    );
};

const DataTableWithPagination: FC = function () {
    return (
        <BlockSection
            title="Data Table with Pagination"
            description="Table with pagination controls"
        >
            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Order ID</Table.HeadCell>
                        <Table.HeadCell>Customer</Table.HeadCell>
                        <Table.HeadCell>Total</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Table.Row key={i} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    #ORD-{1000 + i}
                                </Table.Cell>
                                <Table.Cell>Customer {i}</Table.Cell>
                                <Table.Cell>${(Math.random() * 1000).toFixed(2)}</Table.Cell>
                                <Table.Cell>
                                    <span className="inline-flex items-center rounded bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                                        Processing
                                    </span>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
            <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-700 dark:text-gray-400">
                    Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">5</span> of{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">100</span> entries
                </span>
                <div className="inline-flex gap-2">
                    <Button size="sm" color="gray">
                        Previous
                    </Button>
                    <Button size="sm" color="gray">
                        Next
                    </Button>
                </div>
            </div>
        </BlockSection>
    );
};

const DataTableWithSorting: FC = function () {
    return (
        <BlockSection
            title="Data Table with Sorting"
            description="Table with sortable column headers"
        >
            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>
                            <button className="flex items-center gap-1 hover:text-primary-600">
                                Product
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 8l5 5 5-5H5z" />
                                </svg>
                            </button>
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <button className="flex items-center gap-1 hover:text-primary-600">
                                Price
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 8l5 5 5-5H5z" />
                                </svg>
                            </button>
                        </Table.HeadCell>
                        <Table.HeadCell>
                            <button className="flex items-center gap-1 hover:text-primary-600">
                                Stock
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M5 8l5 5 5-5H5z" />
                                </svg>
                            </button>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Wireless Keyboard
                            </Table.Cell>
                            <Table.Cell>$79.99</Table.Cell>
                            <Table.Cell>45</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Gaming Mouse
                            </Table.Cell>
                            <Table.Cell>$59.99</Table.Cell>
                            <Table.Cell>32</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </BlockSection>
    );
};

const DataTableWithFilters: FC = function () {
    return (
        <BlockSection
            title="Data Table with Filters"
            description="Table with filter dropdowns and search"
        >
            <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-1 gap-2">
                    <select className="block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500 dark:focus:ring-primary-500">
                        <option>All Categories</option>
                        <option>Electronics</option>
                        <option>Clothing</option>
                        <option>Books</option>
                    </select>
                    <select className="block rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-primary-500 dark:focus:ring-primary-500">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                </div>
                <input
                    type="text"
                    placeholder="Search..."
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 md:w-64 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                />
            </div>
            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Product</Table.HeadCell>
                        <Table.HeadCell>Category</Table.HeadCell>
                        <Table.HeadCell>Status</Table.HeadCell>
                        <Table.HeadCell>Price</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                Laptop Stand
                            </Table.Cell>
                            <Table.Cell>Electronics</Table.Cell>
                            <Table.Cell>
                                <span className="inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                                    Active
                                </span>
                            </Table.Cell>
                            <Table.Cell>$49.99</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </BlockSection>
    );
};

export default DataTablesPage;
