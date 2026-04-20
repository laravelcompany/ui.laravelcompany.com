import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import type { FC } from "react";
import { HiOutlineCalendar, HiOutlineClock, HiOutlineUser, HiOutlineVideoCamera } from "react-icons/hi";

const WebinarRegistration: FC = function () {
    return (
        <div className="py-12 dark:bg-gray-900">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2">
                    <div className="p-8 md:p-12 text-white">
                        <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
                            <HiOutlineVideoCamera className="w-4 h-4" />
                            Free Webinar
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                            Building Modern Web Applications with Laravel & React
                        </h2>
                        <p className="text-blue-100 text-lg mb-8">
                            Join our expert developers for a deep dive into building scalable, performant web applications using modern technologies.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                    <HiOutlineCalendar className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-blue-200">Date</p>
                                    <p className="font-semibold">May 25, 2026</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                    <HiOutlineClock className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-blue-200">Time</p>
                                    <p className="font-semibold">2:00 PM EST (45 min)</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                    <HiOutlineUser className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-blue-200">Host</p>
                                    <p className="font-semibold">Sarah Johnson, Lead Developer</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-white/20">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-blue-600 flex items-center justify-center text-xs font-bold text-gray-600">
                                        {String.fromCharCode(64 + i)}
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-blue-600 flex items-center justify-center text-xs font-bold">
                                    +127
                                </div>
                            </div>
                            <p className="mt-3 text-sm text-blue-200">127 people already registered</p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-8 md:p-12">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                            Reserve Your Spot
                        </h3>
                        <form className="space-y-4">
                            <div>
                                <Label htmlFor="name" value="Full Name" />
                                <TextInput id="name" placeholder="John Doe" icon={HiUser} required />
                            </div>

                            <div>
                                <Label htmlFor="work-email" value="Work Email" />
                                <TextInput id="work-email" type="email" placeholder="john@company.com" required />
                            </div>

                            <div>
                                <Label htmlFor="company-size" value="Company Size" />
                                <Select id="company-size" required>
                                    <option value="">Select size</option>
                                    <option value="1-10">1-10 employees</option>
                                    <option value="11-50">11-50 employees</option>
                                    <option value="51-200">51-200 employees</option>
                                    <option value="201+">201+ employees</option>
                                </Select>
                            </div>

                            <div>
                                <Label htmlFor="role" value="Job Role" />
                                <Select id="role" required>
                                    <option value="">Select role</option>
                                    <option value="developer">Developer</option>
                                    <option value="designer">Designer</option>
                                    <option value="manager">Manager</option>
                                    <option value="executive">Executive</option>
                                    <option value="other">Other</option>
                                </Select>
                            </div>

                            <div className="flex items-start">
                                <Checkbox id="updates" defaultChecked />
                                <Label htmlFor="updates" className="ml-2 text-sm text-gray-500">
                                    Send me webinar reminders and recording
                                </Label>
                            </div>

                            <Button type="submit" size="lg" className="w-full">
                                Register Now - It's Free
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebinarRegistration;
