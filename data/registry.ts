export type ToolCategory = 'PDF' | 'Images' | 'Calculators' | 'Converters' | 'Text' | 'Developer' | 'Date & Time' | 'Finance';

export interface ToolMetadata {
    id: string;
    name: string;
    slug: string;
    category: ToolCategory;
    description: string;
    template: 'PDFToolTemplate' | 'ImageToolTemplate' | 'CalculatorTemplate' | 'ConverterTemplate' | 'TextToolTemplate' | 'DeveloperToolTemplate' | 'DateTimeToolTemplate' | 'FinanceToolTemplate';
    keywords: string[];
    relatedTools: string[];
    executionType: 'client' | 'backend';
    seo: {
        title: string;
        description: string;
    };
    status: 'active' | 'beta' | 'coming-soon';
}

export const TOOLS: ToolMetadata[] = [
    {
        "id": "compress-pdf",
        "name": "Compress PDF",
        "slug": "compress-pdf",
        "category": "PDF",
        "description": "Free online Compress PDF tool. Fast, secure, and easy to use.",
        "template": "PDFToolTemplate",
        "keywords": [
            "compress-pdf",
            "compress",
            "pdf"
        ],
        "relatedTools": [
            "word-to-pdf",
            "merge-pdf",
            "pdf-unlock"
        ],
        "executionType": "backend",
        "seo": {
            "title": "Compress PDF - ToolBox",
            "description": "Use our Compress PDF tool for free."
        },
        "status": "active"
    },
    {
        "id": "merge-pdf",
        "name": "Merge PDF",
        "slug": "merge-pdf",
        "category": "PDF",
        "description": "Free online Merge PDF tool. Fast, secure, and easy to use.",
        "template": "PDFToolTemplate",
        "keywords": [
            "merge-pdf",
            "merge",
            "pdf"
        ],
        "relatedTools": [
            "pdf-page-numbering",
            "excel-to-pdf",
            "watermark-pdf"
        ],
        "executionType": "backend",
        "seo": {
            "title": "Merge PDF - ToolBox",
            "description": "Use our Merge PDF tool for free."
        },
        "status": "active"
    },
    {
        "id": "split-pdf",
        "name": "Split PDF",
        "slug": "split-pdf",
        "category": "PDF",
        "description": "Free online Split PDF tool. Fast, secure, and easy to use.",
        "template": "PDFToolTemplate",
        "keywords": [
            "split-pdf",
            "split",
            "pdf"
        ],
        "relatedTools": [
            "word-to-pdf",
            "merge-pdf",
            "extract-pdf-pages"
        ],
        "executionType": "backend",
        "seo": {
            "title": "Split PDF - ToolBox",
            "description": "Use our Split PDF tool for free."
        },
        "status": "active"
    },
    {
        "id": "pdf-to-jpg",
        "name": "PDF to JPG",
        "slug": "pdf-to-jpg",
        "category": "PDF",
        "description": "Free online PDF to JPG tool. Fast, secure, and easy to use.",
        "template": "PDFToolTemplate",
        "keywords": [
            "pdf-to-jpg",
            "pdf",
            "to",
            "jpg"
        ],
        "relatedTools": [
            "png-to-pdf",
            "pdf-metadata-editor"
        ],
        "executionType": "backend",
        "seo": {
            "title": "PDF to JPG - ToolBox",
            "description": "Use our PDF to JPG tool for free."
        },
        "status": "active"
    },
    {
        "id": "jpg-to-pdf",
        "name": "JPG to PDF",
        "slug": "jpg-to-pdf",
        "category": "PDF",
        "description": "Free online JPG to PDF tool. Fast, secure, and easy to use.",
        "template": "PDFToolTemplate",
        "keywords": [
            "jpg-to-pdf",
            "jpg",
            "to",
            "pdf"
        ],
        "relatedTools": [
            "merge-pdf",
            "extract-pdf-pages",
            "word-to-pdf"
        ],
        "executionType": "backend",
        "seo": {
            "title": "JPG to PDF - ToolBox",
            "description": "Use our JPG to PDF tool for free."
        },
        "status": "active"
    },
    {
        "id": "pdf-to-png",
        "name": "PDF to PNG",
        "slug": "pdf-to-png",
        "category": "PDF",
        "description": "Free online PDF to PNG tool. Fast, secure, and easy to use.",
        "template": "PDFToolTemplate",
        "keywords": [
            "pdf-to-png",
            "pdf",
            "to",
            "png"
        ],
        "relatedTools": [
            "delete-pdf-pages",
            "extract-pdf-pages",
            "merge-pdf"
        ],
        "executionType": "backend",
        "seo": {
            "title": "PDF to PNG - ToolBox",
            "description": "Use our PDF to PNG tool for free."
        },
        "status": "active"
    },
    {
        "id": "png-to-pdf",
        "name": "PNG to PDF",
        "slug": "png-to-pdf",
        "category": "PDF",
        "description": "Free online PNG to PDF tool. Fast, secure, and easy to use.",
        "template": "PDFToolTemplate",
        "keywords": [
            "png-to-pdf",
            "png",
            "to",
            "pdf"
        ],
        "relatedTools": [
            "pdf-page-numbering",
            "jpg-to-pdf",
            "pdf-repair"
        ],
        "executionType": "backend",
        "seo": {
            "title": "PNG to PDF - ToolBox",
            "description": "Use our PNG to PDF tool for free."
        },
        "status": "active"
    },
    {
        "id": "pdf-to-word",
        "name": "PDF to Word",
        "slug": "pdf-to-word",
        "category": "PDF",
        "description": "Free online PDF to Word tool. Fast, secure, and easy to use.",
        "template": "PDFToolTemplate",
        "keywords": [
            "pdf-to-word",
            "pdf",
            "to",
            "word"
        ],
        "relatedTools": [
            "merge-pdf",
            "pdf-password-protection",
            "rotate-pdf"
        ],
        "executionType": "backend",
        "seo": {
            "title": "PDF to Word - ToolBox",
            "description": "Use our PDF to Word tool for free."
        },
        "status": "active"
    },
    {
        "id": "word-to-pdf",
        "name": "Word to PDF",
        "slug": "word-to-pdf",
        "category": "PDF",
        "description": "Free online Word to PDF tool. Fast, secure, and easy to use.",
        "template": "PDFToolTemplate",
        "keywords": [
            "word-to-pdf",
            "word",
            "to",
            "pdf"
        ],
        "relatedTools": [
            "compress-pdf",
            "pdf-password-protection",
            "pdf-unlock"
        ],
        "executionType": "backend",
        "seo": {
            "title": "Word to PDF - ToolBox",
            "description": "Use our Word to PDF tool for free."
        },
        "status": "active"
    },
    {
        "id": "pdf-to-excel",
        "name": "PDF to Excel",
        "slug": "pdf-to-excel",
        "category": "PDF",
        "description": "Free online PDF to Excel tool. Fast, secure, and easy to use.",
        "template": "PDFToolTemplate",
        "keywords": [
            "pdf-to-excel",
            "pdf",
            "to",
            "excel"
        ],
        "relatedTools": [
            "rotate-pdf",
            "pdf-to-jpg",
            "watermark-pdf"
        ],
        "executionType": "backend",
        "seo": {
            "title": "PDF to Excel - ToolBox",
            "description": "Use our PDF to Excel tool for free."
        },
        "status": "active"
    },
    {
        "id": "excel-to-pdf",
        "name": "Excel to PDF",
        "slug": "excel-to-pdf",
        "category": "PDF",
        "description": "Free online Excel to PDF tool. Fast, secure, and easy to use.",
        "template": "PDFToolTemplate",
        "keywords": [
            "excel-to-pdf",
            "excel",
            "to",
            "pdf"
        ],
        "relatedTools": [
            "pdf-unlock",
            "delete-pdf-pages",
            "pdf-metadata-editor"
        ],
        "executionType": "backend",
        "seo": {
            "title": "Excel to PDF - ToolBox",
            "description": "Use our Excel to PDF tool for free."
        },
        "status": "active"
    },
    {
        "id": "rotate-pdf",
        "name": "Rotate PDF",
        "slug": "rotate-pdf",
        "category": "PDF",
        "description": "Free online Rotate PDF tool. Fast, secure, and easy to use.",
        "template": "PDFToolTemplate",
        "keywords": [
            "rotate-pdf",
            "rotate",
            "pdf"
        ],
        "relatedTools": [
            "pdf-to-word",
            "png-to-pdf"
        ],
        "executionType": "backend",
        "seo": {
            "title": "Rotate PDF - ToolBox",
            "description": "Use our Rotate PDF tool for free."
        },
        "status": "active"
    },
    {
        "id": "delete-pdf-pages",
        "name": "Delete PDF Pages",
        "slug": "delete-pdf-pages",
        "category": "PDF",
        "description": "Free online Delete PDF Pages tool. Fast, secure, and easy to use.",
        "template": "PDFToolTemplate",
        "keywords": [
            "delete-pdf-pages",
            "delete",
            "pdf",
            "pages"
        ],
        "relatedTools": [
            "pdf-to-word",
            "merge-pdf",
            "split-pdf"
        ],
        "executionType": "backend",
        "seo": {
            "title": "Delete PDF Pages - ToolBox",
            "description": "Use our Delete PDF Pages tool for free."
        },
        "status": "active"
    },
    {
        "id": "extract-pdf-pages",
        "name": "Extract PDF Pages",
        "slug": "extract-pdf-pages",
        "category": "PDF",
        "description": "Free online Extract PDF Pages tool. Fast, secure, and easy to use.",
        "template": "PDFToolTemplate",
        "keywords": [
            "extract-pdf-pages",
            "extract",
            "pdf",
            "pages"
        ],
        "relatedTools": [
            "png-to-pdf",
            "pdf-unlock",
            "pdf-password-protection"
        ],
        "executionType": "backend",
        "seo": {
            "title": "Extract PDF Pages - ToolBox",
            "description": "Use our Extract PDF Pages tool for free."
        },
        "status": "active"
    },
    {
        "id": "pdf-page-numbering",
        "name": "PDF Page Numbering",
        "slug": "pdf-page-numbering",
        "category": "PDF",
        "description": "Free online PDF Page Numbering tool. Fast, secure, and easy to use.",
        "template": "PDFToolTemplate",
        "keywords": [
            "pdf-page-numbering",
            "pdf",
            "page",
            "numbering"
        ],
        "relatedTools": [
            "pdf-repair",
            "watermark-pdf",
            "pdf-to-png"
        ],
        "executionType": "backend",
        "seo": {
            "title": "PDF Page Numbering - ToolBox",
            "description": "Use our PDF Page Numbering tool for free."
        },
        "status": "active"
    },
    {
        "id": "pdf-password-protection",
        "name": "PDF Password Protection",
        "slug": "pdf-password-protection",
        "category": "PDF",
        "description": "Free online PDF Password Protection tool. Fast, secure, and easy to use.",
        "template": "PDFToolTemplate",
        "keywords": [
            "pdf-password-protection",
            "pdf",
            "password",
            "protection"
        ],
        "relatedTools": [
            "extract-pdf-pages",
            "pdf-metadata-editor",
            "pdf-unlock"
        ],
        "executionType": "backend",
        "seo": {
            "title": "PDF Password Protection - ToolBox",
            "description": "Use our PDF Password Protection tool for free."
        },
        "status": "active"
    },
    {
        "id": "pdf-unlock",
        "name": "PDF Unlock",
        "slug": "pdf-unlock",
        "category": "PDF",
        "description": "Free online PDF Unlock tool. Fast, secure, and easy to use.",
        "template": "PDFToolTemplate",
        "keywords": [
            "pdf-unlock",
            "pdf",
            "unlock"
        ],
        "relatedTools": [
            "png-to-pdf",
            "pdf-password-protection",
            "pdf-to-jpg"
        ],
        "executionType": "backend",
        "seo": {
            "title": "PDF Unlock - ToolBox",
            "description": "Use our PDF Unlock tool for free."
        },
        "status": "active"
    },
    {
        "id": "watermark-pdf",
        "name": "Watermark PDF",
        "slug": "watermark-pdf",
        "category": "PDF",
        "description": "Free online Watermark PDF tool. Fast, secure, and easy to use.",
        "template": "PDFToolTemplate",
        "keywords": [
            "watermark-pdf",
            "watermark",
            "pdf"
        ],
        "relatedTools": [
            "pdf-repair",
            "pdf-to-png",
            "word-to-pdf"
        ],
        "executionType": "backend",
        "seo": {
            "title": "Watermark PDF - ToolBox",
            "description": "Use our Watermark PDF tool for free."
        },
        "status": "active"
    },
    {
        "id": "pdf-metadata-editor",
        "name": "PDF Metadata Editor",
        "slug": "pdf-metadata-editor",
        "category": "PDF",
        "description": "Free online PDF Metadata Editor tool. Fast, secure, and easy to use.",
        "template": "PDFToolTemplate",
        "keywords": [
            "pdf-metadata-editor",
            "pdf",
            "metadata",
            "editor"
        ],
        "relatedTools": [
            "excel-to-pdf",
            "pdf-to-jpg",
            "delete-pdf-pages"
        ],
        "executionType": "backend",
        "seo": {
            "title": "PDF Metadata Editor - ToolBox",
            "description": "Use our PDF Metadata Editor tool for free."
        },
        "status": "active"
    },
    {
        "id": "pdf-repair",
        "name": "PDF Repair",
        "slug": "pdf-repair",
        "category": "PDF",
        "description": "Free online PDF Repair tool. Fast, secure, and easy to use.",
        "template": "PDFToolTemplate",
        "keywords": [
            "pdf-repair",
            "pdf",
            "repair"
        ],
        "relatedTools": [
            "pdf-page-numbering",
            "compress-pdf"
        ],
        "executionType": "backend",
        "seo": {
            "title": "PDF Repair - ToolBox",
            "description": "Use our PDF Repair tool for free."
        },
        "status": "active"
    },
    {
        "id": "image-compressor",
        "name": "Image Compressor",
        "slug": "image-compressor",
        "category": "Images",
        "description": "Free online Image Compressor tool. Fast, secure, and easy to use.",
        "template": "ImageToolTemplate",
        "keywords": [
            "image-compressor",
            "image",
            "compressor"
        ],
        "relatedTools": [
            "jpg-to-webp",
            "image-color-picker",
            "png-to-jpg"
        ],
        "executionType": "backend",
        "seo": {
            "title": "Image Compressor - ToolBox",
            "description": "Use our Image Compressor tool for free."
        },
        "status": "active"
    },
    {
        "id": "image-resizer",
        "name": "Image Resizer",
        "slug": "image-resizer",
        "category": "Images",
        "description": "Free online Image Resizer tool. Fast, secure, and easy to use.",
        "template": "ImageToolTemplate",
        "keywords": [
            "image-resizer",
            "image",
            "resizer"
        ],
        "relatedTools": [
            "base64-to-image",
            "favicon-generator",
            "image-blur-tool"
        ],
        "executionType": "backend",
        "seo": {
            "title": "Image Resizer - ToolBox",
            "description": "Use our Image Resizer tool for free."
        },
        "status": "active"
    },
    {
        "id": "image-converter",
        "name": "Image Converter",
        "slug": "image-converter",
        "category": "Images",
        "description": "Free online Image Converter tool. Fast, secure, and easy to use.",
        "template": "ImageToolTemplate",
        "keywords": [
            "image-converter",
            "image",
            "converter"
        ],
        "relatedTools": [
            "jpg-to-png",
            "image-watermark"
        ],
        "executionType": "client",
        "seo": {
            "title": "Image Converter - ToolBox",
            "description": "Use our Image Converter tool for free."
        },
        "status": "active"
    },
    {
        "id": "jpg-to-png",
        "name": "JPG to PNG",
        "slug": "jpg-to-png",
        "category": "Images",
        "description": "Free online JPG to PNG tool. Fast, secure, and easy to use.",
        "template": "ImageToolTemplate",
        "keywords": [
            "jpg-to-png",
            "jpg",
            "to",
            "png"
        ],
        "relatedTools": [
            "image-resizer",
            "png-to-jpg",
            "webp-to-jpg"
        ],
        "executionType": "client",
        "seo": {
            "title": "JPG to PNG - ToolBox",
            "description": "Use our JPG to PNG tool for free."
        },
        "status": "active"
    },
    {
        "id": "png-to-jpg",
        "name": "PNG to JPG",
        "slug": "png-to-jpg",
        "category": "Images",
        "description": "Free online PNG to JPG tool. Fast, secure, and easy to use.",
        "template": "ImageToolTemplate",
        "keywords": [
            "png-to-jpg",
            "png",
            "to",
            "jpg"
        ],
        "relatedTools": [
            "image-rotator",
            "image-metadata-remover",
            "favicon-generator"
        ],
        "executionType": "client",
        "seo": {
            "title": "PNG to JPG - ToolBox",
            "description": "Use our PNG to JPG tool for free."
        },
        "status": "active"
    },
    {
        "id": "webp-to-jpg",
        "name": "WEBP to JPG",
        "slug": "webp-to-jpg",
        "category": "Images",
        "description": "Free online WEBP to JPG tool. Fast, secure, and easy to use.",
        "template": "ImageToolTemplate",
        "keywords": [
            "webp-to-jpg",
            "webp",
            "to",
            "jpg"
        ],
        "relatedTools": [
            "image-converter",
            "jpg-to-webp",
            "image-color-picker"
        ],
        "executionType": "client",
        "seo": {
            "title": "WEBP to JPG - ToolBox",
            "description": "Use our WEBP to JPG tool for free."
        },
        "status": "active"
    },
    {
        "id": "jpg-to-webp",
        "name": "JPG to WEBP",
        "slug": "jpg-to-webp",
        "category": "Images",
        "description": "Free online JPG to WEBP tool. Fast, secure, and easy to use.",
        "template": "ImageToolTemplate",
        "keywords": [
            "jpg-to-webp",
            "jpg",
            "to",
            "webp"
        ],
        "relatedTools": [
            "png-to-jpg",
            "image-watermark",
            "image-compressor"
        ],
        "executionType": "client",
        "seo": {
            "title": "JPG to WEBP - ToolBox",
            "description": "Use our JPG to WEBP tool for free."
        },
        "status": "active"
    },
    {
        "id": "png-to-webp",
        "name": "PNG to WEBP",
        "slug": "png-to-webp",
        "category": "Images",
        "description": "Free online PNG to WEBP tool. Fast, secure, and easy to use.",
        "template": "ImageToolTemplate",
        "keywords": [
            "png-to-webp",
            "png",
            "to",
            "webp"
        ],
        "relatedTools": [
            "image-flipper",
            "image-cropper",
            "image-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "PNG to WEBP - ToolBox",
            "description": "Use our PNG to WEBP tool for free."
        },
        "status": "active"
    },
    {
        "id": "image-cropper",
        "name": "Image Cropper",
        "slug": "image-cropper",
        "category": "Images",
        "description": "Free online Image Cropper tool. Fast, secure, and easy to use.",
        "template": "ImageToolTemplate",
        "keywords": [
            "image-cropper",
            "image",
            "cropper"
        ],
        "relatedTools": [
            "image-resizer",
            "image-quality-enhancer",
            "jpg-to-png"
        ],
        "executionType": "client",
        "seo": {
            "title": "Image Cropper - ToolBox",
            "description": "Use our Image Cropper tool for free."
        },
        "status": "active"
    },
    {
        "id": "image-rotator",
        "name": "Image Rotator",
        "slug": "image-rotator",
        "category": "Images",
        "description": "Free online Image Rotator tool. Fast, secure, and easy to use.",
        "template": "ImageToolTemplate",
        "keywords": [
            "image-rotator",
            "image",
            "rotator"
        ],
        "relatedTools": [
            "base64-to-image",
            "favicon-generator",
            "image-compressor"
        ],
        "executionType": "client",
        "seo": {
            "title": "Image Rotator - ToolBox",
            "description": "Use our Image Rotator tool for free."
        },
        "status": "active"
    },
    {
        "id": "image-flipper",
        "name": "Image Flipper",
        "slug": "image-flipper",
        "category": "Images",
        "description": "Free online Image Flipper tool. Fast, secure, and easy to use.",
        "template": "ImageToolTemplate",
        "keywords": [
            "image-flipper",
            "image",
            "flipper"
        ],
        "relatedTools": [
            "base64-to-image",
            "image-to-base64",
            "image-rotator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Image Flipper - ToolBox",
            "description": "Use our Image Flipper tool for free."
        },
        "status": "active"
    },
    {
        "id": "image-quality-enhancer",
        "name": "Image Quality Enhancer",
        "slug": "image-quality-enhancer",
        "category": "Images",
        "description": "Free online Image Quality Enhancer tool. Fast, secure, and easy to use.",
        "template": "ImageToolTemplate",
        "keywords": [
            "image-quality-enhancer",
            "image",
            "quality",
            "enhancer"
        ],
        "relatedTools": [
            "image-cropper",
            "image-resizer",
            "image-to-base64"
        ],
        "executionType": "backend",
        "seo": {
            "title": "Image Quality Enhancer - ToolBox",
            "description": "Use our Image Quality Enhancer tool for free."
        },
        "status": "active"
    },
    {
        "id": "image-background-remover",
        "name": "Image Background Remover",
        "slug": "image-background-remover",
        "category": "Images",
        "description": "Free online Image Background Remover tool. Fast, secure, and easy to use.",
        "template": "ImageToolTemplate",
        "keywords": [
            "image-background-remover",
            "image",
            "background",
            "remover"
        ],
        "relatedTools": [
            "image-converter",
            "image-cropper",
            "favicon-generator"
        ],
        "executionType": "backend",
        "seo": {
            "title": "Image Background Remover - ToolBox",
            "description": "Use our Image Background Remover tool for free."
        },
        "status": "active"
    },
    {
        "id": "image-metadata-remover",
        "name": "Image Metadata Remover",
        "slug": "image-metadata-remover",
        "category": "Images",
        "description": "Free online Image Metadata Remover tool. Fast, secure, and easy to use.",
        "template": "ImageToolTemplate",
        "keywords": [
            "image-metadata-remover",
            "image",
            "metadata",
            "remover"
        ],
        "relatedTools": [
            "base64-to-image",
            "image-converter",
            "image-watermark"
        ],
        "executionType": "client",
        "seo": {
            "title": "Image Metadata Remover - ToolBox",
            "description": "Use our Image Metadata Remover tool for free."
        },
        "status": "active"
    },
    {
        "id": "favicon-generator",
        "name": "Favicon Generator",
        "slug": "favicon-generator",
        "category": "Images",
        "description": "Free online Favicon Generator tool. Fast, secure, and easy to use.",
        "template": "ImageToolTemplate",
        "keywords": [
            "favicon-generator",
            "favicon",
            "generator"
        ],
        "relatedTools": [
            "webp-to-jpg",
            "image-converter",
            "jpg-to-png"
        ],
        "executionType": "client",
        "seo": {
            "title": "Favicon Generator - ToolBox",
            "description": "Use our Favicon Generator tool for free."
        },
        "status": "active"
    },
    {
        "id": "image-to-base64",
        "name": "Image to Base64",
        "slug": "image-to-base64",
        "category": "Images",
        "description": "Free online Image to Base64 tool. Fast, secure, and easy to use.",
        "template": "ImageToolTemplate",
        "keywords": [
            "image-to-base64",
            "image",
            "to",
            "base64"
        ],
        "relatedTools": [
            "image-cropper",
            "image-quality-enhancer",
            "png-to-webp"
        ],
        "executionType": "client",
        "seo": {
            "title": "Image to Base64 - ToolBox",
            "description": "Use our Image to Base64 tool for free."
        },
        "status": "active"
    },
    {
        "id": "base64-to-image",
        "name": "Base64 to Image",
        "slug": "base64-to-image",
        "category": "Images",
        "description": "Free online Base64 to Image tool. Fast, secure, and easy to use.",
        "template": "ImageToolTemplate",
        "keywords": [
            "base64-to-image",
            "base64",
            "to",
            "image"
        ],
        "relatedTools": [
            "favicon-generator",
            "image-flipper"
        ],
        "executionType": "client",
        "seo": {
            "title": "Base64 to Image - ToolBox",
            "description": "Use our Base64 to Image tool for free."
        },
        "status": "active"
    },
    {
        "id": "image-color-picker",
        "name": "Image Color Picker",
        "slug": "image-color-picker",
        "category": "Images",
        "description": "Free online Image Color Picker tool. Fast, secure, and easy to use.",
        "template": "ImageToolTemplate",
        "keywords": [
            "image-color-picker",
            "image",
            "color",
            "picker"
        ],
        "relatedTools": [
            "image-converter",
            "webp-to-jpg",
            "image-to-base64"
        ],
        "executionType": "client",
        "seo": {
            "title": "Image Color Picker - ToolBox",
            "description": "Use our Image Color Picker tool for free."
        },
        "status": "active"
    },
    {
        "id": "image-blur-tool",
        "name": "Image Blur Tool",
        "slug": "image-blur-tool",
        "category": "Images",
        "description": "Free online Image Blur Tool tool. Fast, secure, and easy to use.",
        "template": "ImageToolTemplate",
        "keywords": [
            "image-blur-tool",
            "image",
            "blur",
            "tool"
        ],
        "relatedTools": [
            "jpg-to-png",
            "favicon-generator",
            "image-metadata-remover"
        ],
        "executionType": "client",
        "seo": {
            "title": "Image Blur Tool - ToolBox",
            "description": "Use our Image Blur Tool tool for free."
        },
        "status": "active"
    },
    {
        "id": "image-watermark",
        "name": "Image Watermark",
        "slug": "image-watermark",
        "category": "Images",
        "description": "Free online Image Watermark tool. Fast, secure, and easy to use.",
        "template": "ImageToolTemplate",
        "keywords": [
            "image-watermark",
            "image",
            "watermark"
        ],
        "relatedTools": [
            "favicon-generator",
            "image-compressor",
            "jpg-to-webp"
        ],
        "executionType": "client",
        "seo": {
            "title": "Image Watermark - ToolBox",
            "description": "Use our Image Watermark tool for free."
        },
        "status": "active"
    },
    {
        "id": "emi-calculator",
        "name": "EMI Calculator",
        "slug": "emi-calculator",
        "category": "Calculators",
        "description": "Free online EMI Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "emi-calculator",
            "emi",
            "calculator"
        ],
        "relatedTools": [
            "ratio-calculator",
            "compound-interest-calculator",
            "scientific-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "EMI Calculator - ToolBox",
            "description": "Use our EMI Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "loan-calculator",
        "name": "Loan Calculator",
        "slug": "loan-calculator",
        "category": "Calculators",
        "description": "Free online Loan Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "loan-calculator",
            "loan",
            "calculator"
        ],
        "relatedTools": [
            "date-difference-calculator",
            "fraction-calculator",
            "emi-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Loan Calculator - ToolBox",
            "description": "Use our Loan Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "mortgage-calculator",
        "name": "Mortgage Calculator",
        "slug": "mortgage-calculator",
        "category": "Calculators",
        "description": "Free online Mortgage Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "mortgage-calculator",
            "mortgage",
            "calculator"
        ],
        "relatedTools": [
            "average-calculator",
            "hours-calculator",
            "fuel-cost-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Mortgage Calculator - ToolBox",
            "description": "Use our Mortgage Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "simple-interest-calculator",
        "name": "Simple Interest Calculator",
        "slug": "simple-interest-calculator",
        "category": "Calculators",
        "description": "Free online Simple Interest Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "simple-interest-calculator",
            "simple",
            "interest",
            "calculator"
        ],
        "relatedTools": [
            "calorie-calculator",
            "probability-calculator",
            "mortgage-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Simple Interest Calculator - ToolBox",
            "description": "Use our Simple Interest Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "compound-interest-calculator",
        "name": "Compound Interest Calculator",
        "slug": "compound-interest-calculator",
        "category": "Calculators",
        "description": "Free online Compound Interest Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "compound-interest-calculator",
            "compound",
            "interest",
            "calculator"
        ],
        "relatedTools": [
            "hours-calculator",
            "loan-calculator",
            "salary-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Compound Interest Calculator - ToolBox",
            "description": "Use our Compound Interest Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "percentage-calculator",
        "name": "Percentage Calculator",
        "slug": "percentage-calculator",
        "category": "Calculators",
        "description": "Free online Percentage Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "percentage-calculator",
            "percentage",
            "calculator"
        ],
        "relatedTools": [
            "bmr-calculator",
            "grade-calculator",
            "ratio-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Percentage Calculator - ToolBox",
            "description": "Use our Percentage Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "percentage-increase-calculator",
        "name": "Percentage Increase Calculator",
        "slug": "percentage-increase-calculator",
        "category": "Calculators",
        "description": "Free online Percentage Increase Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "percentage-increase-calculator",
            "percentage",
            "increase",
            "calculator"
        ],
        "relatedTools": [
            "compound-interest-calculator",
            "mortgage-calculator",
            "percentage-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Percentage Increase Calculator - ToolBox",
            "description": "Use our Percentage Increase Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "percentage-difference-calculator",
        "name": "Percentage Difference Calculator",
        "slug": "percentage-difference-calculator",
        "category": "Calculators",
        "description": "Free online Percentage Difference Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "percentage-difference-calculator",
            "percentage",
            "difference",
            "calculator"
        ],
        "relatedTools": [
            "electricity-cost-calculator",
            "loan-calculator",
            "tax-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Percentage Difference Calculator - ToolBox",
            "description": "Use our Percentage Difference Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "discount-calculator",
        "name": "Discount Calculator",
        "slug": "discount-calculator",
        "category": "Calculators",
        "description": "Free online Discount Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "discount-calculator",
            "discount",
            "calculator"
        ],
        "relatedTools": [
            "average-calculator",
            "overtime-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Discount Calculator - ToolBox",
            "description": "Use our Discount Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "tip-calculator",
        "name": "Tip Calculator",
        "slug": "tip-calculator",
        "category": "Calculators",
        "description": "Free online Tip Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "tip-calculator",
            "tip",
            "calculator"
        ],
        "relatedTools": [
            "probability-calculator",
            "average-calculator",
            "bmr-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Tip Calculator - ToolBox",
            "description": "Use our Tip Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "age-calculator",
        "name": "Age Calculator",
        "slug": "age-calculator",
        "category": "Calculators",
        "description": "Free online Age Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "age-calculator",
            "age",
            "calculator"
        ],
        "relatedTools": [
            "tip-calculator",
            "percentage-calculator",
            "average-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Age Calculator - ToolBox",
            "description": "Use our Age Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "bmi-calculator",
        "name": "BMI Calculator",
        "slug": "bmi-calculator",
        "category": "Calculators",
        "description": "Free online BMI Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "bmi-calculator",
            "bmi",
            "calculator"
        ],
        "relatedTools": [
            "bmr-calculator",
            "fraction-calculator",
            "age-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "BMI Calculator - ToolBox",
            "description": "Use our BMI Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "bmr-calculator",
        "name": "BMR Calculator",
        "slug": "bmr-calculator",
        "category": "Calculators",
        "description": "Free online BMR Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "bmr-calculator",
            "bmr",
            "calculator"
        ],
        "relatedTools": [
            "gpa-calculator",
            "mortgage-calculator",
            "average-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "BMR Calculator - ToolBox",
            "description": "Use our BMR Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "calorie-calculator",
        "name": "Calorie Calculator",
        "slug": "calorie-calculator",
        "category": "Calculators",
        "description": "Free online Calorie Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "calorie-calculator",
            "calorie",
            "calculator"
        ],
        "relatedTools": [
            "loan-calculator",
            "bmr-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Calorie Calculator - ToolBox",
            "description": "Use our Calorie Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "time-calculator",
        "name": "Time Calculator",
        "slug": "time-calculator",
        "category": "Calculators",
        "description": "Free online Time Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "time-calculator",
            "time",
            "calculator"
        ],
        "relatedTools": [
            "fraction-calculator",
            "scientific-calculator",
            "tip-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Time Calculator - ToolBox",
            "description": "Use our Time Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "date-difference-calculator",
        "name": "Date Difference Calculator",
        "slug": "date-difference-calculator",
        "category": "Calculators",
        "description": "Free online Date Difference Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "date-difference-calculator",
            "date",
            "difference",
            "calculator"
        ],
        "relatedTools": [
            "salary-calculator",
            "grade-calculator",
            "gpa-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Date Difference Calculator - ToolBox",
            "description": "Use our Date Difference Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "hours-calculator",
        "name": "Hours Calculator",
        "slug": "hours-calculator",
        "category": "Calculators",
        "description": "Free online Hours Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "hours-calculator",
            "hours",
            "calculator"
        ],
        "relatedTools": [
            "electricity-cost-calculator",
            "gpa-calculator",
            "overtime-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Hours Calculator - ToolBox",
            "description": "Use our Hours Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "average-calculator",
        "name": "Average Calculator",
        "slug": "average-calculator",
        "category": "Calculators",
        "description": "Free online Average Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "average-calculator",
            "average",
            "calculator"
        ],
        "relatedTools": [
            "age-calculator",
            "percentage-increase-calculator",
            "random-number-generator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Average Calculator - ToolBox",
            "description": "Use our Average Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "ratio-calculator",
        "name": "Ratio Calculator",
        "slug": "ratio-calculator",
        "category": "Calculators",
        "description": "Free online Ratio Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "ratio-calculator",
            "ratio",
            "calculator"
        ],
        "relatedTools": [
            "percentage-difference-calculator",
            "loan-calculator",
            "mortgage-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Ratio Calculator - ToolBox",
            "description": "Use our Ratio Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "fraction-calculator",
        "name": "Fraction Calculator",
        "slug": "fraction-calculator",
        "category": "Calculators",
        "description": "Free online Fraction Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "fraction-calculator",
            "fraction",
            "calculator"
        ],
        "relatedTools": [
            "age-calculator",
            "emi-calculator",
            "bmi-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Fraction Calculator - ToolBox",
            "description": "Use our Fraction Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "scientific-calculator",
        "name": "Scientific Calculator",
        "slug": "scientific-calculator",
        "category": "Calculators",
        "description": "Free online Scientific Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "scientific-calculator",
            "scientific",
            "calculator"
        ],
        "relatedTools": [
            "gpa-calculator",
            "tip-calculator",
            "fuel-cost-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Scientific Calculator - ToolBox",
            "description": "Use our Scientific Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "random-number-generator",
        "name": "Random Number Generator",
        "slug": "random-number-generator",
        "category": "Calculators",
        "description": "Free online Random Number Generator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "random-number-generator",
            "random",
            "number",
            "generator"
        ],
        "relatedTools": [
            "percentage-calculator",
            "probability-calculator",
            "emi-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Random Number Generator - ToolBox",
            "description": "Use our Random Number Generator tool for free."
        },
        "status": "active"
    },
    {
        "id": "probability-calculator",
        "name": "Probability Calculator",
        "slug": "probability-calculator",
        "category": "Calculators",
        "description": "Free online Probability Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "probability-calculator",
            "probability",
            "calculator"
        ],
        "relatedTools": [
            "calorie-calculator",
            "scientific-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Probability Calculator - ToolBox",
            "description": "Use our Probability Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "gpa-calculator",
        "name": "GPA Calculator",
        "slug": "gpa-calculator",
        "category": "Calculators",
        "description": "Free online GPA Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "gpa-calculator",
            "gpa",
            "calculator"
        ],
        "relatedTools": [
            "percentage-calculator",
            "electricity-cost-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "GPA Calculator - ToolBox",
            "description": "Use our GPA Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "grade-calculator",
        "name": "Grade Calculator",
        "slug": "grade-calculator",
        "category": "Calculators",
        "description": "Free online Grade Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "grade-calculator",
            "grade",
            "calculator"
        ],
        "relatedTools": [
            "calorie-calculator",
            "overtime-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Grade Calculator - ToolBox",
            "description": "Use our Grade Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "fuel-cost-calculator",
        "name": "Fuel Cost Calculator",
        "slug": "fuel-cost-calculator",
        "category": "Calculators",
        "description": "Free online Fuel Cost Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "fuel-cost-calculator",
            "fuel",
            "cost",
            "calculator"
        ],
        "relatedTools": [
            "probability-calculator",
            "average-calculator",
            "percentage-difference-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Fuel Cost Calculator - ToolBox",
            "description": "Use our Fuel Cost Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "electricity-cost-calculator",
        "name": "Electricity Cost Calculator",
        "slug": "electricity-cost-calculator",
        "category": "Calculators",
        "description": "Free online Electricity Cost Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "electricity-cost-calculator",
            "electricity",
            "cost",
            "calculator"
        ],
        "relatedTools": [
            "tip-calculator",
            "percentage-difference-calculator",
            "discount-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Electricity Cost Calculator - ToolBox",
            "description": "Use our Electricity Cost Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "salary-calculator",
        "name": "Salary Calculator",
        "slug": "salary-calculator",
        "category": "Calculators",
        "description": "Free online Salary Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "salary-calculator",
            "salary",
            "calculator"
        ],
        "relatedTools": [
            "grade-calculator",
            "random-number-generator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Salary Calculator - ToolBox",
            "description": "Use our Salary Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "overtime-calculator",
        "name": "Overtime Calculator",
        "slug": "overtime-calculator",
        "category": "Calculators",
        "description": "Free online Overtime Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "overtime-calculator",
            "overtime",
            "calculator"
        ],
        "relatedTools": [
            "tax-calculator",
            "scientific-calculator",
            "age-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Overtime Calculator - ToolBox",
            "description": "Use our Overtime Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "tax-calculator",
        "name": "Tax Calculator",
        "slug": "tax-calculator",
        "category": "Calculators",
        "description": "Free online Tax Calculator tool. Fast, secure, and easy to use.",
        "template": "CalculatorTemplate",
        "keywords": [
            "tax-calculator",
            "tax",
            "calculator"
        ],
        "relatedTools": [
            "average-calculator",
            "time-calculator",
            "mortgage-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Tax Calculator - ToolBox",
            "description": "Use our Tax Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "length-converter",
        "name": "Length Converter",
        "slug": "length-converter",
        "category": "Converters",
        "description": "Free online Length Converter tool. Fast, secure, and easy to use.",
        "template": "ConverterTemplate",
        "keywords": [
            "length-converter",
            "length",
            "converter"
        ],
        "relatedTools": [
            "pressure-converter",
            "temperature-converter",
            "binary-to-decimal"
        ],
        "executionType": "client",
        "seo": {
            "title": "Length Converter - ToolBox",
            "description": "Use our Length Converter tool for free."
        },
        "status": "active"
    },
    {
        "id": "weight-converter",
        "name": "Weight Converter",
        "slug": "weight-converter",
        "category": "Converters",
        "description": "Free online Weight Converter tool. Fast, secure, and easy to use.",
        "template": "ConverterTemplate",
        "keywords": [
            "weight-converter",
            "weight",
            "converter"
        ],
        "relatedTools": [
            "number-base-converter",
            "energy-converter",
            "area-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Weight Converter - ToolBox",
            "description": "Use our Weight Converter tool for free."
        },
        "status": "active"
    },
    {
        "id": "height-converter",
        "name": "Height Converter",
        "slug": "height-converter",
        "category": "Converters",
        "description": "Free online Height Converter tool. Fast, secure, and easy to use.",
        "template": "ConverterTemplate",
        "keywords": [
            "height-converter",
            "height",
            "converter"
        ],
        "relatedTools": [
            "speed-converter",
            "number-base-converter",
            "roman-numeral-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Height Converter - ToolBox",
            "description": "Use our Height Converter tool for free."
        },
        "status": "active"
    },
    {
        "id": "temperature-converter",
        "name": "Temperature Converter",
        "slug": "temperature-converter",
        "category": "Converters",
        "description": "Free online Temperature Converter tool. Fast, secure, and easy to use.",
        "template": "ConverterTemplate",
        "keywords": [
            "temperature-converter",
            "temperature",
            "converter"
        ],
        "relatedTools": [
            "volume-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Temperature Converter - ToolBox",
            "description": "Use our Temperature Converter tool for free."
        },
        "status": "active"
    },
    {
        "id": "area-converter",
        "name": "Area Converter",
        "slug": "area-converter",
        "category": "Converters",
        "description": "Free online Area Converter tool. Fast, secure, and easy to use.",
        "template": "ConverterTemplate",
        "keywords": [
            "area-converter",
            "area",
            "converter"
        ],
        "relatedTools": [
            "decimal-to-hexadecimal",
            "weight-converter",
            "time-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Area Converter - ToolBox",
            "description": "Use our Area Converter tool for free."
        },
        "status": "active"
    },
    {
        "id": "volume-converter",
        "name": "Volume Converter",
        "slug": "volume-converter",
        "category": "Converters",
        "description": "Free online Volume Converter tool. Fast, secure, and easy to use.",
        "template": "ConverterTemplate",
        "keywords": [
            "volume-converter",
            "volume",
            "converter"
        ],
        "relatedTools": [
            "file-size-converter",
            "roman-numeral-converter",
            "temperature-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Volume Converter - ToolBox",
            "description": "Use our Volume Converter tool for free."
        },
        "status": "active"
    },
    {
        "id": "speed-converter",
        "name": "Speed Converter",
        "slug": "speed-converter",
        "category": "Converters",
        "description": "Free online Speed Converter tool. Fast, secure, and easy to use.",
        "template": "ConverterTemplate",
        "keywords": [
            "speed-converter",
            "speed",
            "converter"
        ],
        "relatedTools": [
            "frequency-converter",
            "length-converter",
            "weight-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Speed Converter - ToolBox",
            "description": "Use our Speed Converter tool for free."
        },
        "status": "active"
    },
    {
        "id": "time-converter",
        "name": "Time Converter",
        "slug": "time-converter",
        "category": "Converters",
        "description": "Free online Time Converter tool. Fast, secure, and easy to use.",
        "template": "ConverterTemplate",
        "keywords": [
            "time-converter",
            "time",
            "converter"
        ],
        "relatedTools": [
            "length-converter",
            "weight-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Time Converter - ToolBox",
            "description": "Use our Time Converter tool for free."
        },
        "status": "active"
    },
    {
        "id": "data-storage-converter",
        "name": "Data Storage Converter",
        "slug": "data-storage-converter",
        "category": "Converters",
        "description": "Free online Data Storage Converter tool. Fast, secure, and easy to use.",
        "template": "ConverterTemplate",
        "keywords": [
            "data-storage-converter",
            "data",
            "storage",
            "converter"
        ],
        "relatedTools": [
            "speed-converter",
            "file-size-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Data Storage Converter - ToolBox",
            "description": "Use our Data Storage Converter tool for free."
        },
        "status": "active"
    },
    {
        "id": "energy-converter",
        "name": "Energy Converter",
        "slug": "energy-converter",
        "category": "Converters",
        "description": "Free online Energy Converter tool. Fast, secure, and easy to use.",
        "template": "ConverterTemplate",
        "keywords": [
            "energy-converter",
            "energy",
            "converter"
        ],
        "relatedTools": [
            "binary-to-decimal",
            "weight-converter",
            "length-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Energy Converter - ToolBox",
            "description": "Use our Energy Converter tool for free."
        },
        "status": "active"
    },
    {
        "id": "pressure-converter",
        "name": "Pressure Converter",
        "slug": "pressure-converter",
        "category": "Converters",
        "description": "Free online Pressure Converter tool. Fast, secure, and easy to use.",
        "template": "ConverterTemplate",
        "keywords": [
            "pressure-converter",
            "pressure",
            "converter"
        ],
        "relatedTools": [
            "frequency-converter",
            "length-converter",
            "temperature-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Pressure Converter - ToolBox",
            "description": "Use our Pressure Converter tool for free."
        },
        "status": "active"
    },
    {
        "id": "frequency-converter",
        "name": "Frequency Converter",
        "slug": "frequency-converter",
        "category": "Converters",
        "description": "Free online Frequency Converter tool. Fast, secure, and easy to use.",
        "template": "ConverterTemplate",
        "keywords": [
            "frequency-converter",
            "frequency",
            "converter"
        ],
        "relatedTools": [
            "decimal-to-binary",
            "area-converter",
            "currency-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Frequency Converter - ToolBox",
            "description": "Use our Frequency Converter tool for free."
        },
        "status": "active"
    },
    {
        "id": "currency-converter",
        "name": "Currency Converter",
        "slug": "currency-converter",
        "category": "Converters",
        "description": "Free online Currency Converter tool. Fast, secure, and easy to use.",
        "template": "ConverterTemplate",
        "keywords": [
            "currency-converter",
            "currency",
            "converter"
        ],
        "relatedTools": [
            "data-storage-converter",
            "roman-numeral-converter",
            "length-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Currency Converter - ToolBox",
            "description": "Use our Currency Converter tool for free."
        },
        "status": "active"
    },
    {
        "id": "number-base-converter",
        "name": "Number Base Converter",
        "slug": "number-base-converter",
        "category": "Converters",
        "description": "Free online Number Base Converter tool. Fast, secure, and easy to use.",
        "template": "ConverterTemplate",
        "keywords": [
            "number-base-converter",
            "number",
            "base",
            "converter"
        ],
        "relatedTools": [
            "data-storage-converter",
            "weight-converter",
            "height-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Number Base Converter - ToolBox",
            "description": "Use our Number Base Converter tool for free."
        },
        "status": "active"
    },
    {
        "id": "decimal-to-binary",
        "name": "Decimal to Binary",
        "slug": "decimal-to-binary",
        "category": "Converters",
        "description": "Free online Decimal to Binary tool. Fast, secure, and easy to use.",
        "template": "ConverterTemplate",
        "keywords": [
            "decimal-to-binary",
            "decimal",
            "to",
            "binary"
        ],
        "relatedTools": [
            "pressure-converter",
            "energy-converter",
            "weight-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Decimal to Binary - ToolBox",
            "description": "Use our Decimal to Binary tool for free."
        },
        "status": "active"
    },
    {
        "id": "binary-to-decimal",
        "name": "Binary to Decimal",
        "slug": "binary-to-decimal",
        "category": "Converters",
        "description": "Free online Binary to Decimal tool. Fast, secure, and easy to use.",
        "template": "ConverterTemplate",
        "keywords": [
            "binary-to-decimal",
            "binary",
            "to",
            "decimal"
        ],
        "relatedTools": [
            "roman-numeral-converter",
            "decimal-to-hexadecimal",
            "pressure-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Binary to Decimal - ToolBox",
            "description": "Use our Binary to Decimal tool for free."
        },
        "status": "active"
    },
    {
        "id": "decimal-to-hexadecimal",
        "name": "Decimal to Hexadecimal",
        "slug": "decimal-to-hexadecimal",
        "category": "Converters",
        "description": "Free online Decimal to Hexadecimal tool. Fast, secure, and easy to use.",
        "template": "ConverterTemplate",
        "keywords": [
            "decimal-to-hexadecimal",
            "decimal",
            "to",
            "hexadecimal"
        ],
        "relatedTools": [
            "temperature-converter",
            "energy-converter",
            "currency-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Decimal to Hexadecimal - ToolBox",
            "description": "Use our Decimal to Hexadecimal tool for free."
        },
        "status": "active"
    },
    {
        "id": "roman-numeral-converter",
        "name": "Roman Numeral Converter",
        "slug": "roman-numeral-converter",
        "category": "Converters",
        "description": "Free online Roman Numeral Converter tool. Fast, secure, and easy to use.",
        "template": "ConverterTemplate",
        "keywords": [
            "roman-numeral-converter",
            "roman",
            "numeral",
            "converter"
        ],
        "relatedTools": [
            "speed-converter",
            "length-converter",
            "number-base-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Roman Numeral Converter - ToolBox",
            "description": "Use our Roman Numeral Converter tool for free."
        },
        "status": "active"
    },
    {
        "id": "image-format-converter",
        "name": "Image Format Converter",
        "slug": "image-format-converter",
        "category": "Converters",
        "description": "Free online Image Format Converter tool. Fast, secure, and easy to use.",
        "template": "ConverterTemplate",
        "keywords": [
            "image-format-converter",
            "image",
            "format",
            "converter"
        ],
        "relatedTools": [
            "energy-converter",
            "frequency-converter",
            "weight-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Image Format Converter - ToolBox",
            "description": "Use our Image Format Converter tool for free."
        },
        "status": "active"
    },
    {
        "id": "file-size-converter",
        "name": "File Size Converter",
        "slug": "file-size-converter",
        "category": "Converters",
        "description": "Free online File Size Converter tool. Fast, secure, and easy to use.",
        "template": "ConverterTemplate",
        "keywords": [
            "file-size-converter",
            "file",
            "size",
            "converter"
        ],
        "relatedTools": [
            "volume-converter",
            "area-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "File Size Converter - ToolBox",
            "description": "Use our File Size Converter tool for free."
        },
        "status": "active"
    },
    {
        "id": "word-counter",
        "name": "Word Counter",
        "slug": "word-counter",
        "category": "Text",
        "description": "Free online Word Counter tool. Fast, secure, and easy to use.",
        "template": "TextToolTemplate",
        "keywords": [
            "word-counter",
            "word",
            "counter"
        ],
        "relatedTools": [
            "sentence-counter",
            "json-validator",
            "remove-duplicate-lines"
        ],
        "executionType": "client",
        "seo": {
            "title": "Word Counter - ToolBox",
            "description": "Use our Word Counter tool for free."
        },
        "status": "active"
    },
    {
        "id": "character-counter",
        "name": "Character Counter",
        "slug": "character-counter",
        "category": "Text",
        "description": "Free online Character Counter tool. Fast, secure, and easy to use.",
        "template": "TextToolTemplate",
        "keywords": [
            "character-counter",
            "character",
            "counter"
        ],
        "relatedTools": [
            "csv-to-json",
            "text-reverser",
            "xml-formatter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Character Counter - ToolBox",
            "description": "Use our Character Counter tool for free."
        },
        "status": "active"
    },
    {
        "id": "sentence-counter",
        "name": "Sentence Counter",
        "slug": "sentence-counter",
        "category": "Text",
        "description": "Free online Sentence Counter tool. Fast, secure, and easy to use.",
        "template": "TextToolTemplate",
        "keywords": [
            "sentence-counter",
            "sentence",
            "counter"
        ],
        "relatedTools": [
            "remove-duplicate-lines",
            "case-converter",
            "text-reverser"
        ],
        "executionType": "client",
        "seo": {
            "title": "Sentence Counter - ToolBox",
            "description": "Use our Sentence Counter tool for free."
        },
        "status": "active"
    },
    {
        "id": "case-converter",
        "name": "Case Converter",
        "slug": "case-converter",
        "category": "Text",
        "description": "Free online Case Converter tool. Fast, secure, and easy to use.",
        "template": "TextToolTemplate",
        "keywords": [
            "case-converter",
            "case",
            "converter"
        ],
        "relatedTools": [
            "text-diff-checker",
            "json-validator",
            "csv-to-json"
        ],
        "executionType": "client",
        "seo": {
            "title": "Case Converter - ToolBox",
            "description": "Use our Case Converter tool for free."
        },
        "status": "active"
    },
    {
        "id": "uppercase-converter",
        "name": "Uppercase Converter",
        "slug": "uppercase-converter",
        "category": "Text",
        "description": "Free online Uppercase Converter tool. Fast, secure, and easy to use.",
        "template": "TextToolTemplate",
        "keywords": [
            "uppercase-converter",
            "uppercase",
            "converter"
        ],
        "relatedTools": [
            "remove-duplicate-lines",
            "case-converter",
            "sentence-counter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Uppercase Converter - ToolBox",
            "description": "Use our Uppercase Converter tool for free."
        },
        "status": "active"
    },
    {
        "id": "lowercase-converter",
        "name": "Lowercase Converter",
        "slug": "lowercase-converter",
        "category": "Text",
        "description": "Free online Lowercase Converter tool. Fast, secure, and easy to use.",
        "template": "TextToolTemplate",
        "keywords": [
            "lowercase-converter",
            "lowercase",
            "converter"
        ],
        "relatedTools": [
            "xml-formatter",
            "uppercase-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Lowercase Converter - ToolBox",
            "description": "Use our Lowercase Converter tool for free."
        },
        "status": "active"
    },
    {
        "id": "title-case-converter",
        "name": "Title Case Converter",
        "slug": "title-case-converter",
        "category": "Text",
        "description": "Free online Title Case Converter tool. Fast, secure, and easy to use.",
        "template": "TextToolTemplate",
        "keywords": [
            "title-case-converter",
            "title",
            "case",
            "converter"
        ],
        "relatedTools": [
            "text-to-slug",
            "text-diff-checker",
            "csv-to-json"
        ],
        "executionType": "client",
        "seo": {
            "title": "Title Case Converter - ToolBox",
            "description": "Use our Title Case Converter tool for free."
        },
        "status": "active"
    },
    {
        "id": "remove-duplicate-lines",
        "name": "Remove Duplicate Lines",
        "slug": "remove-duplicate-lines",
        "category": "Text",
        "description": "Free online Remove Duplicate Lines tool. Fast, secure, and easy to use.",
        "template": "TextToolTemplate",
        "keywords": [
            "remove-duplicate-lines",
            "remove",
            "duplicate",
            "lines"
        ],
        "relatedTools": [
            "uppercase-converter",
            "character-counter",
            "csv-to-json"
        ],
        "executionType": "client",
        "seo": {
            "title": "Remove Duplicate Lines - ToolBox",
            "description": "Use our Remove Duplicate Lines tool for free."
        },
        "status": "active"
    },
    {
        "id": "remove-extra-spaces",
        "name": "Remove Extra Spaces",
        "slug": "remove-extra-spaces",
        "category": "Text",
        "description": "Free online Remove Extra Spaces tool. Fast, secure, and easy to use.",
        "template": "TextToolTemplate",
        "keywords": [
            "remove-extra-spaces",
            "remove",
            "extra",
            "spaces"
        ],
        "relatedTools": [
            "lorem-ipsum-generator",
            "text-diff-checker",
            "text-reverser"
        ],
        "executionType": "client",
        "seo": {
            "title": "Remove Extra Spaces - ToolBox",
            "description": "Use our Remove Extra Spaces tool for free."
        },
        "status": "active"
    },
    {
        "id": "text-sorter",
        "name": "Text Sorter",
        "slug": "text-sorter",
        "category": "Text",
        "description": "Free online Text Sorter tool. Fast, secure, and easy to use.",
        "template": "TextToolTemplate",
        "keywords": [
            "text-sorter",
            "text",
            "sorter"
        ],
        "relatedTools": [
            "word-counter",
            "csv-to-json"
        ],
        "executionType": "client",
        "seo": {
            "title": "Text Sorter - ToolBox",
            "description": "Use our Text Sorter tool for free."
        },
        "status": "active"
    },
    {
        "id": "text-reverser",
        "name": "Text Reverser",
        "slug": "text-reverser",
        "category": "Text",
        "description": "Free online Text Reverser tool. Fast, secure, and easy to use.",
        "template": "TextToolTemplate",
        "keywords": [
            "text-reverser",
            "text",
            "reverser"
        ],
        "relatedTools": [
            "uppercase-converter",
            "character-counter",
            "remove-extra-spaces"
        ],
        "executionType": "client",
        "seo": {
            "title": "Text Reverser - ToolBox",
            "description": "Use our Text Reverser tool for free."
        },
        "status": "active"
    },
    {
        "id": "find-and-replace",
        "name": "Find and Replace",
        "slug": "find-and-replace",
        "category": "Text",
        "description": "Free online Find and Replace tool. Fast, secure, and easy to use.",
        "template": "TextToolTemplate",
        "keywords": [
            "find-and-replace",
            "find",
            "and",
            "replace"
        ],
        "relatedTools": [
            "lowercase-converter",
            "text-sorter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Find and Replace - ToolBox",
            "description": "Use our Find and Replace tool for free."
        },
        "status": "active"
    },
    {
        "id": "lorem-ipsum-generator",
        "name": "Lorem Ipsum Generator",
        "slug": "lorem-ipsum-generator",
        "category": "Text",
        "description": "Free online Lorem Ipsum Generator tool. Fast, secure, and easy to use.",
        "template": "TextToolTemplate",
        "keywords": [
            "lorem-ipsum-generator",
            "lorem",
            "ipsum",
            "generator"
        ],
        "relatedTools": [
            "lowercase-converter",
            "json-validator",
            "xml-formatter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Lorem Ipsum Generator - ToolBox",
            "description": "Use our Lorem Ipsum Generator tool for free."
        },
        "status": "active"
    },
    {
        "id": "text-diff-checker",
        "name": "Text Diff Checker",
        "slug": "text-diff-checker",
        "category": "Text",
        "description": "Free online Text Diff Checker tool. Fast, secure, and easy to use.",
        "template": "TextToolTemplate",
        "keywords": [
            "text-diff-checker",
            "text",
            "diff",
            "checker"
        ],
        "relatedTools": [
            "remove-extra-spaces",
            "title-case-converter",
            "lowercase-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Text Diff Checker - ToolBox",
            "description": "Use our Text Diff Checker tool for free."
        },
        "status": "active"
    },
    {
        "id": "markdown-previewer",
        "name": "Markdown Previewer",
        "slug": "markdown-previewer",
        "category": "Text",
        "description": "Free online Markdown Previewer tool. Fast, secure, and easy to use.",
        "template": "TextToolTemplate",
        "keywords": [
            "markdown-previewer",
            "markdown",
            "previewer"
        ],
        "relatedTools": [
            "text-to-slug",
            "text-reverser",
            "remove-duplicate-lines"
        ],
        "executionType": "client",
        "seo": {
            "title": "Markdown Previewer - ToolBox",
            "description": "Use our Markdown Previewer tool for free."
        },
        "status": "active"
    },
    {
        "id": "json-formatter",
        "name": "JSON Formatter",
        "slug": "json-formatter",
        "category": "Text",
        "description": "Free online JSON Formatter tool. Fast, secure, and easy to use.",
        "template": "TextToolTemplate",
        "keywords": [
            "json-formatter",
            "json",
            "formatter"
        ],
        "relatedTools": [
            "word-counter",
            "remove-extra-spaces",
            "remove-duplicate-lines"
        ],
        "executionType": "client",
        "seo": {
            "title": "JSON Formatter - ToolBox",
            "description": "Use our JSON Formatter tool for free."
        },
        "status": "active"
    },
    {
        "id": "json-validator",
        "name": "JSON Validator",
        "slug": "json-validator",
        "category": "Text",
        "description": "Free online JSON Validator tool. Fast, secure, and easy to use.",
        "template": "TextToolTemplate",
        "keywords": [
            "json-validator",
            "json",
            "validator"
        ],
        "relatedTools": [
            "text-reverser",
            "lorem-ipsum-generator",
            "title-case-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "JSON Validator - ToolBox",
            "description": "Use our JSON Validator tool for free."
        },
        "status": "active"
    },
    {
        "id": "xml-formatter",
        "name": "XML Formatter",
        "slug": "xml-formatter",
        "category": "Text",
        "description": "Free online XML Formatter tool. Fast, secure, and easy to use.",
        "template": "TextToolTemplate",
        "keywords": [
            "xml-formatter",
            "xml",
            "formatter"
        ],
        "relatedTools": [
            "markdown-previewer",
            "word-counter",
            "title-case-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "XML Formatter - ToolBox",
            "description": "Use our XML Formatter tool for free."
        },
        "status": "active"
    },
    {
        "id": "csv-to-json",
        "name": "CSV to JSON",
        "slug": "csv-to-json",
        "category": "Text",
        "description": "Free online CSV to JSON tool. Fast, secure, and easy to use.",
        "template": "TextToolTemplate",
        "keywords": [
            "csv-to-json",
            "csv",
            "to",
            "json"
        ],
        "relatedTools": [
            "json-validator",
            "find-and-replace"
        ],
        "executionType": "client",
        "seo": {
            "title": "CSV to JSON - ToolBox",
            "description": "Use our CSV to JSON tool for free."
        },
        "status": "active"
    },
    {
        "id": "text-to-slug",
        "name": "Text to Slug",
        "slug": "text-to-slug",
        "category": "Text",
        "description": "Free online Text to Slug tool. Fast, secure, and easy to use.",
        "template": "TextToolTemplate",
        "keywords": [
            "text-to-slug",
            "text",
            "to",
            "slug"
        ],
        "relatedTools": [
            "title-case-converter",
            "remove-extra-spaces",
            "character-counter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Text to Slug - ToolBox",
            "description": "Use our Text to Slug tool for free."
        },
        "status": "active"
    },
    {
        "id": "json-minifier",
        "name": "JSON Minifier",
        "slug": "json-minifier",
        "category": "Developer",
        "description": "Free online JSON Minifier tool. Fast, secure, and easy to use.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "json-minifier",
            "json",
            "minifier"
        ],
        "relatedTools": [
            "hash-generator",
            "javascript-formatter",
            "url-encoder"
        ],
        "executionType": "client",
        "seo": {
            "title": "JSON Minifier - ToolBox",
            "description": "Use our JSON Minifier tool for free."
        },
        "status": "active"
    },
    {
        "id": "json-to-csv",
        "name": "JSON to CSV",
        "slug": "json-to-csv",
        "category": "Developer",
        "description": "Free online JSON to CSV tool. Fast, secure, and easy to use.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "json-to-csv",
            "json",
            "to",
            "csv"
        ],
        "relatedTools": [
            "uuid-generator",
            "base64-encoder",
            "json-minifier"
        ],
        "executionType": "client",
        "seo": {
            "title": "JSON to CSV - ToolBox",
            "description": "Use our JSON to CSV tool for free."
        },
        "status": "active"
    },
    {
        "id": "xml-validator",
        "name": "XML Validator",
        "slug": "xml-validator",
        "category": "Developer",
        "description": "Free online XML Validator tool. Fast, secure, and easy to use.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "xml-validator",
            "xml",
            "validator"
        ],
        "relatedTools": [
            "json-minifier",
            "timestamp-converter",
            "sql-formatter"
        ],
        "executionType": "client",
        "seo": {
            "title": "XML Validator - ToolBox",
            "description": "Use our XML Validator tool for free."
        },
        "status": "active"
    },
    {
        "id": "html-formatter",
        "name": "HTML Formatter",
        "slug": "html-formatter",
        "category": "Developer",
        "description": "Free online HTML Formatter tool. Fast, secure, and easy to use.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "html-formatter",
            "html",
            "formatter"
        ],
        "relatedTools": [
            "css-minifier",
            "uuid-generator"
        ],
        "executionType": "client",
        "seo": {
            "title": "HTML Formatter - ToolBox",
            "description": "Use our HTML Formatter tool for free."
        },
        "status": "active"
    },
    {
        "id": "html-minifier",
        "name": "HTML Minifier",
        "slug": "html-minifier",
        "category": "Developer",
        "description": "Free online HTML Minifier tool. Fast, secure, and easy to use.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "html-minifier",
            "html",
            "minifier"
        ],
        "relatedTools": [
            "base64-encoder",
            "timestamp-converter",
            "javascript-formatter"
        ],
        "executionType": "client",
        "seo": {
            "title": "HTML Minifier - ToolBox",
            "description": "Use our HTML Minifier tool for free."
        },
        "status": "active"
    },
    {
        "id": "css-formatter",
        "name": "CSS Formatter",
        "slug": "css-formatter",
        "category": "Developer",
        "description": "Free online CSS Formatter tool. Fast, secure, and easy to use.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "css-formatter",
            "css",
            "formatter"
        ],
        "relatedTools": [
            "json-minifier",
            "xml-validator",
            "html-minifier"
        ],
        "executionType": "client",
        "seo": {
            "title": "CSS Formatter - ToolBox",
            "description": "Use our CSS Formatter tool for free."
        },
        "status": "active"
    },
    {
        "id": "css-minifier",
        "name": "CSS Minifier",
        "slug": "css-minifier",
        "category": "Developer",
        "description": "Free online CSS Minifier tool. Fast, secure, and easy to use.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "css-minifier",
            "css",
            "minifier"
        ],
        "relatedTools": [
            "javascript-minifier",
            "json-minifier",
            "url-decoder"
        ],
        "executionType": "client",
        "seo": {
            "title": "CSS Minifier - ToolBox",
            "description": "Use our CSS Minifier tool for free."
        },
        "status": "active"
    },
    {
        "id": "javascript-formatter",
        "name": "JavaScript Formatter",
        "slug": "javascript-formatter",
        "category": "Developer",
        "description": "Free online JavaScript Formatter tool. Fast, secure, and easy to use.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "javascript-formatter",
            "javascript",
            "formatter"
        ],
        "relatedTools": [
            "jwt-decoder",
            "uuid-generator",
            "css-formatter"
        ],
        "executionType": "client",
        "seo": {
            "title": "JavaScript Formatter - ToolBox",
            "description": "Use our JavaScript Formatter tool for free."
        },
        "status": "active"
    },
    {
        "id": "javascript-minifier",
        "name": "JavaScript Minifier",
        "slug": "javascript-minifier",
        "category": "Developer",
        "description": "Free online JavaScript Minifier tool. Fast, secure, and easy to use.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "javascript-minifier",
            "javascript",
            "minifier"
        ],
        "relatedTools": [
            "xml-validator",
            "json-to-csv",
            "json-minifier"
        ],
        "executionType": "client",
        "seo": {
            "title": "JavaScript Minifier - ToolBox",
            "description": "Use our JavaScript Minifier tool for free."
        },
        "status": "active"
    },
    {
        "id": "sql-formatter",
        "name": "SQL Formatter",
        "slug": "sql-formatter",
        "category": "Developer",
        "description": "Free online SQL Formatter tool. Fast, secure, and easy to use.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "sql-formatter",
            "sql",
            "formatter"
        ],
        "relatedTools": [
            "html-minifier",
            "javascript-minifier",
            "jwt-decoder"
        ],
        "executionType": "client",
        "seo": {
            "title": "SQL Formatter - ToolBox",
            "description": "Use our SQL Formatter tool for free."
        },
        "status": "active"
    },
    {
        "id": "sql-minifier",
        "name": "SQL Minifier",
        "slug": "sql-minifier",
        "category": "Developer",
        "description": "Free online SQL Minifier tool. Fast, secure, and easy to use.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "sql-minifier",
            "sql",
            "minifier"
        ],
        "relatedTools": [
            "json-minifier",
            "html-formatter",
            "jwt-decoder"
        ],
        "executionType": "client",
        "seo": {
            "title": "SQL Minifier - ToolBox",
            "description": "Use our SQL Minifier tool for free."
        },
        "status": "active"
    },
    {
        "id": "base64-encoder",
        "name": "Base64 Encoder",
        "slug": "base64-encoder",
        "category": "Developer",
        "description": "Free online Base64 Encoder tool. Fast, secure, and easy to use.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "base64-encoder",
            "base64",
            "encoder"
        ],
        "relatedTools": [
            "color-converter",
            "css-formatter",
            "sql-formatter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Base64 Encoder - ToolBox",
            "description": "Use our Base64 Encoder tool for free."
        },
        "status": "active"
    },
    {
        "id": "base64-decoder",
        "name": "Base64 Decoder",
        "slug": "base64-decoder",
        "category": "Developer",
        "description": "Free online Base64 Decoder tool. Fast, secure, and easy to use.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "base64-decoder",
            "base64",
            "decoder"
        ],
        "relatedTools": [
            "javascript-formatter",
            "json-to-csv",
            "javascript-minifier"
        ],
        "executionType": "client",
        "seo": {
            "title": "Base64 Decoder - ToolBox",
            "description": "Use our Base64 Decoder tool for free."
        },
        "status": "active"
    },
    {
        "id": "url-encoder",
        "name": "URL Encoder",
        "slug": "url-encoder",
        "category": "Developer",
        "description": "Free online URL Encoder tool. Fast, secure, and easy to use.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "url-encoder",
            "url",
            "encoder"
        ],
        "relatedTools": [
            "html-minifier",
            "url-decoder",
            "base64-encoder"
        ],
        "executionType": "client",
        "seo": {
            "title": "URL Encoder - ToolBox",
            "description": "Use our URL Encoder tool for free."
        },
        "status": "active"
    },
    {
        "id": "url-decoder",
        "name": "URL Decoder",
        "slug": "url-decoder",
        "category": "Developer",
        "description": "Free online URL Decoder tool. Fast, secure, and easy to use.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "url-decoder",
            "url",
            "decoder"
        ],
        "relatedTools": [
            "hash-generator",
            "jwt-decoder"
        ],
        "executionType": "client",
        "seo": {
            "title": "URL Decoder - ToolBox",
            "description": "Use our URL Decoder tool for free."
        },
        "status": "active"
    },
    {
        "id": "jwt-decoder",
        "name": "JWT Decoder",
        "slug": "jwt-decoder",
        "category": "Developer",
        "description": "Free online JWT Decoder tool. Fast, secure, and easy to use.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "jwt-decoder",
            "jwt",
            "decoder"
        ],
        "relatedTools": [
            "json-to-csv",
            "css-formatter",
            "html-minifier"
        ],
        "executionType": "client",
        "seo": {
            "title": "JWT Decoder - ToolBox",
            "description": "Use our JWT Decoder tool for free."
        },
        "status": "active"
    },
    {
        "id": "uuid-generator",
        "name": "UUID Generator",
        "slug": "uuid-generator",
        "category": "Developer",
        "description": "Free online UUID Generator tool. Fast, secure, and easy to use.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "uuid-generator",
            "uuid",
            "generator"
        ],
        "relatedTools": [
            "sql-minifier",
            "xml-validator",
            "css-formatter"
        ],
        "executionType": "client",
        "seo": {
            "title": "UUID Generator - ToolBox",
            "description": "Use our UUID Generator tool for free."
        },
        "status": "active"
    },
    {
        "id": "hash-generator",
        "name": "Hash Generator",
        "slug": "hash-generator",
        "category": "Developer",
        "description": "Free online Hash Generator tool. Fast, secure, and easy to use.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "hash-generator",
            "hash",
            "generator"
        ],
        "relatedTools": [
            "css-minifier",
            "sql-formatter",
            "url-encoder"
        ],
        "executionType": "client",
        "seo": {
            "title": "Hash Generator - ToolBox",
            "description": "Use our Hash Generator tool for free."
        },
        "status": "active"
    },
    {
        "id": "regex-tester",
        "name": "Regex Tester",
        "slug": "regex-tester",
        "category": "Developer",
        "description": "Free online Regex Tester tool. Fast, secure, and easy to use.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "regex-tester",
            "regex",
            "tester"
        ],
        "relatedTools": [
            "sql-formatter",
            "jwt-decoder",
            "html-formatter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Regex Tester - ToolBox",
            "description": "Use our Regex Tester tool for free."
        },
        "status": "active"
    },
    {
        "id": "timestamp-converter",
        "name": "Timestamp Converter",
        "slug": "timestamp-converter",
        "category": "Developer",
        "description": "Free online Timestamp Converter tool. Fast, secure, and easy to use.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "timestamp-converter",
            "timestamp",
            "converter"
        ],
        "relatedTools": [
            "css-formatter",
            "base64-encoder",
            "javascript-formatter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Timestamp Converter - ToolBox",
            "description": "Use our Timestamp Converter tool for free."
        },
        "status": "active"
    },
    {
        "id": "color-converter",
        "name": "Color Converter",
        "slug": "color-converter",
        "category": "Developer",
        "description": "Free online Color Converter tool. Fast, secure, and easy to use.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "color-converter",
            "color",
            "converter"
        ],
        "relatedTools": [
            "xml-validator",
            "html-minifier",
            "regex-tester"
        ],
        "executionType": "client",
        "seo": {
            "title": "Color Converter - ToolBox",
            "description": "Use our Color Converter tool for free."
        },
        "status": "active"
    },
    {
        "id": "date-calculator",
        "name": "Date Calculator",
        "slug": "date-calculator",
        "category": "Date & Time",
        "description": "Free online Date Calculator tool. Fast, secure, and easy to use.",
        "template": "DateTimeToolTemplate",
        "keywords": [
            "date-calculator",
            "date",
            "calculator"
        ],
        "relatedTools": [
            "unix-timestamp-converter",
            "subtract-days-from-date",
            "time-zone-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Date Calculator - ToolBox",
            "description": "Use our Date Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "days-between-dates",
        "name": "Days Between Dates",
        "slug": "days-between-dates",
        "category": "Date & Time",
        "description": "Free online Days Between Dates tool. Fast, secure, and easy to use.",
        "template": "DateTimeToolTemplate",
        "keywords": [
            "days-between-dates",
            "days",
            "between",
            "dates"
        ],
        "relatedTools": [
            "time-difference-calculator",
            "time-zone-converter",
            "add-days-to-date"
        ],
        "executionType": "client",
        "seo": {
            "title": "Days Between Dates - ToolBox",
            "description": "Use our Days Between Dates tool for free."
        },
        "status": "active"
    },
    {
        "id": "business-days-calculator",
        "name": "Business Days Calculator",
        "slug": "business-days-calculator",
        "category": "Date & Time",
        "description": "Free online Business Days Calculator tool. Fast, secure, and easy to use.",
        "template": "DateTimeToolTemplate",
        "keywords": [
            "business-days-calculator",
            "business",
            "days",
            "calculator"
        ],
        "relatedTools": [
            "subtract-days-from-date",
            "countdown-calculator",
            "date-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Business Days Calculator - ToolBox",
            "description": "Use our Business Days Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "add-days-to-date",
        "name": "Add Days to Date",
        "slug": "add-days-to-date",
        "category": "Date & Time",
        "description": "Free online Add Days to Date tool. Fast, secure, and easy to use.",
        "template": "DateTimeToolTemplate",
        "keywords": [
            "add-days-to-date",
            "add",
            "days",
            "to",
            "date"
        ],
        "relatedTools": [
            "date-calculator",
            "days-between-dates",
            "countdown-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Add Days to Date - ToolBox",
            "description": "Use our Add Days to Date tool for free."
        },
        "status": "active"
    },
    {
        "id": "subtract-days-from-date",
        "name": "Subtract Days from Date",
        "slug": "subtract-days-from-date",
        "category": "Date & Time",
        "description": "Free online Subtract Days from Date tool. Fast, secure, and easy to use.",
        "template": "DateTimeToolTemplate",
        "keywords": [
            "subtract-days-from-date",
            "subtract",
            "days",
            "from",
            "date"
        ],
        "relatedTools": [
            "days-between-dates",
            "time-difference-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Subtract Days from Date - ToolBox",
            "description": "Use our Subtract Days from Date tool for free."
        },
        "status": "active"
    },
    {
        "id": "time-difference-calculator",
        "name": "Time Difference Calculator",
        "slug": "time-difference-calculator",
        "category": "Date & Time",
        "description": "Free online Time Difference Calculator tool. Fast, secure, and easy to use.",
        "template": "DateTimeToolTemplate",
        "keywords": [
            "time-difference-calculator",
            "time",
            "difference",
            "calculator"
        ],
        "relatedTools": [
            "countdown-calculator",
            "unix-timestamp-converter",
            "date-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Time Difference Calculator - ToolBox",
            "description": "Use our Time Difference Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "time-zone-converter",
        "name": "Time Zone Converter",
        "slug": "time-zone-converter",
        "category": "Date & Time",
        "description": "Free online Time Zone Converter tool. Fast, secure, and easy to use.",
        "template": "DateTimeToolTemplate",
        "keywords": [
            "time-zone-converter",
            "time",
            "zone",
            "converter"
        ],
        "relatedTools": [
            "days-between-dates",
            "time-difference-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Time Zone Converter - ToolBox",
            "description": "Use our Time Zone Converter tool for free."
        },
        "status": "active"
    },
    {
        "id": "unix-timestamp-converter",
        "name": "Unix Timestamp Converter",
        "slug": "unix-timestamp-converter",
        "category": "Date & Time",
        "description": "Free online Unix Timestamp Converter tool. Fast, secure, and easy to use.",
        "template": "DateTimeToolTemplate",
        "keywords": [
            "unix-timestamp-converter",
            "unix",
            "timestamp",
            "converter"
        ],
        "relatedTools": [
            "date-calculator",
            "time-zone-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Unix Timestamp Converter - ToolBox",
            "description": "Use our Unix Timestamp Converter tool for free."
        },
        "status": "active"
    },
    {
        "id": "countdown-calculator",
        "name": "Countdown Calculator",
        "slug": "countdown-calculator",
        "category": "Date & Time",
        "description": "Free online Countdown Calculator tool. Fast, secure, and easy to use.",
        "template": "DateTimeToolTemplate",
        "keywords": [
            "countdown-calculator",
            "countdown",
            "calculator"
        ],
        "relatedTools": [
            "add-days-to-date",
            "days-between-dates"
        ],
        "executionType": "client",
        "seo": {
            "title": "Countdown Calculator - ToolBox",
            "description": "Use our Countdown Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "week-number-calculator",
        "name": "Week Number Calculator",
        "slug": "week-number-calculator",
        "category": "Date & Time",
        "description": "Free online Week Number Calculator tool. Fast, secure, and easy to use.",
        "template": "DateTimeToolTemplate",
        "keywords": [
            "week-number-calculator",
            "week",
            "number",
            "calculator"
        ],
        "relatedTools": [
            "add-days-to-date",
            "days-between-dates",
            "unix-timestamp-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Week Number Calculator - ToolBox",
            "description": "Use our Week Number Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "sip-calculator",
        "name": "SIP Calculator",
        "slug": "sip-calculator",
        "category": "Finance",
        "description": "Free online SIP Calculator tool. Fast, secure, and easy to use.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "sip-calculator",
            "sip",
            "calculator"
        ],
        "relatedTools": [
            "swp-calculator",
            "cagr-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "SIP Calculator - ToolBox",
            "description": "Use our SIP Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "swp-calculator",
        "name": "SWP Calculator",
        "slug": "swp-calculator",
        "category": "Finance",
        "description": "Free online SWP Calculator tool. Fast, secure, and easy to use.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "swp-calculator",
            "swp",
            "calculator"
        ],
        "relatedTools": [
            "markup-calculator",
            "salary-to-hourly-calculator",
            "gst-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "SWP Calculator - ToolBox",
            "description": "Use our SWP Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "ppf-calculator",
        "name": "PPF Calculator",
        "slug": "ppf-calculator",
        "category": "Finance",
        "description": "Free online PPF Calculator tool. Fast, secure, and easy to use.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "ppf-calculator",
            "ppf",
            "calculator"
        ],
        "relatedTools": [
            "break-even-calculator",
            "sip-calculator",
            "xirr-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "PPF Calculator - ToolBox",
            "description": "Use our PPF Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "fd-calculator",
        "name": "FD Calculator",
        "slug": "fd-calculator",
        "category": "Finance",
        "description": "Free online FD Calculator tool. Fast, secure, and easy to use.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "fd-calculator",
            "fd",
            "calculator"
        ],
        "relatedTools": [
            "inflation-calculator",
            "markup-calculator",
            "salary-to-hourly-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "FD Calculator - ToolBox",
            "description": "Use our FD Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "rd-calculator",
        "name": "RD Calculator",
        "slug": "rd-calculator",
        "category": "Finance",
        "description": "Free online RD Calculator tool. Fast, secure, and easy to use.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "rd-calculator",
            "rd",
            "calculator"
        ],
        "relatedTools": [
            "savings-calculator",
            "salary-to-hourly-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "RD Calculator - ToolBox",
            "description": "Use our RD Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "cagr-calculator",
        "name": "CAGR Calculator",
        "slug": "cagr-calculator",
        "category": "Finance",
        "description": "Free online CAGR Calculator tool. Fast, secure, and easy to use.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "cagr-calculator",
            "cagr",
            "calculator"
        ],
        "relatedTools": [
            "markup-calculator",
            "profit-margin-calculator",
            "loan-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "CAGR Calculator - ToolBox",
            "description": "Use our CAGR Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "xirr-calculator",
        "name": "XIRR Calculator",
        "slug": "xirr-calculator",
        "category": "Finance",
        "description": "Free online XIRR Calculator tool. Fast, secure, and easy to use.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "xirr-calculator",
            "xirr",
            "calculator"
        ],
        "relatedTools": [
            "markup-calculator",
            "income-tax-calculator",
            "fd-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "XIRR Calculator - ToolBox",
            "description": "Use our XIRR Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "inflation-calculator",
        "name": "Inflation Calculator",
        "slug": "inflation-calculator",
        "category": "Finance",
        "description": "Free online Inflation Calculator tool. Fast, secure, and easy to use.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "inflation-calculator",
            "inflation",
            "calculator"
        ],
        "relatedTools": [
            "swp-calculator",
            "profit-margin-calculator",
            "xirr-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Inflation Calculator - ToolBox",
            "description": "Use our Inflation Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "investment-return-calculator",
        "name": "Investment Return Calculator",
        "slug": "investment-return-calculator",
        "category": "Finance",
        "description": "Free online Investment Return Calculator tool. Fast, secure, and easy to use.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "investment-return-calculator",
            "investment",
            "return",
            "calculator"
        ],
        "relatedTools": [
            "gst-calculator",
            "profit-margin-calculator",
            "rd-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Investment Return Calculator - ToolBox",
            "description": "Use our Investment Return Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "loan-interest-calculator",
        "name": "Loan Interest Calculator",
        "slug": "loan-interest-calculator",
        "category": "Finance",
        "description": "Free online Loan Interest Calculator tool. Fast, secure, and easy to use.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "loan-interest-calculator",
            "loan",
            "interest",
            "calculator"
        ],
        "relatedTools": [
            "markup-calculator",
            "savings-calculator",
            "fd-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Loan Interest Calculator - ToolBox",
            "description": "Use our Loan Interest Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "net-worth-calculator",
        "name": "Net Worth Calculator",
        "slug": "net-worth-calculator",
        "category": "Finance",
        "description": "Free online Net Worth Calculator tool. Fast, secure, and easy to use.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "net-worth-calculator",
            "net",
            "worth",
            "calculator"
        ],
        "relatedTools": [
            "retirement-calculator",
            "income-tax-calculator",
            "rd-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Net Worth Calculator - ToolBox",
            "description": "Use our Net Worth Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "salary-to-hourly-calculator",
        "name": "Salary to Hourly Calculator",
        "slug": "salary-to-hourly-calculator",
        "category": "Finance",
        "description": "Free online Salary to Hourly Calculator tool. Fast, secure, and easy to use.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "salary-to-hourly-calculator",
            "salary",
            "to",
            "hourly",
            "calculator"
        ],
        "relatedTools": [
            "xirr-calculator",
            "inflation-calculator",
            "break-even-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Salary to Hourly Calculator - ToolBox",
            "description": "Use our Salary to Hourly Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "gst-calculator",
        "name": "GST Calculator",
        "slug": "gst-calculator",
        "category": "Finance",
        "description": "Free online GST Calculator tool. Fast, secure, and easy to use.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "gst-calculator",
            "gst",
            "calculator"
        ],
        "relatedTools": [
            "savings-calculator",
            "mutual-fund-return-calculator",
            "swp-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "GST Calculator - ToolBox",
            "description": "Use our GST Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "income-tax-calculator",
        "name": "Income Tax Calculator",
        "slug": "income-tax-calculator",
        "category": "Finance",
        "description": "Free online Income Tax Calculator tool. Fast, secure, and easy to use.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "income-tax-calculator",
            "income",
            "tax",
            "calculator"
        ],
        "relatedTools": [
            "sip-calculator",
            "markup-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Income Tax Calculator - ToolBox",
            "description": "Use our Income Tax Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "retirement-calculator",
        "name": "Retirement Calculator",
        "slug": "retirement-calculator",
        "category": "Finance",
        "description": "Free online Retirement Calculator tool. Fast, secure, and easy to use.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "retirement-calculator",
            "retirement",
            "calculator"
        ],
        "relatedTools": [
            "mutual-fund-return-calculator",
            "rd-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Retirement Calculator - ToolBox",
            "description": "Use our Retirement Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "mutual-fund-return-calculator",
        "name": "Mutual Fund Return Calculator",
        "slug": "mutual-fund-return-calculator",
        "category": "Finance",
        "description": "Free online Mutual Fund Return Calculator tool. Fast, secure, and easy to use.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "mutual-fund-return-calculator",
            "mutual",
            "fund",
            "return",
            "calculator"
        ],
        "relatedTools": [
            "inflation-calculator",
            "markup-calculator",
            "sip-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Mutual Fund Return Calculator - ToolBox",
            "description": "Use our Mutual Fund Return Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "break-even-calculator",
        "name": "Break-Even Calculator",
        "slug": "break-even-calculator",
        "category": "Finance",
        "description": "Free online Break-Even Calculator tool. Fast, secure, and easy to use.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "break-even-calculator",
            "break",
            "even",
            "calculator"
        ],
        "relatedTools": [
            "retirement-calculator",
            "rd-calculator",
            "fd-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Break-Even Calculator - ToolBox",
            "description": "Use our Break-Even Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "profit-margin-calculator",
        "name": "Profit Margin Calculator",
        "slug": "profit-margin-calculator",
        "category": "Finance",
        "description": "Free online Profit Margin Calculator tool. Fast, secure, and easy to use.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "profit-margin-calculator",
            "profit",
            "margin",
            "calculator"
        ],
        "relatedTools": [
            "investment-return-calculator",
            "net-worth-calculator",
            "loan-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Profit Margin Calculator - ToolBox",
            "description": "Use our Profit Margin Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "markup-calculator",
        "name": "Markup Calculator",
        "slug": "markup-calculator",
        "category": "Finance",
        "description": "Free online Markup Calculator tool. Fast, secure, and easy to use.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "markup-calculator",
            "markup",
            "calculator"
        ],
        "relatedTools": [
            "retirement-calculator",
            "net-worth-calculator",
            "salary-to-hourly-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Markup Calculator - ToolBox",
            "description": "Use our Markup Calculator tool for free."
        },
        "status": "active"
    },
    {
        "id": "savings-calculator",
        "name": "Savings Calculator",
        "slug": "savings-calculator",
        "category": "Finance",
        "description": "Free online Savings Calculator tool. Fast, secure, and easy to use.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "savings-calculator",
            "savings",
            "calculator"
        ],
        "relatedTools": [
            "swp-calculator",
            "break-even-calculator",
            "cagr-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Savings Calculator - ToolBox",
            "description": "Use our Savings Calculator tool for free."
        },
        "status": "active"
    }
];

export function getToolById(id: string): ToolMetadata | undefined {
    return TOOLS.find(tool => tool.id === id);
}

export function getToolBySlug(slug: string): ToolMetadata | undefined {
    return TOOLS.find(tool => tool.slug === slug);
}

export function getToolsByCategory(category: ToolCategory): ToolMetadata[] {
    return TOOLS.filter(tool => tool.category === category);
}

export function searchTools(query: string): ToolMetadata[] {
    const lowerQuery = query.toLowerCase();
    return TOOLS.filter(tool => 
        tool.name.toLowerCase().includes(lowerQuery) || 
        tool.description.toLowerCase().includes(lowerQuery) ||
        tool.keywords.some(k => k.toLowerCase().includes(lowerQuery)) ||
        tool.category.toLowerCase().includes(lowerQuery)
    );
}
