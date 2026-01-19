import React, { useState, useRef, useEffect } from "react";
import { Button } from "../../../components/ui";

interface OTPVerificationProps {
  onNext: (data: { otp: string }) => void;
  onBack: () => void;
  phoneNumber?: string;
}

const OTPVerification: React.FC<OTPVerificationProps> = ({ onNext, onBack, phoneNumber }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isResending, setIsResending] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus first input on mount
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  useEffect(() => {
    let interval: number;
    if (countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [countdown]);

  const handleChange = (index: number, value: string) => {
    // Only allow digits
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Take only the last character
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const newOtp = [...otp];
    
    for (let i = 0; i < pastedData.length && i < 6; i++) {
      newOtp[i] = pastedData[i];
    }
    
    setOtp(newOtp);
    
    // Focus the next empty input or the last input
    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join("");
    if (otpString.length === 6) {
      onNext({ otp: otpString });
    } else {
      alert("Please enter the complete 6-digit code");
    }
  };

  const handleResend = async () => {
    setIsResending(true);
    setCountdown(30);
    // Simulate API call
    setTimeout(() => {
      setIsResending(false);
      alert("Verification code sent!");
    }, 1000);
  };

  const isComplete = otp.every(digit => digit !== "");

  return (
    <div className="bg-white/95 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-xl w-full h-full border border-white/30 flex flex-col justify-center">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Verify your phone number
        </h2>
        <p className="text-gray-600 mb-1">
          We sent a 6-digit code to
        </p>
        <p className="font-semibold text-gray-800">
          {phoneNumber || "your phone number"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex justify-center gap-3 mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => { inputRefs.current[index] = el; }}
              type="text"
              inputMode="numeric"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              maxLength={1}
            />
          ))}
        </div>

        <div className="text-center">
          {countdown > 0 ? (
            <p className="text-gray-600">
              Resend code in {countdown}s
            </p>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              disabled={isResending}
              className="text-blue-600 font-semibold hover:text-blue-700 disabled:opacity-50"
            >
              {isResending ? "Sending..." : "Resend code"}
            </button>
          )}
        </div>

        <div className="flex items-center justify-center gap-4 mt-auto pt-8">
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button type="submit" disabled={!isComplete}>
            Verify
          </Button>
        </div>
      </form>
    </div>
  );
};

export default OTPVerification;