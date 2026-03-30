// Format large numbers
export function formatDownloads(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(0) + "K";
  return String(n);
}

export function formatNumber(n) {
  return n.toLocaleString();
}

// ── localStorage helpers ──────────────────────────────────
const LS_KEY = "appnest_installed";

export function getInstalled() {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY)) || [];
  } catch {
    return [];
  }
}

export function installApp(app) {
  const list = getInstalled();
  if (!list.find((a) => a.id === app.id)) {
    list.push(app);
    localStorage.setItem(LS_KEY, JSON.stringify(list));
  }
}

export function uninstallApp(id) {
  const list = getInstalled().filter((a) => a.id !== id);
  localStorage.setItem(LS_KEY, JSON.stringify(list));
}

export function isInstalled(id) {
  return getInstalled().some((a) => a.id === id);
}
