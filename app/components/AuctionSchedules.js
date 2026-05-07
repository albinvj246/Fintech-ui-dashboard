"use client";
import { useState } from "react";

export default function AuctionSchedules() {
  const [activeTab, setActiveTab] = useState("UPCOMING");
  
  const tabs = [
    { id: "UPCOMING", label: "Upcoming", count: null },
    { id: "TODAY", label: "Today", count: 0 },
    { id: "TOMORROW", label: "Tomorrow", count: 0 },
    { id: "THIS WEEK", label: "This Week", count: 0 },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-3 sm:p-4 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        {/* Interactive Pill Filters — scrollable on mobile */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full sm:w-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 sm:px-3.5 py-2 rounded-full text-[11px] sm:text-[12px] font-semibold tracking-wide transition-all duration-200 cursor-pointer flex items-center gap-1.5 sm:gap-2 border whitespace-nowrap shrink-0 ${
                activeTab === tab.id
                  ? "bg-slate-900 border-slate-900 text-white shadow-md shadow-slate-200 scale-105"
                  : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-white hover:border-slate-300 hover:text-slate-900"
              }`}
            >
              {tab.label}
              {tab.count !== null && (
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-semibold ${activeTab === tab.id ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'}`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Calendar/Map Segmented Toggle */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0 self-end sm:self-auto">
          <button className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 bg-white rounded-lg shadow-sm text-[11px] sm:text-[12px] font-semibold text-slate-900 cursor-pointer">
            <span className="text-sm">🗓️</span>
            Calendar
          </button>
          <button className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-slate-500 hover:text-slate-700 text-[11px] sm:text-[12px] font-semibold cursor-pointer transition-colors">
            <span className="text-sm opacity-50">🗺️</span>
            Map
          </button>
        </div>
      </div>
    </div>
  );
}
