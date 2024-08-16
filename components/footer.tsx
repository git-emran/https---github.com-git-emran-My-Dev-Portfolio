import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 mt-40 px-4 text-center text-gray-500">
      <small className="mb-2 pt-100 mt-100 block text-xs">
        &copy; 2030 Emran. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
