import { Button, Avatar, TextInput } from "flowbite-react";
import type { FC } from "react";
import { HiPaperAirplane, HiPhone, HiVideoCamera, HiDotsVertical, HiEmojiHappy, HiPhotograph } from "react-icons/hi";
import BlockSection from "../../../components/block-section";

const ChatApplicationsPage: FC = function () {
    return (
        <>
            <ChatInterface />
        </>
    );
};

const ChatInterface: FC = function () {
    return (
        <BlockSection
            title="Chat Interface"
            description="Full-featured chat application layout"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 h-[600px] border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-900">

                {/* Sidebar */}
                <div className="md:col-span-1 border-r border-gray-200 dark:border-gray-700 flex flex-col">
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                        <TextInput placeholder="Search messages..." />
                    </div>
                    <div className="flex-1 overflow-y-auto">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <li key={i} className={`p-4 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer ${i === 1 ? 'bg-blue-50 dark:bg-gray-800' : ''}`}>
                                    <div className="flex items-center space-x-4">
                                        <div className="relative">
                                            <Avatar rounded img={`https://flowbite.com/docs/images/people/profile-picture-${i}.jpg`} status={i % 2 === 0 ? "online" : "offline"} statusPosition="bottom-right" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                User {i}
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                Hey, how are you doing?
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-xs font-semibold text-gray-500 dark:text-gray-400">
                                            2m
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Main Chat Area */}
                <div className="md:col-span-2 flex flex-col bg-gray-50 dark:bg-gray-800">
                    {/* Chat Header */}
                    <div className="p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <Avatar rounded img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" status="online" />
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">User 1</h3>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Active now</span>
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <Button color="gray" size="sm" pill>
                                <HiPhone className="h-5 w-5" />
                            </Button>
                            <Button color="gray" size="sm" pill>
                                <HiVideoCamera className="h-5 w-5" />
                            </Button>
                            <Button color="gray" size="sm" pill>
                                <HiDotsVertical className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                        <div className="flex justify-end">
                            <div className="bg-blue-600 text-white p-3 rounded-lg rounded-br-none max-w-md shadow-sm">
                                <p>Hey! checked the new design updates?</p>
                            </div>
                        </div>
                        <div className="flex justify-start">
                            <Avatar rounded img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" size="xs" className="mr-2 mt-1" />
                            <div className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-3 rounded-lg rounded-bl-none max-w-md shadow-sm border border-gray-200 dark:border-gray-600">
                                <p>Yes, I just looked at them. They look amazing! 🎨</p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <div className="bg-blue-600 text-white p-3 rounded-lg rounded-br-none max-w-md shadow-sm">
                                <p>Great! Let's deploy them.</p>
                            </div>
                        </div>
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center space-x-2">
                            <Button color="gray" pill size="sm" className="hidden sm:inline-flex">
                                <HiEmojiHappy className="h-6 w-6 text-gray-500" />
                            </Button>
                            <Button color="gray" pill size="sm" className="hidden sm:inline-flex">
                                <HiPhotograph className="h-6 w-6 text-gray-500" />
                            </Button>
                            <div className="flex-1">
                                <TextInput placeholder="Write a message..." />
                            </div>
                            <Button color="primary" pill>
                                <HiPaperAirplane className="h-5 w-5 rotate-90" />
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </BlockSection>
    );
};

export default ChatApplicationsPage;
