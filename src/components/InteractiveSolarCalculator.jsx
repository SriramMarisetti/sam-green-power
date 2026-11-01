import React, { useState } from 'react';
import {
  Calculator,
  Zap,
  TrendingDown,
  Leaf,
  ShieldCheck,
  ArrowRight,
  Printer,
  Sparkles,
  MapPin,
  Clock,
  Compass,
  Coins
} from 'lucide-react';

export default function InteractiveSolarCalculator({ onCalculateQuote, isFullPage = false }) {
  // State: AP vs Telangana (Page 2 Requirement)
  const [selectedState, setSelectedState] = useState('AP'); // 'AP' | 'Telangana'
  
  // Calculation Modes: 'bill' | 'area' | 'capacity'
  const [calcMode, setCalcMode] = useState('bill');
  const [propertyType, setPropertyType] = useState('residential'); // 'residential' | 'commercial'

  // Inputs: Monthly bill slider min 0, max 10000 (Page 2 Requirement)
  const [monthlyBill, setMonthlyBill] = useState(2500);
  const [roofArea, setRoofArea] = useState(300);
  const [targetKw, setTargetKw] = useState(3);

  // Exact 9 Bill Brackets from Client Document (Page 2)
  const billBrackets = [
    { label: '0 - 500', value: 400 },
    { label: '500 - 1000', value: 800 },
    { label: '1000 - 1500', value: 1250 },
    { label: '1500 - 2000', value: 1750 },
    { label: '2000 - 2500', value: 2250 },
    { label: '2500 - 3000', value: 2750 },
    { label: '3000 - 3500', value: 3250 },
    { label: '3500 - 5000', value: 4250 },
    { label: 'More than 5000', value: 7500 },
  ];

  // Constants & Sizing formulas (AP & Telangana Irradiance Model: ~4.2 - 4.5 kWh/m²/day)
  // Average 1 kW generates ~125 units (kWh) per month
  const unitsPerKwMonth = 125;
  const sqFtPerKw = 80; // High-efficiency 550W+ Monocrystalline bifacial panels
  const panelWattage = 550;

  // Grid Tariff: AP average ~₹7.8/unit, Telangana ~₹8.2/unit for domestic slabs
  const tariffRate = propertyType === 'residential' 
    ? (selectedState === 'AP' ? 8.0 : 8.5)
    : 10.5;

  let calculatedKw = 3;
  if (calcMode === 'bill') {
    const monthlyUnits = monthlyBill / tariffRate;
    calculatedKw = Math.max(1, Math.round((monthlyUnits / unitsPerKwMonth) * 10) / 10);
  } else if (calcMode === 'area') {
    calculatedKw = Math.max(1, Math.round((roofArea / sqFtPerKw) * 10) / 10);
  } else {
    calculatedKw = Math.max(1, targetKw);
  }

  // Generation & Savings Calculations
  const monthlyUnitsGenerated = Math.round(calculatedKw * unitsPerKwMonth);
  const annualUnitsGenerated = monthlyUnitsGenerated * 12;

  // Solar Savings (Monthly, Yearly, 30-Year Lifetime Earnings - Page 2)
  const estimatedMonthlySavings = Math.round(monthlyUnitsGenerated * tariffRate);
  const estimatedAnnualSavings = estimatedMonthlySavings * 12;
  const lifetime30YrSavings = estimatedAnnualSavings * 30; // 30-year lifetime earnings requested by client!

  // Panels & Area
  const numberOfPanels = Math.ceil((calculatedKw * 1000) / panelWattage);
  const requiredRoofArea = Math.round(calculatedKw * sqFtPerKw);

  // Financial Estimation (EPC benchmark ~ ₹58,000 / kW)
  const estimatedTotalCost = Math.round(calculatedKw * (propertyType === 'residential' ? 58000 : 52000));

  // Scheme Subsidy & SAM Discount (Page 2 Requirement: ₹78,000/- Subsidy & ₹22,000/- SAM Discount)
  let schemeSubsidy = 0;
  let samDiscount = 22000; // SAM Green Power Exclusive Offer Amount

  if (propertyType === 'residential') {
    if (calculatedKw >= 3) {
      schemeSubsidy = 78000;
    } else if (calculatedKw >= 2) {
      schemeSubsidy = 60000;
    } else {
      schemeSubsidy = 30000;
    }
  } else {
    schemeSubsidy = 0; // Commercial receives 40% accelerated depreciation instead of PM Surya Ghar
  }

  const totalBenefit = schemeSubsidy + samDiscount;
  const netEffectiveCost = Math.max(0, estimatedTotalCost - totalBenefit);
  const paybackYears = (netEffectiveCost / Math.max(1, estimatedAnnualSavings)).toFixed(1);

  // Environmental Impact
  const annualCo2Offset = (calculatedKw * 1.3).toFixed(1);
  const equivalentTreesPlanted = Math.round(calculatedKw * 58);

  const handleApplyQuote = () => {
    if (onCalculateQuote) {
      onCalculateQuote({
        state: selectedState,
        capacity: `${calculatedKw} kW System (${numberOfPanels} × 550W Panels)`,
        bill: `₹${monthlyBill.toLocaleString('en-IN')}`,
        savings: `₹${estimatedAnnualSavings.toLocaleString('en-IN')}/year (30-Year: ₹${lifetime30YrSavings.toLocaleString('en-IN')})`,
        propertyType: propertyType === 'residential' ? 'Residential Rooftop' : 'Commercial Solar',
        subsidy: `₹${schemeSubsidy.toLocaleString('en-IN')}`,
        samDiscount: `₹${samDiscount.toLocaleString('en-IN')}`,
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
        
        {/* Top Header Badge & State / Property Toggles */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#55B51F]/10 border border-[#55B51F]/20 text-[#063B18] text-xs font-bold uppercase tracking-wider mb-2">
              <Calculator className="w-3.5 h-3.5 text-[#55B51F]" />
              <span>Page 2 • SAM GREEN Solar Calculator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#063B18] font-display">
              Solar Savings & Capacity Calculator
            </h3>
            <p className="text-xs sm:text-sm text-[#718078] mt-1">
              Know your system size, check roof space, and forecast 30-year earnings for AP & Telangana.
            </p>
          </div>

          {/* State & Property Type Selectors */}
          <div className="flex flex-wrap items-center gap-3">
            {/* State Selector: AP vs Telangana */}
            <div className="flex rounded-2xl bg-[#F7FAF5] p-1.5 border border-[#55B51F]/30 shrink-0">
              <button
                type="button"
                onClick={() => setSelectedState('AP')}
                className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedState === 'AP'
                    ? 'bg-[#55B51F] text-white shadow-sm'
                    : 'text-[#718078] hover:text-[#063B18]'
                }`}
              >
                <MapPin className="w-3 h-3" />
                <span>Andhra Pradesh (AP)</span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedState('Telangana')}
                className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedState === 'Telangana'
                    ? 'bg-[#55B51F] text-white shadow-sm'
                    : 'text-[#718078] hover:text-[#063B18]'
                }`}
              >
                <MapPin className="w-3 h-3" />
                <span>Telangana</span>
              </button>
            </div>

            {/* Property Selector Buttons */}
            <div className="flex rounded-2xl bg-[#F7FAF5] p-1.5 border border-slate-200 shrink-0">
              <button
                type="button"
                onClick={() => setPropertyType('residential')}
                className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  propertyType === 'residential'
                    ? 'bg-[#063B18] text-white shadow-sm'
                    : 'text-[#718078] hover:text-[#063B18]'
                }`}
              >
                Residential
              </button>
              <button
                type="button"
                onClick={() => setPropertyType('commercial')}
                className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  propertyType === 'commercial'
                    ? 'bg-[#063B18] text-white shadow-sm'
                    : 'text-[#718078] hover:text-[#063B18]'
                }`}
              >
                Commercial
              </button>
            </div>
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
                <span className="text-sm font-extrabold">By Monthly Bill (₹ 0 - 10,000)</span>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded font-bold ${calcMode === 'bill' ? 'bg-[#55B51F] text-white' : 'bg-slate-200 text-slate-700'}`}>
                Client Standard
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

        {/* Dynamic Input Controls (Page 2: 0 - 10,000 Range & 9 Exact Brackets) */}
        <div className="py-6 px-6 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/15 mb-8">
          {calcMode === 'bill' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-sm font-extrabold text-[#063B18]">
                    Monthly Electricity Bill Range: [₹0 - ₹10,000]
                  </span>
                  <span className="text-xs text-[#718078] block">
                    Utility in {selectedState === 'AP' ? 'Andhra Pradesh (APEPDCL / APSPDCL / APCPDCL)' : 'Telangana (TSSPDCL / TSNPDCL)'}
                  </span>
                </div>
                <div className="text-3xl font-black text-[#063B18] font-display">
                  ₹{monthlyBill.toLocaleString('en-IN')}
                </div>
              </div>

              {/* Slider 0 to 10,000 */}
              <input
                type="range"
                min="0"
                max="10000"
                step="250"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#55B51F]"
              />
              <div className="flex justify-between text-[11px] text-[#718078] font-semibold">
                <span>₹0 / month</span>
                <span>₹5,000 / month</span>
                <span>₹10,000 / month</span>
              </div>

              {/* Quick Select Buttons matching Client's Exact 9 Bill Brackets */}
              <div className="pt-2">
                <span className="text-[11px] font-bold text-[#063B18] uppercase tracking-wider block mb-2">
                  Select Point 2 Monthly Bill Brackets:
                </span>
                <div className="flex flex-wrap gap-2">
                  {billBrackets.map((bracket) => (
                    <button
                      key={bracket.label}
                      type="button"
                      onClick={() => setMonthlyBill(bracket.value)}
                      className={`text-xs font-bold px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                        monthlyBill === bracket.value
                          ? 'bg-[#063B18] text-white border-[#063B18] shadow-xs'
                          : 'bg-white text-[#718078] border-slate-200 hover:border-[#55B51F] hover:text-[#063B18]'
                      }`}
                    >
                      ₹ {bracket.label}
                    </button>
                  ))}
                </div>
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
                <div className="text-3xl font-black text-[#063B18] font-display">
                  {roofArea.toLocaleString('en-IN')} <span className="text-base text-[#55B51F]">sq.ft</span>
                </div>
              </div>
              <input
                type="range"
                min="80"
                max="5000"
                step="20"
                value={roofArea}
                onChange={(e) => setRoofArea(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#55B51F]"
              />
              <div className="flex justify-between text-[11px] text-[#718078] font-semibold">
                <span>80 sq.ft (1 kW)</span>
                <span>2,500 sq.ft</span>
                <span>5,000 sq.ft</span>
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
                <div className="text-3xl font-black text-[#063B18] font-display">
                  {targetKw} <span className="text-base text-[#55B51F]">kW</span>
                </div>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                step="0.5"
                value={targetKw}
                onChange={(e) => setTargetKw(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#55B51F]"
              />
              <div className="flex justify-between text-[11px] text-[#718078] font-semibold">
                <span>1 kW</span>
                <span>12 kW</span>
                <span>25 kW+</span>
              </div>
            </div>
          )}
        </div>

        {/* EXACT OUTPUTS REQUIRED BY POINT (2) & PAGE 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sizing, Area & 30-Year Solar Savings */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Capacity & Area Output Card (Client: Area, System Size) */}
            <div className="p-6 rounded-3xl bg-[#063B18] text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#55B51F]/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F5A000]/15 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#55B51F] block mb-1">
                    Point 2 • System Size
                  </span>
                  <div className="text-4xl sm:text-5xl font-black font-display text-white">
                    {calculatedKw} <span className="text-xl sm:text-2xl font-bold text-[#55B51F]">kW Plant</span>
                  </div>
                  <span className="text-xs text-slate-300 mt-1 block">
                    {numberOfPanels} × 550W Tier-1 Monocrystalline Modules
                  </span>
                </div>

                <div className="text-left sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0 border-white/15">
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider block">
                    Point 2 • Required Area
                  </span>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#F5A000]">
                    ~{requiredRoofArea} <span className="text-base text-white">sq.ft</span>
                  </span>
                  <span className="text-[11px] text-slate-300 block">Shadow-free roof space</span>
                </div>
              </div>

              {/* Monthly & Annual Generation Harvest */}
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

            {/* SOLAR SAVINGS GRID: Monthly, Yearly, 30-Year Lifetime Earnings (Client Requirement Page 2) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              
              {/* Monthly Savings */}
              <div className="p-4 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/20">
                <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#55B51F] mb-1">
                  <TrendingDown className="w-3.5 h-3.5" />
                  <span>Monthly Savings</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#063B18]">
                  ₹{estimatedMonthlySavings.toLocaleString('en-IN')}
                </div>
                <span className="text-[11px] text-[#718078] mt-0.5 block">Per billing cycle</span>
              </div>

              {/* Yearly Savings */}
              <div className="p-4 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/20">
                <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#063B18] mb-1">
                  <Coins className="w-3.5 h-3.5 text-[#55B51F]" />
                  <span>Yearly Savings</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#063B18]">
                  ₹{estimatedAnnualSavings.toLocaleString('en-IN')}
                </div>
                <span className="text-[11px] text-[#718078] mt-0.5 block">Every 12 months</span>
              </div>

              {/* 30-Year Lifetime Earnings */}
              <div className="p-4 rounded-2xl bg-[#063B18] text-white border border-[#55B51F]/30 shadow-md">
                <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#F5A000] mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#F5A000]" />
                  <span>30-Year Earnings</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-[#55B51F]">
                  ₹{lifetime30YrSavings.toLocaleString('en-IN')}
                </div>
                <span className="text-[11px] text-slate-300 mt-0.5 block">Lifetime savings</span>
              </div>

            </div>

            {/* Environmental Impact Card (Client Requirement: See Environment Impact) */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#55B51F]/20 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-[#55B51F]/15 text-[#55B51F] flex items-center justify-center shrink-0">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#063B18] block">Ecological Impact</span>
                  <span className="text-sm font-extrabold text-[#063B18]">
                    {annualCo2Offset} Tonnes CO₂ Offset / year • Equal to {equivalentTreesPlanted} Trees
                  </span>
                </div>
              </div>
              <span className="hidden sm:inline-block text-[11px] font-bold text-[#55B51F] bg-[#55B51F]/10 px-3 py-1 rounded-full">
                Clean Earth
              </span>
            </div>

          </div>

          {/* Right Column: Highlighted Subsidy (₹78,000) & SAM Discount (₹22,000) */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="p-6 rounded-3xl bg-[#F7FAF5] border-2 border-[#55B51F]/30 space-y-4 shadow-md">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-[#063B18]">
                  Point 2 • Subsidy & Offer
                </h4>
                <span className="text-xs text-[#55B51F] font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Verified Govt Rates
                </span>
              </div>

              {/* Highlighted Cost Breakdown Cards */}
              <div className="space-y-2.5">
                
                {/* Total System Value */}
                <div className="flex justify-between items-center text-xs text-[#718078] py-1 border-b border-slate-200">
                  <span>Standard EPC System Value:</span>
                  <span className="font-bold text-[#101A13]">₹{estimatedTotalCost.toLocaleString('en-IN')}</span>
                </div>

                {/* Scheme Subsidy: ₹78,000/- (Client Requirement) */}
                <div className="p-3 rounded-xl bg-white border border-[#55B51F]/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold text-[#063B18] uppercase tracking-wider block">
                      Scheme Subsidy (PM Surya Ghar)
                    </span>
                    <span className="text-[11px] text-[#718078]">Direct DBT to bank account</span>
                  </div>
                  <span className="text-xl font-black text-[#55B51F]">
                    - ₹{schemeSubsidy.toLocaleString('en-IN')}/-
                  </span>
                </div>

                {/* SAM Discount: ₹22,000/- (Client Requirement) */}
                <div className="p-3 rounded-xl bg-white border border-[#F5A000]/40 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold text-[#063B18] uppercase tracking-wider block">
                      SAM Discount / Offer Amount
                    </span>
                    <span className="text-[11px] text-[#718078]">Exclusive company rebate</span>
                  </div>
                  <span className="text-xl font-black text-[#F5A000]">
                    - ₹{samDiscount.toLocaleString('en-IN')}/-
                  </span>
                </div>

                {/* Total Benefit: ₹1,00,000 */}
                <div className="p-3.5 rounded-xl bg-[#063B18] text-white flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-200">Total Benefits Deducted:</span>
                  <span className="text-lg font-black text-[#55B51F]">
                    ₹{totalBenefit.toLocaleString('en-IN')} Saved!
                  </span>
                </div>

                {/* Net Cost */}
                <div className="pt-2 flex justify-between items-center text-sm font-extrabold text-[#063B18]">
                  <span>Your Net Outlay:</span>
                  <span className="text-2xl font-black text-[#063B18]">
                    ₹{netEffectiveCost.toLocaleString('en-IN')}*
                  </span>
                </div>

                <div className="flex justify-between items-center text-xs text-[#718078] pt-1">
                  <span>Payback Period:</span>
                  <span className="font-extrabold text-[#55B51F] text-sm">~{paybackYears} Years</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-3">
                <button
                  onClick={handleApplyQuote}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#55B51F] hover:bg-[#469A18] text-white font-extrabold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <span>Book Free Consultation for {calculatedKw} kW</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={handlePrint}
                  className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-white border border-slate-200 hover:bg-slate-50 text-[#063B18] font-bold text-xs transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Feasibility Report</span>
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* SECTION: "Why we need to use SAM GREEN Solar calculator" (Exact Heading & 4 Points from Page 2 of Client Notes) */}
        <div className="mt-12 pt-10 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#55B51F] block">
              Transparent Engineering Assessment
            </span>
            <h4 className="text-2xl sm:text-3xl font-black text-[#063B18] font-display mt-1">
              Why We Need to Use SAM GREEN Solar Calculator
            </h4>
            <p className="text-xs sm:text-sm text-[#718078] mt-1.5">
              Four vital insights every property owner in Andhra Pradesh and Telangana needs before investing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* 1. Know your System Size */}
            <div className="p-5 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/20 hover:border-[#55B51F] transition-all hover:shadow-md space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#063B18] text-[#55B51F] flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h5 className="font-extrabold text-base text-[#063B18]">
                1. Know Your System Size
              </h5>
              <p className="text-xs text-[#718078] leading-relaxed">
                Matches your historical AP/Telangana electricity bills with precision kilowatt capacity to ensure 100% zero-bill offset without overpaying for excess panels.
              </p>
            </div>

            {/* 2. See 30 year earnings */}
            <div className="p-5 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/20 hover:border-[#55B51F] transition-all hover:shadow-md space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#55B51F] text-white flex items-center justify-center">
                <Coins className="w-5 h-5" />
              </div>
              <h5 className="font-extrabold text-base text-[#063B18]">
                2. See 30 Year Earnings
              </h5>
              <p className="text-xs text-[#718078] leading-relaxed">
                Calculates your compounding lifetime monetary yield across three full decades, safeguarding your family against escalating utility tariff hikes.
              </p>
            </div>

            {/* 3. Check roof space */}
            <div className="p-5 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/20 hover:border-[#55B51F] transition-all hover:shadow-md space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#063B18] text-[#F5A000] flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h5 className="font-extrabold text-base text-[#063B18]">
                3. Check Roof Space
              </h5>
              <p className="text-xs text-[#718078] leading-relaxed">
                Determines the exact shadow-free square footage required on RCC flat roofs or industrial sheds using Tier-1 550W+ compact layout engineering.
              </p>
            </div>

            {/* 4. See Environment Impact */}
            <div className="p-5 rounded-2xl bg-[#F7FAF5] border border-[#55B51F]/20 hover:border-[#55B51F] transition-all hover:shadow-md space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-[#55B51F] text-[#063B18] flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <h5 className="font-extrabold text-base text-[#063B18]">
                4. See Environment Impact
              </h5>
              <p className="text-xs text-[#718078] leading-relaxed">
                Quantifies your direct carbon emissions offset in metric tonnes of CO₂ and translates your clean energy generation into equivalent trees planted.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}