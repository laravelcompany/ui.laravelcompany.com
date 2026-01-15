import { Button, Label, TextInput } from "flowbite-react";
import type { FC } from "react";
import { HiMail, HiLockClosed, HiShieldCheck, HiArrowLeft } from "react-icons/hi";
import BlockSection from "../../../components/block-section";
import BlockPageBreadcrumb from "../../../components/block-breadcrumb";

const AllAccountRecovery: FC = function () {
  return (
    <>
      <BlockPageBreadcrumb
        title="Account Recovery"
        description="Get started with account recovery (aka. forgot password) pages to allow users to reset their password using an email."
      />
      <ModernGradientRecovery />
      <GlassmorphismRecovery />
      <AnimatedCardRecovery />
    </>
  );
};

const ModernGradientRecovery: FC = function () {
  return (
    <BlockSection
      title="Modern Gradient Recovery"
      description="Eye-catching gradient background with floating animation effects"
    >
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 p-4 overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <div className="relative w-full max-w-md">
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-4 shadow-lg">
                <HiLockClosed className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Forgot Password?
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                No worries! We'll send you reset instructions.
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <Label htmlFor="email-gradient" value="Email Address" className="mb-2 block font-semibold" />
                <div className="relative">
                  <TextInput
                    id="email-gradient"
                    type="email"
                    placeholder="you@example.com"
                    required
                    icon={HiMail}
                    className="transition-all duration-300 focus:scale-[1.02]"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                size="lg"
              >
                <HiShieldCheck className="mr-2 h-5 w-5" />
                Send Reset Link
              </Button>

              <div className="text-center">
                <a href="#" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 transition-colors">
                  <HiArrowLeft className="mr-2 h-4 w-4" />
                  Back to Login
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </BlockSection>
  );
};

const GlassmorphismRecovery: FC = function () {
  return (
    <BlockSection
      title="Glassmorphism Design"
      description="Modern glassmorphic card with backdrop blur effects"
    >
      <div className="relative min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>

        <div className="relative w-full max-w-md">
          <div className="backdrop-blur-2xl bg-white/10 dark:bg-gray-900/10 rounded-3xl p-8 shadow-2xl border border-white/20">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-xl mb-6 shadow-xl ring-4 ring-white/30">
                <HiMail className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl font-extrabold text-white mb-3">
                Reset Password
              </h1>
              <p className="text-white/80 text-lg">
                Enter your email to receive a reset link
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <Label htmlFor="email-glass" className="mb-3 block text-white font-bold text-sm uppercase tracking-wider">
                  Email Address
                </Label>
                <TextInput
                  id="email-glass"
                  type="email"
                  placeholder="your.email@company.com"
                  required
                  className="bg-white/20 backdrop-blur-xl border-white/30 text-white placeholder-white/60 focus:bg-white/30 transition-all duration-300"
                />
              </div>

              <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-xl rounded-xl border border-white/20">
                <HiShieldCheck className="w-6 h-6 text-green-300 flex-shrink-0" />
                <p className="text-sm text-white/90">
                  We'll send you a secure link to reset your password
                </p>
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-purple-600 hover:bg-white/90 font-bold transform transition-all duration-300 hover:scale-105 shadow-xl"
                size="xl"
              >
                Continue
              </Button>

              <div className="text-center pt-4">
                <a href="#" className="text-white/80 hover:text-white font-medium transition-colors">
                  ← Return to sign in
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </BlockSection>
  );
};

const AnimatedCardRecovery: FC = function () {
  return (
    <BlockSection
      title="Animated Card with Steps"
      description="Interactive multi-step recovery process with smooth animations"
    >
      <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
        <div className="w-full max-w-2xl">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
            {/* Progress bar */}
            <div className="h-2 bg-gray-200 dark:bg-gray-700">
              <div className="h-full w-1/3 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 ease-out"></div>
            </div>

            <div className="p-8 md:p-12">
              {/* Step indicator */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white font-bold shadow-lg ring-4 ring-blue-100 dark:ring-blue-900">
                    1
                  </div>
                  <div className="ml-3 text-left">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Step 1</p>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">Verify Email</p>
                  </div>
                </div>
                <div className="w-16 h-1 bg-gray-200 dark:bg-gray-700"></div>
                <div className="flex items-center opacity-50">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 font-bold">
                    2
                  </div>
                  <div className="ml-3 text-left">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Step 2</p>
                    <p className="text-sm font-bold text-gray-600 dark:text-gray-400">Reset</p>
                  </div>
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mb-4 shadow-lg transform hover:scale-110 transition-transform duration-300">
                  <HiMail className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
                  Forgot Your Password?
                </h1>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                  Don't worry! Enter your email address and we'll send you a link to reset your password.
                </p>
              </div>

              <form className="space-y-6 max-w-md mx-auto">
                <div>
                  <Label htmlFor="email-animated" value="Email Address" className="mb-2 block font-bold text-gray-900 dark:text-white" />
                  <TextInput
                    id="email-animated"
                    type="email"
                    placeholder="Enter your email"
                    required
                    icon={HiMail}
                    sizing="lg"
                    className="transition-all duration-300 hover:shadow-md focus:shadow-lg"
                  />
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    We'll never share your email with anyone else.
                  </p>
                </div>

                <div className="space-y-4">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
                    size="xl"
                  >
                    Send Reset Instructions
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                        or
                      </span>
                    </div>
                  </div>

                  <Button
                    color="gray"
                    className="w-full transform transition-all duration-300 hover:scale-[1.02]"
                    size="lg"
                  >
                    <HiArrowLeft className="mr-2 h-5 w-5" />
                    Back to Login
                  </Button>
                </div>
              </form>

              <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
                <div className="flex items-start gap-3">
                  <HiShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-blue-900 dark:text-blue-300 mb-1">Secure & Private</h3>
                    <p className="text-sm text-blue-700 dark:text-blue-400">
                      Your data is encrypted and we'll never share your information with third parties.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BlockSection>
  );
};

export default AllAccountRecovery;
