import { Button, Card, Label, TextInput, Textarea, Select, FileInput } from "flowbite-react";
import type { FC } from "react";
import { HiUser, HiMail, HiBriefcase, HiPhotograph, HiLockClosed } from "react-icons/hi";
import BlockSection from "../../../components/block-section";
import BlockPageBreadcrumb from "../../../components/block-breadcrumb";

const UpdateFormsPage: FC = function () {
    return (
        <>
            <BlockPageBreadcrumb
                title="Update Forms (CRUD)"
                description="Use these forms to update existing records in your database, such as user profiles, product details, or settings."
            />
            <GeneralUpdateForm />
            <PasswordUpdateForm />
            <ProductUpdateForm />
        </>
    );
};

const GeneralUpdateForm: FC = function () {
    return (
        <BlockSection
            title="General Update Form"
            description="A standard form for updating user profile information."
        >
            <Card>
                <h3 className="text-xl font-bold dark:text-white mb-4">Update Profile</h3>
                <form className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                            <Label htmlFor="firstName" value="First Name" />
                            <TextInput id="firstName" type="text" placeholder="Bonnie" icon={HiUser} required />
                        </div>
                        <div>
                            <Label htmlFor="lastName" value="Last Name" />
                            <TextInput id="lastName" type="text" placeholder="Green" icon={HiUser} required />
                        </div>
                        <div>
                            <Label htmlFor="email" value="Email" />
                            <TextInput id="email" type="email" placeholder="bonnie@example.com" icon={HiMail} required />
                        </div>
                        <div>
                            <Label htmlFor="role" value="Role" />
                            <Select id="role" icon={HiBriefcase}>
                                <option>Developer</option>
                                <option>Designer</option>
                                <option>Manager</option>
                                <option>CEO</option>
                            </Select>
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="biography" value="Biography" />
                        <Textarea id="biography" placeholder="Write a few sentences about yourself." rows={4} />
                    </div>
                    <div className="flex items-center gap-2">
                        <Button color="primary">Update Profile</Button>
                        <Button color="gray">Cancel</Button>
                    </div>
                </form>
            </Card>
        </BlockSection>
    );
};

const PasswordUpdateForm: FC = function () {
    return (
        <BlockSection title="Password Update Form" description="Form for handling password changes securely.">
            <Card className="max-w-xl">
                <h3 className="text-xl font-bold dark:text-white mb-4">Change Password</h3>
                <form className="flex flex-col gap-4">
                    <div>
                        <Label htmlFor="current_password" value="Current Password" />
                        <TextInput id="current_password" type="password" placeholder="••••••••" icon={HiLockClosed} required />
                    </div>
                    <div>
                        <Label htmlFor="new_password" value="New Password" />
                        <TextInput id="new_password" type="password" placeholder="••••••••" icon={HiLockClosed} required />
                    </div>
                    <div>
                        <Label htmlFor="confirm_new_password" value="Confirm New Password" />
                        <TextInput id="confirm_new_password" type="password" placeholder="••••••••" icon={HiLockClosed} required />
                    </div>
                    <div className="flex items-center gap-2">
                        <Button color="primary">Save New Password</Button>
                    </div>
                </form>
            </Card>
        </BlockSection>
    )
}

const ProductUpdateForm: FC = function () {
    return (
        <BlockSection title="Product Update Form" description="A form for updating product details including image upload.">
            <Card>
                <h3 className="text-xl font-bold dark:text-white mb-4">Update Product</h3>
                <form className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                            <Label htmlFor="productName" value="Product Name" />
                            <TextInput id="productName" type="text" placeholder="Apple iMac 27" required />
                        </div>
                        <div>
                            <Label htmlFor="category" value="Category" />
                            <Select id="category">
                                <option>Electronics</option>
                                <option>Furniture</option>
                                <option>Clothing</option>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="brand" value="Brand" />
                            <TextInput id="brand" type="text" placeholder="Apple" required />
                        </div>
                        <div>
                            <Label htmlFor="price" value="Price ($)" />
                            <TextInput id="price" type="number" placeholder="2999" required />
                        </div>
                    </div>
                    <div>
                        <Label htmlFor="description" value="Description" />
                        <Textarea id="description" placeholder="Product description here..." rows={4} />
                    </div>
                    <div id="fileUpload">
                        <div className="mb-2 block">
                            <Label htmlFor="file" value="Product Images" />
                        </div>
                        <FileInput id="file" helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)." />
                    </div>
                    <div className="flex items-center gap-2">
                        <Button color="primary">Update Product</Button>
                        <Button color="delete">Delete Product</Button>
                    </div>
                </form>
            </Card>
        </BlockSection>
    )
}

export default UpdateFormsPage;
