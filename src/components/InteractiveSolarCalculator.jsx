import React, { useState } from 'react';
import {
  Calculator,
  Zap,
  TrendingDown,
  Leaf,
  ShieldCheck,
  ArrowRight,
  Printer,
  BatteryCharging
} from 'lucide-react';

export default function InteractiveSolarCalculator({ onCalculateQuote, isFullPage = false }) {
  // Calculation Modes: 'bill' | 'area' | 'capacity'
  const [calcMode, setCalcMode] = useState('bill');
  const [propertyType, setPropertyType] = useState('residential'); // 'residential' | 'commercial'
  const [hasBattery, setHasBattery] = useState(false);

  // Inputs
  const [monthlyBill, setMonthlyBill] = useState(7500);
  const [roofArea, setRoofArea] = useState(500);
  const [targetKw, setTargetKw] = useState(5);

  // Constants & Sizing formulas (India / Tropical Irradiance Model)
  // Average 1 kW generates approx 4 to 4.3 units (kWh) per day = ~120 to 130 units/month
  const unitsPerKwMonth = 125;
  const sqFtPerKw = 85; // High-efficiency 550W panels
  const panelWattage = 550; // 550W Tier-1 Monocrystalline panels

  // Tariff rates
  const tariffRate = propertyType === 'residential' ? 8.5 : 10.5;

  let calculatedKw = 3;
  if (calcMode === 'bill') {
    const monthlyUnits = monthlyBill / tariffRate;
    calculatedKw = Math.max(1, Math.round((monthlyUnits / unitsPerKwMonth) * 10) / 10);
  } else if (calcMode === 'area') {
    calculatedKw = Math.max(1, Math.round((roofArea / sqFtPerKw) * 10) / 10);
  } else {
    calculatedKw = Math.max(1, targetKw);
  }

  // Generation & Savings
  const monthlyUnitsGenerated = Math.round(calculatedKw * unitsPerKwMonth);
  const annualUnitsGenerated = monthlyUnitsGenerated * 12;

  // Monthly & Annual Savings
  const estimatedMonthlySavings = Math.round(monthlyUnitsGenerated * tariffRate);
  const estimatedAnnualSavings = estimatedMonthlySavings * 12;
  const lifetime25YrSavings = estimatedAnnualSavings * 25;

  // Panels & Area
  const numberOfPanels = Math.ceil((calculatedKw * 1000) / panelWattage);
  const requiredRoofArea = Math.round(calculatedKw * sqFtPerKw);

  // Financial Estimation (Tier-1 EPC benchmark ~ ₹55,000 - ₹62,000 per kW)
  const baseCostPerKw = propertyType === 'residential' ? 58000 : 52000;
  const batteryAddon = hasBattery ? calculatedKw * 22000 : 0;
  const estimatedTotalCost = Math.round(calculatedKw * baseCostPerKw + batteryAddon);

  // Subsidy estimator (PM Surya Ghar benchmark for residential: up to ₹30,000 for 1kW, ₹60,000 for 2kW, ₹78,000 for 3kW+)
  let estimatedSubsidy = 0;
  if (propertyType === 'residential') {
    if (calculatedKw >= 3) {
      estimatedSubsidy = 78000;
    } else if (calculatedKw >= 2) {
      estimatedSubsidy = 60000;
    } else if (calculatedKw >= 1) {
      estimatedSubsidy = 30000;
    }
  }

  const netEffectiveCost = Math.max(0, estimatedTotalCost - estimatedSubsidy);
  const paybackYears = (netEffectiveCost / Math.max(1, estimatedAnnualSavings)).toFixed(1);

  // Environmental Impact
  // 1 kW offsets ~1.3 tonnes CO2 per year
  const annualCo2Offset = (calculatedKw * 1.3).toFixed(1);
  const equivalentTreesPlanted = Math.round(calculatedKw * 58);

  const handleApplyQuote = () => {
    if (onCalculateQuote) {
      onCalculateQuote({
        capacity: `${calculatedKw} kW System (${numberOfPanels} × 550W Panels)`,
        bill: `₹${monthlyBill.toLocaleString('en-IN')}`,
        savings: `₹${estimatedAnnualSavings.toLocaleString('en-IN')}/year`,
        propertyType: propertyType === 'residential' ? 'Residential Rooftop' : 'Commercial Solar',
        hasBattery: hasBattery ? 'With Battery Storage' : 'Grid-Tied (Standard)',
        netCost: `₹${netEffectiveCost.toLocaleString('en-IN')}`,
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`w-full ${isFullPage ? '' : 'max-w-6xl mx-auto'}`}>
      <div className="rounded-3xl bg-white border border-[#55B51F]/25 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        
        {/* Top Header Badge & Mode Toggles */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#55B51F]/10 border border-[#55B51F]/20 text-[#063B18] text-xs font-bold uppercase tracking-wider mb-2">
              <Calculator className="w-3.5 h-3.5 text-[#55B51F]" />
              <span>Solar Sizing & ROI Financial Simulator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#063B18] font-display">
              Calculate Your Solar Potential
            </h3>
            <p className="text-xs sm:text-sm text-[#718078] mt-1">
              Accurate photovoltaic output, financial payback, and roof area mapping.
            </p>
          </div>

          {/* Property Selector Buttons */}
          <div className="flex rounded-2xl bg-[#F7FAF5] p-1.5 border border-[#55B51F]/20 w-fit shrink-0">
            <button
              onClick={() => setPropertyType('residential')}
              className={`px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                propertyType === 'residential'
                  ? 'bg-[#063B18] text-white shadow-md'
                  : 'text-[#718078] hover:text-[#063B18]'
              }`}
            >
              Residential Property
            </button>
            <button
              onClick={() => setPropertyType('commercial')}
              className={`px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                propertyType === 'commercial'
                  ? 'bg-[#063B18] text-white shadow-md'
                  : 'text-[#718078] hover:text-[#063B18]'
              }`}
            >
              Commercial / Industrial
            </button>
          </div>
        </div>

        {/* Calculation Mode Selector Tabs */}
        <div className="pt-6 pb-4">
          <label className="block text-xs font-extrabold uppercase tracking-wider text-[#063B18] mb-3">
            Choose Sizing Approach:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              onClick={() => setCalcMode('bill')}
              className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                calcMode === 'bill'
                  ? 'bg-[#063B18] text-white border-[#063B18] shadow-md'
                  : 'bg-[#F7FAF5] text-[#101A13] border-slate-200/80 hover:border-[#55B51F]/40'
              }`}
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider opacity-80 block">Method 01</span>
                <span className="text-sm font-extrabold">By Monthly Bill (₹)</span>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded font-bold ${calcMode === 'bill' ? 'bg-[#55B51F] text-white' : 'bg-slate-200 text-slate-700'}`}>
                Recommended
              </span>
            </button>

            <button
              onClick={() => setCalcMode('area')}
              className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                calcMode === 'area'
                  ? 'bg-[#063B18] text-white border-[#063B18] shadow-md'
                  : 'bg-[#F7FAF5] text-[#101A13] border-slate-200/80 hover:border-[#55B51F]/40'
              }`}
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider opacity-80 block">Method 02</span>
                <span className="text-sm font-extrabold">By Roof Area (sq.ft)</span>
              </div>
            </button>

            <button
              onClick={() => setCalcMode('capacity')}
              className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                calcMode === 'capacity'
                  ? 'bg-[#063B18] text-white border-[#063B18] shadow-md'
                  : 'bg-[#F7FAF5] text-[#101A13] border-slate-200/80 hover:border-[#55B51F]/40'
              }`}
            >
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider opacity-80 block">Method 03</span>
                <span className="text-sm font-extrabold">By Direct Capacity (kW)</span>
              </div>
            </button>
          </div>
        </div>

        {/* Dynamic Input Controls */}
        <div className="py-6 px-6 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/15 mb-8">
          {calcMode === 'bill' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-extrabold text-[#063B18]">Average Monthly Electricity Expense</span>
                  <span className="text-xs text-[#718078] block">Based on recent power utility bills</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#063B18] font-display">
                  ₹{monthlyBill.toLocaleString('en-IN')}
                </div>
              </div>
              <input
                type="range"
                min="2000"
                max="100000"
                step="500"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#55B51F]"
              />
              <div className="flex justify-between text-[11px] text-[#718078] font-semibold">
                <span>₹2,000 / month</span>
                <span>₹50,000 / month</span>
                <span>₹1,00,000+ / month</span>
              </div>
            </div>
          )}

          {calcMode === 'area' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-extrabold text-[#063B18]">Available Shadow-Free Rooftop Area</span>
                  <span className="text-xs text-[#718078] block">Usable space on flat RCC or metal sheet roof</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#063B18] font-display">
                  {roofArea.toLocaleString('en-IN')} <span className="text-base text-[#55B51F]">sq.ft</span>
                </div>
              </div>
              <input
                type="range"
                min="150"
                max="15000"
                step="50"
                value={roofArea}
                onChange={(e) => setRoofArea(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#55B51F]"
              />
              <div className="flex justify-between text-[11px] text-[#718078] font-semibold">
                <span>150 sq.ft</span>
                <span>5,000 sq.ft</span>
                <span>15,000+ sq.ft</span>
              </div>
            </div>
          )}

          {calcMode === 'capacity' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-sm font-extrabold text-[#063B18]">Target Sized Photovoltaic Plant</span>
                  <span className="text-xs text-[#718078] block">Direct capacity planning</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#063B18] font-display">
                  {targetKw} <span className="text-base text-[#55B51F]">kW</span>
                </div>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                step="0.5"
                value={targetKw}
                onChange={(e) => setTargetKw(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#55B51F]"
              />
              <div className="flex justify-between text-[11px] text-[#718078] font-semibold">
                <span>1 kW</span>
                <span>25 kW</span>
                <span>50 kW+</span>
              </div>
            </div>
          )}

          {/* Battery Storage Add-On Toggle */}
          <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${hasBattery ? 'bg-[#55B51F] text-white' : 'bg-slate-200 text-slate-500'}`}>
                <BatteryCharging className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-[#063B18] block">Include Lithium Battery Storage Backup</span>
                <span className="text-[11px] text-[#718078]">Hybrid inverter system for uninterrupted power during grid outages</span>
              </div>
            </div>
            <button
              onClick={() => setHasBattery(!hasBattery)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                hasBattery ? 'bg-[#55B51F] text-white shadow-sm' : 'bg-slate-200 text-slate-600'
              }`}
            >
              {hasBattery ? 'Enabled' : 'Disabled'}
            </button>
          </div>
        </div>

        {/* Output Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Output Column: System Specifications (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Capacity Card */}
            <div className="p-6 rounded-3xl bg-[#063B18] text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#55B51F]/15 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#55B51F] block mb-1">
                    Recommended Sizing
                  </span>
                  <div className="text-4xl sm:text-5xl font-black font-display text-white">
                    {calculatedKw} <span className="text-xl sm:text-2xl font-bold text-[#55B51F]">kW System</span>
                  </div>
                  <span className="text-xs text-slate-300 mt-1 block">
                    {numberOfPanels} × 550W Tier-1 Monocrystalline Solar Panels
                  </span>
                </div>

                <div className="text-left sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0 border-white/15">
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block">Roof Area Needed</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-[#F5A000]">~{requiredRoofArea} sq.ft</span>
                  <span className="text-[11px] text-slate-300 block">Shadow-free roof</span>
                </div>
              </div>

              {/* Monthly & Annual Harvest */}
              <div className="grid grid-cols-2 gap-4 pt-6 mt-6 border-t border-white/15">
                <div>
                  <span className="text-[10px] text-slate-300 uppercase font-bold block">Monthly Energy Harvest</span>
                  <span className="text-xl font-black text-white">~{monthlyUnitsGenerated} Units (kWh)</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-300 uppercase font-bold block">Annual Energy Harvest</span>
                  <span className="text-xl font-black text-[#55B51F]">~{annualUnitsGenerated.toLocaleString('en-IN')} Units</span>
                </div>
              </div>
            </div>

            {/* Savings & ROI Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/20">
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#55B51F] mb-1">
                  <TrendingDown className="w-3.5 h-3.5 text-[#55B51F]" />
                  <span>Annual Bill Savings</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#063B18] font-display">
                  ₹{estimatedAnnualSavings.toLocaleString('en-IN')}
                </div>
                <span className="text-xs text-[#718078] mt-1 block">
                  ~₹{estimatedMonthlySavings.toLocaleString('en-IN')} saved per month
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/20">
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#F5A000] mb-1">
                  <Zap className="w-3.5 h-3.5 text-[#F5A000]" />
                  <span>25-Year Cumulative Savings</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#063B18] font-display">
                  ₹{lifetime25YrSavings.toLocaleString('en-IN')}
                </div>
                <span className="text-xs text-[#718078] mt-1 block">
                  Locking in low levelized electricity cost
                </span>
              </div>
            </div>

            {/* Ecological Impact Card */}
            <div className="p-5 rounded-2xl bg-white border border-[#55B51F]/20 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#55B51F]/15 text-[#55B51F] flex items-center justify-center shrink-0">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#063B18] block">Annual Carbon Offset</span>
                  <span className="text-sm font-extrabold text-[#063B18]">
                    {annualCo2Offset} Tonnes CO₂ / year • Equivalent to {equivalentTreesPlanted} Trees
                  </span>
                </div>
              </div>
              <span className="hidden sm:inline-block text-[11px] font-bold text-[#55B51F] bg-[#55B51F]/10 px-3 py-1 rounded-full">
                Zero Emissions
              </span>
            </div>

          </div>

          {/* Right Output Column: Financial Payback & Proposal Action (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="p-6 rounded-3xl bg-[#F7FAF5] border border-slate-200/80 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#063B18]">
                  Investment & Subsidy Overview
                </h4>
                <span className="text-xs text-[#55B51F] font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Estimated
                </span>
              </div>

              <div className="space-y-2.5 text-xs sm:text-sm">
                <div className="flex justify-between items-center text-[#718078]">
                  <span>Estimated Total System Value:</span>
                  <span className="font-bold text-[#101A13]">₹{estimatedTotalCost.toLocaleString('en-IN')}</span>
                </div>

                {propertyType === 'residential' && estimatedSubsidy > 0 && (
                  <div className="flex justify-between items-center text-[#55B51F]">
                    <span>Eligible Central Subsidy (PM Surya Ghar):</span>
                    <span className="font-extrabold">- ₹{estimatedSubsidy.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="pt-2 border-t border-slate-200 flex justify-between items-center">
                  <span className="font-extrabold text-[#063B18]">Net Effective Outlay:</span>
                  <span className="text-lg font-black text-[#063B18]">
                    ₹{netEffectiveCost.toLocaleString('en-IN')}*
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs text-[#718078] pt-1">
                  <span>Estimated Payback Period:</span>
                  <span className="font-extrabold text-[#55B51F] text-sm">~{paybackYears} Years</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#55B51F]/20 text-[11px] text-[#718078] leading-relaxed">
                <p>
                  *Pricing is an engineering estimate based on Tier-1 monocrystalline modules and MNRE standards. Actual quotes depend on roof structure, azimuth, and cabling runs.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={handleApplyQuote}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>Request Custom Quote for {calculatedKw} kW</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handlePrint}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-white border border-slate-200 hover:bg-slate-50 text-[#063B18] font-bold text-xs transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save Feasibility Summary</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
