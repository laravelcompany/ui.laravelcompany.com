import type { FC } from "react";

const HorizontalSteps: FC = function () {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
                <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-16">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        Our Simple Process
                    </h2>
                    <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
                        We’ve streamlined our approach to ensure efficiency and clarity at every stage.
                    </p>
                </div>
                <ol className="relative flex flex-col items-center space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0">
                    <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 ring-0 ring-white dark:bg-blue-900 dark:ring-gray-900 sm:ring-8">
                                <span className="text-sm font-semibold text-blue-800 dark:text-blue-300">1</span>
                            </div>
                            <div className="hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex"></div>
                        </div>
                        <div className="mt-3 sm:pr-8">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Discovery</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                A thorough exploration of your needs and objectives.
                            </p>
                        </div>
                    </li>
                    <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 ring-0 ring-white dark:bg-blue-900 dark:ring-gray-900 sm:ring-8">
                                <span className="text-sm font-semibold text-blue-800 dark:text-blue-300">2</span>
                            </div>
                            <div className="hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex"></div>
                        </div>
                        <div className="mt-3 sm:pr-8">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Design</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                Crafting visual representations and architecture.
                            </p>
                        </div>
                    </li>
                    <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 ring-0 ring-white dark:bg-blue-900 dark:ring-gray-900 sm:ring-8">
                                <span className="text-sm font-semibold text-blue-800 dark:text-blue-300">3</span>
                            </div>
                            <div className="hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex"></div>
                        </div>
                        <div className="mt-3 sm:pr-8">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Build</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                Executing the development phase with precision.
                            </p>
                        </div>
                    </li>
                    <li className="relative mb-6 sm:mb-0">
                        <div className="flex items-center">
                            <div className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 ring-0 ring-white dark:bg-blue-900 dark:ring-gray-900 sm:ring-8">
                                <span className="text-sm font-semibold text-blue-800 dark:text-blue-300">4</span>
                            </div>
                        </div>
                        <div className="mt-3 sm:pr-8">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Deliver</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                Finalizing and handing over the project.
                            </p>
                        </div>
                    </li>
                </ol>
            </div>
        </section>
    );
};

export default HorizontalSteps;
