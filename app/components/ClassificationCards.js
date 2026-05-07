export default function ClassificationCards() {
  const cards = [
    { label: "Overdue", count: "5,430", sub: "Accounts", amount: "₹5,720.06 L", color: "text-red-700", dot: "bg-red-600" },
    { label: "MTM", count: "45", sub: "Accounts", amount: "₹2.50 L", color: "text-amber-700", dot: "bg-amber-600" },
    { label: "Revenue Loss", count: "30", sub: "Accounts", amount: "₹1.20 L", color: "text-red-700", dot: "bg-red-600" },
    { label: "Frozen Asset", count: "0", sub: "Accounts", amount: "₹0.00 L", color: "text-slate-700", dot: "bg-slate-600" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <div key={card.label} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
          <div className="flex items-center gap-2 mb-4">
            <span className={`w-2.5 h-2.5 rounded-full ${card.dot}`} />
            <span className={`text-[12px] font-bold tracking-wide ${card.color}`}>{card.label}</span>
          </div>
          <div className="space-y-1.5">
            <div className="text-[30px] font-black text-slate-900 leading-none">{card.count}</div>
            <div className="text-[12px] font-semibold text-slate-600 tracking-wide">{card.sub}</div>
            <div className="text-[15px] font-extrabold text-slate-800 pt-1 tracking-tight group-hover:text-slate-950 transition-colors flex items-center gap-1.5">
              <span className="text-[12px] text-slate-500 font-semibold">Value:</span>
              {card.amount}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
