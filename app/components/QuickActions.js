export default function QuickActions() {
  const links = [
    { label: "Settled Auctions", count: 18, icon: "🏷️", color: "text-purple-700", bg: "bg-purple-100 border-purple-200" },
    { label: "Bidders", count: 3, icon: "🏆", color: "text-blue-700", bg: "bg-blue-100 border-blue-200" },
    { label: "Invoices", count: 1, icon: "🧾", color: "text-orange-700", bg: "bg-orange-100 border-orange-200" },
    { label: "Approvals", count: 5, icon: "✅", color: "text-emerald-700", bg: "bg-emerald-100 border-emerald-200" },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
      {/* Card Header */}
      <div className="flex items-center gap-2.5 px-5 py-4 border-b border-slate-100 bg-slate-50/60">
        <div className="w-6 h-6 rounded-md bg-purple-100 flex items-center justify-center text-purple-700 text-[11px] shadow-sm border border-purple-200">⚡</div>
        <h2 className="text-[13px] font-bold text-slate-800">Quick Links</h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-px bg-slate-100">
        {links.map((link) => (
          <button
            key={link.label}
            className="flex items-center gap-3 bg-white px-5 py-5 hover:bg-slate-50 transition-all duration-200 group cursor-pointer text-left"
          >
            <div className={`w-8 h-8 rounded-lg ${link.bg} flex items-center justify-center text-base shrink-0 group-hover:scale-105 transition-transform border`}>
              {link.icon}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[12px] font-semibold text-slate-900 leading-tight truncate">{link.label}</span>
              <span className={`text-[11px] font-semibold ${link.color}`}>
                {link.count} {link.count === 1 ? 'item' : 'items'}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
