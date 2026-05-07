"use client";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", value: 3200000, recovery: 68 }, // 32 L
  { month: "Feb", value: 4100000, recovery: 72 }, // 41 L
  { month: "Mar", value: 3800000, recovery: 65 }, // 38 L
  { month: "Apr", value: 5000000, recovery: 81 }, // 50 L
  { month: "May", value: 8000000, recovery: 89 }, // 80 L
  { month: "Jun", value: 9500000, recovery: 94 }, // 95 L
];

// Indian Number System Formatter: Standardizing to Lakhs (L) and Crores (Cr)
const formatYAxis = (val) => {
  if (val === 0) return "0";
  if (val >= 10000000) return `${(val / 10000000).toFixed(1)} Cr`;
  if (val >= 100000) return `${(val / 100000).toFixed(0)} L`;
  return val;
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const val = payload[0].value;
    const formattedVal = val >= 10000000 
      ? `₹${(val / 10000000).toFixed(2)} Cr` 
      : `₹${(val / 100000).toFixed(1)} L`;

    return (
      <div className="bg-slate-900/90 backdrop-blur-xl border border-white/20 p-3.5 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] min-w-[130px]">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-semibold text-slate-400 tracking-wide">{label}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_#10b981]" />
        </div>
        <div className="space-y-1">
          <div className="text-[18px] font-black text-white leading-none tracking-tight">
            {formattedVal}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">+{payload[0].payload.recovery}% Growth</span>
          </div>
        </div>
        <div className="mt-2 pt-2 border-t border-white/5">
          <div className="flex items-center justify-between text-[10px] font-medium text-slate-500">
            <span>Market Status</span>
            <span className="text-white font-semibold">Active</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default function AuctionRecoveryChart() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm h-full group">
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-sm shadow-lg shadow-emerald-100">
              📈
            </div>
            <div>
              <h2 className="text-[13px] font-bold text-slate-800 leading-none mb-1">Recovery Performance</h2>
              <p className="text-[11px] font-medium text-slate-500">Values in Lakhs (L)</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[11px] font-medium text-slate-600">H1 2026 Target</span>
          </div>
        </div>
        
        <div className="h-[180px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
              <defs>
                <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.15} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#0d9488" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e1" vertical={false} strokeWidth={1} />
              <XAxis 
                dataKey="month" 
                tick={{ fill: '#334155', fontSize: 11, fontWeight: 600 }} 
                axisLine={false} 
                tickLine={false}
                dy={12}
              />
              <YAxis
                tick={{ fill: '#334155', fontSize: 11, fontWeight: 600 }}
                tickFormatter={formatYAxis}
                axisLine={false}
                tickLine={false}
                dx={-5}
              />
              <Tooltip 
                content={<CustomTooltip />} 
                cursor={{ stroke: '#10b981', strokeWidth: 2, strokeDasharray: '4 4', opacity: 0.5 }} 
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="url(#lineGradient)" 
                strokeWidth={3.5} 
                fillOpacity={1} 
                fill="url(#colorArea)" 
                dot={{ r: 4, fill: '#fff', strokeWidth: 3, stroke: '#10b981' }}
                activeDot={{ r: 6, fill: '#10b981', strokeWidth: 3, stroke: '#fff' }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
