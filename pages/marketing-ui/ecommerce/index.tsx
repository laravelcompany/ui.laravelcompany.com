import type { FC } from "react";
import ProductCards from "./product-cards";
import ProductLists from "./product-lists";
import ProductDetails from "./product-details";
import ShoppingCart from "./shopping-cart";
import CheckoutPages from "./checkout-pages";
import BlockSection from "../../../components/block-section";
import BlockPageBreadcrumb from "../../../components/block-breadcrumb";

const AllEcommerceSections: FC = function () {
    return (
        <>
            <BlockPageBreadcrumb
                title="E-commerce Components"
                description="Build your next online shop with a collection of high-quality e-commerce components coded with Tailwind CSS and Flowbite React."
            />

            <BlockSection
                title="Product Cards"
                description="Showcase your products with these beautiful and functional card layouts."
                githubLink="#"
            >
                <ProductCards />
            </BlockSection>

            <BlockSection
                title="Product Lists"
                description="Implement various product listing layouts with filtering options."
                githubLink="#"
            >
                <ProductLists />
            </BlockSection>

            <BlockSection
                title="Product Details"
                description="Comprehensive product detail pages with image galleries and information."
                githubLink="#"
            >
                <ProductDetails />
            </BlockSection>

            <BlockSection
                title="Shopping Cart"
                description="Shopping cart interfaces including item lists and order summary."
                githubLink="#"
            >
                <ShoppingCart />
            </BlockSection>

            <BlockSection
                title="Checkout Pages"
                description="Checkout flows with shipping forms, payment methods, and order summaries."
                githubLink="#"
            >
                <CheckoutPages />
            </BlockSection>
        </>
    );
};

export default AllEcommerceSections;
