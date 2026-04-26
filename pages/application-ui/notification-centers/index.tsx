import { Avatar, Badge, Button, Card } from "flowbite-react";
import type { FC } from "react";
import { HiBell, HiCheckCircle, HiClock, HiFilter, HiLightningBolt } from "react-icons/hi";
import BlockSection from "../../../components/block-section";

const NotificationCentersPage: FC = function () {
  return (
    <>
      <ActivityFeedCenter />
      <PriorityAlertsPanel />
      <DigestPreferences />
      <InboxSummaryStrip />
    </>
  );
};

const ActivityFeedCenter: FC = function () {
  const items = [
    { name: "Bonnie Green", action: "commented on Q2 launch plan", time: "2m ago", color: "info" },
    { name: "Finance Bot", action: "approved invoice batch #4201", time: "12m ago", color: "success" },
    { name: "Jese Leos", action: "flagged deployment rollback risk", time: "27m ago", color: "warning" },
  ];

  return (
    <BlockSection
      title="Activity Feed Center"
      description="Central notification feed for cross-product updates, approvals, and mentions"
    >
      <Card>
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Recent activity</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Everything relevant to your workspace in one feed</p>
          </div>
          <Button color="gray" size="sm">
            <HiFilter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.action} className="flex gap-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <Avatar rounded img="https://flowbite.com/docs/images/people/profile-picture-3.jpg" />
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-semibold text-gray-900 dark:text-white">{item.name}</p>
                  <Badge color={item.color}>{item.time}</Badge>
                </div>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.action}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </BlockSection>
  );
};

const PriorityAlertsPanel: FC = function () {
  return (
    <BlockSection
      title="Priority Alerts Panel"
      description="High-signal panel for incidents, deadlines, and escalations that need attention"
    >
      <div className="grid gap-4 md:grid-cols-3">
        {[
          { title: "Deployment failed", note: "API cluster rollback recommended", color: "bg-red-50 dark:bg-red-900/10", icon: HiLightningBolt },
          { title: "SLA nearing breach", note: "3 customer approvals due in 15m", color: "bg-amber-50 dark:bg-amber-900/10", icon: HiClock },
          { title: "Weekly digest ready", note: "17 items summarized for leadership", color: "bg-blue-50 dark:bg-blue-900/10", icon: HiBell },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title} className={item.color}>
              <Icon className="mb-4 h-7 w-7 text-gray-900 dark:text-white" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{item.note}</p>
            </Card>
          );
        })}
      </div>
    </BlockSection>
  );
};

const DigestPreferences: FC = function () {
  return (
    <BlockSection
      title="Digest Preferences"
      description="Settings-style section for controlling summary cadence and channel preferences"
    >
      <Card>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Morning digest", "Every weekday at 8:00 AM", "Enabled"],
            ["Approval alerts", "Instant notifications", "Enabled"],
            ["Mentions only", "Slack and email sync", "Optional"],
            ["Weekly summary", "Friday at 4:00 PM", "Enabled"],
          ].map(([title, note, status]) => (
            <div key={title} className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 dark:text-white">{title}</h3>
                <Badge color={status === "Optional" ? "gray" : "success"}>{status}</Badge>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">{note}</p>
            </div>
          ))}
        </div>
      </Card>
    </BlockSection>
  );
};

const InboxSummaryStrip: FC = function () {
  return (
    <BlockSection
      title="Inbox Summary Strip"
      description="Compact KPI summary for unread items, critical alerts, and completed notifications"
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Unread", value: "24", icon: HiBell },
          { label: "Critical", value: "3", icon: HiLightningBolt },
          { label: "Due soon", value: "8", icon: HiClock },
          { label: "Resolved", value: "41", icon: HiCheckCircle },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.label} className="shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                  <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{item.value}</p>
                </div>
                <div className="rounded-2xl bg-gray-100 p-3 dark:bg-gray-800">
                  <Icon className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </BlockSection>
  );
};

export default NotificationCentersPage;
