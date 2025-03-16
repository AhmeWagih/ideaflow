"use client";

import { useVerifyOTP } from "@/app/services/hooks/useVerifyOTP";
import { useState } from "react";

export default function VerifyOTP() {
  const [otp, setOTP] = useState("");

  const searchParams = new URLSearchParams(window.location.search);
  const email = searchParams.get("email") || "";
  const { mutate: verifyOTP, isPending } = useVerifyOTP({ email, otp });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    verifyOTP();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md rounded-lg bg-white shadow-sm">
        <div className="flex flex-col items-center space-y-2 pt-8">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 12C0 5.37258 5.37258 0 12 0H36C42.6274 0 48 5.37258 48 12V36C48 42.6274 42.6274 48 36 48H12C5.37258 48 0 42.6274 0 36V12Z"
              fill="#2563EB"
            />
            <path
              d="M0 12C0 5.37258 5.37258 0 12 0H36C42.6274 0 48 5.37258 48 12V36C48 42.6274 42.6274 48 36 48H12C5.37258 48 0 42.6274 0 36V12Z"
              stroke="#E5E7EB"
            />
            <g clip-path="url(#clip0_1_216)">
              <path
                d="M24 12C24.2156 12 24.4312 12.0469 24.6281 12.1359L33.4547 15.8813C34.4859 16.3172 35.2547 17.3344 35.25 18.5625C35.2266 23.2125 33.3141 31.7203 25.2375 35.5875C24.4547 35.9625 23.5453 35.9625 22.7625 35.5875C14.6859 31.7203 12.7734 23.2125 12.75 18.5625C12.7453 17.3344 13.5141 16.3172 14.5453 15.8813L23.3766 12.1359C23.5687 12.0469 23.7844 12 24 12ZM24 15.1313V32.85C30.4687 29.7188 32.2078 22.7859 32.25 18.6281L24 15.1313Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_216">
                <path d="M12 12H36V36H12V12Z" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <h1 className="text-xl font-semibold text-center">
            Ready to continue resetting your password?!
          </h1>
          <p className="text-sm text-gray-500 text-center">
            Please enter your OTP
          </p>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="otp" className="text-sm font-medium">
                OTP
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      width="18"
                      height="11"
                      x="3"
                      y="11"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </div>
                <input
                  id="otp"
                  name="otp"
                  type="text"
                  placeholder="Enter OTP"
                  className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-3 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  value={otp}
                  onChange={(e) => setOTP(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-[#7C3AED] py-2 text-white font-medium hover:bg-[#6D28D9] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              disabled={isPending}
            >
              Verify OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
