import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutMissionVision from './components/AboutMissionVision';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AboutMissionVision />

        <section id="contact" className="py-20 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-10 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Ready to accelerate your roadmap?</h2>
              <p className="mt-3 text-gray-700">Tell us about your goals—our experts will get back within 1 business day.</p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="mailto:hello@bluewaveit.example" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white font-medium shadow hover:bg-blue-700 transition-colors">Email Us</a>
                <a href="#services" className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-gray-800 font-medium hover:bg-white/60 backdrop-blur transition-colors">View Services</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} BlueWave IT. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-gray-600">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#mission" className="hover:text-blue-600">Mission & Vision</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
