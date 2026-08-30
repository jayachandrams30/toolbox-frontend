import { ToolMetadata } from '@/data/registry';

export function DeveloperToolTemplate({ tool }: { tool: ToolMetadata }) {
    return (
        <div className="border border-outline-variant rounded-xl p-8 bg-surface-container-lowest transition-colors">
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-[24px] text-secondary">code</span>
                </div>
                <h3 className="font-headline-sm text-[24px] text-on-surface">{tool.name}</h3>
            </div>
            
            <div className="space-y-6">
                <div>
                    <label className="block font-label-sm text-[12px] text-on-surface-variant mb-2">Code Input</label>
                    <textarea className="w-full h-[200px] p-4 bg-surface-container-lowest border border-outline-variant rounded-lg font-mono text-[14px] text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-y" placeholder="Paste your code here..."></textarea>
                </div>
                <button className="w-full bg-primary-container text-on-primary-container font-label-md text-[14px] h-[48px] rounded-lg hover:opacity-90 transition-opacity shadow-sm">
                    Execute / Format
                </button>
            </div>
        </div>
    );
}
