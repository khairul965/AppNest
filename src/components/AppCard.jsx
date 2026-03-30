import { useNavigate } from "react-router-dom";
import { formatDownloads } from "../utils.js";

export default function AppCard({ app }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/apps/${app.id}`)}
      className="card bg-base-200 border border-violet-500/20 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/20 hover:border-violet-500/50"
    >
      <div className="card-body p-5 gap-3">
        <img
          src={app.image}
          alt={app.title}
          onError={(e) => { e.target.src = "https://img.icons8.com/fluency/96/app.png"; }}
          className="w-14 h-14 rounded-2xl object-cover bg-base-300"
        />
        <div>
          <h3 className="font-syne font-bold text-sm text-base-content leading-snug line-clamp-2">
            {app.title}
          </h3>
          <p className="text-xs text-base-content/40 mt-1">{app.companyName}</p>
        </div>
        <div className="flex items-center justify-between mt-1">
          <span className="text-warning text-xs font-bold">⭐ {app.ratingAvg}</span>
          <span className="text-xs text-base-content/40">↓ {formatDownloads(app.downloads)}</span>
        </div>
      </div>
    </div>
  );
}
