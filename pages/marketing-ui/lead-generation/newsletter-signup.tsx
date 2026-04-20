import { Button, TextInput } from "flowbite-react";
import type { FC } from "react";
import { HiMail, HiCheck } from "react-icons/hi";

const NewsletterSignup: FC = function () {
    return (
        <div className="py-12 dark:bg-gray-900">
            <div className="bg-blue-700 dark:bg-blue-900 rounded-2xl p-8 md:p-12">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white">
                        Subscribe to our newsletter
                    </h2>
                    <p className="mb-6 text-lg font-normal text-blue-100 dark:text-blue-200">
                        Get the latest updates, news and product offers delivered directly to your inbox.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <div className="flex-1">
                            <TextInput
                                type="email"
                                placeholder="Enter your email"
                                icon={HiMail}
                                required
                            />
                        </div>
                        <Button size="lg" color="blue" className="whitespace-nowrap">
                            Subscribe
                        </Button>
                    </form>
                    <p className="mt-4 text-sm text-blue-200 dark:text-blue-300">
                        No spam, unsubscribe at any time.
                    </p>
                </div>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                        <HiOutlineCheck className="w-6 h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Weekly Updates</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                        Get weekly digests with the latest industry trends and tips.
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                        <HiEnvelope className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Early Access</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                        Be the first to know about new features and product launches.
                    </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                        <HiOutlineCheck className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Exclusive Offers</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                        Receive special discounts and exclusive deals for subscribers.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSignup;
