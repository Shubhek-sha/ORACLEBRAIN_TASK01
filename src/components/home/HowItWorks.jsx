const steps = [
  { step: "01", title: "Search Doctor", desc: "Find doctors by specialty." },
  { step: "02", title: "Book Appointment", desc: "Choose date & time." },
  { step: "03", title: "Get Treatment", desc: "Consult & receive care." },
];

export default function HowItWorks() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-10 text-slate-900">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-semibold">
                {item.step}
              </div>
              <h3 className="mt-4 font-medium text-lg">{item.title}</h3>
              <p className="text-slate-600 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
