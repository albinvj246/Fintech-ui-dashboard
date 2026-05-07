"use client";

const navItems = [
  { label: "Dashboard", icon: DashboardIcon, active: true },
  { label: "Assets", icon: AssetsIcon, active: false },
  { label: "Auctions", icon: AuctionIcon, active: false },
  { label: "Bidders", icon: BiddersIcon, active: false },
  { label: "Invoices", icon: InvoicesIcon, active: false },
  { label: "Portfolio", icon: PortfolioIcon, active: false },
  { label: "Analytics", icon: AnalyticsIcon, active: false },
  { label: "Reports", icon: ReportIcon, active: false },
  { label: "Alerts", icon: AlertsIcon, active: false },
  { label: "Enquiries", icon: EnquiryIcon, active: false },
];

function DashboardIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="7" height="7" rx="1.5" />
      <rect x="11" y="2" width="7" height="7" rx="1.5" />
      <rect x="2" y="11" width="7" height="7" rx="1.5" />
      <rect x="11" y="11" width="7" height="7" rx="1.5" />
    </svg>
  );
}

function AssetsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 18H3a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2z" />
      <path d="M1 9h18" />
    </svg>
  );
}

function AuctionIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2L3 7v9a2 2 0 002 2h10a2 2 0 002-2V7l-7-5z" />
      <path d="M7 18v-6h6v6" />
    </svg>
  );
}

function BiddersIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 18v-2a4 4 0 00-4-4H4a4 4 0 00-4 4v2" />
      <circle cx="8" cy="4" r="4" />
    </svg>
  );
}

function InvoicesIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v14a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2z" />
      <path d="M16 6H4" />
      <path d="M10 10h2" />
      <path d="M10 14h2" />
    </svg>
  );
}

function PortfolioIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0z" />
      <path d="M12 10H8v4" />
    </svg>
  );
}

function AnalyticsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 17V7" />
      <path d="M10 17v-4" />
      <path d="M5 17v-2" />
    </svg>
  );
}

function ReportIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 2h8l4 4v12a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2z" />
      <path d="M12 2v4h4" />
    </svg>
  );
}

function AlertsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 7a5 5 0 00-10 0c0 5-2 7-2 7h14s-2-2-2-7" />
      <path d="M8.5 17a1.5 1.5 0 003 0" />
    </svg>
  );
}

function EnquiryIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="9" r="6" />
      <path d="M20 20l-4.5-4.5" />
    </svg>
  );
}

export default function Sidebar({ collapsed, onToggle }) {
  return (
    <aside className={`fixed top-0 left-0 h-screen bg-[#0F172A] text-white flex flex-col z-50 transition-all duration-300 ${collapsed ? 'w-[68px]' : 'w-[220px]'}`}>
      <div className={`flex items-center ${collapsed ? 'justify-center' : 'justify-between px-4'} h-[60px] border-b border-white/10 flex-shrink-0`}>
        {!collapsed && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0">₹</div>
            <span className="text-[15px] font-bold tracking-wider whitespace-nowrap">INDEL <span className="text-teal-400">MONEY</span></span>
          </div>
        )}
        <button onClick={onToggle} className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer group ${!collapsed ? 'bg-transparent' : 'bg-emerald-500/10'}`}>
          <div className={`flex flex-row items-center justify-center gap-[3px] h-[14px] transition-all duration-500 ${collapsed ? '' : 'rotate-180 scale-110 ml-auto'}`}>
            <span className="block w-[2px] h-full bg-emerald-400 rounded-full" />
            <span className="block w-[2px] h-3/4 bg-emerald-400/70 rounded-full" />
            <span className="block w-[2px] h-1/2 bg-emerald-400/40 rounded-full" />
          </div>
        </button>
      </div>

      <nav className="flex-1 py-4 px-2 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13px] font-bold transition-all duration-200 cursor-pointer ${
                item.active ? 'bg-white/15 text-white shadow-sm' : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className={item.active ? 'text-teal-400' : ''}><Icon /></div>
              {!collapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
