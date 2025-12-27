import { Button, TextInput } from "flowbite-react";
import type { FC } from "react";
import { HiMail } from "react-icons/hi";

const VisualNewsletter: FC = function () {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col justify-center">
                        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                            Stay ahead with our newsletter
                        </h2>
                        <p className="mb-8 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
                            Get the latest updates, design tips, and exclusive offers delivered straight to your inbox. Join 50,000+ creators.
                        </p>
                        <form action="#">
                            <div className="mb-3 flex items-center">
                                <div className="relative w-full">
                                    <TextInput
                                        id="email"
                                        placeholder="Enter your email"
                                        type="email"
                                        required
                                        icon={HiMail}
                                    />
                                </div>
                                <Button color="info" className="ml-3 whitespace-nowrap">
                                    Subscribe
                                </Button>
                            </div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                We care about your data in our{" "}
                                <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    privacy policy
                                </a>
                                .
                            </p>
                        </form>
                    </div>
                    <div className="hidden lg:block">
                        <img
                            className="mx-auto h-auto max-w-full rounded-lg shadow-xl"
                            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/newsletter/newsletter-visual.png"
                            alt="newsletter visual"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisualNewsletter;
