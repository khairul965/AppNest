import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-violet-500/20 bg-base-200">
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-4 lg:col-span-1">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-syne font-extrabold text-xl text-base-content">AppNest</span>
          </Link>
          <p className="text-sm text-base-content/50 max-w-xs leading-relaxed">
            Discover powerful apps built for you. Trusted by millions of users worldwide to stay productive every day.
          </p>
          <div className="flex gap-3 mt-1">
            {[
              {
                label: "GitHub",
                d: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z",
              },
              {
                label: "Twitter",
                d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
              },
            ].map(({ label, d }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="btn btn-ghost btn-sm btn-square border border-violet-500/20 text-base-content/50 hover:text-primary hover:border-primary"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d={d} /></svg>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-base-content/40 block mb-4">Navigation</span>
          <div className="flex flex-col gap-2">
            <Link to="/" className="link link-hover text-sm text-base-content/60 hover:text-primary">Home</Link>
            <Link to="/apps" className="link link-hover text-sm text-base-content/60 hover:text-primary">All Apps</Link>
            <Link to="/installation" className="link link-hover text-sm text-base-content/60 hover:text-primary">My Installation</Link>
          </div>
        </div>

        {/* Company */}
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-base-content/40 block mb-4">Company</span>
          <div className="flex flex-col gap-2">
            {["About Us", "Careers", "Blog", "Press"].map((t) => (
              <a key={t} href="#" className="link link-hover text-sm text-base-content/60 hover:text-primary">{t}</a>
            ))}
          </div>
        </div>

        {/* Support */}
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-base-content/40 block mb-4">Support</span>
          <div className="flex flex-col gap-2">
            {["Help Center", "Contact Us", "Privacy Policy", "Terms of Service"].map((t) => (
              <a key={t} href="#" className="link link-hover text-sm text-base-content/60 hover:text-primary">{t}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-violet-500/10 py-5 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-base-content/40">
          <span>© 2025 AppNest. All rights reserved.</span>
          <span>Made with ❤️ for productivity lovers</span>
        </div>
      </div>
    </footer>
  );
}
