import type { FC } from "react";
import { Avatar, Badge, Button } from "flowbite-react";
import FinancialExchangeCryptoHero from "./crypto";
import AppScreenshotWithCTAsHero from "./cta-app-preview";
import InformationalCTAWithAppScreenshotHero from "./cta-screenshot-download";
import DefaultHero from "./default";
import EmailSignUpWithVideoHero from "./email-signup-video";
import BackgroundImageCardsHero from "./grid-cards";
import IllustrationWithEmailSignupHero from "./illustration";
import CoverImageWithCTAsHero from "./image-cover";
import HeroSectionWithSearchBar from "./search-bar";
import SignUpFormWithCTAHero from "./signup-cta";
import VideoEmbedWithCTAHero from "./video-embed-cta";
import VisualImageWithHeadingHero from "./video-image-heading";
import BlockSection from "../../../components/block-section";
import BackgroundCoverImageWithCTAsHero from "./cta-background-cover";
import HeroSectionWithCarouselSlider from "./carousel";
import HeroSectionWithBookCover from "./book-cover";
import BlogPostsWithFeaturedImageHero from "./blog-posts";
import PhoneMockupWithAppDownloadHero from "./phone-mockup";
import BlockPageBreadcrumb from "../../../components/block-breadcrumb";
import SearchBarDatepickerHeroSection from "./datepicker";
import EcommerceHero from "./ecommerce-hero";
import PromoSectionHero from "./promo-section-hero";

const AllHeroSections: FC = function () {
  return (
    <>
      <BlockPageBreadcrumb
        title="Hero Sections"
        description="Get started with a collection of hero sections coded with Tailwind CSS to showcase the most important parts of your website based on multiple styles and layouts."
      />
      <BlockSection
        title="Default hero section"
        description="Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/default.tsx"
      >
        <DefaultHero />
      </BlockSection>
      <BlockSection
        title="Visual image with heading"
        description="Use this example to show an image next to the heading and CTA buttons to improve the visual impact of the website's first visit."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/video-image-heading.tsx"
      >
        <VisualImageWithHeadingHero />
      </BlockSection>
      <BlockSection
        title="Search bar with datepicker"
        description="This example can be used to provide a search and booking functionality based on the datepicker plugin from the Laravel Company UI library."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/video-image-heading.tsx"
      >
        <SearchBarDatepickerHeroSection />
      </BlockSection>
      <BlockSection
        title="Email sign-up with video"
        description="Use this website section to let website visitors sign up with their email and also showcase a video about your product to increase the conversion rate."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/email-signup-video.tsx"
      >
        <EmailSignUpWithVideoHero />
      </BlockSection>
      <BlockSection
        title="Illustration with email sign-up"
        description="This section can be used to allow your users to sign up for an upcoming launch of a product with a visual impact of an illustration next to it."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/illustration.tsx"
      >
        <IllustrationWithEmailSignupHero />
      </BlockSection>
      <BlockSection
        title="Cover image with CTAs"
        description="This example can be used if you want to highlight a large image and two separate CTA buttons often used for conference websites."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/image-cover.tsx"
      >
        <CoverImageWithCTAsHero />
      </BlockSection>
      <BlockSection
        title="Informational CTA with app screenshot"
        description="Get started with this hero section to use a CTA component with multiple helper descriptions and a screenshot of your application."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/cta-screenshot-download.tsx"
      >
        <InformationalCTAWithAppScreenshotHero />
      </BlockSection>
      <BlockSection
        title="Hero section with search bar"
        description="Use this example if you want to highlight the search functionality of your website and allow your users to query for page results based on the search input interaction."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/search-bar.tsx"
      >
        <HeroSectionWithSearchBar />
      </BlockSection>
      <BlockSection
        title="Video embed with CTA"
        description="This website section can be used to highlight the video part of the hero section alongside a couple of CTA buttons and reviews from Trustpilot."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/video-embed-cta.tsx"
      >
        <VideoEmbedWithCTAHero />
      </BlockSection>
      <BlockSection
        title="Sign-up form with CTA"
        description="This example can be used to directly let your website visitors sign up or login to your platform without having to redirect them by providing a functional form directly inside the hero section."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/signup-cta.tsx"
      >
        <SignUpFormWithCTAHero />
      </BlockSection>
      <BlockSection
        title="App screenshot with CTAs"
        description="Use this example to show a screenshot of your SaaS application and a couple of CTA buttons to provide a visual demo."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/cta-app-preview.tsx"
      >
        <AppScreenshotWithCTAsHero />
      </BlockSection>
      <BlockSection
        title="Background image with CTAs"
        description="This example can be used to show multiple CTA buttons inside a hero section that has a faded background image for a more immersive look."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/cta-background-cover.tsx"
      >
        <BackgroundCoverImageWithCTAsHero />
      </BlockSection>
      <BlockSection
        title="Financial exchange (crypto)"
        description="Use this example if you want to allow your website visitors to directly convert currency (crypto included) in the hero section alongside statistical numbers."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/crypto.tsx"
      >
        <FinancialExchangeCryptoHero />
      </BlockSection>
      <BlockSection
        title="Background image cards"
        description="Use this example to show cards with a faded background image for visually important products often used by carmakers such as BMW or Mercedes."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/grid-cards.tsx"
      >
        <BackgroundImageCardsHero />
      </BlockSection>
      <BlockSection
        title="Hero section with carousel slider"
        description="Use this example to show a hero section with a carousel slider with images together with a main heading, description, two CTA buttons and a list of company logos."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/carousel.tsx"
      >
        <HeroSectionWithCarouselSlider />
      </BlockSection>
      <BlockSection
        title="Hero section with book cover"
        description="This example can be used to showcase a book cover or an e-book presentation featuring a title, description, CTA buttons, and reviews from customers."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/book-cover.tsx"
      >
        <HeroSectionWithBookCover />
      </BlockSection>
      <BlockSection
        title="Blog posts with featured image"
        description="This hero section can be used to feature a blog post with an image, author, title, category, and description with three other secondary blog posts."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/blog-posts.tsx"
      >
        <BlogPostsWithFeaturedImageHero />
      </BlockSection>
      <BlockSection
        title="Phone mockup with app download"
        description="Use this component to show a preview of a mobile application inside a frame coded with Tailwind CSS and the mobile app download buttons for AppStore and Google Play."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/phone-mockup.tsx"
      >
        <PhoneMockupWithAppDownloadHero />
      </BlockSection>
      <BlockSection
        title="Ecommerce Hero 1"
        description="Use this component to show a preview of a mobile application inside a frame coded with Tailwind CSS and the mobile app download buttons for AppStore and Google Play."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/phone-mockup.tsx"
      >
        <EcommerceHero />
      </BlockSection>
      <BlockSection
        title="Ecommerce Hero 1"
        description="Use this component to show a preview of a mobile application inside a frame coded with Tailwind CSS and the mobile app download buttons for AppStore and Google Play."
        githubLink="https://github.com/themesberg/flowbite-react-blocks/blob/main/pages/marketing-ui/hero-sections/phone-mockup.tsx"
      >
        <PromoSectionHero />
      </BlockSection>
      <LaunchCountdownHero />
      <FounderLetterHero />
      <RecruitingMetricsHero />
    </>
  );
};

const LaunchCountdownHero: FC = function () {
  return (
    <BlockSection
      title="Launch Countdown Hero"
      description="Event-driven hero section with urgency, countdown tiles, and early access call to action"
    >
      <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 px-6 py-16 text-white md:px-10 lg:px-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr,0.9fr]">
          <div>
            <Badge color="info" className="mb-5 w-fit">Launch Week</Badge>
            <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              The analytics workspace ships on May 30 with live collaboration built in.
            </h2>
            <p className="mt-5 max-w-2xl text-base text-blue-100 sm:text-lg">
              Join the release list to get onboarding templates, migration help, and priority access before public rollout.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button color="light">Reserve early access</Button>
              <Button color="gray">See release notes</Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
            {[
              { value: "04", label: "Days" },
              { value: "17", label: "Hours" },
              { value: "26", label: "Minutes" },
              { value: "51", label: "Seconds" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur">
                <p className="text-4xl font-extrabold">{item.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-blue-100">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </BlockSection>
  );
};

const FounderLetterHero: FC = function () {
  return (
    <BlockSection
      title="Founder Letter Hero"
      description="Editorial-style hero section with a personal message, signature, and a focused next step"
    >
      <section className="rounded-3xl border border-amber-200 bg-amber-50 px-6 py-14 dark:border-amber-900/40 dark:bg-gray-900 md:px-10 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
          <div className="rounded-3xl bg-white p-8 shadow-sm dark:bg-gray-800">
            <div className="flex items-center gap-4">
              <Avatar rounded img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" size="lg" />
              <div>
                <p className="text-lg font-semibold text-gray-900 dark:text-white">Bonnie Green</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Co-founder and CEO</p>
              </div>
            </div>
            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">Letter from the founder</p>
            <p className="mt-4 text-lg leading-8 text-gray-700 dark:text-gray-300">
              We started this product to reduce the hours teams waste on status chasing, scattered docs, and fragile launches. The next chapter is about clarity at scale.
            </p>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              If you lead product, operations, or growth, this release was built for the moments where alignment matters most.
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              A calmer way to ship work across product, design, and go-to-market.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Replace fragmented launch rituals with one operating layer for planning, sign-off, and release follow-through.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button>Read the roadmap</Button>
              <Button color="gray">Watch the product memo</Button>
            </div>
          </div>
        </div>
      </section>
    </BlockSection>
  );
};

const RecruitingMetricsHero: FC = function () {
  return (
    <BlockSection
      title="Recruiting Metrics Hero"
      description="Careers-focused hero with hiring message, social proof, and team statistics"
    >
      <section className="rounded-3xl bg-white px-6 py-14 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800 md:px-10 lg:px-14">
        <div className="grid gap-10 lg:grid-cols-[1fr,0.9fr] lg:items-center">
          <div>
            <Badge color="success" className="mb-5 w-fit">We’re Hiring</Badge>
            <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              Join a small senior team building tools used by fast-moving companies every day.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              We hire people who care about product taste, writing clearly, and owning real outcomes rather than just tickets.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button>View open roles</Button>
              <Button color="gray">Meet the team</Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-2">
            {[
              { label: "Team size", value: "42" },
              { label: "Countries", value: "11" },
              { label: "Avg. tenure", value: "4.8y" },
              { label: "Offer rate", value: "6%" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </BlockSection>
  );
};

export default AllHeroSections;
