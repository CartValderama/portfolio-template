import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-stone-400">
      <small className="mb-2 block text-xs">
        &copy; 2030 Ricardo. All rights reserved
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website: </span> built with
        React and Next.js (App router & Server Actions), Typescript, Tailwind
        CSS, Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
