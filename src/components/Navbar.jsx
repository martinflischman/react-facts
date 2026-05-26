import reactLogo from "/src/assets/react.svg";

export default function Navbar() {
  return (
    <header className="bg-[#21222d] px-6 py-4">
      <nav className="flex items-center gap-3">
        <img src={reactLogo} className="w-8 h-8" />
        <span className="text-[#01d8ff] font-semibold text-lg">ReactFacts</span>
      </nav>
    </header>
  );
}
