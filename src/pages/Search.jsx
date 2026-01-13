import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { NAV } from "../nav";

export default function SearchPage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const q = (params.get("q") || "").trim().toLowerCase();

  useEffect(() => {
    if (!q) {
      const backTo = sessionStorage.getItem("last_non_search_path") || "/";
      navigate(backTo, { replace: true });
    }
  }, [q, navigate]);

  const allItems = useMemo(() => {
    return NAV.flatMap((g) => g.items.map((it) => ({ ...it, section: g.section })));
  }, []);

  const results = useMemo(() => {
    if (!q) return [];
    return allItems.filter((it) => it.label.toLowerCase().includes(q));
  }, [q, allItems]);

  if (!q) return null;

  return (
    <div className="px-10 py-10">
      <h1 className="text-4xl font-semibold text-white">Search</h1>
      <div className="mt-2 text-white/60">
        Results for <span className="text-white">“{params.get("q")}”</span>
      </div>

      <div className="mt-8 space-y-3 max-w-[900px]">
        {results.length === 0 ? (
          <div className="text-white/60">No results found.</div>
        ) : (
          results.map((r) => (
            <Link
              key={r.path}
              to={r.path}
              className="block rounded-xl border border-white/10 bg-white/5 px-6 py-4 hover:bg-white/10 transition"
            >
              <div className="text-[11px] tracking-[0.18em] text-white/40">
                {r.section}
              </div>
              <div className="mt-1 text-lg text-white">{r.label}</div>
              <div className="mt-1 text-sm text-white/40">{r.path}</div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
