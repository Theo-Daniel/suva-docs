import { Link, useLocation } from "react-router-dom";
import { NAV } from "../nav";

// ✅ Recursively flatten NAV into a single ordered list (all depths)
function buildFlatPages() {
  const pages = [];

  const addItem = (item, section) => {
    pages.push({
      section,
      label: item.label,
      path: item.path,
    });

    if (Array.isArray(item.children)) {
      for (const child of item.children) {
        addItem(child, section);
      }
    }
  };

  for (const group of NAV) {
    for (const item of group.items) {
      addItem(item, group.section);
    }
  }

  return pages;
}

export default function FooterNav() {
  const { pathname } = useLocation();
  const pages = buildFlatPages();

  const idx = pages.findIndex((p) => p.path === pathname);

  // If route isn't in NAV (like /search), don't show footer
  if (idx === -1) return null;

  const prev = idx > 0 ? pages[idx - 1] : null;
  const next = idx < pages.length - 1 ? pages[idx + 1] : null;

  // ✅ Single-card mode: if prev is null OR next is null, show only the existing one on the left
  const single = !prev || !next;
  const singlePage = prev ?? next;

  return (
    <div className="mt-14 border-t border-white/10 pt-6">
      {single ? (
        singlePage ? (
          <div className="max-w-md">
            <Link
              to={singlePage.path}
              className="group flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/5 px-5 py-4 hover:bg-white/10 transition"
            >
              <div className="leading-tight">
                <div className="text-xs text-white/50">
                  {prev ? "Previous" : "Next"}
                </div>
                <div className="text-sm font-semibold text-white">
                  {singlePage.label}
                </div>
              </div>
              <span className="text-white/50 text-lg">›</span>
            </Link>
          </div>
        ) : null
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {/* Previous */}
          <Link
            to={prev.path}
            className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-5 py-4 hover:bg-white/10 transition"
          >
            <div className="flex items-center gap-3">
              <span className="text-white/50 text-lg">‹</span>
              <div className="leading-tight">
                <div className="text-xs text-white/50">Previous</div>
                <div className="text-sm font-semibold text-white">
                  {prev.label}
                </div>
              </div>
            </div>
            <span className="text-white/30 group-hover:text-white/50 transition">
              →
            </span>
          </Link>

          {/* Next */}
          <Link
            to={next.path}
            className="group flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-5 py-4 hover:bg-white/10 transition"
          >
            <div className="leading-tight">
              <div className="text-xs text-white/50">Next</div>
              <div className="text-sm font-semibold text-white">
                {next.label}
              </div>
            </div>
            <span className="text-white/50 text-lg">›</span>
          </Link>
        </div>
      )}
    </div>
  );
}
