import type { FC } from "react";
import categoriesOfBlocks from "../../data/blocks-categories.json";
import BlockCategoryCardsSection from "../../components/block-category-cards-section";

const ApplicationUIPage: FC = function () {
    const applicationCategories = categoriesOfBlocks.filter(
        (c) => c.categorySlug === "application-ui"
    );

    return (
        <div className="p-4 dark:bg-gray-900 max-w-screen-2xl mx-auto">
            <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Application UI Components
            </h1>
            <p className="mb-8 text-lg text-gray-500 dark:text-gray-400 max-w-3xl">
                Powerful and functional UI components for building modern web applications and dashboards.
            </p>
            <div className="lg:text-center">
                <BlockCategoryCardsSection categories={applicationCategories} />
            </div>
        </div>
    );
};

export default ApplicationUIPage;
