import { ToolMetadata } from '@/data/registry';

export function ImageToolTemplate({ tool }: { tool: ToolMetadata }) {
    return (
        <div className="border-2 border-dashed border-outline-variant rounded-xl h-[400px] flex flex-col items-center justify-center bg-surface-container-lowest transition-colors hover:border-on-surface group cursor-pointer">
            <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-6 group-hover:bg-primary-fixed transition-colors">
                <span className="material-symbols-outlined text-[32px] text-secondary group-hover:text-primary transition-colors">image</span>
            </div>
            <h3 className="font-headline-sm text-[24px] text-on-surface mb-2">Drop your images here</h3>
            <p className="font-body-md text-[16px] text-on-surface-variant mb-6">or click to browse your files for {tool.name}</p>
            <button className="bg-primary-container text-on-primary-container font-label-md text-[14px] px-6 py-3 rounded-lg hover:opacity-90 transition-opacity shadow-sm">
                Select Images
            </button>
        </div>
    );
}
