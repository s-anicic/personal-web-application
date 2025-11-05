"use client";

import { Sacramento } from "next/font/google";

const sacramentoFont = Sacramento({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      
      <main className="flex flex-col items-center justify-start min-h-screen px-4 pt-16 sm:pt-20 md:pt-24">
        <h1 className={`${sacramentoFont.className} font-sans text-8xl text-hecsOklch2`}>
          Hi I'm Sara
        </h1>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to my web application!
        </h2>
        <p className="text-gray-600 text-lg text-center max-w-xl">
          This is a Next.js + Tailwind web application. This layout is responsive and easy to read on all devices.
        </p>
      </main>
    </div>
  );
}
