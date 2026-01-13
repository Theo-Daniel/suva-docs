// src/components/Sidebar.jsx
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { NAV } from "../nav";
import suvaLogo from "../assets/suva-logo.png";

function Chevron({ open }) {
  return (
    <span
      className={[
        "inline-flex h-7 w-7 items-center justify-center rounded-md",
        "border border-white/10 text-white/50 transition",
        open ? "rotate-90" : "rotate-0",
      ].join(" ")}
    >
      ›
    </span>
  );
}

export default function Sidebar() {
  const location = useLocation();

  // Build a set of parent paths that should be open based on current route
  const autoOpenParents = useMemo(() => {
    const open = new Set();

    for (const group of NAV) {
      for (const item of group.items) {
        if (!item.children?.length) continue;

        const childHit = item.children.some((c) =>
          location.pathname.startsWith(c.path)
        );
        const parentHit = location.pathname.startsWith(item.path);

        if (childHit || parentHit) open.add(item.path);
      }
    }

    return open;
  }, [location.pathname]);

  const [openMap, setOpenMap] = useState({});

  // Keep dropdown open when you navigate into that section
  useEffect(() => {
    setOpenMap((prev) => {
      const next = { ...prev };
      for (const p of autoOpenParents) next[p] = true;
      return next;
    });
  }, [autoOpenParents]);

  const toggle = (parentPath) => {
    setOpenMap((prev) => ({ ...prev, [parentPath]: !prev[parentPath] }));
  };

  const isParentActive = (parent) => {
    if (!parent.children?.length) return false;
    if (location.pathname === parent.path) return true;
    return parent.children.some((c) => location.pathname.startsWith(c.path));
  };

  return (
    <aside className="w-[320px] shrink-0 border-r border-white/10 bg-black/40">
      {/* Header */}
      <div className="flex items-center gap-1 px-6 py-6">
        <img src={suvaLogo} alt="SuVa logo" className="h-11 w-11 object-contain" />
        <span className="text-lg
         font-semibold text-white/90">
          SuVa Documentation
        </span>
      </div>

      <div className="h-[calc(100vh-64px)] overflow-y-auto px-4 pb-10">
        {NAV.map((group) => (
          <div key={group.section} className="mb-6">
            {group.section !== "TABLE OF CONTENT" && (
              <div className="px-2 text-[12px] font-semibold tracking-[0.18em] text-white/35">
                {group.section}
              </div>
            )}

            <div className="mt-2 space-y-1">
              {group.items.map((item) => {
                const hasChildren = !!item.children?.length;

                // Simple leaf link
                if (!hasChildren) {
                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      end={item.path === "/"}
                      className={({ isActive }) =>
                        [
                          "block rounded-md px-3 py-2 text-sm transition",
                          isActive
                            ? "bg-white/10 text-white"
                            : "text-white/60 hover:bg-white/5 hover:text-white/80",
                        ].join(" ")
                      }
                    >
                      {item.label}
                    </NavLink>
                  );
                }

                // Parent link + separate chevron toggle
                const open = !!openMap[item.path];
                const active = isParentActive(item);

                return (
                  <div key={item.path} className="space-y-1">
                    <div
                      className={[
                        "w-full rounded-md px-3 py-2 text-sm transition",
                        "flex items-center gap-2",
                        active
                          ? "bg-white/10 text-white"
                          : "text-white/70 hover:bg-white/5 hover:text-white/85",
                      ].join(" ")}
                    >
                      {/* Clicking the label navigates to the parent page */}
                      <NavLink
                        to={item.path}
                        className="flex-1 truncate"
                        onClick={() => {
                          // keep it open when you click parent
                          setOpenMap((prev) => ({ ...prev, [item.path]: true }));
                        }}
                      >
                        {item.label}
                      </NavLink>

                      {/* Clicking chevron only toggles dropdown (no navigation) */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggle(item.path);
                        }}
                        className="shrink-0"
                        aria-label={open ? "Collapse section" : "Expand section"}
                      >
                        <Chevron open={open} />
                      </button>
                    </div>

                    {/* Children */}
                    {open && (
                      <div className="ml-3 border-l border-white/10 pl-3">
                        <div className="space-y-1 py-1">
                          {item.children.map((child) => (
                            <NavLink
                              key={child.path}
                              to={child.path}
                              className={({ isActive }) =>
                                [
                                  "block rounded-md px-3 py-2 text-sm transition",
                                  isActive
                                    ? "text-white"
                                    : "text-white/55 hover:bg-white/5 hover:text-white/80",
                                ].join(" ")
                              }
                            >
                              {child.label}
                            </NavLink>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
