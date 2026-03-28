export default function Footer() {
  return (
    <footer className="bg-[#0B1220] text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-2">
            DoctorOnCall
          </h3>
          <p className="text-sm">
            Making healthcare accessible, affordable, and convenient for
            everyone.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-medium mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white font-medium mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li>Help Center</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-medium mb-3">Contact</h4>
          <p className="text-sm">support@doctoroncall.com</p>
        </div>
      </div>

      <div className="text-center text-xs text-slate-500 pb-6">
        © 2024 DoctorOnCall. All rights reserved.
      </div>
    </footer>
  );
}
