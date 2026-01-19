import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Intro,
  PhoneNumber,
  OTPVerification,
  UserDetails,
  CreatePassword,
} from "./Steps";
import ArtBoard from "../../assets/artboard.png";
import { Button } from "../../components/ui";
import { ShieldIcon } from "../../assets/icons";

interface OnboardingData {
  accountType?: string;
  phoneNumber?: string;
  otp?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
}

const Onboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({});
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const totalSteps = 5;
  const progress =
    currentStep === totalSteps
      ? 80
      : ((currentStep - 1) / (totalSteps - 1)) * 80;

  const handleNext = (stepData: any) => {
    const updatedData = { ...onboardingData, ...stepData };
    setOnboardingData(updatedData);

    if (currentStep === totalSteps) {
      console.log("Onboarding completed with data:", updatedData);
      setShowModal(true);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate(-1);
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Create your account";
      case 2:
        return "Verify your phone";
      case 3:
        return "Enter verification code";
      case 4:
        return "Personal information";
      case 5:
        return "Create password";
      default:
        return "Create your account";
    }
  };

  const getStepDescription = () => {
    switch (currentStep) {
      case 1:
        return "Follow the steps to create your account";
      case 2:
        return "We need to verify your phone number";
      case 3:
        return "Enter the code we sent to your phone";
      case 4:
        return "Tell us a bit about yourself";
      case 5:
        return "Choose a secure password for your account";
      default:
        return "Follow the steps to create your account";
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <Intro onNext={handleNext} onBack={handleBack} />;
      case 2:
        return <PhoneNumber onNext={handleNext} onBack={handleBack} />;
      case 3:
        return (
          <OTPVerification
            onNext={handleNext}
            onBack={handleBack}
            phoneNumber={onboardingData.phoneNumber}
          />
        );
      case 4:
        return <UserDetails onNext={handleNext} onBack={handleBack} />;
      case 5:
        return <CreatePassword onNext={handleNext} onBack={handleBack} />;
      default:
        return <Intro onNext={handleNext} onBack={handleBack} />;
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/home");
  };

  const formatAccountType = (type?: string) => {
    if (!type) return "Not selected";
    return type.charAt(0).toUpperCase() + type.slice(1);
  };

  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row bg-primary-50 p-4 sm:p-8">
        {/* ---------------------------------------------- */}

        <div className="flex-1 flex flex-col justify-between mb-8 lg:mb-0">
          <div className="px-8 flex flex-col gap-1">
            <p className="text-lg font-light text-primary-600">
              Let's get started
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
              {getStepTitle()}
            </h1>
            <h6 className="text-sm text-primary-500">{getStepDescription()}</h6>
          </div>
          <img
            src={ArtBoard}
            alt="Onboarding"
            className="w-[90%] rounded-lg mb-4 self-end"
          />
        </div>

        {/* ---------------------------------------------- */}
        <div className="flex-1 flex flex-col">
          <div className="px-12 mt-4 mb-1">
            {currentStep !== 1 && (
              <div className="w-full bg-gray-300 h-1 rounded-full">
                <div
                  className="bg-secondary-500 h-1 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            )}
          </div>
          <div className="flex justify-center items-center flex-1">
            {renderCurrentStep()}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                You’re all set!
              </h2>
              <p className="text-primary-600">
                Here’s a quick summary of your account details
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-6 space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-primary-400">
                    Account Type
                  </label>
                  <p className="text-primary-800 font-medium">
                    {formatAccountType(onboardingData.accountType)}
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-primary-400">
                    Phone Number
                  </label>
                  <p className="text-primary-800 font-medium">
                    {onboardingData.phoneNumber || "Not provided"}
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-primary-400">
                    First Name
                  </label>
                  <p className="text-primary-800 font-medium">
                    {onboardingData.firstName || "Not provided"}
                  </p>
                </div>

                <div className="flex justify-between items-center">
                  <label className="text-sm font-medium text-primary-400">
                    Last Name
                  </label>
                  <p className="text-primary-800 font-medium">
                    {onboardingData.lastName || "Not provided"}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center my-4 gap-1">
              <ShieldIcon />
              <p className="text-sm text-primary-500">
                Your account is secured with bank-grade security
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button onClick={handleModalClose} className="flex-1">
                Continue to Dashboard
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Onboarding;
