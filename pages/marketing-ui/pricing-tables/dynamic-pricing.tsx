import { Button, ToggleSwitch } from "flowbite-react";
import type { FC } from "react";
import { useState } from "react";
import { HiCheck } from "react-icons/hi";

const DynamicPricing: FC = function () {
    const [isAnnual, setIsAnnual] = useState(false);

    const plans = [
        {
            name: "Starter Plus",
            description: "Ideal for individual developers and hobbyists.",
            monthlyPrice: 29,
            annualPrice: 24,
            features: ["Up to 15 projects", "Basic analytics", "Community support", "2GB storage"],
        },
        {
            name: "Professional Pro",
            description: "Best for scaling teams and small agencies.",
            monthlyPrice: 89,
            annualPrice: 69,
            features: ["Unlimited projects", "Advanced analytics", "Priority email support", "50GB storage", "Custom domains"],
            recommended: true,
        },
        {
            name: "Enterprise Elite",
            description: "Ultimate power for large-scale operations.",
            monthlyPrice: 399,
            annualPrice: 299,
            features: ["Unlimited everything", "Real-time analytics", "24/7 VIP support", "2TB storage", "Dedicated infrastructure", "White-glove onboarding"],
        },
    ];

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
                <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
                    <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        Designed for business teams like yours
                    </h2>
                    <p className="mb-5 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
                        Choose the plan that's right for you. Switch to annual billing to save up to 20%.
                    </p>
                    <div className="flex items-center justify-center space-x-4">
                        <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>Monthly Billing</span>
                        <ToggleSwitch checked={isAnnual} label="" onChange={(checked) => setIsAnnual(checked)} />
                        <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>Yearly Billing <span className="ml-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-800 dark:bg-green-900 dark:text-green-300">Save 20%</span></span>
                    </div>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 lg:gap-10 lg:space-y-0">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`flex flex-col rounded-lg border p-6 text-center text-gray-900 shadow dark:border-gray-600 dark:bg-gray-800 dark:text-white xl:p-8 ${plan.recommended ? "border-primary-600 ring-4 ring-primary-500/10 dark:border-primary-500" : "border-gray-100"
                                }`}
                        >
                            <h3 className="mb-4 text-2xl font-semibold">{plan.name}</h3>
                            <p className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
                                {plan.description}
                            </p>
                            <div className="my-8 flex items-baseline justify-center">
                                <span className="mr-2 text-5xl font-extrabold">${isAnnual ? plan.annualPrice : plan.monthlyPrice}</span>
                                <span className="text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            <ul role="list" className="mb-8 space-y-4 text-left">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center space-x-3">
                                        <HiCheck className="h-5 w-5 shrink-0 text-green-500 dark:text-green-400" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button color={plan.recommended ? "info" : "gray"} className="mt-auto">
                                Get started
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DynamicPricing;
