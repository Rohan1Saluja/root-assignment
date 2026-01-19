import React, { useState } from "react";
import { Button } from "../../../components/ui";

interface UserDetailsProps {
  onNext: (data: { firstName: string; lastName: string }) => void;
  onBack: () => void;
}

const UserDetails: React.FC<UserDetailsProps> = ({ onNext, onBack }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName.trim() && lastName.trim()) {
      onNext({ firstName: firstName.trim(), lastName: lastName.trim() });
    } else {
      alert("Please enter both first name and last name");
    }
  };

  const isFormValid = firstName.trim() && lastName.trim();

  return (
    <div className="bg-white/95 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-xl w-full h-full border border-white/30 flex flex-col">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Tell us about yourself
        </h2>
        <p className="text-gray-600">Please enter your personal information</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col flex-1">
        <div className="space-y-4 mb-8">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-secondary-500 text-gray-800"
              required
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-secondary-500 text-gray-800"
              required
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-auto">
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button type="submit" disabled={!isFormValid}>
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserDetails;
