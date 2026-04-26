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
      <SplitScreenRecovery />
      <SecurityCodeRecovery />
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

const SplitScreenRecovery: FC = function () {
  return (
    <BlockSection
      title="Split Screen Recovery"
      description="Two-column recovery layout with onboarding copy and a simple reset form"
    >
      <div className="grid min-h-screen grid-cols-1 overflow-hidden rounded-3xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900 lg:grid-cols-2">
        <div className="flex flex-col justify-between bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-700 p-8 text-white md:p-12">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
              Account protection
            </div>
            <h2 className="max-w-md text-4xl font-extrabold tracking-tight">
              Recover access without contacting support.
            </h2>
            <p className="mt-4 max-w-lg text-blue-100">
              Reset links expire automatically and every request is logged to keep your account secure.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="text-sm text-blue-100">Reset time</p>
              <p className="mt-2 text-2xl font-bold">2 min</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="text-sm text-blue-100">Delivery rate</p>
              <p className="mt-2 text-2xl font-bold">99.8%</p>
            </div>
            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
              <p className="text-sm text-blue-100">Sessions revoked</p>
              <p className="mt-2 text-2xl font-bold">Optional</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 md:p-10">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30">
                <HiMail className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Reset your password</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Enter the email tied to your account and we’ll send a secure recovery link.
              </p>
            </div>
            <form className="space-y-5">
              <div>
                <Label htmlFor="email-split" value="Work Email" className="mb-2 block font-semibold" />
                <TextInput id="email-split" type="email" placeholder="name@company.com" icon={HiMail} required />
              </div>
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-start gap-3">
                  <HiShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600 dark:text-green-400" />
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    For added safety, we can sign you out from all other devices after the reset is confirmed.
                  </p>
                </div>
              </div>
              <Button type="submit" size="xl" className="w-full">
                Email recovery link
              </Button>
              <a href="#" className="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-400">
                <HiArrowLeft className="mr-2 h-4 w-4" />
                Return to sign in
              </a>
            </form>
          </div>
        </div>
      </div>
    </BlockSection>
  );
};

const SecurityCodeRecovery: FC = function () {
  return (
    <BlockSection
      title="Security Code Recovery"
      description="Verification-driven recovery flow with a follow-up code entry step"
    >
      <div className="min-h-screen bg-gray-950 p-4 md:p-8">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.95fr,1.05fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-white backdrop-blur">
            <h3 className="text-3xl font-bold">Verify ownership first</h3>
            <p className="mt-4 text-sm leading-6 text-gray-300">
              We’ll send a six-digit code to your recovery email before allowing any password change.
            </p>
            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-400">Step 1</p>
                <p className="mt-1 font-semibold">Enter your email address</p>
              </div>
              <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-4">
                <p className="text-sm text-cyan-200">Step 2</p>
                <p className="mt-1 font-semibold text-white">Confirm the recovery code</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-400">Step 3</p>
                <p className="mt-1 font-semibold">Set a new password</p>
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl dark:border-gray-700 dark:bg-gray-900">
            <div className="mb-8">
              <div className="mb-4 inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-medium text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300">
                Step 2 of 3
              </div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Enter verification code</h3>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                We sent a code to `recovery@company.com`. It expires in 10 minutes.
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-6 gap-3">
                {["1", "2", "3", "4", "5", "6"].map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    defaultValue={index < 2 ? digit : ""}
                    maxLength={1}
                    className="h-14 rounded-2xl border border-gray-300 text-center text-xl font-bold text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  />
                ))}
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/40 dark:bg-amber-900/20">
                <p className="text-sm text-amber-800 dark:text-amber-300">
                  Didn’t receive the code? Check spam or request another one in 24 seconds.
                </p>
              </div>
              <Button type="submit" size="xl" className="w-full bg-cyan-600 hover:bg-cyan-700">
                Continue to new password
              </Button>
              <div className="flex items-center justify-between text-sm">
                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-400">
                  Resend code
                </a>
                <a href="#" className="inline-flex items-center font-medium text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  <HiArrowLeft className="mr-2 h-4 w-4" />
                  Start over
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </BlockSection>
  );
};

export default AllAccountRecovery;
