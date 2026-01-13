import FooterNav from "../components/FooterNav";

export default function DocPage({ title, children }) {
  return (
    <div className="px-10 py-10">
      <h1 className="text-4xl font-semibold text-white">{title}</h1>

      <div className="mt-6 space-y-5 text-white/70 leading-relaxed max-w-[900px] text-lg">
        {children}
      </div>

      <FooterNav />
    </div>
  );
}
