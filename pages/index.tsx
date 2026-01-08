import { Card } from "flowbite-react";
import type { FC } from "react";
import { Link } from "react-router-dom";

const HomePage: FC = function () {
  return (
    <div className="p-4 dark:bg-gray-900 max-w-screen-2xl mx-auto flex flex-col justify-center min-h-[80vh]">
      <div className="text-center mb-16">
        <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Laravel Company
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Inspired from Flowbite Premium React components designed for Laravel, built for modern conversion-driven web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-5xl mx-auto w-full px-4">
        {/* Marketing UI Card */}
        <Link to="/marketing-ui" className="group">
          <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 p-4 bg-primary-50 dark:bg-gray-700 rounded-full group-hover:bg-primary-100 transition-colors">
                <svg className="w-12 h-12 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Marketing UI
              </h2>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Landing pages, feature sections, newsletters, and conversion-focused components for your marketing site.
              </p>
            </div>
          </Card>
        </Link>

        {/* Application UI Card */}
        <Link to="/application-ui" className="group">
          <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="flex flex-col items-center text-center p-6">
              <div className="mb-4 p-4 bg-purple-50 dark:bg-gray-700 rounded-full group-hover:bg-purple-100 transition-colors">
                <svg className="w-12 h-12 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Application UI
              </h2>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Dashboards, CRUD interfaces, forms, and complex layouts for building powerful web applications.
              </p>
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
