export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-64 gap-4">
      <span className="loading loading-spinner loading-lg text-primary"></span>
      <p className="text-base-content/40 text-sm font-medium animate-pulse">Loading...</p>
    </div>
  );
}
