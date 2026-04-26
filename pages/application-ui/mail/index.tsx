import { Avatar, Badge, Button, TextInput, Textarea } from "flowbite-react";
import type { FC } from "react";
import {
  HiArchive,
  HiClock,
  HiInbox,
  HiPaperAirplane,
  HiPencilAlt,
  HiReply,
  HiSearch,
  HiStar,
  HiTrash,
} from "react-icons/hi";
import BlockSection from "../../../components/block-section";

const MailPage: FC = function () {
  return (
    <>
      <InboxWorkspace />
      <EmailThread />
      <ComposePanel />
    </>
  );
};

const InboxWorkspace: FC = function () {
  const messages = [
    { from: "Bonnie Green", subject: "Design review notes", preview: "I left comments on the latest dashboard flow.", time: "9:12", unread: true },
    { from: "Jese Leos", subject: "API contract update", preview: "Backend changes are ready for frontend integration.", time: "8:44", unread: true },
    { from: "Sofia McGuire", subject: "Campaign launch assets", preview: "Final banner exports and copy are attached.", time: "Yesterday", unread: false },
    { from: "Neil Sims", subject: "Sprint planning", preview: "Can we move the planning session to Thursday?", time: "Yesterday", unread: false },
  ];

  return (
    <BlockSection
      title="Inbox Workspace"
      description="Three-column mail application layout with folders, inbox list, and message preview"
    >
      <div className="grid h-[720px] grid-cols-1 overflow-hidden rounded-lg border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900 xl:grid-cols-[240px,360px,1fr]">
        <aside className="hidden border-r border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 xl:flex xl:flex-col">
          <div className="border-b border-gray-200 p-4 dark:border-gray-700">
            <Button className="w-full">
              <HiPencilAlt className="mr-2 h-4 w-4" />
              Compose
            </Button>
          </div>
          <div className="flex-1 space-y-1 p-3">
            {[
              ["Inbox", "24", HiInbox, true],
              ["Starred", "8", HiStar, false],
              ["Scheduled", "3", HiClock, false],
              ["Archived", "17", HiArchive, false],
              ["Trash", "2", HiTrash, false],
            ].map(([label, count, Icon, active]) => {
              const ItemIcon = Icon as typeof HiInbox;

              return (
                <button
                  key={label}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm ${
                    active
                      ? "bg-blue-50 font-medium text-blue-700 dark:bg-gray-700 dark:text-blue-300"
                      : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  <span className="inline-flex items-center gap-3">
                    <ItemIcon className="h-4 w-4" />
                    {label}
                  </span>
                  <span>{count}</span>
                </button>
              );
            })}
          </div>
        </aside>

        <section className="flex flex-col border-r border-gray-200 dark:border-gray-700">
          <div className="border-b border-gray-200 p-4 dark:border-gray-700">
            <TextInput icon={HiSearch} placeholder="Search mail..." />
          </div>
          <div className="flex-1 overflow-y-auto">
            {messages.map((message, index) => (
              <button
                key={message.subject}
                className={`block w-full border-b border-gray-200 px-4 py-4 text-left dark:border-gray-700 ${
                  index === 0 ? "bg-blue-50 dark:bg-gray-800" : "hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <div className="mb-1 flex items-center justify-between gap-3">
                  <p className={`truncate text-sm ${message.unread ? "font-semibold text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-200"}`}>
                    {message.from}
                  </p>
                  <span className="shrink-0 text-xs text-gray-500 dark:text-gray-400">{message.time}</span>
                </div>
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">{message.subject}</p>
                <p className="mt-1 truncate text-sm text-gray-500 dark:text-gray-400">{message.preview}</p>
              </button>
            ))}
          </div>
        </section>

        <section className="hidden flex-col dark:bg-gray-900 xl:flex">
          <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-700">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Design review notes</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">From Bonnie Green to Product Team</p>
            </div>
            <div className="flex gap-2">
              <Button color="gray" size="xs">
                <HiReply className="mr-2 h-4 w-4" />
                Reply
              </Button>
              <Button color="gray" size="xs">
                <HiArchive className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="flex-1 space-y-6 overflow-y-auto p-6">
            <div className="flex items-start gap-4">
              <Avatar rounded img="https://flowbite.com/docs/images/people/profile-picture-3.jpg" />
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-3">
                  <p className="font-semibold text-gray-900 dark:text-white">Bonnie Green</p>
                  <Badge color="info">Unread</Badge>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Today at 9:12 AM</span>
                </div>
                <div className="space-y-4 rounded-lg border border-gray-200 bg-gray-50 p-5 text-sm leading-6 text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  <p>Hi team, I left comments on the latest dashboard flow.</p>
                  <p>The main changes are around spacing in the activity panel and simplifying the success state after form submission.</p>
                  <p>Please review before the 2 PM handoff so we can freeze the UI for QA.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </BlockSection>
  );
};

const EmailThread: FC = function () {
  return (
    <BlockSection
      title="Email Thread"
      description="Threaded conversation view for customer support, hiring, or internal collaboration"
    >
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
        {[
          {
            name: "Sofia McGuire",
            role: "Marketing Lead",
            time: "08:30 AM",
            body: "Can we move the launch announcement to Friday? The paid media plan needs one more approval.",
            img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
          },
          {
            name: "You",
            role: "Product Ops",
            time: "08:47 AM",
            body: "Friday works. I’ll update the launch checklist and notify support so macros stay in sync.",
            img: "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
          },
          {
            name: "Jese Leos",
            role: "Engineering",
            time: "09:05 AM",
            body: "No blocker on my side. The feature flag can stay off until the content team signs off.",
            img: "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
          },
        ].map((item, index) => (
          <div key={`${item.name}-${item.time}`} className="flex gap-4 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <Avatar rounded img={item.img} />
            <div className="flex-1">
              <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">{item.name}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{item.role}</span>
                <span className="text-sm text-gray-400 dark:text-gray-500">{item.time}</span>
              </div>
              {index > 0 && (
                <div className="mb-3 rounded-md border-l-2 border-blue-200 bg-blue-50 px-3 py-2 text-xs text-blue-700 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-300">
                  Reply in thread
                </div>
              )}
              <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </BlockSection>
  );
};

const ComposePanel: FC = function () {
  return (
    <BlockSection
      title="Compose Panel"
      description="Email composer with recipients, subject line, attachments, and draft actions"
    >
      <div className="grid gap-6 rounded-lg border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-900 lg:grid-cols-[1fr,320px]">
        <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
          <div className="space-y-4">
            <TextInput addon="To" placeholder="design@laravelcompany.com" />
            <TextInput addon="Cc" placeholder="product@laravelcompany.com" />
            <TextInput placeholder="Subject: Review updated onboarding copy" />
            <Textarea
              rows={12}
              placeholder="Write your message..."
              defaultValue={`Hi team,

I've attached the revised onboarding copy for the welcome sequence and settings empty states.

Please leave any blocking feedback before noon so we can include this in today's release candidate.

Thanks,`}
            />
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-gray-200 pt-4 dark:border-gray-700">
            <div className="flex gap-2">
              <Button>
                <HiPaperAirplane className="mr-2 h-4 w-4 rotate-90" />
                Send
              </Button>
              <Button color="gray">Save Draft</Button>
            </div>
            <Button color="gray">
              <HiTrash className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Attachments</h3>
            <div className="mt-4 space-y-3">
              {["launch-checklist.pdf", "welcome-copy.docx", "mobile-screens.png"].map((file) => (
                <div key={file} className="flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2 text-sm dark:bg-gray-700">
                  <span className="text-gray-700 dark:text-gray-200">{file}</span>
                  <Badge color="gray">Ready</Badge>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Send checklist</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>Subject line added</li>
              <li>Recipients confirmed</li>
              <li>3 attachments uploaded</li>
              <li>Draft autosaved 1 minute ago</li>
            </ul>
          </div>
        </div>
      </div>
    </BlockSection>
  );
};

export default MailPage;
