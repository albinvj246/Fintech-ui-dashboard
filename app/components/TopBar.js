"use client";

export default function TopBar({ sidebarCollapsed, onToggleSidebar }) {
  return (
    <header className="h-[70px] bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-40">
      
      {/* Left Group: Title & Subtitle */}
      <div className="flex items-center">
        <div>
          <h1 className="text-[17px] font-black text-slate-950 tracking-tight">Auction Management</h1>
          <p className="text-[12px] text-slate-500 font-semibold tracking-wide">Recovery Dashboard</p>
        </div>
      </div>

      {/* Middle Group: Global Metrics — unified container */}
      <div className="hidden lg:flex items-center bg-slate-100 border border-slate-300 rounded-xl px-2 py-1.5 gap-1.5 shadow-sm">
        <div className="flex items-center gap-2 px-3 py-1">
          <span className="text-[11px] font-semibold text-slate-600 tracking-wide">Gross Outstanding</span>
          <span className="text-[13px] font-black text-slate-950">₹5,723.76 L</span>
        </div>
        <div className="h-4 w-px bg-slate-300" />
        <div className="flex items-center gap-2 px-3 py-1">
          <span className="text-[11px] font-semibold text-slate-600 tracking-wide">Global Count</span>
          <span className="text-[13px] font-black text-slate-950">5,505</span>
        </div>
        <div className="h-4 w-px bg-slate-300" />
        <div className="flex items-center gap-2 px-3 py-1">
          <span className="text-[11px] font-semibold text-slate-600 tracking-wide">Today's Lots</span>
          <span className="text-[13px] font-black text-slate-950">5</span>
          <div className="flex items-center gap-1.5 ml-1">
            <div className="flex items-center gap-1 bg-emerald-600 text-white px-1.5 py-0.5 rounded-full shadow-sm border border-emerald-700">
              <span className="text-[10px] font-black">4</span>
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.5" d="M5 13l4 4L19 7" /></svg>
            </div>
            <div className="flex items-center gap-1 bg-amber-600 text-white px-1.5 py-0.5 rounded-full shadow-sm border border-amber-700">
              <span className="text-[10px] font-black">1</span>
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
          </div>
        </div>
      </div>

      {/* Right Group: Primary CTA & Header Actions */}
      <div className="flex items-center gap-6">
        <button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white rounded-lg px-4 py-2 flex items-center gap-2 shadow-lg shadow-blue-500/10 border border-blue-400/20 transition-all duration-300 group cursor-pointer active:scale-95">
          <div className="w-4 h-4 rounded bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
          </div>
          <span className="text-[12px] font-bold tracking-tight">Create Auction</span>
        </button>

        <div className="h-8 w-px bg-slate-200" />

        <div className="flex items-center gap-4">
          <button className="text-slate-400 hover:text-slate-600 transition cursor-pointer relative">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M15 7a5 5 0 00-10 0c0 5-2 7-2 7h14s-2-2-2-7" /><path d="M8.5 17a1.5 1.5 0 003 0" /></svg>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">3</span>
          </button>
          <div className="flex items-center gap-3 pl-2">
            <div className="flex flex-col items-end hidden sm:flex">
              <span className="text-[12px] font-bold text-slate-900">Admin Account</span>
              <span className="text-[11px] font-semibold text-emerald-600">Verified</span>
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-sm">A</div>
          </div>
        </div>
      </div>
    </header>
  );
}
