import type { FC } from "react";
import categoriesOfBlocks from "../../data/blocks-categories.json";
import { BlockCategoryCardsSection } from "../index";

const MarketingUIPage: FC = function () {
    const marketingCategories = categoriesOfBlocks.filter(
        (c) => c.categorySlug === "marketing-ui"
    );

    return (
        <div className="p-4 dark:bg-gray-900 max-w-screen-2xl mx-auto">
            <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Marketing UI Components
            </h1>
            <p className="mb-8 text-lg text-gray-500 dark:text-gray-400 max-w-3xl">
                Explore our wide range of marketing-focused UI components, designed for conversion and aesthetics.
            </p>
            <div className="lg:text-center">
                <BlockCategoryCardsSection categories={marketingCategories} />
            </div>
        </div>
    );
};

export default MarketingUIPage;
