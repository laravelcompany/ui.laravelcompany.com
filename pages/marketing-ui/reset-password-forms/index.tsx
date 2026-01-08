import { Button, Card, Label, TextInput, Checkbox } from "flowbite-react";
import type { FC } from "react";
import { HiLockClosed } from "react-icons/hi";
import BlockSection from "../../../components/block-section";
import BlockPageBreadcrumb from "../../../components/block-breadcrumb";

const AllResetPasswordForms: FC = function () {
  return (
    <>
      <BlockPageBreadcrumb
        title="Reset Password Forms"
        description="Layouts to let your users change their password."
      />
      <DefaultResetPasswordForm />
    </>
  );
};

const DefaultResetPasswordForm: FC = function () {
  return (
    <BlockSection
      title="Default reset password"
      description="Standard reset password form"
    >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-gray-50 dark:bg-gray-900">
        <Card className="w-full max-w-md">
          <div className="flex flex-col items-center mb-4">
            <img className="w-8 h-8 mr-2" src="/logo.svg" alt="logo" />
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Change Password
            </h1>
          </div>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <Label htmlFor="password" value="New Password" className="mb-2 block" />
              <TextInput id="password" type="password" placeholder="••••••••" required icon={HiLockClosed} />
            </div>
            <div>
              <Label htmlFor="confirm-password" value="Confirm Password" className="mb-2 block" />
              <TextInput id="confirm-password" type="password" placeholder="••••••••" required icon={HiLockClosed} />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <Checkbox id="terms" required />
              </div>
              <div className="ml-3 text-sm">
                <Label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Terms and Conditions</a></Label>
              </div>
            </div>
            <Button type="submit" className="w-full" color="primary">Reset password</Button>
          </form>
        </Card>
      </div>
    </BlockSection>
  );
};

export default AllResetPasswordForms;
