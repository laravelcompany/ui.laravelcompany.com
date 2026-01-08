import { Button, Card, Avatar } from "flowbite-react";
import type { FC } from "react";
import BlockSection from "../../../components/block-section";
import { HiUserCircle } from "react-icons/hi";

const AllTeamSections: FC = function () {
  return (
    <>
      <GridWithHoverEffects />
      <DetailedListView />
      <HeroTeamHeader />
    </>
  );
};

const GridWithHoverEffects: FC = function () {
  return (
    <BlockSection
      title="Grid with Hover Effects"
      description="Team cards that reveal social links and extra info on hover"
      code={`
<div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
    <Card className="group relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie image" />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">CEO & Co-Founder</span>
            <div className="flex mt-4 space-x-3 md:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Review</a>
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
            </div>
        </div>
    </Card>
    <Card className="group relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese image" />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Jese Leos</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">CTO</span>
            <div className="flex mt-4 space-x-3 md:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Review</a>
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
            </div>
        </div>
    </Card>
</div>
      `}
    >
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        <Card className="group relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10">
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie image" />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">CEO & Co-Founder</span>
            <div className="flex mt-4 space-x-3 md:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Review</a>
              <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
            </div>
          </div>
        </Card>
        <Card className="group relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10">
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese image" />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Jese Leos</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">CTO</span>
            <div className="flex mt-4 space-x-3 md:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Review</a>
              <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
            </div>
          </div>
        </Card>
      </div>
    </BlockSection>
  )
}

const DetailedListView: FC = function () {
  return (
    <BlockSection title="Detailed List View" description="Horizontal cards with bio and skills">
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-1">
        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg object-cover h-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png" alt="Thomas Avatar" />
          </a>
          <div className="p-5">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Thomas Lean</a>
            </h3>
            <span className="text-gray-500 dark:text-gray-400">UI/UX Designer</span>
            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Thomas drives the technical strategy of the flowbite platform and brand.</p>
            <ul className="flex space-x-4 sm:mt-0">
              <li>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Figma</span>
              </li>
              <li>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">React</span>
              </li>
              <li>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">CSS</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </BlockSection>
  )
}

const HeroTeamHeader: FC = function () {
  return (
    <BlockSection title="Hero Team Header" description="Featured member with grid below">
      <div className="text-center mb-8">
        <Avatar size="xl" rounded img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" className="mx-auto mb-4" />
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Sofia McGuire</h2>
        <p className="text-gray-500 dark:text-gray-400">Lead Marketing Specialist</p>
        <p className="mt-4 max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
          "Building the future of digital marketing with passion and data-driven strategies."
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <Avatar size="lg" rounded img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png" className="mx-auto mb-2" />
          <h4 className="font-semibold text-gray-900 dark:text-white">Neil Sims</h4>
        </div>
        <div className="text-center">
          <Avatar size="lg" rounded img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" className="mx-auto mb-2" />
          <h4 className="font-semibold text-gray-900 dark:text-white">Roberta Casas</h4>
        </div>
        <div className="text-center">
          <Avatar size="lg" rounded img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" className="mx-auto mb-2" />
          <h4 className="font-semibold text-gray-900 dark:text-white">Michael Gouch</h4>
        </div>
        <div className="text-center">
          <Avatar size="lg" rounded img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/lana-byrd.png" className="mx-auto mb-2" />
          <h4 className="font-semibold text-gray-900 dark:text-white">Lana Byrd</h4>
        </div>
      </div>
    </BlockSection>
  )
}

export default AllTeamSections;
