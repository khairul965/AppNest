import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import AllApps from "./pages/AllApps.jsx";
import AppDetails from "./pages/AppDetails.jsx";
import Installation from "./pages/Installation.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div data-theme="appnest" className="min-h-screen flex flex-col bg-base-100 font-dm">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/"             element={<Home />} />
            <Route path="/apps"         element={<AllApps />} />
            <Route path="/apps/:id"     element={<AppDetails />} />
            <Route path="/installation" element={<Installation />} />
            <Route path="*"             element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#1A1A2E",
              color: "#F1F5F9",
              border: "1px solid rgba(124,58,237,0.3)",
              borderRadius: "12px",
              fontFamily: "DM Sans, sans-serif",
            },
          }}
        />
      </div>
    </BrowserRouter>
  );
}
