import { Navbar, Button} from "flowbite-react";
import type { FC } from "react";

const MegaDropdownHeader: FC = function () {
  return (
    <header>
      <div >
        <Navbar.Brand href="https://flowbite.com">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <div className="flex items-center gap-3 lg:order-2">
          <Button
            color="gray"
            href="#"
            className="border-0 hover:bg-gray-50 focus:ring-gray-300 dark:text-white dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
          >
            Login
          </Button>
          <Button color="info" href="#">
            Sign up
          </Button>
          <Navbar.Toggle theme={{icon: "h-5 w-5 shrink-0"}} />
        </div>
        <Navbar.Collapse
          theme={{
            list: "mt-4 flex flex-col lg:mt-0 lg:flex-row lg:space-x-8 lg:text-base lg:font-medium",
          }}
          className="lg:order-1"
        >
          <Navbar.Link
            active
            href="#"
            className="bg-transparent border-b md:border-0 dark:border-gray-700"
          >
            Home
          </Navbar.Link>
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link href="#">Marketplace</Navbar.Link>
          <Navbar.Link className="[&_span]:text-base [&_span]:dark:text-gray-400 [&_ul]:py-0 [&>div]:w-full [&_span]:hover:text-primary-600 [&_span]:dark:hover:text-white lg:[&>div]:w-fit">
            <MegaMenu.Collapse dropdown="Company" className="w-full">
              <div className="grid w-full bg-white dark:border-gray-700 lg:rounded-lg lg:w-auto lg:grid-cols-3 dark:bg-gray-700">
                <div className="p-2 text-gray-900 bg-white lg:rounded-lg dark:text-white lg:col-span-2 dark:bg-gray-800">
                  <ul>
                    <li>
                      <a
                        href="#"
                        className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <div className="p-2 mr-4 bg-white rounded-lg shadow dark:bg-gray-700">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold">
                            Explore Design Work
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Trending designs to inspire you
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <div className="p-2 mr-4 bg-white rounded-lg shadow dark:bg-gray-700">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold">New & Noteworthy</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Up-and-coming designers
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <div className="p-2 mr-4 bg-white rounded-lg shadow dark:bg-gray-700">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"></path>
                            <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"></path>
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold">Playoffs</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Work designers are riffing on
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <div className="p-2 mr-4 bg-white rounded-lg shadow dark:bg-gray-700">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z"></path>
                            <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z"></path>
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold">Blog</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Interviews, tutorials, and more
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <div className="p-2 mr-4 bg-white rounded-lg shadow dark:bg-gray-700">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold">Weekly Warm-up</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Prompt to flex your skills
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="py-5 px-5 bg-gray-50 lg:rounded-lg lg:col-span-1 dark:bg-gray-700">
                  <h3 className="mb-4 text-sm font-semibold text-gray-900 dark:text-white">
                    Browse categories
                  </h3>
                  <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Animation
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Branding
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Illustration
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Mobile
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Print
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Product Design
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Web Design
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </MegaMenu.Collapse>
          </Navbar.Link>
          <Navbar.Link href="#">Team</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </div>
    </header>
  );
};

export default MegaDropdownHeader;
