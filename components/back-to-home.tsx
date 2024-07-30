
import React from "react";
import { useRouter } from "next/navigation";
import { ProjectNavigation } from "./nextproject";

export default function BackToHome() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.push("/")}
        className="absolute top-4 left-4 z-10 bg-black hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Back to Home
      </button>
      <div className="absolute mt-14 top-4 left-4 mb-12">
        <ProjectNavigation />
      </div>
    </div>
  );
}
