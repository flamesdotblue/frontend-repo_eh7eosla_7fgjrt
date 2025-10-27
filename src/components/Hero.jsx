export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-200/50 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-medium">Trusted IT Partner</span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Building reliable, secure and scalable digital solutions
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              We help businesses modernize infrastructure, ship quality software faster, and stay secure. From cloud to custom apps, we deliver measurable outcomes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#services" className="inline-flex justify-center items-center rounded-full bg-blue-600 px-6 py-3 text-white font-medium shadow hover:bg-blue-700 transition-colors">Explore Services</a>
              <a href="#about" className="inline-flex justify-center items-center rounded-full border border-gray-300 px-6 py-3 text-gray-800 font-medium hover:bg-gray-50 transition-colors">Learn More</a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="h-full w-full grid grid-cols-3 gap-2 p-3 bg-gradient-to-br from-white via-blue-50 to-indigo-50">
                <div className="col-span-2 rounded-xl bg-white border border-gray-200 shadow-sm p-4">
                  <div className="h-full rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100" />
                </div>
                <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-4 flex flex-col gap-2">
                  <div className="h-1/2 rounded-md bg-blue-100" />
                  <div className="h-1/2 rounded-md bg-indigo-100" />
                </div>
                <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-4" />
                <div className="col-span-2 rounded-xl bg-white border border-gray-200 shadow-sm p-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
