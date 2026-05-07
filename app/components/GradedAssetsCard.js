"use client";

export default function GradedAssetsCard() {
  return (
    <div className="group bg-white rounded-xl border border-slate-200 p-3 hover:border-teal-500 hover:shadow-sm transition-all duration-200 cursor-pointer flex items-center gap-3">
      {/* Compact Icon */}
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-sm shrink-0">
        <span className="text-lg drop-shadow-sm">⭐</span>
      </div>

      {/* Condensed Text Area */}
      <div className="flex-1 min-w-0">
        <h3 className="text-[13px] font-bold text-slate-900 truncate mb-0.5">Graded Assets</h3>
        <p className="text-[11px] font-medium text-slate-500 truncate mb-1">Quality-verified inventory analysis</p>
        <button className="text-[11px] font-semibold text-teal-600 hover:text-teal-700 hover:underline flex items-center gap-1 transition-colors">
          View Quality Report
          <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
             <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Simple Chevron Indicator */}
      <div className="shrink-0 text-slate-300 group-hover:text-teal-500 transition-colors">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}
