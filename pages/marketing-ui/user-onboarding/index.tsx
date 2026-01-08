import { Button, Card, Checkbox, Label, Modal, Progress } from "flowbite-react";
import type { FC } from "react";
import { useState } from "react";
import { HiCheck, HiArrowRight, HiUser, HiOfficeBuilding, HiSparkles } from "react-icons/hi";
import BlockSection from "../../../components/block-section";

const UserOnboardingPage: FC = function () {
  return (
    <>
      <ModalOnboarding />
      <FullPageWizard />
      <ChecklistOnboarding />
    </>
  );
};

const ModalOnboarding: FC = function () {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [step, setStep] = useState(1);

  return (
    <BlockSection
      title="Modal Onboarding"
      description="Multi-step welcome modal for new users"
    >
      <div className="flex justify-center py-10">
        <Button onClick={() => setOpenModal('onboarding')}>Launch Onboarding Modal</Button>
      </div>

      <Modal show={openModal === 'onboarding'} onClose={() => setOpenModal(undefined)}>
        <Modal.Header>Welcome to Laravel Company</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3].map((s) => (
                <div key={s} className={`flex items-center ${s < 3 ? 'w-full' : ''}`}>
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full shrink-0 ${s <= step ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-500 dark:bg-gray-700'}`}>
                    {s}
                  </div>
                  {s < 3 && <div className={`w-full h-1 mx-2 ${s < step ? 'bg-primary-600' : 'bg-gray-200 dark:bg-gray-700'}`}></div>}
                </div>
              ))}
            </div>

            {step === 1 && (
              <div className="text-center">
                <HiSparkles className="mx-auto h-12 w-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Let's set up your profile</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">Tell us a bit about yourself so we can tailor the experience.</p>
              </div>
            )}
            {step === 2 && (
              <div className="text-center">
                <HiOfficeBuilding className="mx-auto h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Join your workspace</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">Enter your company details to collaborate with your team.</p>
              </div>
            )}
            {step === 3 && (
              <div className="text-center">
                <HiCheck className="mx-auto h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">You're all set!</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">Ready to start building amazing things?</p>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          {step > 1 && <Button color="gray" onClick={() => setStep(step - 1)}>Back</Button>}
          {step < 3 ? (
            <Button color="primary" onClick={() => setStep(step + 1)}>Next Step</Button>
          ) : (
            <Button color="success" onClick={() => setOpenModal(undefined)}>Get Started</Button>
          )}
        </Modal.Footer>
      </Modal>
    </BlockSection>
  );
};

const FullPageWizard: FC = function () {
  return (
    <BlockSection title="Full Page Wizard" description="Centered wizard layout with progress bar">
      <div className="flex justify-center bg-gray-50 py-12 dark:bg-gray-900">
        <Card className="max-w-2xl w-full">
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-primary-700 dark:text-white">Step 2 of 4</span>
              <span className="text-sm font-medium text-primary-700 dark:text-white">50%</span>
            </div>
            <Progress progress={50} color="primary" />
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What are your goals?</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Select all that apply to help us customize your dashboard.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {['Increase Sales', 'Improve Productivity', 'Manage Team', 'Track Expenses'].map((goal) => (
              <div key={goal} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer dark:border-gray-700 dark:hover:bg-gray-800">
                <Checkbox id={goal} />
                <Label htmlFor={goal} className="ml-3 cursor-pointer">{goal}</Label>
              </div>
            ))}
          </div>

          <div className="flex justify-between">
            <Button color="gray">Skip for now</Button>
            <Button color="primary">Continue <HiArrowRight className="ml-2 h-5 w-5" /></Button>
          </div>
        </Card>
      </div>
    </BlockSection>
  )
}

const ChecklistOnboarding: FC = function () {
  return (
    <BlockSection title="Checklist Sidebar" description="Dashboard widget for onboarding tasks">
      <Card className="max-w-md">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Getting Started</h5>
          <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
            View all
          </a>
        </div>
        <div className="mb-4">
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-primary-600 bg-primary-200 dark:bg-primary-900 dark:text-primary-300">
            2/5 Completed
          </span>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-2">
            <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '40%' }}></div>
          </div>
        </div>

        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <HiCheck className="w-5 h-5 text-green-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white line-through text-gray-400">
                  Create your account
                </p>
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <HiCheck className="w-5 h-5 text-green-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white line-through text-gray-400">
                  Verify email address
                </p>
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full dark:border-gray-600"></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Complete your profile
                </p>
              </div>
              <Button size="xs" color="gray">Start</Button>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <div className="w-5 h-5 border-2 border-gray-300 rounded-full dark:border-gray-600"></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Invite team members
                </p>
              </div>
              <Button size="xs" color="gray">Invite</Button>
            </div>
          </li>
        </ul>
      </Card>
    </BlockSection>
  )
}

export default UserOnboardingPage;
