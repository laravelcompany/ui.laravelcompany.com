import { Breadcrumb } from "flowbite-react";
import type { FC } from "react";
import { HiHome } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import categoriesOfBlocks from "../data/blocks-categories.json";
import type { BlockSectionProps } from "./block-section";

const BlockPageBreadcrumb: FC<
  Pick<BlockSectionProps, "title" | "description">
> = function ({ title, description }) {
  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);
  const categorySlug = pathParts[0];

  const category = categoriesOfBlocks.find((c) => c.categorySlug === categorySlug);
  const categoryTitle = category ? category.categoryTitle : "Marketing UI";

  const capitalize = (s: string) => s ? s.charAt(0).toUpperCase() + s.slice(1) : "";

  return (
    <div className="px-4 mb-6 flex flex-col gap-3 pt-6 max-w-screen-2xl mx-auto">
      <Breadcrumb>
        <Breadcrumb.Item href="/" icon={HiHome}>
          Blocks
        </Breadcrumb.Item>
        <Breadcrumb.Item>{capitalize((categorySlug || "").replace("-", " ")) || categoryTitle}</Breadcrumb.Item>
        <Breadcrumb.Item>{title}</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        React {title} - Flowbite
      </h1>
      <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl">{description}</p>
      <hr className="dark:border-gray-800 border-gray-100 mt-4" />
    </div>
  );
};

export default BlockPageBreadcrumb;
