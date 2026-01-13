// src/pages/TableOfContents.jsx
import { Link } from "react-router-dom";
import { NAV } from "../nav";
import FooterNav from "../components/FooterNav";

function TocItem({ item, depth = 0 }) {
  const hasChildren = Array.isArray(item.children) && item.children.length > 0;

  return (
    <div>
      <Link
        to={item.path}
        className={[
          "block rounded-md px-2 py-0.4 text-lg transition",
          "text-white/85 hover:bg-white/5 hover:text-white",
        ].join(" ")}
        style={{ marginLeft: depth * 14 }}
      >
        {item.label}
      </Link>

      {hasChildren && (
        <div className="mt-1 border-l border-white/10 pl-3">
          <div className="space-y-1">
            {item.children.map((child) => (
              <TocItem key={child.path} item={child} depth={depth + 1} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function TableOfContents() {
  return (
    <div className="px-10 py-10">
      <h1 className="text-4xl font-bold tracking-wide text-white">
        TABLE OF CONTENT
      </h1>
      <div className="mt-3 font-semibold text-m text-white/60">SuVa Documentation</div>

      <div className="mt-10 space-y-10">
        {NAV.map((group) => (
          <section key={group.section}>
            <div className="mb-3 text-[17px] font-semibold tracking-[0.18em] text-white/40">
              {group.section}
            </div>

            <div className="space-y-2">
              {group.items.map((item) => (
                <TocItem key={item.path} item={item} depth={0} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Footer nav (Next/Prev) */}
      <FooterNav />
    </div>
  );
}
