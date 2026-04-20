import { Button, Checkbox, Label, Select, TextInput, Textarea } from "flowbite-react";
import type { FC } from "react";
import { HiMail, HiUser, HiOfficeBuilding } from "react-icons/hi";

const LeadCaptureForm: FC = function () {
    return (
        <div className="py-12 dark:bg-gray-900">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
                        Get a Free Quote
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">
                        Fill out the form and our team will get back to you within 24 hours with a personalized quote.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                                <HiPhone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            </div>
                            <span className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                                <HiEnvelope className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            </div>
                            <span className="text-gray-600 dark:text-gray-300">hello@laravelcompany.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                                <HiBuildingOffice className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            </div>
                            <span className="text-gray-600 dark:text-gray-300">San Francisco, CA</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg">
                    <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <Label htmlFor="first-name" value="First Name" />
                                <TextInput id="first-name" placeholder="John" icon={HiUser} required />
                            </div>
                            <div>
                                <Label htmlFor="last-name" value="Last Name" />
                                <TextInput id="last-name" placeholder="Doe" required />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="email" value="Work Email" />
                            <TextInput id="email" type="email" placeholder="john@company.com" icon={HiMail} required />
                        </div>

                        <div>
                            <Label htmlFor="company" value="Company Name" />
                            <TextInput id="company" placeholder="Acme Inc." icon={HiOutlineOfficeBuilding} />
                        </div>

                        <div>
                            <Label htmlFor="service" value="Interested Service" />
                            <Select id="service" required>
                                <option value="">Select a service</option>
                                <option value="web">Web Development</option>
                                <option value="mobile">Mobile App</option>
                                <option value="design">UI/UX Design</option>
                                <option value="consulting">Consulting</option>
                                <option value="other">Other</option>
                            </Select>
                        </div>

                        <div>
                            <Label htmlFor="message" value="Project Details" />
                            <Textarea id="message" rows={4} placeholder="Tell us about your project..." />
                        </div>

                        <div className="flex items-start">
                            <Checkbox id="terms" required />
                            <Label htmlFor="terms" className="ml-2 text-sm text-gray-500">
                                I agree to the <a href="#" className="text-blue-600 hover:underline">Terms</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
                            </Label>
                        </div>

                        <Button type="submit" size="lg" className="w-full">
                            Get Free Quote
                        </Button>

                        <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                            No credit card required. We respect your privacy.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LeadCaptureForm;
