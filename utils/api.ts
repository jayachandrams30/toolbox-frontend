export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

export async function processFileApi(
    endpoint: string, 
    files: File[] | FileList, 
    params: Record<string, string | number | boolean> = {}
): Promise<Blob> {
    const formData = new FormData();
    
    // Single file vs multiple files
    if (files.length === 1) {
        formData.append('file', files[0]);
    } else {
        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }
    }

    // Additional params
    for (const [key, value] of Object.entries(params)) {
        if (value !== undefined && value !== null) {
            formData.append(key, String(value));
        }
    }

    const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
    const response = await fetch(`${API_URL}/${cleanEndpoint}`, {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        let errMessage = response.statusText;
        try {
            const errJson = await response.json();
            if (errJson.detail) {
                errMessage = typeof errJson.detail === 'string' ? errJson.detail : JSON.stringify(errJson.detail);
            }
        } catch {
            // keep statusText
        }
        throw new Error(errMessage || `Request failed with status ${response.status}`);
    }

    return await response.blob();
}

export function downloadBlob(blob: Blob, filename: string) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}
