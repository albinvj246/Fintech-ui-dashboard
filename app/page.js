"use client";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import ClassificationCards from "./components/ClassificationCards";
import UpcomingSchedules from "./components/AuctionSchedules"; 
import AuctionRecoveryChart from "./components/AuctionRecoveryChart";
import AuctionDataTable from "./components/AuctionDataTable";
import QuickActions from "./components/QuickActions";
import GoldRateCard from "./components/GoldRateCard";
import GradedAssetsCard from "./components/GradedAssetsCard";

export default function DashboardPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* Sidebar */}
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />

      {/* Main Area */}
      <div
        className="flex-1 flex flex-col h-screen overflow-hidden transition-all duration-300"
        style={{ marginLeft: sidebarCollapsed ? 68 : 220 }}
      >
        <TopBar />

        <main className="flex-1 overflow-y-auto p-4 pr-[18px]">
          <div className="w-full space-y-4">

            {/* 3-Column Base Grid Layout */}
            <div className="grid grid-cols-1 xl:grid-cols-[1fr_240px_370px] gap-4">
              
              {/* ═══ TOP ROW LEFT: Classification (Top) + Upcoming Schedules ═══ */}
              <div className="xl:col-span-1 space-y-4">
                <ClassificationCards />
                <UpcomingSchedules />
              </div>

              {/* ═══ TOP ROW RIGHT: Widened Recovery Chart ═══ */}
              <div className="xl:col-span-2">
                <AuctionRecoveryChart />
              </div>

              {/* ═══ BOTTOM AREA: Main Table (Left/Center) + Sidebar (Right) ═══ */}
              <div className="xl:col-span-2">
                <AuctionDataTable />
              </div>
              
              {/* ═══ RIGHT SIDEBAR — Grouped sections ═══ */}
              <div className="xl:col-span-1 space-y-5">
                {/* Group 1: Live Data & Market Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 px-1">
                    <span className="text-[12px] font-semibold text-slate-400 tracking-wide">Market Data</span>
                    <div className="flex-1 h-px bg-slate-200" />
                  </div>
                  <GoldRateCard />
                </div>

                {/* Group 2: Quick Actions */}
                <div className="space-y-3">
                  <QuickActions />
                  <GradedAssetsCard />
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
