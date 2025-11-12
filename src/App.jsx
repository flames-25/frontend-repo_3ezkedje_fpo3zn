import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
      </main>
      <footer className="bg-black py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-white/60 text-sm">
          <p>© {new Date().getFullYear()} DreamTrip. Built for travelers who love great vibes.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
