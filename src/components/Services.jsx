import { Code, Server, Shield, Cloud } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    desc: 'End-to-end web and mobile applications tailored to your business with modern, scalable architectures.'
  },
  {
    icon: Server,
    title: 'DevOps & Infrastructure',
    desc: 'CI/CD pipelines, observability, and infrastructure-as-code on AWS, Azure, or GCP to move faster with confidence.'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    desc: 'Security assessments, hardening, and compliance to protect data and ensure business continuity.'
  },
  {
    icon: Cloud,
    title: 'Cloud Migration',
    desc: 'Plan and execute cost-effective migrations and modernization with a focus on reliability and performance.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Our Services</h2>
          <p className="mt-3 text-gray-600">Comprehensive capabilities across the full technology lifecycle.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
