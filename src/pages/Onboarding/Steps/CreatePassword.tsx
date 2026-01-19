import React, { useState } from "react";
import { Button } from "../../../components/ui";

interface CreatePasswordProps {
  onNext: (data: { password: string }) => void;
  onBack: () => void;
}

const CreatePassword: React.FC<CreatePasswordProps> = ({ onNext, onBack }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    onNext({ password });
  };

  const passwordValidation = {
    minLength: password.length >= 8,
    hasNumber: /\d/.test(password),
    hasLetter: /[a-zA-Z]/.test(password),
    hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const isPasswordValid = Object.values(passwordValidation).every(Boolean);
  const isFormValid = isPasswordValid && password === confirmPassword;

  return (
    <div className="bg-white/95 backdrop-blur-md p-8 sm:p-12 rounded-3xl shadow-xl w-full h-full border border-white/30 flex flex-col justify-center">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Create your password
        </h2>
        <p className="text-gray-600">
          Choose a strong password to secure your account
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>
        </div>

        {/* Password Requirements */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">
            Password must contain:
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div
              className={`flex items-center ${passwordValidation.minLength ? "text-green-600" : "text-gray-500"}`}
            >
              <span className="mr-2">
                {passwordValidation.minLength ? "✓" : "○"}
              </span>
              8+ characters
            </div>
            <div
              className={`flex items-center ${passwordValidation.hasNumber ? "text-green-600" : "text-gray-500"}`}
            >
              <span className="mr-2">
                {passwordValidation.hasNumber ? "✓" : "○"}
              </span>
              One number
            </div>
            <div
              className={`flex items-center ${passwordValidation.hasLetter ? "text-green-600" : "text-gray-500"}`}
            >
              <span className="mr-2">
                {passwordValidation.hasLetter ? "✓" : "○"}
              </span>
              One letter
            </div>
            <div
              className={`flex items-center ${passwordValidation.hasSpecial ? "text-green-600" : "text-gray-500"}`}
            >
              <span className="mr-2">
                {passwordValidation.hasSpecial ? "✓" : "○"}
              </span>
              Special character
            </div>
          </div>
        </div>

        {/* Password Match Indicator */}
        {confirmPassword && (
          <div
            className={`text-xs ${password === confirmPassword ? "text-green-600" : "text-red-500"}`}
          >
            {password === confirmPassword
              ? "✓ Passwords match"
              : "✗ Passwords do not match"}
          </div>
        )}

        <div className="flex items-center justify-center gap-4 mt-auto pt-8">
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button type="submit" disabled={!isFormValid}>
            Complete Setup
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreatePassword;
