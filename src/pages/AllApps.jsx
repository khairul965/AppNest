import { useState, useEffect } from "react";
import appsData from "../data/appsData.js";
import AppCard from "../components/AppCard.jsx";
import Loader from "../components/Loader.jsx";

export default function AllApps() {
  const [search, setSearch] = useState("");
  const [sort, setSort]     = useState("default");
  const [loading, setLoading] = useState(false);
  const [filtered, setFiltered] = useState(appsData);

  useEffect(() => {
    setLoading(true);
    const t = setTimeout(() => {
      let result = appsData.filter((app) =>
        app.title.toLowerCase().includes(search.toLowerCase())
      );
      if (sort === "high-low") result = [...result].sort((a, b) => b.downloads - a.downloads);
      if (sort === "low-high") result = [...result].sort((a, b) => a.downloads - b.downloads);
      setFiltered(result);
      setLoading(false);
    }, 350);
    return () => clearTimeout(t);
  }, [search, sort]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Page header */}
      <div className="text-center mb-12">
        <h1 className="font-syne font-extrabold text-3xl md:text-5xl text-base-content mb-3">
          Our All Applications
        </h1>
        <p className="text-base-content/50 text-base max-w-lg mx-auto">
          Explore All Apps from our productive apps for you. We've built it all.
        </p>
      </div>

      {/* Search & Sort bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        {/* Count */}
        <div className="flex items-center gap-2">
          <span className="font-syne font-bold text-3xl gradient-text">{filtered.length}</span>
          <span className="text-base-content/50 text-sm font-medium">Apps Found</span>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <label className="input input-bordered flex items-center gap-2 bg-base-200 border-violet-500/30 focus-within:border-violet-500 w-full sm:w-72">
            <svg className="w-4 h-4 text-base-content/40 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" strokeWidth="2" />
              <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              placeholder="Search apps..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="grow bg-transparent text-sm outline-none"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="text-base-content/30 hover:text-base-content/60 transition-colors"
              >
                ✕
              </button>
            )}
          </label>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="select select-bordered bg-base-200 border-violet-500/30 text-sm focus:border-violet-500 w-full sm:w-52"
          >
            <option value="default">Sort by Downloads</option>
            <option value="high-low">Downloads: High → Low</option>
            <option value="low-high">Downloads: Low → High</option>
          </select>
        </div>
      </div>

      {/* Content */}
      {loading ? (
        <Loader />
      ) : filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <div className="text-7xl">🔍</div>
          <h3 className="font-syne font-bold text-2xl text-base-content">No App Found</h3>
          <p className="text-base-content/40 text-sm">Try a different search keyword</p>
          <button onClick={() => setSearch("")} className="btn btn-primary btn-sm mt-2">
            Clear Search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
}
