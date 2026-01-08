import { Button, Card } from "flowbite-react";
import type { FC } from "react";
import {
    HiChartPie,
    HiShoppingBag,
    HiUsers,
    HiCurrencyDollar,
    HiTrendingUp,
    HiTrendingDown,
} from "react-icons/hi";
import BlockSection from "../../../components/block-section";

const DashboardLayoutsPage: FC = function () {
    return (
        <>
            <AnalyticsDashboard />
            <EcommerceDashboard />
            <UserDashboard />
            <AdminPanel />
            <SalesDashboard />
        </>
    );
};

const AnalyticsDashboard: FC = function () {
    return (
        <BlockSection
            title="Analytics Dashboard"
            description="Complete analytics dashboard with stats and charts"
        >
            <div className="space-y-4">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Total Users
                                </p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    12,345
                                </p>
                                <p className="mt-1 flex items-center text-sm text-green-600">
                                    <HiTrendingUp className="mr-1 h-4 w-4" />
                                    12.5% from last month
                                </p>
                            </div>
                            <div className="rounded-full bg-primary-100 p-3 dark:bg-primary-900">
                                <HiUsers className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Revenue
                                </p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    $45,231
                                </p>
                                <p className="mt-1 flex items-center text-sm text-green-600">
                                    <HiTrendingUp className="mr-1 h-4 w-4" />
                                    8.2% from last month
                                </p>
                            </div>
                            <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                                <HiCurrencyDollar className="h-6 w-6 text-green-600 dark:text-green-400" />
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Orders
                                </p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    1,234
                                </p>
                                <p className="mt-1 flex items-center text-sm text-red-600">
                                    <HiTrendingDown className="mr-1 h-4 w-4" />
                                    3.1% from last month
                                </p>
                            </div>
                            <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900">
                                <HiShoppingBag className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Conversion
                                </p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    3.24%
                                </p>
                                <p className="mt-1 flex items-center text-sm text-green-600">
                                    <HiTrendingUp className="mr-1 h-4 w-4" />
                                    0.8% from last month
                                </p>
                            </div>
                            <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900">
                                <HiChartPie className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Chart Placeholder */}
                <Card>
                    <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                        Revenue Overview
                    </h3>
                    <div className="flex h-64 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                        <p className="text-gray-500 dark:text-gray-400">Chart Placeholder</p>
                    </div>
                </Card>

                {/* Recent Activity */}
                <Card>
                    <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                        Recent Activity
                    </h3>
                    <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center justify-between border-b border-gray-200 pb-3 dark:border-gray-700">
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">
                                        New order #{1000 + i}
                                    </p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {i} hours ago
                                    </p>
                                </div>
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                    ${(Math.random() * 500).toFixed(2)}
                                </span>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </BlockSection>
    );
};

const EcommerceDashboard: FC = function () {
    return (
        <BlockSection
            title="E-commerce Dashboard"
            description="Dashboard focused on e-commerce metrics"
        >
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <Card>
                        <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                            Sales Performance
                        </h3>
                        <div className="flex h-80 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                            <p className="text-gray-500 dark:text-gray-400">Sales Chart Placeholder</p>
                        </div>
                    </Card>
                </div>
                <div className="space-y-4">
                    <Card>
                        <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                            Top Products
                        </h3>
                        <div className="space-y-3">
                            {["Laptop", "Phone", "Headphones"].map((product, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <span className="text-sm text-gray-900 dark:text-white">{product}</span>
                                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                                        {Math.floor(Math.random() * 100)} sales
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Card>
                    <Card>
                        <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                            Quick Actions
                        </h3>
                        <div className="space-y-2">
                            <Button className="w-full" color="primary">
                                Add Product
                            </Button>
                            <Button className="w-full" color="gray">
                                View Orders
                            </Button>
                            <Button className="w-full" color="gray">
                                Manage Inventory
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </BlockSection>
    );
};

const UserDashboard: FC = function () {
    return (
        <BlockSection
            title="User Dashboard"
            description="Personal dashboard for end users"
        >
            <div className="space-y-4">
                <Card>
                    <div className="flex items-center gap-4">
                        <div className="h-20 w-20 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                Welcome back, John!
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                Here's what's happening with your account today
                            </p>
                        </div>
                    </div>
                </Card>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <Card>
                        <h3 className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                            Active Projects
                        </h3>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">12</p>
                    </Card>
                    <Card>
                        <h3 className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                            Tasks Completed
                        </h3>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">48</p>
                    </Card>
                    <Card>
                        <h3 className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                            Team Members
                        </h3>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">8</p>
                    </Card>
                </div>
            </div>
        </BlockSection>
    );
};

const AdminPanel: FC = function () {
    return (
        <BlockSection
            title="Admin Panel"
            description="Administrative dashboard with system overview"
        >
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
                <Card className="lg:col-span-3">
                    <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                        System Status
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <div className="mb-1 flex justify-between">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    CPU Usage
                                </span>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    45%
                                </span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                                <div className="h-2 rounded-full bg-primary-600" style={{ width: "45%" }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="mb-1 flex justify-between">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Memory Usage
                                </span>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    68%
                                </span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                                <div className="h-2 rounded-full bg-yellow-600" style={{ width: "68%" }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="mb-1 flex justify-between">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    Disk Space
                                </span>
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    82%
                                </span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                                <div className="h-2 rounded-full bg-red-600" style={{ width: "82%" }}></div>
                            </div>
                        </div>
                    </div>
                </Card>
                <Card>
                    <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                        Quick Stats
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Total Users</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">1,234</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Active Sessions</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">89</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Server Uptime</p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">99.9%</p>
                        </div>
                    </div>
                </Card>
            </div>
        </BlockSection>
    );
};

const SalesDashboard: FC = function () {
    return (
        <BlockSection
            title="Sales Dashboard"
            description="Dashboard focused on sales metrics and performance"
        >
            <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {[
                        { label: "Today's Sales", value: "$2,456", change: "+12%" },
                        { label: "This Week", value: "$12,345", change: "+8%" },
                        { label: "This Month", value: "$45,678", change: "+15%" },
                        { label: "This Year", value: "$456,789", change: "+22%" },
                    ].map((stat, i) => (
                        <Card key={i}>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                {stat.label}
                            </p>
                            <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                {stat.value}
                            </p>
                            <p className="mt-1 text-sm text-green-600">{stat.change}</p>
                        </Card>
                    ))}
                </div>
                <Card>
                    <h3 className="mb-4 text-lg font-semibold text-gray-900 dark:text-white">
                        Sales Trend
                    </h3>
                    <div className="flex h-64 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                        <p className="text-gray-500 dark:text-gray-400">Sales Trend Chart</p>
                    </div>
                </Card>
            </div>
        </BlockSection>
    );
};

export default DashboardLayoutsPage;
