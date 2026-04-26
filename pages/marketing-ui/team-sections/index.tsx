import { Avatar, Badge, Button, Card } from "flowbite-react";
import type { FC } from "react";
import BlockSection from "../../../components/block-section";

const AllTeamSections: FC = function () {
  return (
    <>
      <GridWithHoverEffects />
      <DetailedListView />
      <HeroTeamHeader />
      <LeadershipSpotlight />
      <DepartmentDirectory />
      <CompactAdvisors />
      <CultureStatsGrid />
      <OpenRolesTeamBanner />
    </>
  );
};

const GridWithHoverEffects: FC = function () {
  return (
    <BlockSection
      title="Grid with Hover Effects"
      description="Team cards that reveal social links and extra info on hover"
      code={`
<div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
    <Card className="group relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie image" />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">CEO & Co-Founder</span>
            <div className="flex mt-4 space-x-3 md:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Review</a>
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
            </div>
        </div>
    </Card>
    <Card className="group relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10">
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese image" />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Jese Leos</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">CTO</span>
            <div className="flex mt-4 space-x-3 md:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Review</a>
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
            </div>
        </div>
    </Card>
</div>
      `}
    >
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        <Card className="group relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10">
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie image" />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">CEO & Co-Founder</span>
            <div className="flex mt-4 space-x-3 md:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Review</a>
              <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
            </div>
          </div>
        </Card>
        <Card className="group relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-10">
            <img className="w-24 h-24 mb-3 rounded-full shadow-lg object-cover" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="Jese image" />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Jese Leos</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">CTO</span>
            <div className="flex mt-4 space-x-3 md:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Review</a>
              <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
            </div>
          </div>
        </Card>
      </div>
    </BlockSection>
  )
}

const DetailedListView: FC = function () {
  return (
    <BlockSection title="Detailed List View" description="Horizontal cards with bio and skills">
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-1">
        <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg object-cover h-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png" alt="Thomas Avatar" />
          </a>
          <div className="p-5">
            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              <a href="#">Thomas Lean</a>
            </h3>
            <span className="text-gray-500 dark:text-gray-400">UI/UX Designer</span>
            <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Thomas drives the technical strategy of the flowbite platform and brand.</p>
            <ul className="flex space-x-4 sm:mt-0">
              <li>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Figma</span>
              </li>
              <li>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">React</span>
              </li>
              <li>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">CSS</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </BlockSection>
  )
}

const HeroTeamHeader: FC = function () {
  return (
    <BlockSection title="Hero Team Header" description="Featured member with grid below">
      <div className="text-center mb-8">
        <Avatar size="xl" rounded img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png" className="mx-auto mb-4" />
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Sofia McGuire</h2>
        <p className="text-gray-500 dark:text-gray-400">Lead Marketing Specialist</p>
        <p className="mt-4 max-w-2xl mx-auto text-gray-500 dark:text-gray-400">
          "Building the future of digital marketing with passion and data-driven strategies."
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <Avatar size="lg" rounded img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png" className="mx-auto mb-2" />
          <h4 className="font-semibold text-gray-900 dark:text-white">Neil Sims</h4>
        </div>
        <div className="text-center">
          <Avatar size="lg" rounded img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" className="mx-auto mb-2" />
          <h4 className="font-semibold text-gray-900 dark:text-white">Roberta Casas</h4>
        </div>
        <div className="text-center">
          <Avatar size="lg" rounded img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" className="mx-auto mb-2" />
          <h4 className="font-semibold text-gray-900 dark:text-white">Michael Gouch</h4>
        </div>
        <div className="text-center">
          <Avatar size="lg" rounded img="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/lana-byrd.png" className="mx-auto mb-2" />
          <h4 className="font-semibold text-gray-900 dark:text-white">Lana Byrd</h4>
        </div>
      </div>
    </BlockSection>
  )
}

const LeadershipSpotlight: FC = function () {
  return (
    <BlockSection title="Leadership Spotlight" description="Feature the executive team with metrics and short bios">
      <div className="grid gap-6 bg-gray-50 p-6 dark:bg-gray-900 lg:grid-cols-[1.2fr,0.8fr]">
        <Card className="border-0 shadow-sm dark:bg-gray-800">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <img
              className="h-28 w-28 rounded-2xl object-cover"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
              alt="Bonnie Green"
            />
            <div className="flex-1">
              <Badge color="info" className="mb-3 w-fit">Leadership</Badge>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Bonnie Green</h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">CEO and Co-Founder</p>
              <p className="mt-4 max-w-2xl text-sm text-gray-600 dark:text-gray-400">
                Bonnie leads product vision, partnerships, and global expansion across the Laravel Company ecosystem.
              </p>
            </div>
            <Button color="gray">Book Interview</Button>
          </div>
        </Card>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <Card className="shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400">Team members</p>
            <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">42</p>
          </Card>
          <Card className="shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400">Countries</p>
            <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">11</p>
          </Card>
          <Card className="shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400">Open roles</p>
            <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">7</p>
          </Card>
        </div>
      </div>
    </BlockSection>
  )
}

const DepartmentDirectory: FC = function () {
  const departments = [
    {
      name: "Design",
      lead: "Thomas Lean",
      members: ["Bonnie Green", "Roberta Casas", "Neil Sims"],
      color: "info",
    },
    {
      name: "Engineering",
      lead: "Jese Leos",
      members: ["Michael Gough", "Lana Byrd", "Karen Nelson"],
      color: "purple",
    },
    {
      name: "Marketing",
      lead: "Sofia McGuire",
      members: ["Gloria Finch", "Nina Fox", "Derek Cole"],
      color: "success",
    },
  ];

  return (
    <BlockSection title="Department Directory" description="Organize team members by discipline with leads and contributors">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {departments.map((department) => (
          <Card key={department.name} className="shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{department.name}</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Lead: {department.lead}</p>
              </div>
              <Badge color={department.color}>{department.members.length + 1} people</Badge>
            </div>
            <div className="mt-5 space-y-3">
              {department.members.map((member) => (
                <div key={member} className="flex items-center justify-between rounded-lg bg-gray-50 px-4 py-3 dark:bg-gray-800">
                  <span className="font-medium text-gray-900 dark:text-white">{member}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Contributor</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </BlockSection>
  )
}

const CompactAdvisors: FC = function () {
  const advisors = [
    "Neil Sims",
    "Roberta Casas",
    "Michael Gough",
    "Lana Byrd",
    "Karen Nelson",
    "Leslie Livingston",
  ];

  return (
    <BlockSection title="Compact Advisors" description="Small profile chips for advisors, mentors, or distributed contributors">
      <Card>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {advisors.map((advisor, index) => (
            <div key={advisor} className="flex items-center gap-4 rounded-xl border border-gray-200 p-4 dark:border-gray-700">
              <Avatar
                rounded
                img={`https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/${[
                  "neil-sims",
                  "roberta-casas",
                  "michael-gouch",
                  "lana-byrd",
                  "karen-nelson",
                  "leslie-livingston",
                ][index]}.png`}
                size="md"
              />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{advisor}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">External Advisor</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </BlockSection>
  )
}

const CultureStatsGrid: FC = function () {
  const stats = [
    { label: "Retention", value: "96%", note: "12-month average" },
    { label: "Avg. tenure", value: "4.8y", note: "Across full-time staff" },
    { label: "Remote-first", value: "78%", note: "Working outside HQ" },
    { label: "Learning budget", value: "$1.5k", note: "Per teammate annually" },
  ];

  return (
    <BlockSection title="Culture Stats Grid" description="Combine people metrics with short messaging for careers or about pages">
      <div className="grid gap-6 lg:grid-cols-[0.9fr,1.1fr]">
        <Card className="shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Why teams stay here</h3>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            We invest in mentorship, flexible schedules, and a documentation-first culture that makes distributed work sustainable.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Badge color="info">Remote friendly</Badge>
            <Badge color="success">Quarterly retreats</Badge>
            <Badge color="warning">Career coaching</Badge>
          </div>
        </Card>
        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((stat) => (
            <Card key={stat.label} className="shadow-sm">
              <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
              <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{stat.note}</p>
            </Card>
          ))}
        </div>
      </div>
    </BlockSection>
  )
}

const OpenRolesTeamBanner: FC = function () {
  return (
    <BlockSection title="Open Roles Team Banner" description="Recruiting-focused team section with faces, mission, and CTA">
      <div className="rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-500 p-8 text-white lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr,0.85fr] lg:items-center">
          <div>
            <Badge color="light" className="mb-4 w-fit">Now hiring</Badge>
            <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">Join a team that ships thoughtful product work every week.</h3>
            <p className="mt-4 max-w-2xl text-sm text-blue-50 sm:text-base">
              Designers, engineers, and marketers collaborate in small pods with direct access to customers and measurable ownership.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button color="light">View Open Positions</Button>
              <Button color="gray">Meet the Team</Button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              "sofia-mcguire",
              "neil-sims",
              "roberta-casas",
              "michael-gouch",
              "lana-byrd",
              "bonnie-green",
            ].map((person) => (
              <div key={person} className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-2 backdrop-blur-sm">
                <img
                  className="h-24 w-full rounded-xl object-cover"
                  src={`https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/${person}.png`}
                  alt={person}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </BlockSection>
  )
}

export default AllTeamSections;
