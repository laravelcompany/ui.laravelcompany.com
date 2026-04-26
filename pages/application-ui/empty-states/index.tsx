import { Badge, Button, Card } from "flowbite-react";
import type { FC } from "react";
import { HiClock, HiCollection, HiInbox, HiPlus } from "react-icons/hi";
import BlockSection from "../../../components/block-section";

const EmptyStatesPage: FC = function () {
  return (
    <>
      <BlankProjectState />
      <SearchResultsEmptyState />
      <ApprovalQueueEmptyState />
      <TeamWorkspaceEmptyState />
    </>
  );
};

const BlankProjectState: FC = function () {
  return (
    <BlockSection
      title="Blank Project State"
      description="Starter empty state for first-time projects with a clear primary action"
    >
      <div className="flex min-h-[420px] items-center justify-center rounded-lg bg-gray-50 p-8 dark:bg-gray-900">
        <Card className="max-w-xl text-center shadow-sm">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30">
            <HiCollection className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Create your first project workspace</h3>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Add a project to start tracking milestones, owners, documents, and team updates in one place.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button>
              <HiPlus className="mr-2 h-4 w-4" />
              New Project
            </Button>
            <Button color="gray">Import Data</Button>
          </div>
        </Card>
      </div>
    </BlockSection>
  );
};

const SearchResultsEmptyState: FC = function () {
  return (
    <BlockSection
      title="Search Results Empty State"
      description="Empty search pattern with refinement tips and quick recovery actions"
    >
      <div className="rounded-lg border border-dashed border-gray-300 bg-white p-10 text-center dark:border-gray-700 dark:bg-gray-900">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
          <HiInbox className="h-7 w-7 text-gray-500 dark:text-gray-400" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">No matches for “quarterly rollout”</h3>
        <p className="mx-auto mt-3 max-w-2xl text-gray-500 dark:text-gray-400">
          Try removing filters, checking spelling, or broadening the date range to surface archived and related items.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Badge color="info">Clear filters</Badge>
          <Badge color="gray">Search all workspaces</Badge>
          <Badge color="warning">Include archived items</Badge>
        </div>
      </div>
    </BlockSection>
  );
};

const ApprovalQueueEmptyState: FC = function () {
  return (
    <BlockSection
      title="Approval Queue Empty State"
      description="Operational empty state for cleared queues and no-pending-work moments"
    >
      <div className="rounded-lg bg-green-50 p-8 dark:bg-green-900/10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
          <div>
            <Badge color="success" className="mb-4 w-fit">All clear</Badge>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">No approvals are waiting on you.</h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Your queue is empty for now. When new requests arrive, they’ll appear here with SLA priority and status labels.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "Completed today", value: "18" },
              { label: "Avg. review time", value: "14m" },
              { label: "Overdue", value: "0" },
            ].map((item) => (
              <Card key={item.label} className="shadow-sm">
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                <p className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">{item.value}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </BlockSection>
  );
};

const TeamWorkspaceEmptyState: FC = function () {
  return (
    <BlockSection
      title="Team Workspace Empty State"
      description="Friendly onboarding empty state for inviting collaborators into a new workspace"
    >
      <div className="rounded-lg bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-900 p-10 text-white">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
            New workspace
          </div>
          <h3 className="text-4xl font-bold tracking-tight">Bring your team in before the work starts.</h3>
          <p className="mt-4 max-w-2xl text-blue-100">
            Invite collaborators, assign roles, and share the project board so tasks and approvals stay visible from day one.
          </p>
          <div className="mt-7 flex gap-3">
            <Button color="light">Invite Members</Button>
            <Button color="gray">View Permissions</Button>
          </div>
        </div>
      </div>
    </BlockSection>
  );
};

export default EmptyStatesPage;
