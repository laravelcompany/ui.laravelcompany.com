import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import type { FC } from "react";
import { useState } from "react";
import FlowbiteLogoSVG from "../../../components/flowbite-logo";

const AuthenticationPopup: FC = function () {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Show authentication popup</Button>
      <Modal show={show} size="xl" theme={{content: {inner: "relative rounded-lg bg-white shadow dark:bg-gray-800 flex flex-col max-h-[90vh]"}}}>
        <Modal.Body>
          <div className="mb-6 flex items-center">
            <a
              href="#"
              className="flex items-center text-xl font-semibold text-gray-900 dark:text-white"
            >
              <FlowbiteLogoSVG />
              Izzy
            </a>
            <button
              onClick={() => setShow(false)}
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <form action="#">
            <h2 className="mb-4 text-lg text-gray-500 dark:text-white">
              Join over&nbsp;
              <span className="font-semibold text-gray-900 dark:text-white">
                74,000
              </span>
              &nbsp;developers and designers.
            </h2>
            <div className="mb-6 flex items-center space-x-4">
              <a
                href="#"
                className="inline-flex w-full items-center justify-center rounded-lg bg-[#333] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#1a1919] focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                <svg
                  className="-ml-1 mr-2 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                >
                  <path
                    fill="currentColor"
                    d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                  />
                </svg>
                Github
              </a>
              <a
                href="#"
                className="inline-flex w-full items-center justify-center rounded-lg bg-[#4284F4] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#3372df] focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-[#0f53c9]"
              >
                <svg
                  className="-ml-1 mr-2 h-5 w-5 rounded-full bg-white p-1"
                  viewBox="0 0 256 262"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                >
                  <path
                    d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                    fill="#4285F4"
                  />
                  <path
                    d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                    fill="#34A853"
                  />
                  <path
                    d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                    fill="#FBBC05"
                  />
                  <path
                    d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                    fill="#EB4335"
                  />
                </svg>
                Google
              </a>
            </div>
            <div className="mb-6 flex items-center">
              <div className="h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
              <div className="px-5 text-center text-gray-500 dark:text-gray-400">
                or
              </div>
              <div className="h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
            </div>
            <div className="mb-6 grid grid-cols-1 gap-2">
              <Label htmlFor="email" className="dark:text-white">Email</Label>
              <TextInput
                id="email"
                name="email"
                placeholder="name@flowbite.com"
                required
                type="email"
              />
            </div>
            <div className="mb-6 grid grid-cols-1 gap-2">
              <Label htmlFor="password" className="dark:text-white">Password</Label>
              <TextInput
                id="password"
                name="password"
                placeholder="••••••••"
                required
                type="password"
              />
            </div>
            <div className="mb-6 grid grid-cols-1 gap-2">
              <Label htmlFor="repeat-password" className="dark:text-white">Repeat Password</Label>
              <TextInput
                id="repeat-password"
                name="repeat-password"
                placeholder="••••••••"
                required
                type="repeat-password"
              />
            </div>
            <div className="mb-3 flex items-start">
              <div className="flex h-5 items-center">
                <Checkbox id="newsletter" />
              </div>
              <div className="ml-3 text-sm">
                <Label
                  htmlFor="newsletter"
                  className="text-gray-500 dark:text-gray-300"
                >
                  I want to receive promotional offers (no spam).
                </Label>
              </div>
            </div>
            <div className="mb-4 flex items-start">
              <div className="flex h-5 items-center">
                <Checkbox id="terms" required />
              </div>
              <div className="ml-3 text-sm">
                <Label
                  htmlFor="terms"
                  className="text-gray-500 dark:text-gray-300"
                >
                  I agree to all the&nbsp;
                  <a
                    className="font-medium text-primary-600 dark:text-primary-500 underline hover:text-primary-700 hover:no-underline"
                    href="#"
                  >
                    Terms
                  </a>
                  &nbsp;and&nbsp;
                  <a
                    className="font-medium text-primary-600 dark:text-primary-500 underline hover:text-primary-700 hover:no-underline"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                  .
                </Label>
              </div>
            </div>
            <Button
              // onClick={() => setShow(false)}
              type="submit"
              className="my-4 w-full"
            >
              Create an account
            </Button>
            <p className="text-center text-sm text-gray-900 dark:text-white font-medium">
              Already have an account?&nbsp;
              <a
                href="#"
                className="font-medium text-primary-600 underline hover:text-primary-700 hover:no-underline dark:text-primary-500"
              >
                Log In
              </a>
            </p>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AuthenticationPopup;
