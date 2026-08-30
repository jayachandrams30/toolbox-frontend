import { ToolMetadata } from '@/data/registry';

export function ConverterTemplate({ tool }: { tool: ToolMetadata }) {
    return (
        <div className="border border-outline-variant rounded-xl p-8 bg-surface-container-lowest transition-colors">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px] text-secondary">sync_alt</span>
                </div>
                <h3 className="font-headline-sm text-[24px] text-on-surface">{tool.name}</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block font-label-sm text-[12px] text-on-surface-variant mb-2">From</label>
                    <input type="text" className="w-full h-[48px] px-4 bg-surface-container-lowest border border-outline-variant rounded-lg font-body-md text-[16px] text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Input value" />
                </div>
                <div>
                    <label className="block font-label-sm text-[12px] text-on-surface-variant mb-2">To</label>
                    <input type="text" className="w-full h-[48px] px-4 bg-surface-container-lowest border border-outline-variant rounded-lg font-body-md text-[16px] text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors bg-surface-container-low" placeholder="Result" disabled />
                </div>
            </div>
            <button className="mt-6 w-full bg-primary-container text-on-primary-container font-label-md text-[14px] h-[48px] rounded-lg hover:opacity-90 transition-opacity shadow-sm">
                Convert
            </button>
        </div>
    );
}
