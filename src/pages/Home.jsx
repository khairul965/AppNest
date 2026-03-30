import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import appsData from "../data/appsData.js";
import AppCard from "../components/AppCard.jsx";
import Loader from "../components/Loader.jsx";
import { formatDownloads } from "../utils.js";

const FLOAT_ICONS = ["📱", "⚡", "🎯", "🔥", "✅", "🚀"];
const FLOAT_CLASSES = [
  "animate-float-1", "animate-float-2", "animate-float-3",
  "animate-float-4", "animate-float-5", "animate-float-6",
];

export default function Home() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const totalDownloads = appsData.reduce((s, a) => s + a.downloads, 0);
  const totalReviews   = appsData.reduce((s, a) => s + a.reviews, 0);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-24 md:py-36 flex items-center min-h-[600px]">
        {/* Orbs */}
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-violet-600/20 blur-[120px] animate-pulse-slow pointer-events-none" />
        <div className="absolute -bottom-32 -right-20 w-[400px] h-[400px] rounded-full bg-cyan-500/15 blur-[100px] animate-pulse-slow pointer-events-none" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.04)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-violet-500/40 text-violet-400 bg-violet-500/10 rounded-full px-4 py-2 text-sm font-medium mb-8">
            🚀 Discover Amazing Apps
          </div>

          <h1 className="font-syne font-extrabold text-4xl md:text-6xl lg:text-7xl text-base-content leading-tight mb-6">
            We Build{" "}
            <span className="gradient-text">Productive Apps</span>
          </h1>

          <p className="text-base-content/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            At AppNest, we are dedicated to developing productivity applications designed to help you
            achieve your goals. Find apps that transform the way you work, learn, and live.
          </p>

          {/* Store buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-lg gap-3 shadow-xl shadow-violet-500/30"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199 1.001l1.997 1.159a1 1 0 010 1.727l-1.997 1.159L15.396 12l2.302-2.302zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z" />
              </svg>
              Play Store
            </a>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline btn-lg gap-3 border-violet-500/30 text-base-content/80 hover:border-violet-400 hover:bg-violet-500/10 hover:text-violet-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </a>
          </div>

          {/* Floating icons */}
          <div className="flex justify-center gap-3 flex-wrap">
            {FLOAT_ICONS.map((icon, i) => (
              <div
                key={i}
                className={`w-14 h-14 rounded-2xl bg-base-200 border border-violet-500/20 flex items-center justify-center text-2xl shadow-lg shadow-violet-500/10 ${FLOAT_CLASSES[i]}`}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="border-y border-violet-500/20 bg-gradient-to-r from-violet-500/5 to-cyan-500/5 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-base-content/40 mb-10">
            Trusted By Millions, Built For You
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { val: formatDownloads(totalDownloads), label: "Total Downloads" },
              { val: formatDownloads(totalReviews),   label: "Total Reviews" },
              { val: `${appsData.length}+`,           label: "Available Apps" },
            ].map(({ val, label }) => (
              <div
                key={label}
                className="card bg-base-200 border border-violet-500/20 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="card-body items-center text-center py-8">
                  <p className="font-syne font-extrabold text-5xl gradient-text">{val}</p>
                  <p className="text-base-content/50 text-sm font-medium mt-1">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trending Apps ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="font-syne font-extrabold text-3xl md:text-4xl text-base-content mb-3">
            Trending Apps
          </h2>
          <p className="text-base-content/50 text-base max-w-lg mx-auto">
            Explore All Apps for the latest productivity tools. We've built it all.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {appsData.slice(0, 8).map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/apps")}
            className="btn btn-primary btn-lg gap-2 shadow-xl shadow-violet-500/30"
          >
            Show All Apps
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}
