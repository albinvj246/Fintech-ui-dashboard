"use client";

const auctionData = [
  { category: "Notices", overdue: 75, mtm: 2, revenueLoss: 1, standard: 0, icon: "🔔", bgColor: "bg-blue-100 text-blue-800" },
  { category: "Proof of Delivery", overdue: 8, mtm: 3, revenueLoss: 1, standard: 0, icon: "🤝", bgColor: "bg-amber-100 text-amber-800" },
  { category: "Advertisement", overdue: 35, mtm: 5, revenueLoss: 5, standard: 0, icon: "📢", bgColor: "bg-purple-100 text-purple-800" },
  { category: "Pending Settlements", overdue: 30, mtm: 14, revenueLoss: 10, standard: 0, icon: "⚖️", bgColor: "bg-emerald-100 text-emerald-800" },
  { category: "Asset Movement", overdue: 15, mtm: 0, revenueLoss: 0, standard: 0, icon: "🔄", bgColor: "bg-blue-100 text-blue-800" },
  { category: "Final Settlements", overdue: 0, mtm: 0, revenueLoss: 0, standard: 28, icon: "🔒", bgColor: "bg-slate-100 text-slate-800" },
];

export default function AuctionDataTable() {
  const processedData = auctionData.map(item => ({
    ...item,
    total: item.overdue + item.mtm + item.revenueLoss + item.standard
  }));

  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
      {/* Integrated Filter Bar */}
      <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50 border-b border-slate-200">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 px-3.5 py-2 rounded-lg">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span className="text-[12px] font-semibold text-blue-900 leading-none">Scope: High Priority Branch</span>
          </div>
          <div className="flex items-center gap-2 bg-white border border-slate-200 px-3.5 py-2 rounded-lg">
            <span className="text-[12px] font-semibold text-slate-700 leading-none">Filters: All States</span>
          </div>
        </div>
        <span className="text-[12px] font-medium text-slate-500 leading-none">
          232 items in view
        </span>
      </div>

      {/* Table Title */}
      <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-slate-100">
        <div className="w-6 h-6 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 text-[12px] border border-amber-200">⚖️</div>
        <h2 className="text-[13px] font-bold text-slate-800">Auction Category Summary</h2>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr] bg-slate-50 border-b border-slate-200 px-5 py-3">
        <span className="text-[12px] font-semibold text-slate-600">Category</span>
        <span className="text-[12px] font-semibold text-slate-600 text-right">Total</span>
        <span className="text-[12px] font-semibold text-red-700 text-right">Overdue</span>
        <span className="text-[12px] font-semibold text-slate-600 text-right">MTM</span>
        <span className="text-[12px] font-semibold text-slate-600 text-right">Rev. Loss</span>
        <span className="text-[12px] font-semibold text-emerald-700 text-right">Standard</span>
      </div>

      {/* Table Rows — standard spacing always */}
      {processedData.map((row, i) => (
        <div 
          key={row.category} 
          className={`grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr] px-5 py-2.5 items-center hover:bg-blue-50/40 transition-all cursor-pointer border-b border-slate-100 last:border-b-0 ${i % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}`}
        >
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 text-base rounded-lg ${row.bgColor} flex items-center justify-center`}>{row.icon}</div>
            <span className="text-[14px] font-semibold text-slate-900">{row.category}</span>
          </div>
          <span className="text-[16px] font-bold text-slate-950 text-right tabular-nums">{row.total}</span>
          <span className={`text-[14px] font-semibold text-right tabular-nums ${row.overdue > 0 ? 'text-red-600' : 'text-slate-300'}`}>{row.overdue || '–'}</span>
          <span className="text-[14px] font-semibold text-slate-600 text-right tabular-nums">{row.mtm || '–'}</span>
          <span className="text-[14px] font-semibold text-slate-600 text-right tabular-nums">{row.revenueLoss || '–'}</span>
          <span className="text-[14px] font-semibold text-emerald-700 text-right tabular-nums">{row.standard || '–'}</span>
        </div>
      ))}
    </div>
  );
}
