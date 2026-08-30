"use client";

import { useState, useMemo } from 'react';
import { ToolMetadata } from '@/data/registry';

export function FinanceToolTemplate({ tool }: { tool: ToolMetadata }) {
  const [monthlyInvest, setMonthlyInvest] = useState<number>(10000);
  const [expectedReturn, setExpectedReturn] = useState<number>(12);
  const [timePeriodYears, setTimePeriodYears] = useState<number>(10);
  const [inflationRate, setInflationRate] = useState<number>(6);
  const [gstRate, setGstRate] = useState<number>(18);
  const [costPrice, setCostPrice] = useState<number>(500);
  const [sellingPrice, setSellingPrice] = useState<number>(750);

  const financeOutput = useMemo(() => {
    const slug = tool.slug;

    // 1. SIP / Mutual Fund / RD Calculator
    if (slug.includes('sip') || slug.includes('mutual-fund') || slug.includes('rd') || slug.includes('investment-return')) {
      const p = monthlyInvest;
      const r = expectedReturn / 12 / 100;
      const n = timePeriodYears * 12;

      let totalWealth = 0;
      if (r === 0) {
        totalWealth = p * n;
      } else {
        totalWealth = p * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
      }

      const totalInvested = p * n;
      const estimatedReturns = Math.max(0, totalWealth - totalInvested);
      const investedPct = totalWealth > 0 ? ((totalInvested / totalWealth) * 100).toFixed(1) : '100';
      const returnsPct = totalWealth > 0 ? ((estimatedReturns / totalWealth) * 100).toFixed(1) : '0';

      return {
        mainLabel: 'Total Expected Corpus',
        mainValue: `₹${Math.round(totalWealth).toLocaleString('en-IN')}`,
        items: [
          { label: 'Total Invested Amount', value: `₹${Math.round(totalInvested).toLocaleString('en-IN')}` },
          { label: 'Estimated Returns', value: `₹${Math.round(estimatedReturns).toLocaleString('en-IN')}` },
        ],
        ratioA: investedPct,
        ratioB: returnsPct,
        labelA: 'Invested',
        labelB: 'Gains',
      };
    }

    // 2. PPF / FD Calculator (Lumpsum compounding)
    if (slug.includes('ppf') || slug.includes('fd') || slug.includes('savings')) {
      const p = monthlyInvest * 12; // annual deposit or lumpsum
      const r = (expectedReturn || 7.1) / 100;
      const t = timePeriodYears;
      const totalWealth = p * Math.pow(1 + r, t);
      const returns = totalWealth - p;

      return {
        mainLabel: 'Maturity Value',
        mainValue: `₹${Math.round(totalWealth).toLocaleString('en-IN')}`,
        items: [
          { label: 'Principal Amount', value: `₹${Math.round(p).toLocaleString('en-IN')}` },
          { label: 'Total Interest Accrued', value: `₹${Math.round(returns).toLocaleString('en-IN')}` },
        ]
      };
    }

    // 3. CAGR Calculator
    if (slug.includes('cagr')) {
      const initial = monthlyInvest;
      const finalVal = monthlyInvest * 2.5;
      const years = timePeriodYears;
      const cagr = (Math.pow(finalVal / initial, 1 / years) - 1) * 100;

      return {
        mainLabel: 'Compound Annual Growth Rate (CAGR)',
        mainValue: `${cagr.toFixed(2)}%`,
        items: [
          { label: 'Initial Investment', value: `₹${initial.toLocaleString('en-IN')}` },
          { label: 'Final Value', value: `₹${finalVal.toLocaleString('en-IN')}` },
          { label: 'Tenure', value: `${years} Years` },
        ]
      };
    }

    // 4. GST Calculator
    if (slug.includes('gst')) {
      const amount = monthlyInvest;
      const rate = gstRate;
      const gstAmount = (amount * rate) / 100;
      const totalAmount = amount + gstAmount;

      return {
        mainLabel: 'Total Price (Incl. GST)',
        mainValue: `₹${totalAmount.toFixed(2)}`,
        items: [
          { label: 'Net Amount', value: `₹${amount.toLocaleString('en-IN')}` },
          { label: `GST (${rate}%)`, value: `₹${gstAmount.toFixed(2)}` },
          { label: 'CGST / SGST split', value: `₹${(gstAmount / 2).toFixed(2)} each` },
        ]
      };
    }

    // 5. Profit Margin & Markup
    if (slug.includes('margin') || slug.includes('markup') || slug.includes('profit') || slug.includes('break-even')) {
      const cp = costPrice;
      const sp = sellingPrice;
      const profit = sp - cp;
      const margin = sp > 0 ? (profit / sp) * 100 : 0;
      const markup = cp > 0 ? (profit / cp) * 100 : 0;

      return {
        mainLabel: 'Gross Profit Margin',
        mainValue: `${margin.toFixed(2)}%`,
        items: [
          { label: 'Gross Profit', value: `₹${profit.toFixed(2)}` },
          { label: 'Markup Percentage', value: `${markup.toFixed(2)}%` },
          { label: 'Cost Price', value: `₹${cp.toFixed(2)}` },
          { label: 'Selling Price', value: `₹${sp.toFixed(2)}` },
        ]
      };
    }

    // Default: Salary to Hourly
    const annualSalary = monthlyInvest * 12;
    const hourly = annualSalary / (52 * 40);
    return {
      mainLabel: 'Equivalent Hourly Rate',
      mainValue: `₹${hourly.toFixed(2)} / hour`,
      items: [
        { label: 'Annual Salary', value: `₹${annualSalary.toLocaleString('en-IN')}` },
        { label: 'Monthly Equivalent', value: `₹${monthlyInvest.toLocaleString('en-IN')}` },
        { label: 'Daily Rate (8 hrs)', value: `₹${(hourly * 8).toFixed(2)}` },
      ]
    };
  }, [tool.slug, monthlyInvest, expectedReturn, timePeriodYears, gstRate, costPrice, sellingPrice]);

  const isSipStyle = tool.slug.includes('sip') || tool.slug.includes('mutual-fund') || tool.slug.includes('investment') || tool.slug.includes('savings');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
      {/* Input Controls */}
      <div className="lg:col-span-5 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 sm:p-8 flex flex-col gap-6 shadow-sm">
        <h3 className="font-headline-sm text-[22px] text-on-surface">Financial Parameters</h3>

        {tool.slug.includes('gst') ? (
          <>
            <div>
              <label className="block font-label-md text-[14px] mb-2">Base Amount (₹)</label>
              <input 
                type="number" 
                value={monthlyInvest} 
                onChange={(e) => setMonthlyInvest(Number(e.target.value))}
                className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md"
              />
            </div>
            <div>
              <label className="block font-label-md text-[14px] mb-2">GST Rate (%)</label>
              <select 
                value={gstRate} 
                onChange={(e) => setGstRate(Number(e.target.value))}
                className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md"
              >
                <option value={5}>5%</option>
                <option value={12}>12%</option>
                <option value={18}>18%</option>
                <option value={28}>28%</option>
              </select>
            </div>
          </>
        ) : tool.slug.includes('margin') || tool.slug.includes('markup') ? (
          <>
            <div>
              <label className="block font-label-md text-[14px] mb-2">Cost Price (₹)</label>
              <input 
                type="number" 
                value={costPrice} 
                onChange={(e) => setCostPrice(Number(e.target.value))}
                className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md"
              />
            </div>
            <div>
              <label className="block font-label-md text-[14px] mb-2">Selling Price (₹)</label>
              <input 
                type="number" 
                value={sellingPrice} 
                onChange={(e) => setSellingPrice(Number(e.target.value))}
                className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md"
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-label-md text-[14px]">
                  {isSipStyle ? 'Monthly Investment (₹)' : 'Investment Amount (₹)'}
                </label>
                <input 
                  type="number" 
                  value={monthlyInvest} 
                  onChange={(e) => setMonthlyInvest(Number(e.target.value))}
                  className="w-28 text-right bg-surface-container-low border border-outline-variant rounded-lg px-2 py-1 text-[14px]"
                />
              </div>
              <input 
                type="range" 
                min={500} 
                max={500000} 
                step={500}
                value={monthlyInvest} 
                onChange={(e) => setMonthlyInvest(Number(e.target.value))}
                className="custom-range"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-label-md text-[14px]">Expected Annual Return (%)</label>
                <input 
                  type="number" 
                  value={expectedReturn} 
                  onChange={(e) => setExpectedReturn(Number(e.target.value))}
                  className="w-20 text-right bg-surface-container-low border border-outline-variant rounded-lg px-2 py-1 text-[14px]"
                />
              </div>
              <input 
                type="range" 
                min={1} 
                max={30} 
                step={0.5}
                value={expectedReturn} 
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="custom-range"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-label-md text-[14px]">Time Period (Years)</label>
                <input 
                  type="number" 
                  value={timePeriodYears} 
                  onChange={(e) => setTimePeriodYears(Number(e.target.value))}
                  className="w-20 text-right bg-surface-container-low border border-outline-variant rounded-lg px-2 py-1 text-[14px]"
                />
              </div>
              <input 
                type="range" 
                min={1} 
                max={40} 
                step={1}
                value={timePeriodYears} 
                onChange={(e) => setTimePeriodYears(Number(e.target.value))}
                className="custom-range"
              />
            </div>
          </>
        )}
      </div>

      {/* Result Display */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        <div className="bg-surface-container-low border border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-sm">
          <span className="font-label-sm text-[12px] uppercase tracking-wider text-on-surface-variant mb-2">
            {financeOutput.mainLabel}
          </span>
          <div className="font-display-lg-mobile text-[38px] md:font-display-lg md:text-[48px] text-primary font-bold mb-6">
            {financeOutput.mainValue}
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
            {financeOutput.items.map((item, idx) => (
              <div key={idx} className="bg-surface-container-lowest border border-outline-variant/80 p-4 rounded-lg text-center">
                <div className="font-label-sm text-[12px] text-on-surface-variant mb-1">{item.label}</div>
                <div className="font-headline-sm text-[18px] font-semibold text-on-surface">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Breakdown bar if available */}
        {financeOutput.ratioA && (
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col items-center shadow-sm">
            <h4 className="font-headline-sm text-[18px] text-on-surface mb-3">Portfolio Ratio</h4>
            <div className="w-full bg-secondary-fixed h-4 rounded-full overflow-hidden flex mb-3">
              <div className="bg-secondary-fixed-variant h-full" style={{ width: `${financeOutput.ratioA}%` }} />
              <div className="bg-primary-container h-full" style={{ width: `${financeOutput.ratioB}%` }} />
            </div>
            <div className="flex justify-between w-full font-label-md text-[14px]">
              <span>{financeOutput.labelA}: <strong>{financeOutput.ratioA}%</strong></span>
              <span>{financeOutput.labelB}: <strong>{financeOutput.ratioB}%</strong></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
