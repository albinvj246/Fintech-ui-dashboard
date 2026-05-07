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
      <div className="flex flex-wrap items-center justify-between px-3 sm:px-5 py-3 sm:py-3.5 bg-slate-50 border-b border-slate-200 gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span className="text-[11px] sm:text-[12px] font-semibold text-blue-900 leading-none">Scope: High Priority Branch</span>
          </div>
          <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg">
            <span className="text-[11px] sm:text-[12px] font-semibold text-slate-700 leading-none">Filters: All States</span>
          </div>
        </div>
        <span className="text-[11px] sm:text-[12px] font-medium text-slate-500 leading-none">
          232 items in view
        </span>
      </div>

      {/* Table Title */}
      <div className="flex items-center gap-2.5 px-3 sm:px-5 py-3 sm:py-3.5 border-b border-slate-100">
        <div className="w-6 h-6 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 text-[12px] border border-amber-200">⚖️</div>
        <h2 className="text-[13px] font-bold text-slate-800">Auction Category Summary</h2>
      </div>

      {/* Scrollable Table Wrapper */}
      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full min-w-[520px]">
          {/* Table Header */}
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              <th className="text-left text-[11px] sm:text-[12px] font-semibold text-slate-600 px-3 sm:px-5 py-2.5 sm:py-3 w-[38%]">Category</th>
              <th className="text-right text-[11px] sm:text-[12px] font-semibold text-slate-600 px-2 sm:px-3 py-2.5 sm:py-3">Total</th>
              <th className="text-right text-[11px] sm:text-[12px] font-semibold text-red-700 px-2 sm:px-3 py-2.5 sm:py-3">Overdue</th>
              <th className="text-right text-[11px] sm:text-[12px] font-semibold text-slate-600 px-2 sm:px-3 py-2.5 sm:py-3">MTM</th>
              <th className="text-right text-[11px] sm:text-[12px] font-semibold text-slate-600 px-2 sm:px-3 py-2.5 sm:py-3">Rev. Loss</th>
              <th className="text-right text-[11px] sm:text-[12px] font-semibold text-emerald-700 px-2 sm:px-3 py-2.5 sm:py-3">Standard</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {processedData.map((row, i) => (
              <tr
                key={row.category}
                className={`hover:bg-blue-50/40 transition-all cursor-pointer border-b border-slate-100 last:border-b-0 ${i % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}`}
              >
                <td className="px-3 sm:px-5 py-2 sm:py-2.5">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className={`w-7 h-7 sm:w-9 sm:h-9 text-sm sm:text-base rounded-lg ${row.bgColor} flex items-center justify-center shrink-0`}>{row.icon}</div>
                    <span className="text-[12px] sm:text-[14px] font-semibold text-slate-900 whitespace-nowrap">{row.category}</span>
                  </div>
                </td>
                <td className="text-right px-2 sm:px-3 py-2 sm:py-2.5">
                  <span className="text-[14px] sm:text-[16px] font-bold text-slate-950 tabular-nums">{row.total}</span>
                </td>
                <td className="text-right px-2 sm:px-3 py-2 sm:py-2.5">
                  <span className={`text-[13px] sm:text-[14px] font-semibold tabular-nums ${row.overdue > 0 ? 'text-red-600' : 'text-slate-300'}`}>{row.overdue || '–'}</span>
                </td>
                <td className="text-right px-2 sm:px-3 py-2 sm:py-2.5">
                  <span className="text-[13px] sm:text-[14px] font-semibold text-slate-600 tabular-nums">{row.mtm || '–'}</span>
                </td>
                <td className="text-right px-2 sm:px-3 py-2 sm:py-2.5">
                  <span className="text-[13px] sm:text-[14px] font-semibold text-slate-600 tabular-nums">{row.revenueLoss || '–'}</span>
                </td>
                <td className="text-right px-2 sm:px-3 py-2 sm:py-2.5">
                  <span className="text-[13px] sm:text-[14px] font-semibold text-emerald-700 tabular-nums">{row.standard || '–'}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
