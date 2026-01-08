import { Button, Card } from "flowbite-react";
import type { FC } from "react";
import { HiLocationMarker, HiBriefcase, HiMail, HiGlobeAlt } from "react-icons/hi";
import BlockSection from "../../../components/block-section";

const UserProfilesPage: FC = function () {
    return (
        <>
            <ProfileHeader />
            <ProfileCard />
            <SimpleProfile />
        </>
    );
};

const ProfileHeader: FC = function () {
    return (
        <BlockSection
            title="Profile Header"
            description="Full-width profile header with cover image and actions"
        >
            <div className="bg-white dark:bg-gray-800 shadow rounded-lg overflow-hidden">
                {/* Cover Image */}
                <div className="h-32 md:h-48 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

                <div className="px-4 pb-6 sm:px-6 lg:px-8">
                    <div className="relative -mt-12 sm:-mt-16 flex flex-col sm:flex-row items-end sm:items-center sm:space-x-5">
                        <div className="relative flex">
                            <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-full ring-4 ring-white dark:ring-gray-800 bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                                <img src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Profile" className="h-full w-full object-cover" />
                            </div>
                        </div>
                        <div className="mt-4 sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                            <div className="sm:hidden md:block min-w-0 flex-1">
                                <h1 className="truncate text-2xl font-bold text-gray-900 dark:text-white">Jese Leos</h1>
                                <p className="text-gray-500 dark:text-gray-400">Software Engineer at Laravel Company</p>
                            </div>
                            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                                <Button color="gray">
                                    <HiMail className="mr-2 h-5 w-5" />
                                    Message
                                </Button>
                                <Button color="primary">Follow</Button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 sm:hidden md:hidden">
                        <h1 className="truncate text-2xl font-bold text-gray-900 dark:text-white">Jese Leos</h1>
                        <p className="text-gray-500 dark:text-gray-400">Software Engineer at Laravel Company</p>
                    </div>
                </div>
            </div>
        </BlockSection>
    );
};

const ProfileCard: FC = function () {
    return (
        <BlockSection
            title="Profile Card"
            description="Card-based profile with details and contact info"
        >
            <Card className="max-w-sm mx-auto md:max-w-full">
                <div className="flex flex-col items-center pb-10">
                    <img
                        alt="Bonnie image"
                        className="mb-3 rounded-full shadow-lg h-24 w-24 object-cover"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                    <div className="mt-4 flex space-x-3 lg:mt-6">
                        <Button color="primary">Add Friend</Button>
                        <Button color="gray">Message</Button>
                    </div>
                </div>
                <div className="space-y-3 px-4 pb-4">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <HiBriefcase className="mr-2 h-5 w-5" />
                        <span>Flowbite</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <HiLocationMarker className="mr-2 h-5 w-5" />
                        <span>New York, USA</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <HiGlobeAlt className="mr-2 h-5 w-5" />
                        <a href="#" className="hover:underline">www.bonniegreen.com</a>
                    </div>
                </div>
            </Card>
        </BlockSection>
    );
};

const SimpleProfile: FC = function () {
    return (
        <BlockSection title="Simple User List Item" description="Small profile row for lists">
            <Card>
                <div className="flow-root">
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="shrink-0">
                                    <img
                                        alt="Neil image"
                                        className="h-8 w-8 rounded-full object-cover"
                                        src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>
                                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    $320
                                </div>
                            </div>
                        </li>
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center space-x-4">
                                <div className="shrink-0">
                                    <img
                                        alt="Bonnie image"
                                        className="h-8 w-8 rounded-full object-cover"
                                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</p>
                                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                    $3467
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </Card>
        </BlockSection>
    )
}

export default UserProfilesPage;
