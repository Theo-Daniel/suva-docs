import { useEffect } from "react";
import SearchBar from "./SearchBar";

export default function Topbar() {
  useEffect(() => {
    const onKeyDown = (e) => {
      const isCtrlK = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k";
      if (!isCtrlK) return;

      e.preventDefault();
      document.getElementById("docs-search-input")?.focus();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-black/60 backdrop-blur">
      {/* Row 1: Search */}
      <div className="flex items-center justify-end gap-3 px-6 py-3">
        <div className="w-[520px] flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3 py-2">
          <SearchBar />
          
        </div>
      </div>   
    </header>
  );
}
