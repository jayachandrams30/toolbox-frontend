"use client";

import { useState, useMemo } from 'react';
import { ToolMetadata } from '@/data/registry';

export function DateTimeToolTemplate({ tool }: { tool: ToolMetadata }) {
  const [startDate, setStartDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState<string>(
    new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  );
  const [daysOffset, setDaysOffset] = useState<number>(14);
  const [time1, setTime1] = useState<string>('09:00');
  const [time2, setTime2] = useState<string>('17:30');
  const [timestamp, setTimestamp] = useState<number>(Math.floor(Date.now() / 1000));

  const result = useMemo(() => {
    const slug = tool.slug;

    // 1. Days between dates / date difference
    if (slug.includes('difference') || slug.includes('between') || slug.includes('business')) {
      const d1 = new Date(startDate);
      const d2 = new Date(endDate);
      const diffMs = Math.abs(d2.getTime() - d1.getTime());
      const totalDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
      const weeks = Math.floor(totalDays / 7);
      const remDays = totalDays % 7;

      // Calculate business days
      let businessDays = 0;
      const cur = new Date(Math.min(d1.getTime(), d2.getTime()));
      const end = new Date(Math.max(d1.getTime(), d2.getTime()));
      while (cur <= end) {
        const dayOfWeek = cur.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
          businessDays++;
        }
        cur.setDate(cur.getDate() + 1);
      }

      if (slug.includes('business')) {
        return {
          mainLabel: 'Working Business Days',
          mainValue: `${businessDays} Days`,
          items: [
            { label: 'Total Calendar Days', value: `${totalDays} Days` },
            { label: 'Weekend Days Excluded', value: `${totalDays - businessDays} Days` },
          ]
        };
      }

      return {
        mainLabel: 'Total Duration',
        mainValue: `${totalDays} Days`,
        items: [
          { label: 'Weeks & Days', value: `${weeks} weeks, ${remDays} days` },
          { label: 'Approx Hours', value: `${(totalDays * 24).toLocaleString()} Hours` },
        ]
      };
    }

    // 2. Add / Subtract days
    if (slug.includes('add') || slug.includes('subtract') || slug.includes('date-calculator')) {
      const d = new Date(startDate);
      const isSub = slug.includes('subtract');
      const offset = isSub ? -daysOffset : daysOffset;
      d.setDate(d.getDate() + offset);
      const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const formatted = d.toLocaleDateString('en-US', options);

      return {
        mainLabel: isSub ? `Date after subtracting ${daysOffset} days` : `Date after adding ${daysOffset} days`,
        mainValue: formatted,
        items: [
          { label: 'ISO Format', value: d.toISOString().split('T')[0] },
          { label: 'Day of the Week', value: d.toLocaleDateString('en-US', { weekday: 'long' }) },
        ]
      };
    }

    // 3. Time difference
    if (slug.includes('time-difference')) {
      const [h1, m1] = time1.split(':').map(Number);
      const [h2, m2] = time2.split(':').map(Number);
      let diffMinutes = (h2 * 60 + m2) - (h1 * 60 + m1);
      if (diffMinutes < 0) diffMinutes += 24 * 60;
      const hours = Math.floor(diffMinutes / 60);
      const mins = diffMinutes % 60;

      return {
        mainLabel: 'Time Elapsed',
        mainValue: `${hours}h ${mins}m`,
        items: [
          { label: 'Total Minutes', value: `${diffMinutes} mins` },
          { label: 'Decimal Hours', value: `${(diffMinutes / 60).toFixed(2)} hours` },
        ]
      };
    }

    // 4. Unix Timestamp
    if (slug.includes('timestamp')) {
      const d = new Date(timestamp * 1000);
      return {
        mainLabel: 'Converted Date & Time',
        mainValue: d.toUTCString(),
        items: [
          { label: 'Local Timezone', value: d.toString() },
          { label: 'ISO 8601', value: d.toISOString() },
        ]
      };
    }

    // Default: Week number
    const d = new Date(startDate);
    const firstJan = new Date(d.getFullYear(), 0, 1);
    const dayOfYear = Math.floor((d.getTime() - firstJan.getTime()) / (24 * 60 * 60 * 1000)) + 1;
    const weekNum = Math.ceil(dayOfYear / 7);

    return {
      mainLabel: `Week Number for ${startDate}`,
      mainValue: `Week ${weekNum}`,
      items: [
        { label: 'Day of the Year', value: `Day ${dayOfYear} of 365` },
        { label: 'Quarter', value: `Q${Math.ceil((d.getMonth() + 1) / 3)}` },
      ]
    };
  }, [tool.slug, startDate, endDate, daysOffset, time1, time2, timestamp]);

  return (
    <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 sm:p-8 max-w-4xl mx-auto shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Inputs */}
        <div className="flex flex-col gap-6">
          <h3 className="font-headline-sm text-[22px] text-on-surface">Date & Time Inputs</h3>

          {tool.slug.includes('time-difference') ? (
            <div className="space-y-4">
              <div>
                <label className="block font-label-md text-[14px] text-on-surface mb-2">Start Time</label>
                <input 
                  type="time" 
                  value={time1} 
                  onChange={(e) => setTime1(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md"
                />
              </div>
              <div>
                <label className="block font-label-md text-[14px] text-on-surface mb-2">End Time</label>
                <input 
                  type="time" 
                  value={time2} 
                  onChange={(e) => setTime2(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md"
                />
              </div>
            </div>
          ) : tool.slug.includes('timestamp') ? (
            <div>
              <label className="block font-label-md text-[14px] text-on-surface mb-2">Unix Timestamp (seconds)</label>
              <input 
                type="number" 
                value={timestamp} 
                onChange={(e) => setTimestamp(Number(e.target.value))}
                className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md"
              />
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block font-label-md text-[14px] text-on-surface mb-2">Start Date</label>
                <input 
                  type="date" 
                  value={startDate} 
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md"
                />
              </div>

              {(tool.slug.includes('difference') || tool.slug.includes('between') || tool.slug.includes('business')) && (
                <div>
                  <label className="block font-label-md text-[14px] text-on-surface mb-2">End Date</label>
                  <input 
                    type="date" 
                    value={endDate} 
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md"
                  />
                </div>
              )}

              {(tool.slug.includes('add') || tool.slug.includes('subtract') || tool.slug.includes('date-calculator')) && (
                <div>
                  <label className="block font-label-md text-[14px] text-on-surface mb-2">Days to Adjust</label>
                  <input 
                    type="number" 
                    value={daysOffset} 
                    onChange={(e) => setDaysOffset(Number(e.target.value))}
                    className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-3 font-body-md"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Outputs */}
        <div className="bg-surface-container-low border border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center text-center shadow-sm">
          <span className="font-label-sm text-[12px] uppercase tracking-wider text-on-surface-variant mb-2">
            {result.mainLabel}
          </span>
          <div className="font-display-lg-mobile text-[32px] md:font-display-lg md:text-[40px] text-primary font-bold mb-6">
            {result.mainValue}
          </div>

          <div className="w-full space-y-3">
            {result.items.map((item, idx) => (
              <div key={idx} className="bg-surface-container-lowest border border-outline-variant/80 p-3 rounded-lg flex justify-between items-center text-left">
                <span className="font-label-sm text-[13px] text-on-surface-variant">{item.label}</span>
                <span className="font-headline-sm text-[15px] font-semibold text-on-surface">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
