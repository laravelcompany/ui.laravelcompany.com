import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import type { FC } from "react";
import { HiUser, HiMail, HiLockClosed } from "react-icons/hi";
import BlockSection from "../../../components/block-section";

const RegisterFormsPage: FC = function () {
  return (
    <>
      <SimpleRegister />
      <SplitRegister />
      <MultiStepRegisterMock />
    </>
  );
};

const SimpleRegister: FC = function () {
  return (
    <BlockSection
      title="Simple Register Card"
      description="Standard registration form"
    >
      <div className="flex items-center justify-center bg-gray-50 py-12 dark:bg-gray-900">
        <Card className="max-w-md w-full">
          <div className="text-center">
            <img className="mx-auto h-12 w-auto" src="/logo.svg" alt="Laravel Company" />
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Create your account</h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Start your 14-day free trial.</p>
          </div>
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="base-email" value="Email address" />
              </div>
              <TextInput id="base-email" type="email" placeholder="name@company.com" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="base-password" value="Password" />
              </div>
              <TextInput id="base-password" type="password" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="base-confirm-password" value="Confirm Password" />
              </div>
              <TextInput id="base-confirm-password" type="password" required />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="accept" defaultChecked />
              <Label htmlFor="accept">
                I agree with the <a href="#" className="text-primary-600 hover:underline dark:text-primary-500">terms and conditions</a>
              </Label>
            </div>
            <Button type="submit" color="primary">Create account</Button>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Already have an account? <a href="#" className="text-primary-600 hover:underline dark:text-primary-500">Login here</a>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </BlockSection>
  );
};

const SplitRegister: FC = function () {
  return (
    <BlockSection title="Split Screen Register" description="Registration form with side image">
      <div className="flex min-h-[600px] overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img className="h-10 w-auto" src="/logo.svg" alt="Laravel Company" />
              <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Get started for free</h2>
            </div>
            <div className="mt-8">
              <form className="space-y-6">
                <div>
                  <Label htmlFor="full-name" value="Full Name" className="mb-2 block" />
                  <TextInput id="full-name" required />
                </div>
                <div>
                  <Label htmlFor="email-split-reg" value="Email address" className="mb-2 block" />
                  <TextInput id="email-split-reg" type="email" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="password-split-reg" value="Password" className="mb-2 block" />
                    <TextInput id="password-split-reg" type="password" required />
                  </div>
                  <div>
                    <Label htmlFor="confirm-pass-split" value="Confirm" className="mb-2 block" />
                    <TextInput id="confirm-pass-split" type="password" required />
                  </div>
                </div>
                <div>
                  <Button className="w-full" color="primary">Sign up</Button>
                </div>
              </form>
              <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                By signing up, you agree to our Terms and Privacy Policy.
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Team working" />
        </div>
      </div>
    </BlockSection>
  )
}

const MultiStepRegisterMock: FC = function () {
  return (
    <BlockSection title="Multi-step Register Mockup" description="Visual representation of a wizard">
      <Card>
        {/* Stepper */}
        <ol className="flex items-center w-full mb-8 space-x-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <li className="flex items-center text-primary-600 dark:text-primary-500">
            <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-primary-600 rounded-full shrink-0 dark:border-primary-500">
              1
            </span>
            User Info
            <svg className="w-3 h-3 ml-2 sm:ml-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
            </svg>
          </li>
          <li className="flex items-center">
            <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              2
            </span>
            Company Info
            <svg className="w-3 h-3 ml-2 sm:ml-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
            </svg>
          </li>
          <li className="flex items-center">
            <span className="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
              3
            </span>
            Review
          </li>
        </ol>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <Label htmlFor="wiz-name" value="What should we call you?" className="mb-2 block" />
            <TextInput id="wiz-name" placeholder="John Doe" icon={HiUser} />
          </div>
          <div>
            <Label htmlFor="wiz-role" value="What is your role?" className="mb-2 block" />
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
              <option>Developer</option>
              <option>Designer</option>
              <option>Manager</option>
            </select>
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <Button color="gray" disabled>Previous</Button>
          <Button color="primary">Next Step</Button>
        </div>
      </Card>
    </BlockSection>
  )
}


export default RegisterFormsPage;
