import Spline from '@splinetool/react-spline';
import { Search, Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90 pointer-events-none" />

      <div className="relative z-10 pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div className="max-w-3xl" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.08 } } }}>
            <motion.h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white" variants={fadeUp}>
              Design your dream trip
              <span className="block bg-gradient-to-r from-white via-white to-orange-400 bg-clip-text text-transparent">from inspiration to booking</span>
            </motion.h1>
            <motion.p className="mt-6 text-lg text-white/70 max-w-2xl" variants={fadeUp}>
              Explore immersive destinations, smart itineraries, and live deals — all in one sleek, interactive space.
            </motion.p>
          </motion.div>

          <motion.div className="mt-10" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl p-4 sm:p-6 shadow-2xl"
              variants={fadeUp}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Field icon={MapPin} label="Where to?" placeholder="City, landmark or country" index={0} />
                <Field icon={Calendar} label="Dates" placeholder="Add dates" index={1} />
                <Field icon={Users} label="Travelers" placeholder="2 adults • 0 kids" index={2} />
                <motion.button
                  className="h-14 rounded-xl bg-gradient-to-r from-orange-500 to-amber-400 text-black font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_0_4px_rgba(255,255,255,0.15)] transition-all"
                  variants={fadeUp}
                  custom={3}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Search className="h-5 w-5" />
                  Search trips
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
            <motion.p className="mt-3 text-xs text-white/60" variants={fadeUp}>
              Dark background with white to orange transitions inspired by interactive boarding passes.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="pointer-events-none absolute -bottom-24 left-1/2 h-48 w-[120%] -translate-x-1/2 rounded-[50%] bg-gradient-to-t from-orange-500/10 via-amber-400/10 to-transparent blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />
    </section>
  );
}

function Field({ icon: Icon, label, placeholder, index }) {
  return (
    <motion.label
      className="group relative flex h-14 items-center gap-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-4 text-white transition-colors"
      variants={fadeUp}
      custom={index}
    >
      <Icon className="h-5 w-5 text-white/70" />
      <div className="flex-1">
        <div className="text-[10px] uppercase tracking-wider text-white/50">{label}</div>
        <input
          className="w-full bg-transparent text-sm placeholder-white/40 focus:outline-none"
          placeholder={placeholder}
        />
      </div>
      <span className="absolute inset-0 rounded-xl ring-0 group-focus-within:ring-2 ring-amber-400/60 transition" />
    </motion.label>
  );
}
