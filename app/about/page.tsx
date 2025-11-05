import { Sacramento } from "next/font/google";

const sacramentoFont = Sacramento({
  weight: "400",
  subsets: ["latin"],
});

export default function About() {
  return (
    <main className="flex flex-col items-center justify-start px-4 pt-16 sm:pt-20 md:pt-24">
    
      <h1
        className={`${sacramentoFont.className} font-sans text-6xl sm:text-7xl md:text-8xl text-hecsOklch2 text-center`}
      >
        About Me
      </h1>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">
        (˶ᵔ ᵕ ᵔ˶)
      </h2>
      <p className="text-gray-600 text-lg sm:text-xl text-center max-w-xl">
        I'm a Bachelor of Information Technology graduate with an interest in cloud analytics and web development. 
        <br /><br />
        I wanted to create a web application to showcase my skills in using Next.JS, TypeScript, React, and Tailwind.
        <br /><br />
        Thanks for looking!
      </p>
    </main>
  );
}
