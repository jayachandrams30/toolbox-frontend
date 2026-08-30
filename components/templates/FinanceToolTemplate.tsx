import { ToolMetadata } from '@/data/registry';

export function FinanceToolTemplate({ tool }: { tool: ToolMetadata }) {
    return (
        <div style={{ backgroundColor: 'var(--surface)', padding: '24px', borderRadius: '16px', border: '1px dashed var(--outline)' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>{tool.name} Interface</h2>
            <p style={{ color: 'var(--on-surface)', marginBottom: '24px' }}>
                This is a placeholder for the {tool.name} tool implementation.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', backgroundColor: 'var(--background)', borderRadius: '8px' }}>
                <span style={{ color: 'var(--on-surface)', fontSize: '14px' }}>Component Not Yet Implemented</span>
            </div>
            <button className="button" style={{ marginTop: '24px', width: '100%' }}>Execute</button>
        </div>
    );
}
