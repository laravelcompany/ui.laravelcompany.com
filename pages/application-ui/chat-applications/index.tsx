import { Button, Avatar, TextInput, Dropdown, Tooltip } from "flowbite-react";
import type { FC } from "react";
import {
    HiPaperAirplane, HiPhone, HiVideoCamera, HiDotsVertical, HiEmojiHappy, HiPhotograph,
    HiReply, HiCheck, HiDownload, HiDocumentText, HiMicrophone, HiExternalLink
} from "react-icons/hi";
import BlockSection from "../../../components/block-section";

const ChatApplicationsPage: FC = function () {
    return (
        <>
            <ChatInterface />
            <ChatBubbles />
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
                            <div className="bg-primary-600 text-white p-3 rounded-lg rounded-br-none max-w-md shadow-sm">
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
                            <div className="bg-primary-600 text-white p-3 rounded-lg rounded-br-none max-w-md shadow-sm">
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

const ChatBubbles: FC = function () {
    return (
        <BlockSection
            title="Chat Bubbles"
            description="Various styles for chat messages including text, images, files, and replies."
        >
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 space-y-8">

                {/* 1. Simple Text Messages */}
                <div className="space-y-4">
                    <h4 className="text-sm font-medium text-gray-500 uppercase dark:text-gray-400">Text Messages</h4>
                    <div className="flex items-start gap-2.5">
                        <Avatar rounded img="https://flowbite.com/docs/images/people/profile-picture-2.jpg" />
                        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
                            </div>
                            <p className="text-sm font-normal text-gray-900 dark:text-white">That's awesome. I think our users will really appreciate the improvements.</p>
                            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
                        </div>
                    </div>

                    <div className="flex items-start gap-2.5 justify-end">
                        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-primary-600 rounded-s-xl rounded-ee-xl dark:bg-primary-700">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse text-primary-100">
                                <span className="text-sm font-semibold text-white">You</span>
                                <span className="text-sm font-normal text-primary-200">11:47</span>
                            </div>
                            <p className="text-sm font-normal text-white">I agree! Let's schedule a release sync.</p>
                            <span className="text-sm font-normal text-primary-200 flex items-center justify-end gap-1">Read <HiCheck className="w-4 h-4" /></span>
                        </div>
                        <Avatar rounded img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
                    </div>
                </div>

                {/* 2. File Attachment */}
                <div className="space-y-4">
                    <h4 className="text-sm font-medium text-gray-500 uppercase dark:text-gray-400">File Attachment</h4>
                    <div className="flex items-start gap-2.5">
                        <Avatar rounded img="https://flowbite.com/docs/images/people/profile-picture-3.jpg" />
                        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">Roberta Casas</span>
                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">12:00</span>
                            </div>
                            <div className="py-2.5 text-sm font-normal text-gray-900 dark:text-white">Check out the new design specs.</div>
                            <div className="flex items-start bg-gray-50 dark:bg-gray-600 rounded-xl p-2 mb-2">
                                <div className="me-2">
                                    <span className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white pb-2">
                                        <HiDocumentText className="w-5 h-5" />
                                        Design_Specs_v2.pdf
                                    </span>
                                    <span className="flex text-xs font-normal text-gray-500 dark:text-gray-400 gap-2">
                                        12 Pages • 18 MB • PDF
                                    </span>
                                </div>
                                <div className="inline-flex self-center items-center">
                                    <button className="inline-flex items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <HiDownload className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. Reply Context */}
                <div className="space-y-4">
                    <h4 className="text-sm font-medium text-gray-500 uppercase dark:text-gray-400">Reply Message</h4>
                    <div className="flex items-start gap-2.5">
                        <Avatar rounded img="https://flowbite.com/docs/images/people/profile-picture-4.jpg" />
                        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                                <span className="text-sm font-semibold text-gray-900 dark:text-white">Jese Leos</span>
                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">12:05</span>
                            </div>
                            <div className="flex items-center gap-2 p-2 mb-2 bg-white rounded-lg dark:bg-gray-600 border border-gray-200 dark:border-gray-500 text-sm italic text-gray-500 dark:text-gray-300">
                                <HiReply className="w-4 h-4" />
                                <span>Replying to: "Can we change the blue?"</span>
                            </div>
                            <p className="text-sm font-normal text-gray-900 dark:text-white">No, the blue is part of the brand guidelines.</p>
                        </div>
                    </div>
                </div>

                {/* 4. Voice Message */}
                <div className="space-y-4">
                    <h4 className="text-sm font-medium text-gray-500 uppercase dark:text-gray-400">Voice Message</h4>
                    <div className="flex items-start gap-2.5 justify-end">
                        <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-primary-600 rounded-s-xl rounded-ee-xl dark:bg-primary-700">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse text-primary-100 mb-2">
                                <span className="text-sm font-semibold text-white">You</span>
                                <span className="text-sm font-normal text-primary-200">12:10</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="inline-flex items-center justify-center p-2 rounded-full bg-white text-primary-700 hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800">
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                                        <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
                                    </svg>
                                </button>
                                <span className="text-white text-xs font-medium">0:12</span>
                                <div className="w-full bg-primary-400 rounded-full h-1">
                                    <div className="bg-white h-1 rounded-full" style={{ width: '45%' }}></div>
                                </div>
                            </div>
                        </div>
                        <Avatar rounded img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
                    </div>
                </div>

            </div>
        </BlockSection>
    )
}

export default ChatApplicationsPage;
