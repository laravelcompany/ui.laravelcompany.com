import { Button, Card, Badge } from "flowbite-react";
import type { FC } from "react";
import {
    HiPlus,
    HiArrowRight,
    HiDotsHorizontal,
    HiCheck,
    HiClock,
    HiPlay,
    HiMail,
    HiOfficeBuilding,
    HiSparkles,
    HiUser,
} from "react-icons/hi";
import BlockSection from "../../../components/block-section";

const WorkflowsPage: FC = function () {
    return (
        <>
            <VisualNodeEditor />
            <LinearProcess />
            <TimelineWorkflow />
            <ApprovalQueueBoard />
            <EscalationPolicy />
            <WorkflowRunSummary />
        </>
    );
};

const VisualNodeEditor: FC = function () {
    return (
        <BlockSection
            title="Visual Node Editor"
            description="Mockup of a node-based workflow editor"
        >
            <div className="relative h-[600px] w-full overflow-hidden rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
                {/* Toolbar */}
                <div className="absolute left-4 top-4 z-10 flex flex-col gap-2 rounded-lg border border-gray-200 bg-white p-2 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <Button color="gray" size="xs" className="p-1"><HiPlus className="h-5 w-5" /></Button>
                    <Button color="gray" size="xs" className="p-1"><HiPlay className="h-5 w-5" /></Button>
                </div>

                {/* Canvas Background Grid */}
                <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6b7280 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                {/* Node 1: Trigger */}
                <div className="absolute left-20 top-20 z-10 w-64 rounded-lg border border-green-200 bg-white shadow-lg dark:border-green-800 dark:bg-gray-800">
                    <div className="flex items-center justify-between border-b border-gray-100 bg-green-50 px-4 py-2 dark:border-gray-700 dark:bg-green-900/20">
                        <span className="font-semibold text-green-700 dark:text-green-400">Trigger: New User</span>
                        <HiDotsHorizontal className="cursor-pointer text-gray-500" />
                    </div>
                    <div className="p-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400">When a user signs up</p>
                    </div>
                    {/* Output Connector */}
                    <div className="absolute -right-3 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-4 border-white bg-green-500 dark:border-gray-800"></div>
                </div>

                {/* SVG Connection Line Node 1 -> Node 2 */}
                <svg className="absolute inset-0 z-0 h-full w-full pointer-events-none">
                    <path d="M 336 100 C 400 100, 400 250, 480 250" fill="none" stroke="#9ca3af" strokeWidth="2" />
                </svg>

                {/* Node 2: Action */}
                <div className="absolute left-[480px] top-[180px] z-10 w-64 rounded-lg border border-blue-200 bg-white shadow-lg dark:border-blue-800 dark:bg-gray-800">
                    <div className="flex items-center justify-between border-b border-gray-100 bg-blue-50 px-4 py-2 dark:border-gray-700 dark:bg-blue-900/20">
                        <span className="font-semibold text-blue-700 dark:text-blue-400">Action: Send Email</span>
                        <HiDotsHorizontal className="cursor-pointer text-gray-500" />
                    </div>
                    <div className="p-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Template: Welcome Email</p>
                    </div>
                    {/* Input Connector */}
                    <div className="absolute -left-3 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-4 border-white bg-blue-500 dark:border-gray-800"></div>
                    {/* Output Connector */}
                    <div className="absolute -right-3 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-4 border-white bg-blue-500 dark:border-gray-800"></div>
                </div>

                {/* SVG Connection Line Node 2 -> Node 3 */}
                <svg className="absolute inset-0 z-0 h-full w-full pointer-events-none">
                    <path d="M 736 250 C 800 250, 800 150, 850 150" fill="none" stroke="#9ca3af" strokeWidth="2" />
                </svg>

                {/* Node 3: Condition */}
                <div className="absolute left-[850px] top-[100px] z-10 w-64 rounded-lg border border-purple-200 bg-white shadow-lg dark:border-purple-800 dark:bg-gray-800">
                    <div className="flex items-center justify-between border-b border-gray-100 bg-purple-50 px-4 py-2 dark:border-gray-700 dark:bg-purple-900/20">
                        <span className="font-semibold text-purple-700 dark:text-purple-400">Delay: 3 Days</span>
                        <HiDotsHorizontal className="cursor-pointer text-gray-500" />
                    </div>
                    <div className="p-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400">Wait for user activity</p>
                    </div>
                    {/* Input Connector */}
                    <div className="absolute -left-3 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-4 border-white bg-purple-500 dark:border-gray-800"></div>
                </div>

            </div>
        </BlockSection>
    );
};

const LinearProcess: FC = function () {
    return (
        <BlockSection
            title="Linear Process Flow"
            description="Step-by-step process visualization"
        >
            <Card>
                <ol className="items-center sm:flex w-full">
                    <li className="relative mb-6 sm:mb-0 w-full">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <HiCheck className="w-4 h-4 text-blue-600 dark:text-blue-300" />
                            </div>
                            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <div className="mt-3 sm:pr-8">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Draft</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Created on Dec 2, 2023</p>
                        </div>
                    </li>
                    <li className="relative mb-6 sm:mb-0 w-full">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <HiCheck className="w-4 h-4 text-blue-600 dark:text-blue-300" />
                            </div>
                            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                        </div>
                        <div className="mt-3 sm:pr-8">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Review</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Approved by Manager</p>
                        </div>
                    </li>
                    <li className="relative mb-6 sm:mb-0 w-full">
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                                <svg className="w-4 h-4 text-blue-100 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                        </div>
                        <div className="mt-3 sm:pr-8">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Published</h3>
                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Pending final checks</p>
                        </div>
                    </li>
                </ol>
            </Card>
        </BlockSection>
    );
};

const TimelineWorkflow: FC = function () {
    return (
        <BlockSection title="Vertical Timeline Workflow" description="Activity history or vertical process">
            <Card>
                <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-3">
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <HiCheck className="w-3 h-3 text-blue-800 dark:text-blue-300" />
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            Workflow Started
                            <Badge color="info" className="ml-3 hidden md:inline">Auto-triggered</Badge>
                        </h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2023</time>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">The workflow was initiated by system event #12345.</p>
                    </li>
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                            <HiArrowRight className="w-3 h-3 text-blue-800 dark:text-blue-300" />
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Step 2: Processing Data</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Started at 10:45 AM</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Processing user data and validating inputs.</p>
                    </li>
                    <li className="ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-gray-700">
                            <HiClock className="w-3 h-3 text-gray-800 dark:text-gray-300" />
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Step 3: Awaiting Approval</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Estimated 2 hours remaining</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Waiting for manual approval from the admin team.</p>
                    </li>
                </ol>
            </Card>
        </BlockSection>
    )
}

const ApprovalQueueBoard: FC = function () {
    const columns = [
        {
            title: "Requested",
            badge: "4 items",
            color: "blue",
            cards: [
                { title: "New vendor onboarding", owner: "Finance Ops", time: "Submitted 8 min ago" },
                { title: "Enterprise discount review", owner: "Sales", time: "Submitted 22 min ago" },
            ],
        },
        {
            title: "In review",
            badge: "2 active",
            color: "yellow",
            cards: [
                { title: "Security exception", owner: "Platform Team", time: "Waiting on legal notes" },
                { title: "Refund over threshold", owner: "Support", time: "Needs supervisor sign-off" },
            ],
        },
        {
            title: "Completed",
            badge: "6 today",
            color: "green",
            cards: [
                { title: "Contract renewal", owner: "Procurement", time: "Approved by A. Carter" },
                { title: "Campaign launch", owner: "Marketing", time: "Published 14 min ago" },
            ],
        },
    ];

    return (
        <BlockSection
            title="Approval Queue Board"
            description="Kanban-style workflow for routing requests through review stages"
        >
            <div className="grid grid-cols-1 gap-4 bg-gray-50 p-4 dark:bg-gray-900 xl:grid-cols-3">
                {columns.map((column) => (
                    <div
                        key={column.title}
                        className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
                    >
                        <div className="mb-4 flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{column.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{column.badge}</p>
                            </div>
                            <Badge color={column.color}>{column.badge}</Badge>
                        </div>
                        <div className="space-y-3">
                            {column.cards.map((card) => (
                                <div
                                    key={card.title}
                                    className="rounded-lg border border-gray-200 p-4 shadow-sm dark:border-gray-700"
                                >
                                    <div className="mb-3 flex items-start justify-between gap-3">
                                        <div>
                                            <h4 className="font-medium text-gray-900 dark:text-white">{card.title}</h4>
                                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{card.time}</p>
                                        </div>
                                        <HiDotsHorizontal className="mt-1 text-gray-400" />
                                    </div>
                                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                                        <span className="inline-flex items-center gap-2">
                                            <HiOfficeBuilding className="h-4 w-4" />
                                            {card.owner}
                                        </span>
                                        <Button size="xs" color="gray">
                                            Open
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </BlockSection>
    );
};

const EscalationPolicy: FC = function () {
    const steps = [
        {
            icon: HiMail,
            title: "Initial reminder",
            description: "Notify the current approver when a task is inactive for 30 minutes.",
            accent: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
        },
        {
            icon: HiUser,
            title: "Manager escalation",
            description: "Route to the team lead after the first SLA breach and preserve the full audit trail.",
            accent: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
        },
        {
            icon: HiSparkles,
            title: "Automated fallback",
            description: "Trigger a backup workflow that pauses downstream tasks and flags impacted records.",
            accent: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
        },
    ];

    return (
        <BlockSection
            title="Escalation Policy"
            description="Workflow steps for handling overdue approvals and automated fallback actions"
        >
            <Card>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.25fr,0.75fr]">
                    <div className="space-y-4">
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <div key={step.title} className="flex gap-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${step.accent}`}>
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="mb-1 flex items-center gap-2">
                                            <span className="text-sm font-semibold text-gray-400 dark:text-gray-500">
                                                0{index + 1}
                                            </span>
                                            <h3 className="font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="rounded-lg bg-gray-50 p-5 dark:bg-gray-900">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Policy snapshot</h3>
                        <div className="mt-4 space-y-4">
                            <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                                <div className="mb-2 flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">SLA target</span>
                                    <Badge color="info">2h response</Badge>
                                </div>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">94.8%</p>
                            </div>
                            <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                                <div className="mb-2 flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Open escalations</span>
                                    <Badge color="warning">3 active</Badge>
                                </div>
                                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                    <div className="flex items-center justify-between">
                                        <span>Billing exception</span>
                                        <span>42m late</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span>GDPR export</span>
                                        <span>18m late</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span>Campaign approval</span>
                                        <span>9m late</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Card>
        </BlockSection>
    );
};

const WorkflowRunSummary: FC = function () {
    const jobs = [
        { name: "Customer welcome sequence", status: "Completed", duration: "1m 24s", color: "success" },
        { name: "Document verification", status: "Running", duration: "4m 08s", color: "info" },
        { name: "Payment risk review", status: "Needs input", duration: "Paused", color: "warning" },
    ];

    return (
        <BlockSection
            title="Workflow Run Summary"
            description="Compact operations view for live runs, completion rate, and next actions"
        >
            <Card>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr,1.1fr]">
                    <div className="rounded-lg bg-gray-50 p-5 dark:bg-gray-900">
                        <div className="flex items-start justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Today</p>
                                <p className="mt-1 text-3xl font-bold text-gray-900 dark:text-white">128 runs</p>
                            </div>
                            <Badge color="success">97.2% success</Badge>
                        </div>
                        <div className="mt-6 space-y-4">
                            <div>
                                <div className="mb-2 flex items-center justify-between text-sm">
                                    <span className="text-gray-500 dark:text-gray-400">Completed</span>
                                    <span className="font-medium text-gray-900 dark:text-white">101</span>
                                </div>
                                <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                                    <div className="h-2 w-[79%] rounded-full bg-green-500"></div>
                                </div>
                            </div>
                            <div>
                                <div className="mb-2 flex items-center justify-between text-sm">
                                    <span className="text-gray-500 dark:text-gray-400">Running</span>
                                    <span className="font-medium text-gray-900 dark:text-white">19</span>
                                </div>
                                <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                                    <div className="h-2 w-[15%] rounded-full bg-blue-500"></div>
                                </div>
                            </div>
                            <div>
                                <div className="mb-2 flex items-center justify-between text-sm">
                                    <span className="text-gray-500 dark:text-gray-400">Needs attention</span>
                                    <span className="font-medium text-gray-900 dark:text-white">8</span>
                                </div>
                                <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700">
                                    <div className="h-2 w-[6%] rounded-full bg-amber-500"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-4 flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Active runs</h3>
                            <Button size="xs" color="gray">
                                View logs
                            </Button>
                        </div>
                        <div className="space-y-3">
                            {jobs.map((job) => (
                                <div
                                    key={job.name}
                                    className="flex flex-col gap-3 rounded-lg border border-gray-200 p-4 dark:border-gray-700 md:flex-row md:items-center md:justify-between"
                                >
                                    <div>
                                        <div className="flex items-center gap-2">
                                            <h4 className="font-medium text-gray-900 dark:text-white">{job.name}</h4>
                                            <Badge color={job.color}>{job.status}</Badge>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                            Last updated {job.duration} ago
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="inline-flex items-center gap-1">
                                            <HiClock className="h-4 w-4" />
                                            {job.duration}
                                        </span>
                                        <Button size="xs" color="gray">
                                            Inspect
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Card>
        </BlockSection>
    );
};

export default WorkflowsPage;
