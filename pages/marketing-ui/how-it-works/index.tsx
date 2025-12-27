import type { FC } from "react";
import BlockPageBreadcrumb from "../../../components/block-breadcrumb";
import BlockSection from "../../../components/block-section";
import HowItWorksDefault from "./default";
import HorizontalSteps from "./horizontal-steps";

const AllHowItWorksSections: FC = function () {
    return (
        <>
            <BlockPageBreadcrumb
                title="How It Works"
                description="Showcase your process, user journeys, or step-by-step guides using these beautifully designed sections coded with Tailwind CSS."
            />
            <BlockSection
                title="Default How It Works"
                description="A standard vertical grid layout with icons and descriptions to explain your process."
                githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/how-it-works/default.tsx"
            >
                <HowItWorksDefault />
            </BlockSection>
            <BlockSection
                title="Horizontal Steps"
                description="A horizontal timeline-like progression to show a clear step-by-step journey."
                githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/how-it-works/horizontal-steps.tsx"
            >
                <HorizontalSteps />
            </BlockSection>
        </>
    );
};

export default AllHowItWorksSections;
