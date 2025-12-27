import type { FC } from "react";

const HowItWorksDefault: FC = function () {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
                <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-16">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        How it works
                    </h2>
                    <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
                        We use an agile approach to test assumptions and connect with the needs of your audience early and often.
                    </p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <div>
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-2.5 text-primary-600 dark:bg-primary-900 dark:text-primary-300 lg:h-12 lg:w-12">
                            <svg
                                className="h-5 w-5 lg:h-6 lg:w-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05l-3.293 3.293a1 1 0 01-1.414 0l-3.293-3.293a1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8a2 2 0 100 4 2 2 0 000-4zm10 0a2 2 0 100 4 2 2 0 000-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">1. Planning</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            We start by understanding your goals and requirements. This phase involves research, wireframing, and setting the direction for the project.
                        </p>
                    </div>
                    <div>
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-2.5 text-primary-600 dark:bg-primary-900 dark:text-primary-300 lg:h-12 lg:w-12">
                            <svg
                                className="h-5 w-5 lg:h-6 lg:w-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 00-1 1v.5a1.5 1.5 0 01-3 0V16a1 1 0 00-1-1H6a1 1 0 01-1-1v-3a1 1 0 011-1h.5a1.5 1.5 0 000-3H6a1 1 0 01-1-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">2. Development</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            Our experts build your solution using modern technologies. We focus on performance, security, and scalability throughout the development process.
                        </p>
                    </div>
                    <div>
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 p-2.5 text-primary-600 dark:bg-primary-900 dark:text-primary-300 lg:h-12 lg:w-12">
                            <svg
                                className="h-5 w-5 lg:h-6 lg:w-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">3. Launch</h3>
                        <p className="text-gray-500 dark:text-gray-400">
                            After rigorous testing, we help you launch your product to the world. We also provide ongoing support and optimizations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksDefault;
