import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export default function SearchBar() {
  const [params, setParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();

  const urlQ = (params.get("q") || "").trim();
  const [value, setValue] = useState(urlQ);

  // keep input synced when URL changes (back/forward)
  useEffect(() => {
    setValue(urlQ);
  }, [urlQ]);

  const goBack = () => {
    const backTo = sessionStorage.getItem("last_non_search_path") || "/";
    navigate(backTo, { replace: true });
  };

  const goSearch = (q) => {
    const nextUrl = `/search?q=${encodeURIComponent(q)}`;
    if (location.pathname !== "/search") {
      navigate(nextUrl, { replace: true });
    } else {
      setParams({ q }, { replace: true });
    }
  };

  const onChange = (next) => {
    setValue(next);

    if (next.trim() === "") {
      // clear query and return
      if (location.pathname === "/search") setParams({}, { replace: true });
      goBack();
      return;
    }

    goSearch(next);
  };

  return (
    <input
      id="docs-search-input"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key !== "Enter") return;

        const trimmed = value.trim();
        if (!trimmed) {
          e.preventDefault();
          goBack();
          return;
        }

        e.preventDefault();
        goSearch(trimmed);
      }}
      placeholder="Search..."
      className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/35"
    />
  );
}
