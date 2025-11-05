import Calculator from "../components/Calculator";
import { Sacramento } from "next/font/google";

const sacramentoFont = Sacramento({
  weight: "400",
  subsets: ["latin"],
});

export default function About() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen px-4 pt-16 sm:pt-20 md:pt-24">
      <h1
        className={`${sacramentoFont.className} font-sans text-6xl sm:text-7xl md:text-8xl text-hecsOklch2 text-center`}
      >
        Calculator
      </h1>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 text-center">
        Beep boop
      </h2>
      <Calculator />
    </main>
  );
}
