import { Button } from "flowbite-react";
import type { FC } from "react";
import { HiOutlineDownload, HiOutlineArrowRight } from "react-icons/hi";

const DownloadCTA: FC = function () {
    return (
        <div className="py-12 dark:bg-gray-900 space-y-12">
            <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <HiOutlineDownload className="w-4 h-4" />
                        Free Download
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        2026 UI Design Trends Report
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Discover the latest trends in UI design with our comprehensive report. Includes insights from industry experts and real-world case studies.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="xl" color="blue">
                            <HiOutlineDownload className="mr-2 h-5 w-5" />
                            Download PDF
                        </Button>
                        <Button size="xl" color="gray" outline>
                            Preview Sample
                            <HiOutlineArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                    <p className="mt-6 text-sm text-gray-400">
                        PDF Format • 4.2 MB • Updated April 2026
                    </p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">📊</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        Market Analysis
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                        Comprehensive data on design trends across industries with year-over-year comparisons.
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">🎨</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        Design Systems
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                        In-depth analysis of popular design systems and their implementation strategies.
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">💡</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                        Expert Interviews
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                        Exclusive insights from leading designers at top tech companies.
                    </p>
                </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                    Get the Complete Package
                </h3>
                <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                    Subscribe to our premium membership to get access to all reports, templates, and exclusive content.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" color="white">
                        Start Free Trial
                    </Button>
                    <Button size="lg" color="blue" outline className="text-white border-white hover:bg-white/10">
                        Learn More
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DownloadCTA;
