import React from 'react';

const EcommerceHero = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Promotional Banner */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Don’t miss out on exclusive deals.
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Unlock even more exclusive member deals when you become a Laravel Company UI Plus or Diamond member.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="btn btn-primary">
              Shop Now
            </a>
            <a href="#" className="btn btn-outline-primary flex items-center gap-2">
              Learn more
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Top Categories */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Top categories
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="card p-4 text-center">
                <a href="#">
                  <img
                    className="mx-auto mb-4 h-24 w-24"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                    alt="imac"
                  />
                  <img
                    className="mx-auto mb-4 h-24 w-24 hidden dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                    alt="imac"
                  />
                </a>
                <a href="#" className="text-lg font-medium text-gray-900 dark:text-white">
                  Computers
                </a>
              </div>
              <div className="card p-4 text-center">
                <a href="#">
                  <img
                    className="mx-auto mb-4 h-24 w-24"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-controller.svg"
                    alt="controller"
                  />
                  <img
                    className="mx-auto mb-4 h-24 w-24 hidden dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-controller-dark.svg"
                    alt="controller-dark"
                  />
                </a>
                <a href="#" className="text-lg font-medium text-gray-900 dark:text-white">
                  Gaming
                </a>
              </div>
              <div className="card p-4 text-center">
                <a href="#">
                  <img
                    className="mx-auto mb-4 h-24 w-24"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg"
                    alt="ipad"
                  />
                  <img
                    className="mx-auto mb-4 h-24 w-24 hidden dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg"
                    alt="ipad"
                  />
                </a>
                <a href="#" className="text-lg font-medium text-gray-900 dark:text-white">
                  Tablets
                </a>
              </div>
              <div className="card p-4 text-center">
                <a href="#">
                  <img
                    className="mx-auto mb-4 h-24 w-24"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/bag.svg"
                    alt="shopping-bag"
                  />
                  <img
                    className="mx-auto mb-4 h-24 w-24 hidden dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/bag-dark.svg"
                    alt="shopping-bag"
                  />
                </a>
                <a href="#" className="text-lg font-medium text-gray-900 dark:text-white">
                  Fashion
                </a>
              </div>
            </div>
            <a
              href="#"
              className="btn btn-link text-primary-600 dark:text-primary-500 flex items-center justify-center gap-2"
            >
              Shop now
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </a>
          </div>

          {/* Consumer Electronics */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Shop consumer electronics
            </h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="card p-4 text-center">
                <a href="#">
                  <img
                    className="mx-auto mb-4 h-24 w-24"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg"
                    alt="laptop"
                  />
                  <img
                    className="mx-auto mb-4 h-24 w-24 hidden dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg"
                    alt="laptop"
                  />
                </a>
                <a href="#" className="text-lg font-medium text-gray-900 dark:text-white">
                  Laptops
                </a>
              </div>
              <div className="card p-4 text-center">
                <a href="#">
                  <img
                    className="mx-auto mb-4 h-24 w-24"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-light.svg"
                    alt="watch"
                  />
                  <img
                    className="mx-auto mb-4 h-24 w-24 hidden dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/apple-watch-dark.svg"
                    alt="watch"
                  />
                </a>
                <a href="#" className="text-lg font-medium text-gray-900 dark:text-white">
                  Watches
                </a>
              </div>
              <div className="card p-4 text-center">
                <a href="#">
                  <img
                    className="mx-auto mb-4 h-24 w-24"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-keyboard.svg"
                    alt="tablet"
                  />
                  <img
                    className="mx-auto mb-4 h-24 w-24 hidden dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-keyboard-dark.svg"
                    alt="tablet"
                  />
                </a>
                <a href="#" className="text-lg font-medium text-gray-900 dark:text-white">
                  Tablets
                </a>
              </div>
              <div className="card p-4 text-center">
                <a href="#">
                  <img
                    className="mx-auto mb-4 h-24 w-24"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/airpods.svg"
                    alt="airpods"
                  />
                  <img
                    className="mx-auto mb-4 h-24 w-24 hidden dark:block"
                    src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/airpods-dark.svg"
                    alt="airpods"
                  />
                </a>
                <a href="#" className="text-lg font-medium text-gray-900 dark:text-white">
                  Accessories
                </a>
              </div>
            </div>
            <a
              href="#"
              className="btn btn-link text-primary-600 dark:text-primary-500 flex items-center justify-center gap-2"
            >
              Shop now
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Brand Logos (Empty without SVGs) */}
        <div className="flex flex-wrap justify-center gap-6"></div>
      </div>
    </section>
  );
};

export default EcommerceHero;