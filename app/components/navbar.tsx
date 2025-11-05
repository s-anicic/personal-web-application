import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full mx-auto px-4 bg-[oklch(78.5%_0.115_274.713)]">
        <div className="flex justify-center items-center h-16 space-x-8">
          <Link
            href="/"
            className="text-white hover:text-white hover:[text-shadow:0_0_8px_rgb(255,255,255)]"
          >
            home ♡
          </Link>
          <Link
            href="/about"
            className="text-white hover:[text-shadow:0_0_8px_rgb(255,255,255)]"
          >
            about ♡
          </Link>
            <Link
            href="/tic-tac-toe"
            className="text-white hover:[text-shadow:0_0_8px_rgb(255,255,255)]"
          >
            tic-tac-toe ♡
          </Link>
           <Link
            href="/calculator"
            className="text-white hover:[text-shadow:0_0_8px_rgb(255,255,255)]"
          >
            calculator ♡
          </Link>
      </div>
    </nav>
  );
}
