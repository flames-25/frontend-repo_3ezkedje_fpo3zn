import { Menu, Plane, User } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Discover", href: "#discover" },
  { label: "Deals", href: "#deals" },
  { label: "Stories", href: "#stories" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: -8 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 16 } },
};

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 left-0 z-30 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex h-16 items-center justify-between"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div className="flex items-center gap-2" variants={item}>
            <motion.div
              className="h-8 w-8 rounded-lg bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center shadow-lg"
              whileHover={{ rotate: 10 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <Plane className="h-4 w-4 text-black" />
            </motion.div>
            <span className="font-semibold tracking-tight text-white">DreamTrip</span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            {navItems.map((n) => (
              <motion.a
                key={n.href}
                href={n.href}
                className="hover:text-white transition-colors"
                variants={item}
                whileHover={{ y: -2 }}
              >
                {n.label}
              </motion.a>
            ))}
          </nav>

          <motion.div className="flex items-center gap-2" variants={item}>
            <motion.button
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 text-white px-4 py-2 text-sm backdrop-blur-md transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <User className="h-4 w-4" />
              Sign in
            </motion.button>
            <motion.button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/15 text-white"
              whileTap={{ scale: 0.96 }}
            >
              <Menu className="h-5 w-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}
