import { useNavigate } from "react-router-dom";
import Error from "../assets/error-404.png";
import AppError from "../assets/App-Error.png";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] gap-8 px-6 text-center">
      {/* Giant 404 */}
      <div className="relative flex items-center justify-center">
        <span className="font-syne font-extrabold text-[140px] md:text-[200px] leading-none gradient-text opacity-10 select-none">
          404
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={Error}
            alt="404"
            className="w-24 md:w-32 animate-float-1 drop-shadow-2xl"
          />
        </div>
      </div>

      <div>
        <h2 className="font-syne font-extrabold text-3xl md:text-4xl text-base-content mb-3">
          Oops, page not found!
        </h2>
        <p className="text-base-content/50 text-base max-w-md mx-auto leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => navigate("/")}
          className="btn btn-primary gap-2 shadow-lg shadow-violet-500/30"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Go Home
        </button>
        <button
          onClick={() => navigate("/apps")}
          className="btn btn-outline border-violet-500/30 hover:border-violet-400 hover:bg-violet-500/10 hover:text-violet-300 gap-2"
        >
          Browse Apps
        </button>
      </div>
    </div>
  );
}
