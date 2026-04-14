export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-slate-900 text-gray-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-extrabold text-white tracking-[0.2em] mb-3">
              ARCA
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              Premium workspace accessories for those who care about every
              detail. Built for creators, optimised for flow.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs tracking-widest uppercase">
              Navigate
            </h4>
            <ul className="space-y-2">
              {[
                ["Home", "home"],
                ["Products", "products"],
                ["Cart", "cart"],
              ].map(([label, page]) => (
                <li key={page}>
                  <button
                    onClick={() => onNavigate(page)}
                    className="text-sm hover:text-white transition-colors duration-200 focus:outline-none"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs tracking-widest uppercase">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>Free shipping on orders over $99</li>
              <li>30-day free returns</li>
              <li>2-year warranty on all products</li>
              <li className="hover:text-white transition-colors duration-200">
                hello@arcastore.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Arca Store. All rights reserved.</p>
          <p>Built with React + Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
