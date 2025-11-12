import { Sparkles, Compass, BadgePercent, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    icon: Compass,
    title: 'Curated itineraries',
    desc: 'Smart routes tuned for time, vibes, and budget. No more tabs overload.'
  },
  {
    icon: BadgePercent,
    title: 'Live deals',
    desc: 'Real-time price drops on flights and stays with seamless checkout.'
  },
  {
    icon: Star,
    title: 'Traveler stories',
    desc: 'Short reels and guides from people who were just there.'
  },
  {
    icon: Sparkles,
    title: 'Mood-based discovery',
    desc: 'Pick a vibe — coastal calm, neon nights, hidden gems — and go.'
  }
];

export default function Highlights() {
  return (
    <section className="relative bg-black py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-white text-2xl sm:text-3xl font-semibold"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Why travelers love DreamTrip
        </motion.h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white hover:bg-white/8 transition-colors"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="h-10 w-10 rounded-lg bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center">
                <it.icon className="h-5 w-5 text-black" />
              </div>
              <h3 className="mt-4 font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-white/70">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
