"use client";

export default function GoldRateCard() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-[13px] font-bold text-slate-800 flex items-center gap-2 mb-0.5">
            <div className="w-6 h-6 rounded-md bg-amber-100 flex items-center justify-center text-amber-800 text-xs shadow-sm border border-amber-200">💰</div>
            Gold Rate (IBJA)
          </div>
          <p className="text-[11px] font-medium text-slate-500 pl-8">Rate per 10 grams</p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          <span className="text-[11px] font-semibold text-emerald-700">Live</span>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-y-4 text-[12px] items-center">
         <div className="col-span-1"></div>
         <div className="text-right text-slate-500 font-medium text-[11px]">3M Avg</div>
         <div className="text-right text-slate-500 font-medium text-[11px]">Today</div>
         
         <div className="text-slate-800 font-semibold">999 Fine Gold</div>
         <div className="text-right font-bold text-slate-900">₹15,806</div>
         <div className="flex justify-end">
           <div className="text-right font-bold text-emerald-700 px-2.5 py-1 bg-emerald-50 rounded-lg w-fit border border-emerald-100">
             ₹15,856 <span className="text-[10px] font-medium opacity-70">/ 10g</span>
           </div>
         </div>

         <div className="text-slate-800 font-semibold pt-2 border-t border-slate-100">22 CT Standard</div>
         <div className="text-right font-bold text-slate-900 pt-2 border-t border-slate-100">₹14,478</div>
         <div className="flex justify-end pt-2 border-t border-slate-100">
           <div className="text-right font-bold text-emerald-700 px-2.5 py-1 bg-emerald-50 rounded-lg w-fit border border-emerald-100">
             ₹14,524 <span className="text-[10px] font-medium opacity-70">/ 10g</span>
           </div>
         </div>
      </div>
    </div>
  );
}
