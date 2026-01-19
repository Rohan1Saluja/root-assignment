import React, { useState } from "react";
import { BagIcon, CheckboxIcon, UserIcon } from "../../../assets/icons";
import { Button } from "../../../components/ui";

interface IntroProps {
  onNext: (data: { accountType: string }) => void;
  onBack: () => void;
}

const Intro: React.FC<IntroProps> = ({ onNext, onBack }) => {
  const [selectedAccountType, setSelectedAccountType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedAccountType) {
      onNext({ accountType: selectedAccountType });
    } else {
      alert("Please select an account type");
    }
  };

  const accountTypes = [
    {
      id: "personal",
      title: "Personal",
      getIcon: (isSelected: boolean) => (
        <UserIcon fill={isSelected ? "#0054FD" : "#000000"} />
      ),
    },
    {
      id: "business",
      title: "Business",
      getIcon: (isSelected: boolean) => (
        <BagIcon fill={isSelected ? "#0054FD" : "#000000"} />
      ),
    },
  ];

  return (
    <div className="bg-white/95 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-xl w-full h-full border border-white/30 flex flex-col justify-center">
      <p className="text-xl tracking-wide mb-8 pr-4 w-3/5 text-gray-800">
        To join us tell us{" "}
        <span className="font-semibold">what type of account</span> you are
        opening
      </p>

      <div className="space-y-4 mb-8">
        {accountTypes.map((account) => (
          <button
            key={account.id}
            type="button"
            onClick={() => setSelectedAccountType(account.id)}
            className={`w-full p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between text-left ${
              selectedAccountType === account.id
                ? "border-blue-400 bg-blue-50"
                : "border-gray-300 bg-white hover:border-gray-400"
            }`}
          >
            <div className="flex items-center space-x-4">
              <span className="text-2xl">
                {account.getIcon(selectedAccountType === account.id)}
              </span>
              <div>
                <h3
                  className={`font-semibold ${selectedAccountType === account.id ? "text-secondary-500" : "text-gray-800"}`}
                >
                  {account.title}
                </h3>
              </div>
            </div>
            {selectedAccountType === account.id && (
              <CheckboxIcon fill="#0054FD" />
            )}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-auto">
        <div className="flex items-center justify-center gap-4">
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button type="submit">Continue</Button>
        </div>
      </form>
    </div>
  );
};

export default Intro;