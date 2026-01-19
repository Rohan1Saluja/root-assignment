import React, { useState } from "react";
import { Button } from "../../../components/ui";

interface PhoneNumberProps {
  onNext: (data: { phoneNumber: string }) => void;
  onBack: () => void;
}

const PhoneNumber: React.FC<PhoneNumberProps> = ({ onNext, onBack }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+1");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.trim()) {
      onNext({ phoneNumber: countryCode + phoneNumber });
    } else {
      alert("Please enter a valid phone number");
    }
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits
    const phoneNumber = value.replace(/\D/g, "");

    // Format as (XXX) XXX-XXXX
    if (phoneNumber.length >= 6) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    } else if (phoneNumber.length >= 3) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else {
      return phoneNumber;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    if (rawValue.length <= 10) {
      setPhoneNumber(rawValue);
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-xl w-full h-full border border-white/30 flex flex-col">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Enter your phone number
        </h2>
        <p className="text-gray-600">
          We'll send you a verification code to confirm your number
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 flex flex-col flex-1">
        <div className="space-y-4">
          <div className="flex gap-3">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-800 focus:outline-none focus:border-secondary-500 w-24"
            >
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+91">🇮🇳 +91</option>
              <option value="+81">🇯🇵 +81</option>
              <option value="+49">🇩🇪 +49</option>
            </select>

            <input
              type="tel"
              value={formatPhoneNumber(phoneNumber)}
              onChange={handlePhoneChange}
              placeholder="(555) 123-4567"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none  focus:border-secondary-500 text-gray-800"
              required
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-auto pt-8">
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button type="submit">Send Code</Button>
        </div>
      </form>
    </div>
  );
};

export default PhoneNumber;
