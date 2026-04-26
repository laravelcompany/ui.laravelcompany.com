import { Avatar, Badge, Button, Card } from "flowbite-react";
import type { FC } from "react";
import {
  HiChartPie,
  HiChevronRight,
  HiCog,
  HiCollection,
  HiHome,
  HiInbox,
  HiUserGroup,
} from "react-icons/hi";
import BlockSection from "../../../components/block-section";

const SidebarNavigationPage: FC = function () {
  return (
    <>
      <WorkspaceSidebar />
      <CollapsibleTeamNav />
      <IconRailNavigation />
      <ProjectSwitchSidebar />
    </>
  );
};

const WorkspaceSidebar: FC = function () {
  return (
    <BlockSection
      title="Workspace Sidebar"
      description="Full-height application sidebar with sections, badges, and a user footer"
    >
      <div className="grid min-h-[560px] grid-cols-1 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 lg:grid-cols-[280px,1fr]">
        <aside className="flex flex-col border-r border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Workspace</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Operations hub</p>
          </div>
          <nav className="space-y-2">
            {[
              ["Home", HiHome, ""],
              ["Inbox", HiInbox, "12"],
              ["Analytics", HiChartPie, ""],
              ["Projects", HiCollection, "4"],
              ["Team", HiUserGroup, ""],
              ["Settings", HiCog, ""],
            ].map(([label, Icon, count], index) => {
              const NavIcon = Icon as typeof HiHome;
              return (
                <button
                  key={label}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm ${
                    index === 1
                      ? "bg-blue-50 font-medium text-blue-700 dark:bg-gray-800 dark:text-blue-300"
                      : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
                >
                  <span className="inline-flex items-center gap-3">
                    <NavIcon className="h-4 w-4" />
                    {label}
                  </span>
                  {count ? <Badge color="info">{count}</Badge> : null}
                </button>
              );
            })}
          </nav>
          <div className="mt-auto rounded-lg border border-gray-200 bg-white p-3 dark:border-gray-700 dark:bg-gray-800">
            <div className="flex items-center gap-3">
              <Avatar rounded img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" size="sm" />
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">Neil Sims</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Workspace Admin</p>
              </div>
            </div>
          </div>
        </aside>
        <div className="flex items-center justify-center bg-white p-8 dark:bg-gray-800">
          <p className="text-gray-500 dark:text-gray-400">Main content area preview</p>
        </div>
      </div>
    </BlockSection>
  );
};

const CollapsibleTeamNav: FC = function () {
  return (
    <BlockSection
      title="Collapsible Team Navigation"
      description="Nested sidebar pattern for team, department, and workspace hierarchies"
    >
      <Card>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            { title: "Product", items: ["Roadmap", "Sprint Board", "Launches"] },
            { title: "Design", items: ["Reviews", "Assets", "Libraries"] },
            { title: "Growth", items: ["Campaigns", "Experiments", "Reporting"] },
          ].map((group) => (
            <div key={group.title} className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 dark:text-white">{group.title}</h3>
                <HiChevronRight className="h-4 w-4 text-gray-400" />
              </div>
              <div className="space-y-2">
                {group.items.map((item) => (
                  <div key={item} className="rounded-md bg-gray-50 px-3 py-2 text-sm text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </BlockSection>
  );
};

const IconRailNavigation: FC = function () {
  return (
    <BlockSection
      title="Icon Rail Navigation"
      description="Compact icon-first rail for dense admin layouts and internal tools"
    >
      <div className="flex min-h-[360px] rounded-lg border border-gray-200 dark:border-gray-700">
        <aside className="flex w-20 flex-col items-center gap-4 border-r border-gray-200 bg-gray-50 py-6 dark:border-gray-700 dark:bg-gray-900">
          {[HiHome, HiInbox, HiChartPie, HiCollection, HiCog].map((Icon, index) => (
            <button
              key={index}
              className={`rounded-2xl p-3 ${index === 0 ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" : "text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"}`}
            >
              <Icon className="h-5 w-5" />
            </button>
          ))}
        </aside>
        <div className="flex flex-1 items-center justify-center bg-white p-8 dark:bg-gray-800">
          <p className="text-gray-500 dark:text-gray-400">Icon rail content preview</p>
        </div>
      </div>
    </BlockSection>
  );
};

const ProjectSwitchSidebar: FC = function () {
  return (
    <BlockSection
      title="Project Switch Sidebar"
      description="Sidebar with active project context, quick actions, and section grouping"
    >
      <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
        <div className="grid gap-6 lg:grid-cols-[320px,1fr]">
          <Card>
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Current project</p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Atlas Redesign</h3>
              </div>
              <Badge color="success">Live</Badge>
            </div>
            <div className="space-y-3">
              {["Overview", "Tasks", "Assets", "Approvals", "Files"].map((item, index) => (
                <button
                  key={item}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm ${
                    index === 0
                      ? "bg-blue-50 font-medium text-blue-700 dark:bg-gray-800 dark:text-blue-300"
                      : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
                >
                  {item}
                  <HiChevronRight className="h-4 w-4 text-gray-400" />
                </button>
              ))}
            </div>
            <Button className="mt-5 w-full">Create Task</Button>
          </Card>
          <div className="flex items-center justify-center rounded-lg border border-dashed border-gray-300 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
            <p className="text-gray-500 dark:text-gray-400">Project content preview</p>
          </div>
        </div>
      </div>
    </BlockSection>
  );
};

export default SidebarNavigationPage;
