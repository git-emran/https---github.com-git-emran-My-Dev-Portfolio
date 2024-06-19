"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Insidemaps() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="relative w-full h-96">
        {/* Back Button */}
        <button
          onClick={() => router.push("/")}
          className="absolute top-4 left-4 z-10 bg-blue-900 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Back to Home
        </button>
        {/* Header bg div styling */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl sm:text-6xl text-white font-bold">
            Insidemaps Capture
          </h1>
        </div>
      </header>
    </div>
  ); 
}
