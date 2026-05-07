"use client";

export default function TopBar({ onToggleMobileSidebar }) {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div className="h-[64px] sm:h-[80px] flex items-center justify-between px-4 sm:px-10">

        {/* Left Section: Menu + Title */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          {/* Mobile Menu Button */}
          <button
            onClick={onToggleMobileSidebar}
            className="lg:hidden w-10 h-10 -ml-1 rounded-lg flex items-center justify-center text-slate-500 hover:bg-slate-100 active:scale-95 transition-all shrink-0"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>

          {/* Title & Subtitle */}
          <div className="flex flex-col min-w-0 ml-0.5 lg:ml-0">
            <h1 className="text-[14px] sm:text-[17px] font-black text-slate-950 tracking-tight whitespace-nowrap">Auction Management</h1>
            <p className="text-[11px] sm:text-[12px] text-slate-500 font-semibold tracking-wide leading-none sm:leading-normal">Recovery Dashboard</p>
          </div>
        </div>

        {/* Middle Group: Global Metrics — unified container (desktop only, xl+) */}
        <div className="hidden xl:flex items-center bg-slate-100 border border-slate-300 rounded-xl px-2 py-1.5 gap-1.5 shadow-sm">
          <MetricItems />
        </div>

        {/* Right Group: Primary CTA & Header Actions */}
        <div className="flex items-center gap-2 sm:gap-6">
          {/* Create Auction: icon-only on mobile, full on sm+ */}
          <button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white rounded-lg px-2.5 sm:px-4 py-2 flex items-center gap-2 shadow-lg shadow-blue-500/10 border border-blue-400/20 transition-all duration-300 group cursor-pointer active:scale-95">
            <div className="w-4 h-4 rounded bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
            </div>
            <span className="text-[12px] font-bold tracking-tight hidden sm:inline">Create Auction</span>
          </button>

          <div className="h-8 w-px bg-slate-200 hidden sm:block" />

          <div className="flex items-center gap-2 sm:gap-4">
            <button className="text-slate-400 hover:text-slate-600 transition cursor-pointer relative">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M15 7a5 5 0 00-10 0c0 5-2 7-2 7h14s-2-2-2-7" /><path d="M8.5 17a1.5 1.5 0 003 0" /></svg>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">3</span>
            </button>
            <div className="flex items-center gap-3 pl-2">
              <div className="flex-col items-end hidden sm:flex">
                <span className="text-[12px] font-bold text-slate-900">Admin Account</span>
                <span className="text-[11px] font-semibold text-emerald-600">Verified</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-sm">A</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet/Medium Metrics Bar (shown when hidden on desktop) */}
      <div className="xl:hidden bg-white border-t border-slate-100 shadow-sm">
        <div className="grid grid-cols-3 divide-x divide-slate-100">
          <MetricItems mobile />
        </div>
      </div>
    </header>
  );
}

function MetricItems({ mobile = false }) {
  if (mobile) {
    return (
      <>
        {/* Gross Card */}
        <div className="flex flex-col items-center justify-center py-2.5">
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">Gross O/S</span>
          <span className="text-[13px] font-black text-slate-950 tabular-nums">₹5,723 L</span>
        </div>

        {/* Global Count Card */}
        <div className="flex flex-col items-center justify-center py-2.5">
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">Global Count</span>
          <span className="text-[13px] font-black text-slate-950 tabular-nums">5,505</span>
        </div>

        {/* Today's Lots Card */}
        <div className="flex flex-col items-center justify-center py-2.5">
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">Today's Lots</span>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="text-[13px] font-black text-slate-950 tabular-nums">5</span>
            <div className="flex items-center gap-0.5">
              <div className="w-4 h-4 rounded bg-emerald-600 flex items-center justify-center text-[9px] font-black text-white">4</div>
              <div className="w-4 h-4 rounded bg-amber-600 flex items-center justify-center text-[9px] font-black text-white">1</div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex items-center gap-2 px-3 py-1 whitespace-nowrap shrink-0">
        <span className="text-[11px] font-semibold text-slate-600 tracking-wide">Gross Outstanding</span>
        <span className="text-[13px] font-black text-slate-950 tabular-nums">₹5,723.76 L</span>
      </div>
      <div className="h-4 w-px bg-slate-300 shrink-0" />
      <div className="flex items-center gap-2 px-3 py-1 whitespace-nowrap shrink-0">
        <span className="text-[11px] font-semibold text-slate-600 tracking-wide">Global Count</span>
        <span className="text-[13px] font-black text-slate-950 tabular-nums">5,505</span>
      </div>
      <div className="h-4 w-px bg-slate-300 shrink-0" />
      <div className="flex items-center gap-2 px-3 py-1 whitespace-nowrap shrink-0">
        <span className="text-[11px] font-semibold text-slate-600 tracking-wide">Today's Lots</span>
        <span className="text-[13px] font-black text-slate-950 tabular-nums">5</span>
        <div className="flex items-center gap-1.5 ml-1">
          <div className="flex items-center gap-1 bg-emerald-600 text-white px-1.5 py-0.5 rounded-full shadow-sm border border-emerald-700">
            <span className="text-[10px] font-black leading-none">4</span>
            <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" /></svg>
          </div>
          <div className="flex items-center gap-1 bg-amber-600 text-white px-1.5 py-0.5 rounded-full shadow-sm border border-amber-700">
            <span className="text-[10px] font-black leading-none">1</span>
            <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
        </div>
      </div>
    </>
  );
}
