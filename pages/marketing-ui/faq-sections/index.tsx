import { Button, Card, Accordion, Checkbox, Label, TextInput } from "flowbite-react";
import type { FC } from "react";
import { HiSearch, HiQuestionMarkCircle, HiSupport } from "react-icons/hi";
import BlockSection from "../../../components/block-section";
import BlockPageBreadcrumb from "../../../components/block-breadcrumb";

const FaqSectionsPage: FC = function () {
  return (
    <>
      <BlockPageBreadcrumb
        title="FAQ Sections"
        description="Frequently Asked Questions sections to help your users find answers to common questions."
      />
      <AccordionFaq />
      <GridFaq />
      <FeaturedFaq />
    </>
  );
};

const AccordionFaq: FC = function () {
  return (
    <BlockSection
      title="Accordion FAQ"
      description="Classic interlocking questions and answers using the Accordion component."
    >
      <Card>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Frequently asked questions</h2>
        <Accordion collapseAll>
          <Accordion.Panel>
            <Accordion.Title>What is Flowbite?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>Is there a Figma file available?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite has a design system built for Figma that includes all the components and pages from the library.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out the <a href="https://flowbite.com/figma/" className="text-primary-600 hover:underline dark:text-primary-500">Figma design system</a>.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>What are the differences between Flowbite and Tailwind UI?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </Card>
    </BlockSection>
  );
};

const GridFaq: FC = function () {
  return (
    <BlockSection title="Grid Layout FAQ" description="Questions arranged in a responsive grid layout.">
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <HiQuestionMarkCircle className="h-8 w-8 text-primary-600 mb-2" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">How do I update my billing info?</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Go to your account settings and select the "Billing" tab. there you can update your credit card information and view your invoices.
          </p>
        </Card>
        <Card>
          <HiQuestionMarkCircle className="h-8 w-8 text-primary-600 mb-2" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Can I cancel my subscription?</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Yes, you can cancel your subscription at any time. Your account will remain active until the end of your current billing period.
          </p>
        </Card>
        <Card>
          <HiQuestionMarkCircle className="h-8 w-8 text-primary-600 mb-2" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Where can I find the API documentation?</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Our comprehensive API documentation is available in the "Developers" section of our website, or you can access it directly via the API portal.
          </p>
        </Card>
        <Card>
          <HiQuestionMarkCircle className="h-8 w-8 text-primary-600 mb-2" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Do you offer technical support?</h3>
          <p className="text-gray-500 dark:text-gray-400">
            Yes, we offer 24/7 technical support for our Premium and Enterprise customers. Standard customers can use our community forum.
          </p>
        </Card>
      </div>
    </BlockSection>
  )
}

const FeaturedFaq: FC = function () {
  return (
    <BlockSection title="Featured FAQ with Search" description="Help center style with search bar and categories.">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 text-center border border-gray-100 dark:border-gray-700">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">How can we help you?</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Search our knowledge base or browse the categories below to find answers to your questions.
        </p>
        <div className="max-w-md mx-auto mb-10">
          <Label htmlFor="search-faq" className="sr-only">Search</Label>
          <TextInput id="search-faq" type="search" icon={HiSearch} placeholder="Type keywords to find answers..." />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors">
            <h4 className="font-bold text-gray-900 dark:text-white">Billing</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">4 articles</p>
          </div>
          <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors">
            <h4 className="font-bold text-gray-900 dark:text-white">Account</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">12 articles</p>
          </div>
          <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors">
            <h4 className="font-bold text-gray-900 dark:text-white">Security</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">9 articles</p>
          </div>
          <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors">
            <h4 className="font-bold text-gray-900 dark:text-white">Integration</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">20+ articles</p>
          </div>
        </div>
      </div>
    </BlockSection>
  )
}

export default FaqSectionsPage;
