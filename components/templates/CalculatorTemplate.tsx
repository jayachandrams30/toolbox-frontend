"use client";

import { useState, useMemo } from 'react';
import { ToolMetadata } from '@/data/registry';

export function CalculatorTemplate({ tool }: { tool: ToolMetadata }) {
  // Common state variables
  const [num1, setNum1] = useState<number>(1000000); // e.g. Principal / Amount / Value A
  const [num2, setNum2] = useState<number>(8.5);     // e.g. Rate / Percentage / Value B
  const [num3, setNum3] = useState<number>(5);       // e.g. Tenure (years) / Time / Value C
  const [textInput, setTextInput] = useState<string>('85, 90, 78, 92, 88');
  const [date1, setDate1] = useState<string>('2000-01-01');
  const [date2, setDate2] = useState<string>(new Date().toISOString().split('T')[0]);
  const [calcType, setCalcType] = useState<string>('standard');

  const calculation = useMemo(() => {
    const slug = tool.slug;

    // 1. EMI Calculator / Loan / Mortgage
    if (slug.includes('emi') || slug.includes('loan') || slug.includes('mortgage')) {
      const p = Math.max(0, num1);
      const annualRate = Math.max(0, num2);
      const tenureYears = Math.max(1, num3);
      const monthlyRate = annualRate / 12 / 100;
      const totalMonths = tenureYears * 12;

      let monthlyEmi = 0;
      if (monthlyRate === 0) {
        monthlyEmi = p / totalMonths;
      } else {
        monthlyEmi = (p * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
      }

      const totalPayment = monthlyEmi * totalMonths;
      const totalInterest = Math.max(0, totalPayment - p);
      const principalRatio = totalPayment > 0 ? (p / totalPayment) * 100 : 100;
      const interestRatio = totalPayment > 0 ? (totalInterest / totalPayment) * 100 : 0;

      return {
        type: 'emi',
        mainLabel: 'Monthly Payment (EMI)',
        mainValue: `₹${Math.round(monthlyEmi).toLocaleString('en-IN')}`,
        items: [
          { label: 'Principal Amount', value: `₹${Math.round(p).toLocaleString('en-IN')}` },
          { label: 'Total Interest', value: `₹${Math.round(totalInterest).toLocaleString('en-IN')}` },
          { label: 'Total Repayment', value: `₹${Math.round(totalPayment).toLocaleString('en-IN')}` },
        ],
        principalRatio: principalRatio.toFixed(1),
        interestRatio: interestRatio.toFixed(1),
      };
    }

    // 2. Simple Interest
    if (slug.includes('simple-interest')) {
      const p = Math.max(0, num1);
      const r = Math.max(0, num2);
      const t = Math.max(0, num3);
      const interest = (p * r * t) / 100;
      const total = p + interest;
      const principalRatio = total > 0 ? (p / total) * 100 : 100;
      const interestRatio = total > 0 ? (interest / total) * 100 : 0;
      return {
        type: 'interest',
        mainLabel: 'Total Interest Earned',
        mainValue: `₹${Math.round(interest).toLocaleString('en-IN')}`,
        items: [
          { label: 'Principal Amount', value: `₹${Math.round(p).toLocaleString('en-IN')}` },
          { label: 'Interest Earned', value: `₹${Math.round(interest).toLocaleString('en-IN')}` },
          { label: 'Total Amount (Principal + Interest)', value: `₹${Math.round(total).toLocaleString('en-IN')}` },
        ],
        principalRatio: principalRatio.toFixed(1),
        interestRatio: interestRatio.toFixed(1),
      };
    }

    // 3. Compound Interest
    if (slug.includes('compound-interest')) {
      const p = Math.max(0, num1);
      const r = Math.max(0, num2) / 100;
      const t = Math.max(0, num3);
      const n = 12; // monthly compounding
      const total = p * Math.pow(1 + r / n, n * t);
      const interest = Math.max(0, total - p);
      const principalRatio = total > 0 ? (p / total) * 100 : 100;
      const interestRatio = total > 0 ? (interest / total) * 100 : 0;
      return {
        type: 'interest',
        mainLabel: 'Total Maturity Amount',
        mainValue: `₹${Math.round(total).toLocaleString('en-IN')}`,
        items: [
          { label: 'Principal Invested', value: `₹${Math.round(p).toLocaleString('en-IN')}` },
          { label: 'Compound Interest', value: `₹${Math.round(interest).toLocaleString('en-IN')}` },
          { label: 'Total Value', value: `₹${Math.round(total).toLocaleString('en-IN')}` },
        ],
        principalRatio: principalRatio.toFixed(1),
        interestRatio: interestRatio.toFixed(1),
      };
    }

    // 4. Percentage Calculators
    if (slug === 'percentage-calculator') {
      const result = (num1 * num2) / 100;
      return {
        type: 'standard',
        mainLabel: `${num2}% of ${num1}`,
        mainValue: result.toFixed(2),
        items: [
          { label: 'Base Value', value: String(num1) },
          { label: 'Percentage', value: `${num2}%` },
          { label: 'Calculated Value', value: result.toFixed(2) },
        ],
      };
    }
    if (slug.includes('percentage-increase')) {
      const diff = num2 - num1;
      const inc = num1 !== 0 ? (diff / num1) * 100 : 0;
      return {
        type: 'standard',
        mainLabel: 'Percentage Increase',
        mainValue: `${inc.toFixed(2)}%`,
        items: [
          { label: 'Initial Value', value: String(num1) },
          { label: 'Final Value', value: String(num2) },
          { label: 'Absolute Increase', value: (num2 - num1).toFixed(2) },
        ],
      };
    }
    if (slug.includes('percentage-difference')) {
      const avg = (num1 + num2) / 2;
      const diff = avg !== 0 ? (Math.abs(num1 - num2) / avg) * 100 : 0;
      return {
        type: 'standard',
        mainLabel: 'Percentage Difference',
        mainValue: `${diff.toFixed(2)}%`,
        items: [
          { label: 'Value 1', value: String(num1) },
          { label: 'Value 2', value: String(num2) },
          { label: 'Absolute Difference', value: Math.abs(num1 - num2).toFixed(2) },
        ],
      };
    }

    // 5. Discount & Tip
    if (slug.includes('discount')) {
      const discountAmount = (num1 * num2) / 100;
      const finalPrice = num1 - discountAmount;
      return {
        type: 'standard',
        mainLabel: 'Final Price After Discount',
        mainValue: `₹${finalPrice.toFixed(2)}`,
        items: [
          { label: 'Original Price', value: `₹${num1}` },
          { label: 'Discount', value: `${num2}% (₹${discountAmount.toFixed(2)})` },
          { label: 'You Save', value: `₹${discountAmount.toFixed(2)}` },
        ],
      };
    }
    if (slug.includes('tip')) {
      const tipAmount = (num1 * num2) / 100;
      const total = num1 + tipAmount;
      const perPerson = num3 > 0 ? total / num3 : total;
      return {
        type: 'standard',
        mainLabel: 'Total Bill (with Tip)',
        mainValue: `₹${total.toFixed(2)}`,
        items: [
          { label: 'Bill Amount', value: `₹${num1}` },
          { label: 'Tip Amount', value: `₹${tipAmount.toFixed(2)} (${num2}%)` },
          { label: `Per Person (${num3} people)`, value: `₹${perPerson.toFixed(2)}` },
        ],
      };
    }

    // 6. Age Calculator
    if (slug.includes('age-calculator')) {
      const birth = new Date(date1);
      const now = new Date();
      let years = now.getFullYear() - birth.getFullYear();
      let months = now.getMonth() - birth.getMonth();
      let days = now.getDate() - birth.getDate();
      if (days < 0) {
        months--;
        days += 30;
      }
      if (months < 0) {
        years--;
        months += 12;
      }
      const totalDays = Math.floor((now.getTime() - birth.getTime()) / (1000 * 60 * 60 * 24));
      return {
        type: 'standard',
        mainLabel: 'Your Exact Age',
        mainValue: `${years} Years, ${months} Months`,
        items: [
          { label: 'Days Lived', value: `${totalDays.toLocaleString()} Days` },
          { label: 'Approx Hours', value: `${(totalDays * 24).toLocaleString()} Hours` },
        ],
      };
    }

    // 7. BMI Calculator (num1 = weight in kg, num2 = height in cm)
    if (slug.includes('bmi')) {
      const weight = num1 > 0 ? num1 : 70;
      const heightM = num2 > 0 ? num2 / 100 : 1.75;
      const bmi = weight / (heightM * heightM);
      let status = 'Normal weight';
      if (bmi < 18.5) status = 'Underweight';
      else if (bmi >= 25 && bmi < 30) status = 'Overweight';
      else if (bmi >= 30) status = 'Obese';

      return {
        type: 'standard',
        mainLabel: 'Body Mass Index (BMI)',
        mainValue: bmi.toFixed(1),
        items: [
          { label: 'Category', value: status },
          { label: 'Healthy Range', value: '18.5 - 24.9' },
        ],
      };
    }

    // 8. Fuel Cost Calculator
    if (slug.includes('fuel-cost')) {
      const distance = num1; // km
      const mileage = num2 > 0 ? num2 : 15; // km per liter
      const fuelPrice = num3 > 0 ? num3 : 100; // price per liter
      const litersNeeded = distance / mileage;
      const totalCost = litersNeeded * fuelPrice;
      return {
        type: 'standard',
        mainLabel: 'Total Trip Fuel Cost',
        mainValue: `₹${Math.round(totalCost).toLocaleString('en-IN')}`,
        items: [
          { label: 'Fuel Consumed', value: `${litersNeeded.toFixed(2)} Liters` },
          { label: 'Distance', value: `${distance} km` },
          { label: 'Cost per km', value: `₹${(totalCost / distance).toFixed(2)}` },
        ],
      };
    }

    // 9. Average Calculator (from text numbers)
    if (slug.includes('average')) {
      const nums = textInput
        .split(/[,;\s]+/)
        .map(n => parseFloat(n))
        .filter(n => !isNaN(n));
      if (nums.length === 0) {
        return { type: 'standard', mainLabel: 'Mean Average', mainValue: '0', items: [] };
      }
      const sum = nums.reduce((a, b) => a + b, 0);
      const mean = sum / nums.length;
      const sorted = [...nums].sort((a, b) => a - b);
      const median = sorted.length % 2 !== 0 
        ? sorted[Math.floor(sorted.length / 2)] 
        : (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
      return {
        type: 'standard',
        mainLabel: 'Mean Average',
        mainValue: mean.toFixed(2),
        items: [
          { label: 'Median', value: median.toFixed(2) },
          { label: 'Count', value: String(nums.length) },
          { label: 'Sum', value: sum.toFixed(2) },
          { label: 'Min / Max', value: `${sorted[0]} / ${sorted[sorted.length - 1]}` },
        ],
      };
    }

    // Generic fallback calculator
    const result = num1 * (num2 / 100);
    return {
      type: 'standard',
      mainLabel: 'Calculated Result',
      mainValue: result.toFixed(2),
      items: [
        { label: 'Input A', value: String(num1) },
        { label: 'Input B', value: String(num2) },
      ],
    };
  }, [tool.slug, num1, num2, num3, textInput, date1, date2, calcType]);

  const isEmiStyle = tool.slug.includes('emi') || tool.slug.includes('loan') || tool.slug.includes('mortgage');
  const isInterestStyle = tool.slug.includes('interest');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
      {/* Input Controls */}
      <div className="lg:col-span-5 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 sm:p-8 flex flex-col gap-6">
        <h3 className="font-headline-sm text-[22px] text-on-surface">Calculator Inputs</h3>

        {/* Dynamic Controls based on tool */}
        {tool.slug.includes('age') ? (
          <div>
            <label className="block font-label-md text-[14px] text-on-surface mb-2">Date of Birth</label>
            <input 
              type="date" 
              value={date1} 
              onChange={(e) => setDate1(e.target.value)}
              className="w-full bg-surface-container-low border border-outline-variant rounded-lg px-4 py-3 font-body-md text-[16px] text-on-surface focus:outline-none focus:border-on-surface"
            />
          </div>
        ) : tool.slug.includes('average') ? (
          <div>
            <label className="block font-label-md text-[14px] text-on-surface mb-2">Enter Numbers (separated by commas)</label>
            <textarea 
              value={textInput} 
              onChange={(e) => setTextInput(e.target.value)}
              rows={4}
              className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-4 font-body-md text-[16px] text-on-surface focus:outline-none focus:border-on-surface resize-none"
            />
          </div>
        ) : (
          <>
            {/* Input 1 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-label-md text-[14px] text-on-surface">
                  {isEmiStyle ? 'Loan Amount (₹)' : isInterestStyle ? 'Principal Amount (₹)' : tool.slug.includes('bmi') ? 'Weight (kg)' : tool.slug.includes('fuel') ? 'Distance (km)' : 'Value 1'}
                </label>
                <input 
                  type="number" 
                  value={num1} 
                  onChange={(e) => setNum1(Number(e.target.value))}
                  className="w-32 text-right bg-surface-container-low border border-outline-variant rounded-lg px-3 py-1.5 font-body-md text-[15px] text-on-surface focus:outline-none focus:border-on-surface"
                />
              </div>
              <input 
                type="range" 
                min={isEmiStyle ? 100000 : (isInterestStyle ? 5000 : 1)} 
                max={isEmiStyle || isInterestStyle ? 10000000 : 10000} 
                step={isEmiStyle ? 50000 : (isInterestStyle ? 5000 : 1)}
                value={num1} 
                onChange={(e) => setNum1(Number(e.target.value))}
                className="custom-range mt-1"
              />
            </div>

            {/* Input 2 */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="font-label-md text-[14px] text-on-surface">
                  {isEmiStyle || isInterestStyle ? 'Interest Rate (% p.a.)' : tool.slug.includes('bmi') ? 'Height (cm)' : tool.slug.includes('fuel') ? 'Mileage (km/l)' : 'Value 2 / Rate (%)'}
                </label>
                <input 
                  type="number" 
                  value={num2} 
                  onChange={(e) => setNum2(Number(e.target.value))}
                  className="w-24 text-right bg-surface-container-low border border-outline-variant rounded-lg px-3 py-1.5 font-body-md text-[15px] text-on-surface focus:outline-none focus:border-on-surface"
                />
              </div>
              <input 
                type="range" 
                min={tool.slug.includes('bmi') ? 100 : 0.1} 
                max={tool.slug.includes('bmi') ? 220 : (isInterestStyle ? 50 : 30)} 
                step={0.1}
                value={num2} 
                onChange={(e) => setNum2(Number(e.target.value))}
                className="custom-range mt-1"
              />
            </div>

            {/* Input 3 (if applicable) */}
            {(isEmiStyle || tool.slug.includes('fuel') || tool.slug.includes('interest') || tool.slug.includes('tip')) && (
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="font-label-md text-[14px] text-on-surface">
                    {isEmiStyle || isInterestStyle ? 'Time Period (Years)' : tool.slug.includes('fuel') ? 'Fuel Price (₹/L)' : tool.slug.includes('tip') ? 'Split Count' : 'Duration / Time'}
                  </label>
                  <input 
                    type="number" 
                    value={num3} 
                    onChange={(e) => setNum3(Number(e.target.value))}
                    className="w-24 text-right bg-surface-container-low border border-outline-variant rounded-lg px-3 py-1.5 font-body-md text-[15px] text-on-surface focus:outline-none focus:border-on-surface"
                  />
                </div>
                <input 
                  type="range" 
                  min={1} 
                  max={isEmiStyle || isInterestStyle ? 30 : 200} 
                  step={1}
                  value={num3} 
                  onChange={(e) => setNum3(Number(e.target.value))}
                  className="custom-range mt-1"
                />
              </div>
            )}
          </>
        )}
      </div>

      {/* Result Display */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        {/* Main Result Card */}
        <div className="bg-surface-container-low border border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center relative overflow-hidden text-center shadow-sm">
          <span className="font-label-md text-[13px] uppercase tracking-widest text-on-surface-variant mb-2">
            {calculation.mainLabel}
          </span>
          <div className="font-display-lg-mobile text-[38px] md:font-display-lg md:text-[50px] text-primary font-bold">
            {calculation.mainValue}
          </div>

          {/* Breakdown Items */}
          {calculation.items.length > 0 && (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {calculation.items.map((item, idx) => (
                <div key={idx} className="bg-surface-container-lowest border border-outline-variant/80 p-4 rounded-lg text-center">
                  <div className="font-label-sm text-[12px] text-on-surface-variant mb-1">{item.label}</div>
                  <div className="font-headline-sm text-[20px] font-semibold text-on-surface">{item.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Visual Chart for EMI/Loan/Interest */}
        {(calculation.type === 'emi' || calculation.type === 'interest') && calculation.principalRatio && (
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 flex flex-col items-center">
            <h4 className="font-headline-sm text-[20px] text-on-surface mb-4">
              {calculation.type === 'emi' ? 'Payment Breakdown' : 'Principal vs Interest Breakdown'}
            </h4>
            <div className="w-full bg-secondary-fixed h-4 rounded-full overflow-hidden flex mb-4">
              <div 
                className="bg-primary-container h-full transition-all duration-300"
                style={{ width: `${calculation.principalRatio}%` }}
              />
              <div 
                className="bg-secondary-fixed-variant h-full transition-all duration-300"
                style={{ width: `${calculation.interestRatio}%` }}
              />
            </div>
            <div className="flex justify-between w-full font-label-md text-[14px]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary-container inline-block" />
                <span>Principal: <strong>{calculation.principalRatio}%</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-secondary-fixed-variant inline-block" />
                <span>Interest: <strong>{calculation.interestRatio}%</strong></span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
