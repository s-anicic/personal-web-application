export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-[oklch(78.5%_0.115_274.713)] text-white py-3">
      <div className="max-w-6xl mx-auto px-4 flex justify-center items-center">
        <p className="text-sm text-center">
          &copy; {new Date().getFullYear()} Sara Anicic. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
