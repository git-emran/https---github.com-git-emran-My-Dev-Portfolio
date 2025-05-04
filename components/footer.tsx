import React from "react";

export default function Footer() {
  return (
    <footer className="pb-10 mt-40 px-4 text-center text-gray-500">
      <small className="mb-2 pt-50 mt-50 block text-xs">
        &copy; 2030 Emran. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Built with
        React & Next.js, TypeScript, Tailwind CSS,
        Framer Motion, Vercel hosting.
      </p>
    </footer>
  );
}
