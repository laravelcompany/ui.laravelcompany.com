import { Button, Card, Label, TextInput, ToggleSwitch } from "flowbite-react";
import type { FC } from "react";
import { HiUser, HiLockClosed, HiBell, HiGlobe, HiCreditCard, HiCollection, HiTrash } from "react-icons/hi";
import BlockSection from "../../../components/block-section";

const SettingsPages: FC = function () {
    return (
        <>
            <ProfileSettings />
            <AccountSettings />
            <NotificationSettings />
            <BillingSettings />
            <ConnectedAccountsSettings />
            <DangerZoneSettings />
        </>
    );
};

const ProfileSettings: FC = function () {
    return (
        <BlockSection
            title="Profile Settings"
            description="Form for updating public profile information"
        >
            <Card>
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                    <div className="relative">
                        <div className="h-24 w-24 rounded-full bg-gray-200 dark:bg-gray-700">
                            <svg className="h-24 w-24 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <button className="absolute bottom-0 right-0 rounded-full bg-primary-600 p-2 text-white hover:bg-primary-700">
                            <span className="sr-only">Change avatar</span>
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Profile Picture</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            JPG, GIF or PNG. Max size of 800K
                        </p>
                    </div>
                </div>

                <form className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="first_name" value="First Name" />
                        </div>
                        <TextInput id="first_name" placeholder="John" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="last_name" value="Last Name" />
                        </div>
                        <TextInput id="last_name" placeholder="Doe" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Email Address" />
                        </div>
                        <TextInput id="email" type="email" placeholder="name@company.com" required icon={HiUser} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="role" value="Role" />
                        </div>
                        <TextInput id="role" placeholder="Product Designer" />
                    </div>
                    <div className="md:col-span-2">
                        <div className="mb-2 block">
                            <Label htmlFor="bio" value="Bio" />
                        </div>
                        <textarea
                            id="bio"
                            rows={4}
                            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                            placeholder="Write a short biography..."
                        />
                    </div>
                    <div className="md:col-span-2 flex justify-end gap-2">
                        <Button color="gray">Cancel</Button>
                        <Button color="primary">Save Changes</Button>
                    </div>
                </form>
            </Card>
        </BlockSection>
    );
};

const AccountSettings: FC = function () {
    return (
        <BlockSection
            title="Account Settings"
            description="Form for password and security settings"
        >
            <Card>
                <div className="border-b border-gray-200 pb-4 dark:border-gray-700">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
                        <HiLockClosed className="text-gray-500" />
                        Change Password
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        Update your password associated with your account.
                    </p>
                </div>
                <form className="space-y-4 pt-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="current_password" value="Current Password" />
                        </div>
                        <TextInput id="current_password" type="password" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="new_password" value="New Password" />
                        </div>
                        <TextInput id="new_password" type="password" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="confirm_password" value="Confirm New Password" />
                        </div>
                        <TextInput id="confirm_password" type="password" required />
                    </div>
                    <div className="flex items-center gap-2 alert alert-info text-sm text-blue-700 bg-blue-100 p-3 rounded-lg dark:bg-blue-900 dark:text-blue-300">
                        <svg className="h-5 w-5 inline" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
                        Password must be at least 8 characters long and contain special characters.
                    </div>
                    <div className="flex justify-end">
                        <Button color="primary">Update Password</Button>
                    </div>
                </form>
            </Card>
        </BlockSection>
    );
};

const NotificationSettings: FC = function () {
    return (
        <BlockSection
            title="Notification Preferences"
            description="Settings for email and push notifications"
        >
            <Card>
                <div className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email Notifications</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Get emails to find out what's going on when you're not online.</p>
                        </div>
                        <HiBell className="h-6 w-6 text-gray-400" />
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <span className="font-medium text-gray-900 dark:text-white">New comments</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Get notified when someone posts a comment on your article.</span>
                            </div>
                            <ToggleSwitch checked={true} onChange={() => { }} />
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <span className="font-medium text-gray-900 dark:text-white">Mentions</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Get notified when someone mentions you.</span>
                            </div>
                            <ToggleSwitch checked={true} onChange={() => { }} />
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <span className="font-medium text-gray-900 dark:text-white">Direct Messages</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Get notified when you receive a message.</span>
                            </div>
                            <ToggleSwitch checked={false} onChange={() => { }} />
                        </div>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700 pt-6"></div>

                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Push Notifications</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Receive push notifications on your mobile device.</p>
                        </div>
                        <HiGlobe className="h-6 w-6 text-gray-400" />
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <span className="font-medium text-gray-900 dark:text-white">Everything</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Get push notifications for all activity.</span>
                            </div>
                            <ToggleSwitch checked={false} onChange={() => { }} />
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <span className="font-medium text-gray-900 dark:text-white">Same as email</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">Use email settings for push notifications.</span>
                            </div>
                            <ToggleSwitch checked={true} onChange={() => { }} />
                        </div>
                    </div>
                </div>
            </Card>
        </BlockSection>
    );
};

const BillingSettings: FC = function () {
    return (
        <BlockSection
            title="Billing Information"
            description="Manage your subscription and payment method"
        >
            <Card>
                <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-gray-700">
                    <div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white flex items-center gap-2">
                            <HiCreditCard className="text-gray-500" />
                            Current Plan
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            You are currently on the <span className="font-semibold text-gray-900 dark:text-white">Pro Plan</span>.
                        </p>
                    </div>
                    <Button color="primary" size="sm">Upgrade Plan</Button>
                </div>

                <div className="pt-4 space-y-4">
                    <div>
                        <h4 className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Payment Method</h4>
                        <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
                            <div className="flex items-center gap-3">
                                <svg className="h-8 w-8 text-gray-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M13.5 2C8.80558 2 5 5.80558 5 10.5C5 15.1944 8.80558 19 13.5 19C18.1944 19 22 15.1944 22 10.5C22.0001 5.8056 18.1944 2.00004 13.5 2ZM13.5 16.5C10.1863 16.5 7.5 13.8137 7.5 10.5C7.5 7.18629 10.1863 4.5 13.5 4.5C16.8137 4.5 19.5 7.18629 19.5 10.5C19.5 13.8137 16.8137 16.5 13.5 16.5Z" />
                                    <path d="M11.5 8.5H15.5V11H13V12.5H11.5V8.5Z" />
                                </svg>
                                <div>
                                    <p className="font-medium text-gray-900 dark:text-white">Visa ending in 4242</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Expiry 04/2026</p>
                                </div>
                            </div>
                            <Button color="gray" size="xs">Edit</Button>
                        </div>
                    </div>
                    <div>
                        <h4 className="mb-2 text-sm font-medium text-gray-900 dark:text-white">Billing History</h4>
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            <li className="flex justify-between py-3">
                                <span className="text-gray-500 dark:text-gray-400">Oct 1, 2023</span>
                                <a href="#" className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-500">Invoice #003</a>
                                <span className="font-medium text-gray-900 dark:text-white">$29.00</span>
                            </li>
                            <li className="flex justify-between py-3">
                                <span className="text-gray-500 dark:text-gray-400">Sep 1, 2023</span>
                                <a href="#" className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-500">Invoice #002</a>
                                <span className="font-medium text-gray-900 dark:text-white">$29.00</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Card>
        </BlockSection>
    );
};

const ConnectedAccountsSettings: FC = function () {
    return (
        <BlockSection
            title="Connected Accounts"
            description="Manage third-party application integrations"
        >
            <Card>
                <div className="space-y-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        Connect your account to third-party services to enable additional features.
                    </p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                                {/* Google Icon */}
                                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-white">Google</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Access your Google Drive files</p>
                            </div>
                        </div>
                        <ToggleSwitch checked={true} onChange={() => { }} />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                                <HiCollection className="h-6 w-6 text-gray-900 dark:text-white" />
                            </div>
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-white">Slack</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Receive notifications in Slack</p>
                            </div>
                        </div>
                        <Button color="gray" size="xs">Connect</Button>
                    </div>
                </div>
            </Card>
        </BlockSection>
    );
};

const DangerZoneSettings: FC = function () {
    return (
        <BlockSection
            title="Danger Zone"
            description="Irreversible and destructive actions"
        >
            <Card className="border-red-200 dark:border-red-900">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <h3 className="text-lg font-bold text-red-600 dark:text-red-500 flex items-center gap-2">
                            <HiTrash className="h-5 w-5" />
                            Delete Account
                        </h3>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            Once you delete your account, there is no going back. Please be certain.
                        </p>
                    </div>
                    <Button color="failure">Delete Account</Button>
                </div>
            </Card>
        </BlockSection>
    );
};

export default SettingsPages;
