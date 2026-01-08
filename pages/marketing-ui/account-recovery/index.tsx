import { Button, Card, Label, TextInput, Checkbox } from "flowbite-react";
import type { FC } from "react";
import { HiMail } from "react-icons/hi";
import BlockSection from "../../../components/block-section";
import BlockPageBreadcrumb from "../../../components/block-breadcrumb";

const AllAccountRecovery: FC = function () {
  return (
    <>
      <BlockPageBreadcrumb
        title="Account Recovery"
        description="Get started with account recovery (aka. forgot password) pages to allow users to reset their password using an email."
      />
      <DefaultAccountRecovery />
      <IllustrationAccountRecovery />
    </>
  );
};

const DefaultAccountRecovery: FC = function () {
  return (
    <BlockSection
      title="Default forgot password"
      description="Simple form for password recovery"
    >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 bg-gray-50 dark:bg-gray-900">
        <Card className="w-full max-w-md">
          <div className="flex flex-col items-center mb-4">
            <img className="w-8 h-8 mr-2" src="/logo.svg" alt="logo" />
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Forgot your password?
            </h1>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Don't fret! Just type in your email and we will send you a code to reset your password!
            </p>
          </div>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <Label htmlFor="email" value="Your email" className="mb-2 block" />
              <TextInput id="email" type="email" placeholder="name@company.com" required icon={HiMail} />
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

const IllustrationAccountRecovery: FC = function () {
  return (
    <BlockSection title="Recover with Illustration" description="Split screen layout">
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="/logo.svg" alt="logo" />
            Laravel Company
          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Forgot your password?
              </h1>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Don't fret! Just type in your email and we will send you a code to reset your password!
              </p>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <Label htmlFor="email-2" value="Your email" className="mb-2 block" />
                  <TextInput id="email-2" type="email" placeholder="name@company.com" required icon={HiMail} />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <Checkbox id="terms-2" required />
                  </div>
                  <div className="ml-3 text-sm">
                    <Label htmlFor="terms-2" className="font-light text-gray-500 dark:text-gray-300">I accept the <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Terms and Conditions</a></Label>
                  </div>
                </div>
                <Button type="submit" className="w-full" color="primary">Reset password</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </BlockSection>
  )
}

export default AllAccountRecovery;
