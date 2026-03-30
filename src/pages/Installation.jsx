import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { getInstalled, uninstallApp, formatDownloads } from "../utils.js";
import Loader from "../components/Loader.jsx";

export default function Installation() {
  const navigate = useNavigate();
  const [loading, setLoading]     = useState(true);
  const [installed, setInstalled] = useState([]);

  useEffect(() => {
    const t = setTimeout(() => {
      setInstalled(getInstalled());
      setLoading(false);
    }, 500);
    return () => clearTimeout(t);
  }, []);

  const handleUninstall = (app) => {
    uninstallApp(app.id);
    setInstalled((prev) => prev.filter((a) => a.id !== app.id));
    toast(`🗑️ ${app.title} uninstalled.`, {
      style: {
        background: "#1A1A2E",
        color: "#F1F5F9",
        border: "1px solid rgba(239,68,68,0.4)",
        borderRadius: "12px",
      },
    });
  };

  if (loading) return <Loader />;

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="font-syne font-extrabold text-3xl md:text-5xl text-base-content mb-3">
          Your Installed Apps
        </h1>
        <p className="text-base-content/50 text-base max-w-lg mx-auto">
          Explore all the apps you've installed. Manage and uninstall them here.
        </p>
      </div>

      {/* Empty state */}
      {installed.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 gap-6">
          <div className="w-28 h-28 rounded-full bg-base-200 border border-violet-500/20 flex items-center justify-center text-6xl">
            📦
          </div>
          <div className="text-center">
            <h3 className="font-syne font-bold text-2xl text-base-content mb-2">No Apps Installed</h3>
            <p className="text-base-content/40 text-sm max-w-sm mx-auto">
              You haven't installed any apps yet. Browse our collection and install your favorites!
            </p>
          </div>
          <button onClick={() => navigate("/apps")} className="btn btn-primary gap-2">
            Browse Apps
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      ) : (
        <>
          {/* Count */}
          <div className="flex items-center gap-2 mb-6">
            <span className="font-syne font-bold text-3xl gradient-text">{installed.length}</span>
            <span className="text-base-content/50 text-sm font-medium">
              App{installed.length !== 1 ? "s" : ""} Installed
            </span>
          </div>

          {/* List */}
          <div className="flex flex-col gap-4">
            {installed.map((app) => (
              <div
                key={app.id}
                className="card bg-base-200 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300"
              >
                <div className="card-body p-5 flex-row items-center gap-5">
                  <img
                    src={app.image}
                    alt={app.title}
                    onError={(e) => { e.target.src = "https://img.icons8.com/fluency/96/app.png"; }}
                    className="w-14 h-14 rounded-2xl object-cover bg-base-300 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-syne font-bold text-base text-base-content truncate">
                      {app.title}
                    </h3>
                    <p className="text-xs text-base-content/40 mt-0.5">{app.companyName}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-warning text-xs font-bold">⭐ {app.ratingAvg}</span>
                      <span className="text-base-content/40 text-xs">↓ {formatDownloads(app.downloads)}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={() => navigate(`/apps/${app.id}`)}
                      className="btn btn-ghost btn-sm border border-violet-500/20 hover:border-violet-500/50"
                    >
                      Details
                    </button>
                    <button
                      onClick={() => handleUninstall(app)}
                      className="btn btn-error btn-sm btn-outline gap-1"
                    >
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M3 6h18M19 6l-1 14H6L5 6M10 11v6M14 11v6M9 6V4h6v2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Uninstall
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
