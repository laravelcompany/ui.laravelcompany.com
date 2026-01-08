import { Button, Card, Avatar } from "flowbite-react";
import type { FC } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import BlockSection from "../../../components/block-section";

const UserGroupsPage: FC = function () {
    return (
        <>
            <GroupCards />
            <GroupList />
        </>
    );
};

const GroupCards: FC = function () {
    return (
        <BlockSection
            title="Group Cards"
            description="Grid of group cards with quick actions"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <Card key={i}>
                        <div className="flex justify-end px-4 pt-4">
                            <button className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
                                <span className="sr-only">Open dropdown</span>
                                <HiDotsHorizontal className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="flex flex-col items-center pb-10">
                            <div className="mb-3 h-20 w-20 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold">
                                {i === 1 ? 'DS' : i === 2 ? 'MK' : 'DV'}
                            </div>
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                {i === 1 ? 'Design System' : i === 2 ? 'Marketing Team' : 'Developers'}
                            </h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">{i * 5 + 2} Members</span>
                            <div className="flex -space-x-4 mt-4">
                                <Avatar img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" rounded stacked />
                                <Avatar img="https://flowbite.com/docs/images/people/profile-picture-2.jpg" rounded stacked />
                                <Avatar img="https://flowbite.com/docs/images/people/profile-picture-3.jpg" rounded stacked />
                                <a className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+3</a>
                            </div>
                            <div className="mt-4 flex space-x-3 lg:mt-6">
                                <Button color="primary" size="sm">
                                    Join Group
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </BlockSection>
    );
};

const GroupList: FC = function () {
    return (
        <BlockSection title="Group List with Avatars" description="List view for teams and groups">
            <Card>
                <div className="flow-root">
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        {[1, 2, 3].map((i) => (
                            <li key={i} className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="shrink-0">
                                        <div className="h-10 w-10 rounded bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                                            {i === 1 ? 'FE' : i === 2 ? 'BE' : 'QA'}
                                        </div>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                                            {i === 1 ? 'Frontend Team' : i === 2 ? 'Backend Team' : 'QA Engineers'}
                                        </p>
                                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                                            Active {i} mins ago
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <Avatar.Group>
                                            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded stacked size="xs" />
                                            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-2.jpg" rounded stacked size="xs" />
                                            <Avatar.Counter total={i * 3} href="#" className="w-6 h-6 text-xs" />
                                        </Avatar.Group>
                                    </div>
                                    <div>
                                        <Button color="light" size="xs">View</Button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </Card>
        </BlockSection>
    )
}

export default UserGroupsPage;
