const features = [
  {
    title: "24/7 Availability",
    description: "Access medical care round the clock, whenever you need it.",
  },
  {
    title: "Verified Doctors",
    description: "Every specialist is thoroughly vetted and certified.",
  },
  {
    title: "Quick Booking",
    description: "Instant appointments without long waiting times.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-8 text-slate-900">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-xl border border-slate-200"
            >
              <h3 className="font-medium text-lg text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-slate-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
