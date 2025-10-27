export default function AboutMissionVision() {
  return (
    <section id="about" className="py-20 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">About Us</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We are a team of engineers, designers, and problem solvers committed to delivering robust, secure, and scalable technology solutions. Our approach blends strong engineering discipline with an obsession for user outcomes.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              From startups to enterprises, we partner closely to understand goals, reduce risk, and build products that customers love.
            </p>
          </div>

          <div id="mission" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                Empower organizations to move faster and safer through thoughtful technology, automation, and craftsmanship.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                A world where secure, reliable software enables every business to focus on what matters most—delighting customers.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:col-span-2">
              <h3 className="text-xl font-semibold text-gray-900">Engagement Model</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                Flexible collaboration from discovery and architecture to delivery and ongoing support. We share roadmaps, communicate transparently, and measure success by outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
