import { Menu, Plane, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-30 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center shadow-lg">
              <Plane className="h-4 w-4 text-black" />
            </div>
            <span className="font-semibold tracking-tight text-white">DreamTrip</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#discover" className="hover:text-white transition-colors">Discover</a>
            <a href="#deals" className="hover:text-white transition-colors">Deals</a>
            <a href="#stories" className="hover:text-white transition-colors">Stories</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 text-white px-4 py-2 text-sm backdrop-blur-md transition-colors">
              <User className="h-4 w-4" />
              Sign in
            </button>
            <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/15 text-white">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
