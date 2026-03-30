import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell,
} from "recharts";
import appsData from "../data/appsData.js";
import Loader from "../components/Loader.jsx";
import { formatDownloads, formatNumber, installApp, isInstalled } from "../utils.js";

const BAR_COLORS = ["#EF4444", "#F97316", "#F59E0B", "#06B6D4", "#7C3AED"];

export default function AppDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading]     = useState(true);
  const [installed, setInstalled] = useState(false);

  const app = appsData.find((a) => a.id === Number(id));

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false);
      if (app) setInstalled(isInstalled(app.id));
    }, 500);
    return () => clearTimeout(t);
  }, [app]);

  const handleInstall = () => {
    installApp(app);
    setInstalled(true);
    toast.success(`✅ ${app.title} installed!`, {
      style: {
        background: "#1A1A2E",
        color: "#F1F5F9",
        border: "1px solid rgba(16,185,129,0.4)",
        borderRadius: "12px",
      },
    });
  };

  if (loading) return <Loader />;

  /* ── App not found ── */
  if (!app) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-6 text-center">
        <img
          src="https://img.icons8.com/fluency/120/cancel.png"
          alt="Not found"
          className="w-28 opacity-80"
        />
        <div>
          <h2 className="font-syne font-extrabold text-3xl text-base-content mb-2">
            OPPS!! APP NOT FOUND
          </h2>
          <p className="text-base-content/50 text-sm max-w-sm mx-auto">
            The app you are looking for may have been removed or the link is invalid.
          </p>
        </div>
        <button onClick={() => navigate("/apps")} className="btn btn-primary gap-2">
          ← Back to Apps
        </button>
      </div>
    );
  }

  const stats = [
    { icon: "↓", label: "Downloads", val: formatDownloads(app.downloads) },
    { icon: "⭐", label: "Rating",    val: app.ratingAvg },
    { icon: "💬", label: "Reviews",   val: formatDownloads(app.reviews) },
    { icon: "📦", label: "Size",      val: `${app.size} MB` },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="btn btn-ghost btn-sm gap-2 mb-8 text-base-content/50 hover:text-base-content"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M19 12H5M12 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back
      </button>

      {/* App info card */}
      <div className="card bg-base-200 border border-violet-500/20 mb-8">
        <div className="card-body p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* App icon */}
            <div className="shrink-0">
              <img
                src={app.image}
                alt={app.title}
                onError={(e) => { e.target.src = "https://img.icons8.com/fluency/96/app.png"; }}
                className="w-28 h-28 rounded-3xl object-cover bg-base-300 shadow-xl shadow-violet-500/20"
              />
            </div>

            {/* Details */}
            <div className="flex-1">
              <h1 className="font-syne font-extrabold text-2xl md:text-3xl text-base-content mb-1">
                {app.title}
              </h1>
              <p className="text-base-content/50 text-sm mb-5">by {app.companyName}</p>

              {/* Stat pills */}
              <div className="flex flex-wrap gap-6 mb-6">
                {stats.map(({ icon, label, val }) => (
                  <div key={label} className="flex flex-col items-center">
                    <span className="font-syne font-bold text-xl text-base-content">
                      {icon} {val}
                    </span>
                    <span className="text-xs text-base-content/40 mt-0.5">{label}</span>
                  </div>
                ))}
              </div>

              {/* Install button */}
              <button
                onClick={handleInstall}
                disabled={installed}
                className={`btn gap-2 ${
                  installed
                    ? "btn-disabled bg-success/20 text-success border border-success/30 opacity-100"
                    : "btn-primary shadow-lg shadow-violet-500/30"
                }`}
              >
                {installed ? (
                  <>✅ Installed</>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Install
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Chart + Description */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ratings Chart */}
        <div className="card bg-base-200 border border-violet-500/20">
          <div className="card-body p-6">
            <h2 className="font-syne font-bold text-lg text-base-content mb-1">Ratings</h2>
            <p className="text-base-content/40 text-xs mb-6">User rating breakdown</p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={app.ratings} layout="vertical" margin={{ left: 0, right: 16 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(124,58,237,0.1)" horizontal={false} />
                <XAxis
                  type="number"
                  tick={{ fill: "#64748B", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fill: "#64748B", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  width={44}
                />
                <Tooltip
                  contentStyle={{
                    background: "#1A1A2E",
                    border: "1px solid rgba(124,58,237,0.3)",
                    borderRadius: 10,
                    color: "#F1F5F9",
                    fontSize: 12,
                  }}
                  cursor={{ fill: "rgba(124,58,237,0.08)" }}
                />
                <Bar dataKey="count" radius={[0, 6, 6, 0]}>
                  {app.ratings.map((_, i) => (
                    <Cell key={i} fill={BAR_COLORS[i]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Description */}
        <div className="card bg-base-200 border border-violet-500/20">
          <div className="card-body p-6">
            <h2 className="font-syne font-bold text-lg text-base-content mb-1">Description</h2>
            <p className="text-base-content/40 text-xs mb-4">About this app</p>
            <p className="text-base-content/70 text-sm leading-relaxed">{app.description}</p>

            <div className="divider my-4 opacity-20" />

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-base-content/40 text-xs mb-1">Total Reviews</p>
                <p className="font-semibold text-base-content">{formatNumber(app.reviews)}</p>
              </div>
              <div>
                <p className="text-base-content/40 text-xs mb-1">Avg Rating</p>
                <p className="font-semibold text-warning">{app.ratingAvg} / 5.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
