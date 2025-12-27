import type { FC } from "react";

const ComprehensiveComparison: FC = function () {
    return (
        <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Compare our plans
                    </h2>
                    <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                        Choose the best plan that fits your business needs. Transparent pricing with no hidden fees.
                    </p>
                </div>

                <div className="mt-8 overflow-hidden sm:mt-12">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
                            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Features</th>
                                    <th scope="col" className="px-6 py-3 text-center">Starter</th>
                                    <th scope="col" className="px-6 py-3 text-center">Pro</th>
                                    <th scope="col" className="px-6 py-3 text-center">Enterprise</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                                        Core Dashboard
                                    </th>
                                    <td className="px-6 py-4 text-center">
                                        <svg className="mx-auto h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <svg className="mx-auto h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <svg className="mx-auto h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    </td>
                                </tr>
                                <tr className="border-b bg-gray-50 dark:border-gray-700 dark:bg-gray-700">
                                    <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                                        Advanced Analytics
                                    </th>
                                    <td className="px-6 py-4 text-center">
                                        <svg className="mx-auto h-5 w-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <svg className="mx-auto h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <svg className="mx-auto h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    </td>
                                </tr>
                                <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                                        Custom Domains
                                    </th>
                                    <td className="px-6 py-4 text-center">1 domain</td>
                                    <td className="px-6 py-4 text-center">5 domains</td>
                                    <td className="px-6 py-4 text-center">Unlimited</td>
                                </tr>
                                <tr className="border-b bg-gray-50 dark:border-gray-700 dark:bg-gray-700">
                                    <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                                        API Access
                                    </th>
                                    <td className="px-6 py-4 text-center">
                                        <svg className="mx-auto h-5 w-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                    </td>
                                    <td className="px-6 py-4 text-center">100 req/min</td>
                                    <td className="px-6 py-4 text-center">Custom limit</td>
                                </tr>
                                <tr className="bg-white dark:bg-gray-800">
                                    <th scope="row" className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                                        Support
                                    </th>
                                    <td className="px-6 py-4 text-center">Community</td>
                                    <td className="px-6 py-4 text-center">Priority email</td>
                                    <td className="px-6 py-4 text-center">24/7 Phone & Email</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComprehensiveComparison;
