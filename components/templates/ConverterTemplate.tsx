"use client";

import { useState, useMemo } from 'react';
import { ToolMetadata } from '@/data/registry';

// Conversion tables
const UNIT_DEFINITIONS: Record<string, { label: string; units: { id: string; name: string; toBase: (v: number) => number; fromBase: (v: number) => number }[] }> = {
  length: {
    label: 'Length',
    units: [
      { id: 'm', name: 'Meters (m)', toBase: v => v, fromBase: v => v },
      { id: 'km', name: 'Kilometers (km)', toBase: v => v * 1000, fromBase: v => v / 1000 },
      { id: 'cm', name: 'Centimeters (cm)', toBase: v => v * 0.01, fromBase: v => v / 0.01 },
      { id: 'mm', name: 'Millimeters (mm)', toBase: v => v * 0.001, fromBase: v => v / 0.001 },
      { id: 'mi', name: 'Miles (mi)', toBase: v => v * 1609.344, fromBase: v => v / 1609.344 },
      { id: 'yd', name: 'Yards (yd)', toBase: v => v * 0.9144, fromBase: v => v / 0.9144 },
      { id: 'ft', name: 'Feet (ft)', toBase: v => v * 0.3048, fromBase: v => v / 0.3048 },
      { id: 'in', name: 'Inches (in)', toBase: v => v * 0.0254, fromBase: v => v / 0.0254 },
    ]
  },
  weight: {
    label: 'Weight',
    units: [
      { id: 'kg', name: 'Kilograms (kg)', toBase: v => v, fromBase: v => v },
      { id: 'g', name: 'Grams (g)', toBase: v => v * 0.001, fromBase: v => v / 0.001 },
      { id: 'mg', name: 'Milligrams (mg)', toBase: v => v * 1e-6, fromBase: v => v / 1e-6 },
      { id: 'lb', name: 'Pounds (lb)', toBase: v => v * 0.45359237, fromBase: v => v / 0.45359237 },
      { id: 'oz', name: 'Ounces (oz)', toBase: v => v * 0.02834952, fromBase: v => v / 0.02834952 },
      { id: 't', name: 'Metric Tons (t)', toBase: v => v * 1000, fromBase: v => v / 1000 },
    ]
  },
  temperature: {
    label: 'Temperature',
    units: [
      { id: 'c', name: 'Celsius (°C)', toBase: v => v, fromBase: v => v },
      { id: 'f', name: 'Fahrenheit (°F)', toBase: v => (v - 32) * (5 / 9), fromBase: v => v * (9 / 5) + 32 },
      { id: 'k', name: 'Kelvin (K)', toBase: v => v - 273.15, fromBase: v => v + 273.15 },
    ]
  },
  datastorage: {
    label: 'Data Storage',
    units: [
      { id: 'b', name: 'Bytes (B)', toBase: v => v, fromBase: v => v },
      { id: 'kb', name: 'Kilobytes (KB)', toBase: v => v * 1024, fromBase: v => v / 1024 },
      { id: 'mb', name: 'Megabytes (MB)', toBase: v => v * Math.pow(1024, 2), fromBase: v => v / Math.pow(1024, 2) },
      { id: 'gb', name: 'Gigabytes (GB)', toBase: v => v * Math.pow(1024, 3), fromBase: v => v / Math.pow(1024, 3) },
      { id: 'tb', name: 'Terabytes (TB)', toBase: v => v * Math.pow(1024, 4), fromBase: v => v / Math.pow(1024, 4) },
    ]
  },
  speed: {
    label: 'Speed',
    units: [
      { id: 'kmh', name: 'Kilometers per hour (km/h)', toBase: v => v, fromBase: v => v },
      { id: 'mph', name: 'Miles per hour (mph)', toBase: v => v * 1.60934, fromBase: v => v / 1.60934 },
      { id: 'ms', name: 'Meters per second (m/s)', toBase: v => v * 3.6, fromBase: v => v / 3.6 },
      { id: 'knot', name: 'Knots', toBase: v => v * 1.852, fromBase: v => v / 1.852 },
    ]
  },
  currency: {
    label: 'Currency',
    units: [
      { id: 'usd', name: 'USD - US Dollar', toBase: v => v, fromBase: v => v },
      { id: 'eur', name: 'EUR - Euro', toBase: v => v * 1.08, fromBase: v => v / 1.08 },
      { id: 'gbp', name: 'GBP - British Pound', toBase: v => v * 1.28, fromBase: v => v / 1.28 },
      { id: 'inr', name: 'INR - Indian Rupee', toBase: v => v * 0.012, fromBase: v => v / 0.012 },
      { id: 'jpy', name: 'JPY - Japanese Yen', toBase: v => v * 0.0065, fromBase: v => v / 0.0065 },
      { id: 'cad', name: 'CAD - Canadian Dollar', toBase: v => v * 0.74, fromBase: v => v / 0.74 },
    ]
  }
};

export function ConverterTemplate({ tool }: { tool: ToolMetadata }) {
  const categoryKey = useMemo(() => {
    const slug = tool.slug;
    if (slug.includes('weight')) return 'weight';
    if (slug.includes('temperature')) return 'temperature';
    if (slug.includes('storage') || slug.includes('file-size')) return 'datastorage';
    if (slug.includes('speed')) return 'speed';
    if (slug.includes('currency')) return 'currency';
    return 'length';
  }, [tool.slug]);

  const definition = UNIT_DEFINITIONS[categoryKey] || UNIT_DEFINITIONS.length;

  const [fromUnit, setFromUnit] = useState<string>(definition.units[0].id);
  const [toUnit, setToUnit] = useState<string>(definition.units[1]?.id || definition.units[0].id);
  const [inputValue, setInputValue] = useState<number>(100);
  const [copied, setCopied] = useState<boolean>(false);

  // Roman numeral & Base converter logic
  const isRoman = tool.slug.includes('roman');
  const isBase = tool.slug.includes('binary') || tool.slug.includes('hex') || tool.slug.includes('base');
  const [rawText, setRawText] = useState<string>('42');

  const convertedResult = useMemo(() => {
    if (isRoman) {
      const num = parseInt(rawText, 10);
      if (!isNaN(num) && num > 0 && num < 4000) {
        const romanMap: [number, string][] = [
          [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
          [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
          [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
        ];
        let n = num;
        let res = '';
        for (const [val, sym] of romanMap) {
          while (n >= val) {
            res += sym;
            n -= val;
          }
        }
        return res;
      }
      return 'Invalid or > 3999';
    }

    if (isBase) {
      if (tool.slug.includes('binary-to-decimal')) {
        const d = parseInt(rawText, 2);
        return isNaN(d) ? 'Invalid Binary' : String(d);
      }
      if (tool.slug.includes('decimal-to-binary')) {
        const d = parseInt(rawText, 10);
        return isNaN(d) ? 'Invalid Decimal' : d.toString(2);
      }
      if (tool.slug.includes('hexadecimal')) {
        const d = parseInt(rawText, 10);
        return isNaN(d) ? 'Invalid' : d.toString(16).toUpperCase();
      }
    }

    const uFrom = definition.units.find(u => u.id === fromUnit) || definition.units[0];
    const uTo = definition.units.find(u => u.id === toUnit) || definition.units[1];

    const baseVal = uFrom.toBase(inputValue);
    const result = uTo.fromBase(baseVal);
    return Number(result.toFixed(6)).toString();
  }, [isRoman, isBase, rawText, tool.slug, definition, fromUnit, toUnit, inputValue]);

  const handleSwap = () => {
    const temp = fromUnit;
    setFromUnit(toUnit);
    setToUnit(temp);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(String(convertedResult));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-8 max-w-4xl mx-auto shadow-sm">
      {isRoman || isBase ? (
        <div className="flex flex-col gap-6">
          <div>
            <label className="block font-label-md text-[14px] text-on-surface mb-2">Input Value</label>
            <input 
              type="text" 
              value={rawText} 
              onChange={(e) => setRawText(e.target.value)}
              className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-4 font-body-lg text-[18px] text-on-surface focus:outline-none focus:border-on-surface"
            />
          </div>
          <div className="bg-surface-container-low border border-outline-variant rounded-xl p-8 text-center relative">
            <span className="font-label-sm text-[12px] uppercase tracking-wider text-on-surface-variant mb-2 block">Converted Output</span>
            <div className="font-display-lg text-[36px] text-primary font-bold">{convertedResult}</div>
            <button 
              onClick={copyToClipboard}
              className="mt-4 inline-flex items-center gap-1 font-label-md text-[14px] text-secondary hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">content_copy</span>
              {copied ? 'Copied!' : 'Copy Result'}
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center">
            {/* From Input */}
            <div className="md:col-span-5 flex flex-col gap-3">
              <label className="font-label-md text-[14px] text-on-surface">From</label>
              <input 
                type="number" 
                value={inputValue} 
                onChange={(e) => setInputValue(Number(e.target.value))}
                className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-4 font-body-lg text-[20px] text-on-surface focus:outline-none focus:border-on-surface"
              />
              <select 
                value={fromUnit} 
                onChange={(e) => setFromUnit(e.target.value)}
                className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md text-[15px] text-on-surface focus:outline-none"
              >
                {definition.units.map(u => (
                  <option key={u.id} value={u.id}>{u.name}</option>
                ))}
              </select>
            </div>

            {/* Swap button */}
            <div className="md:col-span-1 flex justify-center pt-6">
              <button 
                onClick={handleSwap}
                className="w-12 h-12 rounded-full border border-outline-variant bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface hover:text-primary transition-colors"
                title="Swap units"
              >
                <span className="material-symbols-outlined text-[20px]">swap_horiz</span>
              </button>
            </div>

            {/* To Output */}
            <div className="md:col-span-5 flex flex-col gap-3">
              <label className="font-label-md text-[14px] text-on-surface">To (Result)</label>
              <div className="w-full bg-surface-container-high/40 border border-outline-variant rounded-lg p-4 font-body-lg text-[20px] text-primary font-semibold truncate flex items-center justify-between">
                <span>{convertedResult}</span>
                <button onClick={copyToClipboard} className="text-secondary hover:text-primary" title="Copy">
                  <span className="material-symbols-outlined text-[18px]">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                </button>
              </div>
              <select 
                value={toUnit} 
                onChange={(e) => setToUnit(e.target.value)}
                className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md text-[15px] text-on-surface focus:outline-none"
              >
                {definition.units.map(u => (
                  <option key={u.id} value={u.id}>{u.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
