import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import type { FC } from "react";
import { HiMail, HiLockClosed } from "react-icons/hi";
import BlockSection from "../../../components/block-section";

const LoginFormsPage: FC = function () {
  return (
    <>
      <SimpleCardLogin />
      <SplitScreenLogin />
      <BackgroundImageLogin />
    </>
  );
};

const SimpleCardLogin: FC = function () {
  return (
    <BlockSection
      title="Simple Card Login"
      description="Centered login card on gray background"
    >
      <div className="flex items-center justify-center bg-gray-50 py-12 dark:bg-gray-900">
        <Card className="max-w-md w-full">
          <div className="flex flex-col items-center justify-center mb-6">
            <img
              alt="Laravel Company"
              src="/logo.svg"
              className="h-12 w-auto"
            />
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Sign in to your account
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Start your 14-day free trial.
            </p>
          </div>
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput id="email" type="email" placeholder="name@company.com" required icon={HiMail} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your password" />
              </div>
              <TextInput id="password" type="password" required icon={HiLockClosed} />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                Forgot password?
              </a>
            </div>
            <Button type="submit" color="primary">Sign in</Button>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 text-center">
              Not registered? <a href="#" className="text-primary-600 hover:underline dark:text-primary-500">Create account</a>
            </div>
          </form>
        </Card>
      </div>
    </BlockSection>
  );
};

const SplitScreenLogin: FC = function () {
  return (
    <BlockSection
      title="Split Screen Login"
      description="Login form with branding image side-by-side"
    >
      <div className="flex min-h-[600px] overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img className="h-10 w-auto" src="/logo.svg" alt="Laravel Company" />
              <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sign in to your account</h2>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="email-split" value="Email address" className="mb-2 block" />
                    <TextInput id="email-split" type="email" required />
                  </div>
                  <div>
                    <Label htmlFor="password-split" value="Password" className="mb-2 block" />
                    <TextInput id="password-split" type="password" required />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Checkbox id="remember-me-split" />
                      <Label htmlFor="remember-me-split" className="ml-2 block text-sm">Remember me</Label>
                    </div>
                    <div className="text-sm">
                      <a href="#" className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-500">Forgot your password?</a>
                    </div>
                  </div>
                  <div>
                    <Button className="w-full" color="primary">Sign in</Button>
                  </div>
                </form>
              </div>
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="bg-white px-2 text-gray-500 dark:bg-gray-900 dark:text-gray-400">Or continue with</span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Button color="light" className="w-full">
                    <span className="sr-only">Sign in with Google</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                  </Button>
                  <Button color="light" className="w-full">
                    <span className="sr-only">Sign in with GitHub</span>
                    <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" /></svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1908&q=80" alt="Building" />
        </div>
      </div>
    </BlockSection>
  );
};

const BackgroundImageLogin: FC = function () {
  return (
    <BlockSection title="Background Image Overlay" description="Form overlaying a full-screen background">
      <div className="relative flex items-center justify-center min-h-[600px] bg-gray-900 rounded-lg overflow-hidden">
        <img className="absolute inset-0 h-full w-full object-cover opacity-50" src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Office" />
        <div className="relative z-10 w-full max-w-md px-4">
          <Card>
            <div className="text-center">
              <img className="mx-auto h-12 w-auto" src="/logo.svg" alt="Laravel Company" />
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome back</h2>
            </div>
            <form className="mt-8 space-y-6">
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <Label htmlFor="email-bg" className="sr-only">Email address</Label>
                  <input id="email-bg" name="email" type="email" required className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:ring-gray-700 dark:text-white" placeholder="Email address" />
                </div>
                <div>
                  <Label htmlFor="password-bg" className="sr-only">Password</Label>
                  <input id="password-bg" name="password" type="password" required className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:ring-gray-700 dark:text-white" placeholder="Password" />
                </div>
              </div>
              <div>
                <Button className="w-full" color="primary">Sign in</Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </BlockSection>
  )
}


export default LoginFormsPage;
