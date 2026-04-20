import type { FC } from "react";
import NewsletterSignup from "./newsletter-signup";
import LeadCaptureForm from "./lead-capture-form";
import WebinarRegistration from "./webinar-registration";
import DownloadCTA from "./download-cta";
import BlockSection from "../../../components/block-section";
import BlockPageBreadcrumb from "../../../components/block-breadcrumb";

const AllLeadGenerationSections: FC = function () {
    return (
        <>
            <BlockPageBreadcrumb
                title="Lead Generation Components"
                description="Capture leads and grow your audience with these high-converting components."
            />

            <BlockSection
                title="Newsletter Signup"
                description="Simple email signup forms for newsletter lists."
                githubLink="#"
            >
                <NewsletterSignup />
            </BlockSection>

            <BlockSection
                title="Lead Capture Form"
                description="Detailed forms to capture qualified leads with multiple fields."
                githubLink="#"
            >
                <LeadCaptureForm />
            </BlockSection>

            <BlockSection
                title="Webinar Registration"
                description="Registration forms for webinars and online events."
                githubLink="#"
            >
                <WebinarRegistration />
            </BlockSection>

            <BlockSection
                title="Download CTA"
                description="Call-to-action sections for downloadable content."
                githubLink="#"
            >
                <DownloadCTA />
            </BlockSection>
        </>
    );
};

export default AllLeadGenerationSections;
