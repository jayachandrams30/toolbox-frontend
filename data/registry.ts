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

export const CATEGORIES: ToolCategory[] = [
    'PDF',
    'Images',
    'Calculators',
    'Converters',
    'Text',
    'Developer',
    'Date & Time',
    'Finance'
];

export const TOOLS: ToolMetadata[] = [
    {
        "id": "compress-pdf",
        "name": "Compress PDF",
        "slug": "compress-pdf",
        "category": "PDF",
        "description": "Reduce file size while optimizing for maximal PDF quality. Fast, easy, and secure.",
        "template": "PDFToolTemplate",
        "keywords": [
            "compress-pdf",
            "compress",
            "pdf",
            "pdf"
        ],
        "relatedTools": [
            "merge-pdf",
            "split-pdf",
            "pdf-to-jpg",
            "jpg-to-pdf"
        ],
        "executionType": "backend",
        "seo": {
            "title": "Compress PDF - Free Online Tool | ToolBox",
            "description": "Reduce file size while optimizing for maximal PDF quality. Fast, easy, and secure."
        },
        "status": "active"
    },
    {
        "id": "merge-pdf",
        "name": "Merge PDF",
        "slug": "merge-pdf",
        "category": "PDF",
        "description": "Combine multiple PDF documents into a single organized file in seconds.",
        "template": "PDFToolTemplate",
        "keywords": [
            "merge-pdf",
            "merge",
            "pdf",
            "pdf"
        ],
        "relatedTools": [
            "compress-pdf",
            "split-pdf",
            "pdf-to-jpg",
            "jpg-to-pdf"
        ],
        "executionType": "backend",
        "seo": {
            "title": "Merge PDF - Free Online Tool | ToolBox",
            "description": "Combine multiple PDF documents into a single organized file in seconds."
        },
        "status": "active"
    },
    {
        "id": "split-pdf",
        "name": "Split PDF",
        "slug": "split-pdf",
        "category": "PDF",
        "description": "Separate one page or a whole set for easy conversion into independent PDF files.",
        "template": "PDFToolTemplate",
        "keywords": [
            "split-pdf",
            "split",
            "pdf",
            "pdf"
        ],
        "relatedTools": [
            "compress-pdf",
            "merge-pdf",
            "pdf-to-jpg",
            "jpg-to-pdf"
        ],
        "executionType": "backend",
        "seo": {
            "title": "Split PDF - Free Online Tool | ToolBox",
            "description": "Separate one page or a whole set for easy conversion into independent PDF files."
        },
        "status": "active"
    },
    {
        "id": "pdf-to-jpg",
        "name": "PDF to JPG",
        "slug": "pdf-to-jpg",
        "category": "PDF",
        "description": "Convert each PDF page into a high-quality JPG image.",
        "template": "PDFToolTemplate",
        "keywords": [
            "pdf-to-jpg",
            "pdf",
            "to",
            "jpg",
            "pdf"
        ],
        "relatedTools": [
            "compress-pdf",
            "merge-pdf",
            "split-pdf",
            "jpg-to-pdf"
        ],
        "executionType": "backend",
        "seo": {
            "title": "PDF to JPG - Free Online Tool | ToolBox",
            "description": "Convert each PDF page into a high-quality JPG image."
        },
        "status": "active"
    },
    {
        "id": "jpg-to-pdf",
        "name": "JPG to PDF",
        "slug": "jpg-to-pdf",
        "category": "PDF",
        "description": "Convert JPG images to PDF documents instantly with custom layout.",
        "template": "PDFToolTemplate",
        "keywords": [
            "jpg-to-pdf",
            "jpg",
            "to",
            "pdf",
            "pdf"
        ],
        "relatedTools": [
            "compress-pdf",
            "merge-pdf",
            "split-pdf",
            "pdf-to-jpg"
        ],
        "executionType": "backend",
        "seo": {
            "title": "JPG to PDF - Free Online Tool | ToolBox",
            "description": "Convert JPG images to PDF documents instantly with custom layout."
        },
        "status": "active"
    },
    {
        "id": "pdf-to-png",
        "name": "PDF to PNG",
        "slug": "pdf-to-png",
        "category": "PDF",
        "description": "Extract pages from PDF and save them as crisp PNG images.",
        "template": "PDFToolTemplate",
        "keywords": [
            "pdf-to-png",
            "pdf",
            "to",
            "png",
            "pdf"
        ],
        "relatedTools": [
            "compress-pdf",
            "merge-pdf",
            "split-pdf",
            "pdf-to-jpg"
        ],
        "executionType": "backend",
        "seo": {
            "title": "PDF to PNG - Free Online Tool | ToolBox",
            "description": "Extract pages from PDF and save them as crisp PNG images."
        },
        "status": "active"
    },
    {
        "id": "png-to-pdf",
        "name": "PNG to PDF",
        "slug": "png-to-pdf",
        "category": "PDF",
        "description": "Convert PNG images to PDF files with custom orientation and margins.",
        "template": "PDFToolTemplate",
        "keywords": [
            "png-to-pdf",
            "png",
            "to",
            "pdf",
            "pdf"
        ],
        "relatedTools": [
            "compress-pdf",
            "merge-pdf",
            "split-pdf",
            "pdf-to-jpg"
        ],
        "executionType": "backend",
        "seo": {
            "title": "PNG to PDF - Free Online Tool | ToolBox",
            "description": "Convert PNG images to PDF files with custom orientation and margins."
        },
        "status": "active"
    },
    {
        "id": "pdf-to-word",
        "name": "PDF to Word",
        "slug": "pdf-to-word",
        "category": "PDF",
        "description": "Convert PDF files into editable DOCX Word documents accurately.",
        "template": "PDFToolTemplate",
        "keywords": [
            "pdf-to-word",
            "pdf",
            "to",
            "word",
            "pdf"
        ],
        "relatedTools": [
            "compress-pdf",
            "merge-pdf",
            "split-pdf",
            "pdf-to-jpg"
        ],
        "executionType": "backend",
        "seo": {
            "title": "PDF to Word - Free Online Tool | ToolBox",
            "description": "Convert PDF files into editable DOCX Word documents accurately."
        },
        "status": "active"
    },
    {
        "id": "word-to-pdf",
        "name": "Word to PDF",
        "slug": "word-to-pdf",
        "category": "PDF",
        "description": "Convert Microsoft Word DOC and DOCX files into standard PDF format.",
        "template": "PDFToolTemplate",
        "keywords": [
            "word-to-pdf",
            "word",
            "to",
            "pdf",
            "pdf"
        ],
        "relatedTools": [
            "compress-pdf",
            "merge-pdf",
            "split-pdf",
            "pdf-to-jpg"
        ],
        "executionType": "backend",
        "seo": {
            "title": "Word to PDF - Free Online Tool | ToolBox",
            "description": "Convert Microsoft Word DOC and DOCX files into standard PDF format."
        },
        "status": "active"
    },
    {
        "id": "pdf-to-excel",
        "name": "PDF to Excel",
        "slug": "pdf-to-excel",
        "category": "PDF",
        "description": "Extract tabular data from PDF into editable Excel XLSX spreadsheets.",
        "template": "PDFToolTemplate",
        "keywords": [
            "pdf-to-excel",
            "pdf",
            "to",
            "excel",
            "pdf"
        ],
        "relatedTools": [
            "compress-pdf",
            "merge-pdf",
            "split-pdf",
            "pdf-to-jpg"
        ],
        "executionType": "backend",
        "seo": {
            "title": "PDF to Excel - Free Online Tool | ToolBox",
            "description": "Extract tabular data from PDF into editable Excel XLSX spreadsheets."
        },
        "status": "active"
    },
    {
        "id": "excel-to-pdf",
        "name": "Excel to PDF",
        "slug": "excel-to-pdf",
        "category": "PDF",
        "description": "Convert Excel spreadsheets into clean, print-ready PDF files.",
        "template": "PDFToolTemplate",
        "keywords": [
            "excel-to-pdf",
            "excel",
            "to",
            "pdf",
            "pdf"
        ],
        "relatedTools": [
            "compress-pdf",
            "merge-pdf",
            "split-pdf",
            "pdf-to-jpg"
        ],
        "executionType": "backend",
        "seo": {
            "title": "Excel to PDF - Free Online Tool | ToolBox",
            "description": "Convert Excel spreadsheets into clean, print-ready PDF files."
        },
        "status": "active"
    },
    {
        "id": "rotate-pdf",
        "name": "Rotate PDF",
        "slug": "rotate-pdf",
        "category": "PDF",
        "description": "Rotate specific or all PDF pages 90, 180, or 270 degrees permanently.",
        "template": "PDFToolTemplate",
        "keywords": [
            "rotate-pdf",
            "rotate",
            "pdf",
            "pdf"
        ],
        "relatedTools": [
            "compress-pdf",
            "merge-pdf",
            "split-pdf",
            "pdf-to-jpg"
        ],
        "executionType": "backend",
        "seo": {
            "title": "Rotate PDF - Free Online Tool | ToolBox",
            "description": "Rotate specific or all PDF pages 90, 180, or 270 degrees permanently."
        },
        "status": "active"
    },
    {
        "id": "delete-pdf-pages",
        "name": "Delete PDF Pages",
        "slug": "delete-pdf-pages",
        "category": "PDF",
        "description": "Remove unwanted pages from your PDF document easily.",
        "template": "PDFToolTemplate",
        "keywords": [
            "delete-pdf-pages",
            "delete",
            "pdf",
            "pages",
            "pdf"
        ],
        "relatedTools": [
            "compress-pdf",
            "merge-pdf",
            "split-pdf",
            "pdf-to-jpg"
        ],
        "executionType": "backend",
        "seo": {
            "title": "Delete PDF Pages - Free Online Tool | ToolBox",
            "description": "Remove unwanted pages from your PDF document easily."
        },
        "status": "active"
    },
    {
        "id": "extract-pdf-pages",
        "name": "Extract PDF Pages",
        "slug": "extract-pdf-pages",
        "category": "PDF",
        "description": "Extract specific pages from a PDF and save them as a new PDF document.",
        "template": "PDFToolTemplate",
        "keywords": [
            "extract-pdf-pages",
            "extract",
            "pdf",
            "pages",
            "pdf"
        ],
        "relatedTools": [
            "compress-pdf",
            "merge-pdf",
            "split-pdf",
            "pdf-to-jpg"
        ],
        "executionType": "backend",
        "seo": {
            "title": "Extract PDF Pages - Free Online Tool | ToolBox",
            "description": "Extract specific pages from a PDF and save them as a new PDF document."
        },
        "status": "active"
    },
    {
        "id": "pdf-page-numbering",
        "name": "PDF Page Numbering",
        "slug": "pdf-page-numbering",
        "category": "PDF",
        "description": "Add customizable page numbers to your PDF documents effortlessly.",
        "template": "PDFToolTemplate",
        "keywords": [
            "pdf-page-numbering",
            "pdf",
            "page",
            "numbering",
            "pdf"
        ],
        "relatedTools": [
            "compress-pdf",
            "merge-pdf",
            "split-pdf",
            "pdf-to-jpg"
        ],
        "executionType": "backend",
        "seo": {
            "title": "PDF Page Numbering - Free Online Tool | ToolBox",
            "description": "Add customizable page numbers to your PDF documents effortlessly."
        },
        "status": "active"
    },
    {
        "id": "pdf-password-protection",
        "name": "PDF Password Protection",
        "slug": "pdf-password-protection",
        "category": "PDF",
        "description": "Protect your sensitive PDF files with strong AES encryption and passwords.",
        "template": "PDFToolTemplate",
        "keywords": [
            "pdf-password-protection",
            "pdf",
            "password",
            "protection",
            "pdf"
        ],
        "relatedTools": [
            "compress-pdf",
            "merge-pdf",
            "split-pdf",
            "pdf-to-jpg"
        ],
        "executionType": "backend",
        "seo": {
            "title": "PDF Password Protection - Free Online Tool | ToolBox",
            "description": "Protect your sensitive PDF files with strong AES encryption and passwords."
        },
        "status": "active"
    },
    {
        "id": "pdf-unlock",
        "name": "PDF Unlock",
        "slug": "pdf-unlock",
        "category": "PDF",
        "description": "Remove password security and restrictions from your PDF files.",
        "template": "PDFToolTemplate",
        "keywords": [
            "pdf-unlock",
            "pdf",
            "unlock",
            "pdf"
        ],
        "relatedTools": [
            "compress-pdf",
            "merge-pdf",
            "split-pdf",
            "pdf-to-jpg"
        ],
        "executionType": "backend",
        "seo": {
            "title": "PDF Unlock - Free Online Tool | ToolBox",
            "description": "Remove password security and restrictions from your PDF files."
        },
        "status": "active"
    },
    {
        "id": "pdf-watermark",
        "name": "PDF Watermark",
        "slug": "pdf-watermark",
        "category": "PDF",
        "description": "Add text or image watermarks across PDF pages with custom opacity and position.",
        "template": "PDFToolTemplate",
        "keywords": [
            "pdf-watermark",
            "pdf",
            "watermark",
            "pdf"
        ],
        "relatedTools": [
            "compress-pdf",
            "merge-pdf",
            "split-pdf",
            "pdf-to-jpg"
        ],
        "executionType": "backend",
        "seo": {
            "title": "PDF Watermark - Free Online Tool | ToolBox",
            "description": "Add text or image watermarks across PDF pages with custom opacity and position."
        },
        "status": "active"
    },
    {
        "id": "pdf-metadata-editor",
        "name": "PDF Metadata Editor",
        "slug": "pdf-metadata-editor",
        "category": "PDF",
        "description": "View, edit, or remove PDF metadata including Title, Author, and Subject.",
        "template": "PDFToolTemplate",
        "keywords": [
            "pdf-metadata-editor",
            "pdf",
            "metadata",
            "editor",
            "pdf"
        ],
        "relatedTools": [
            "compress-pdf",
            "merge-pdf",
            "split-pdf",
            "pdf-to-jpg"
        ],
        "executionType": "backend",
        "seo": {
            "title": "PDF Metadata Editor - Free Online Tool | ToolBox",
            "description": "View, edit, or remove PDF metadata including Title, Author, and Subject."
        },
        "status": "active"
    },
    {
        "id": "pdf-repair",
        "name": "PDF Repair",
        "slug": "pdf-repair",
        "category": "PDF",
        "description": "Recover and repair damaged or corrupted PDF files.",
        "template": "PDFToolTemplate",
        "keywords": [
            "pdf-repair",
            "pdf",
            "repair",
            "pdf"
        ],
        "relatedTools": [
            "compress-pdf",
            "merge-pdf",
            "split-pdf",
            "pdf-to-jpg"
        ],
        "executionType": "backend",
        "seo": {
            "title": "PDF Repair - Free Online Tool | ToolBox",
            "description": "Recover and repair damaged or corrupted PDF files."
        },
        "status": "active"
    },
    {
        "id": "image-compressor",
        "name": "Image Compressor",
        "slug": "image-compressor",
        "category": "Images",
        "description": "Reduce the file size of JPG, PNG, and WebP images without noticeable quality loss.",
        "template": "ImageToolTemplate",
        "keywords": [
            "image-compressor",
            "image",
            "compressor",
            "images"
        ],
        "relatedTools": [
            "image-resizer",
            "image-converter",
            "jpg-to-png",
            "png-to-jpg"
        ],
        "executionType": "backend",
        "seo": {
            "title": "Image Compressor - Free Online Tool | ToolBox",
            "description": "Reduce the file size of JPG, PNG, and WebP images without noticeable quality loss."
        },
        "status": "active"
    },
    {
        "id": "image-resizer",
        "name": "Image Resizer",
        "slug": "image-resizer",
        "category": "Images",
        "description": "Resize image dimensions in pixels or percentage while maintaining aspect ratio.",
        "template": "ImageToolTemplate",
        "keywords": [
            "image-resizer",
            "image",
            "resizer",
            "images"
        ],
        "relatedTools": [
            "image-compressor",
            "image-converter",
            "jpg-to-png",
            "png-to-jpg"
        ],
        "executionType": "backend",
        "seo": {
            "title": "Image Resizer - Free Online Tool | ToolBox",
            "description": "Resize image dimensions in pixels or percentage while maintaining aspect ratio."
        },
        "status": "active"
    },
    {
        "id": "image-converter",
        "name": "Image Converter",
        "slug": "image-converter",
        "category": "Images",
        "description": "Convert images between JPG, PNG, WEBP, GIF, BMP, and ICO formats instantly.",
        "template": "ImageToolTemplate",
        "keywords": [
            "image-converter",
            "image",
            "converter",
            "images"
        ],
        "relatedTools": [
            "image-compressor",
            "image-resizer",
            "jpg-to-png",
            "png-to-jpg"
        ],
        "executionType": "client",
        "seo": {
            "title": "Image Converter - Free Online Tool | ToolBox",
            "description": "Convert images between JPG, PNG, WEBP, GIF, BMP, and ICO formats instantly."
        },
        "status": "active"
    },
    {
        "id": "jpg-to-png",
        "name": "JPG to PNG",
        "slug": "jpg-to-png",
        "category": "Images",
        "description": "Convert JPG images to transparent PNG format with high fidelity.",
        "template": "ImageToolTemplate",
        "keywords": [
            "jpg-to-png",
            "jpg",
            "to",
            "png",
            "images"
        ],
        "relatedTools": [
            "image-compressor",
            "image-resizer",
            "image-converter",
            "png-to-jpg"
        ],
        "executionType": "client",
        "seo": {
            "title": "JPG to PNG - Free Online Tool | ToolBox",
            "description": "Convert JPG images to transparent PNG format with high fidelity."
        },
        "status": "active"
    },
    {
        "id": "png-to-jpg",
        "name": "PNG to JPG",
        "slug": "png-to-jpg",
        "category": "Images",
        "description": "Convert PNG images to lightweight JPG format with adjustable quality.",
        "template": "ImageToolTemplate",
        "keywords": [
            "png-to-jpg",
            "png",
            "to",
            "jpg",
            "images"
        ],
        "relatedTools": [
            "image-compressor",
            "image-resizer",
            "image-converter",
            "jpg-to-png"
        ],
        "executionType": "client",
        "seo": {
            "title": "PNG to JPG - Free Online Tool | ToolBox",
            "description": "Convert PNG images to lightweight JPG format with adjustable quality."
        },
        "status": "active"
    },
    {
        "id": "webp-to-jpg",
        "name": "WEBP to JPG",
        "slug": "webp-to-jpg",
        "category": "Images",
        "description": "Convert modern WebP images to widely compatible JPG format.",
        "template": "ImageToolTemplate",
        "keywords": [
            "webp-to-jpg",
            "webp",
            "to",
            "jpg",
            "images"
        ],
        "relatedTools": [
            "image-compressor",
            "image-resizer",
            "image-converter",
            "jpg-to-png"
        ],
        "executionType": "client",
        "seo": {
            "title": "WEBP to JPG - Free Online Tool | ToolBox",
            "description": "Convert modern WebP images to widely compatible JPG format."
        },
        "status": "active"
    },
    {
        "id": "jpg-to-webp",
        "name": "JPG to WEBP",
        "slug": "jpg-to-webp",
        "category": "Images",
        "description": "Convert JPG images to next-gen WebP format for faster web performance.",
        "template": "ImageToolTemplate",
        "keywords": [
            "jpg-to-webp",
            "jpg",
            "to",
            "webp",
            "images"
        ],
        "relatedTools": [
            "image-compressor",
            "image-resizer",
            "image-converter",
            "jpg-to-png"
        ],
        "executionType": "client",
        "seo": {
            "title": "JPG to WEBP - Free Online Tool | ToolBox",
            "description": "Convert JPG images to next-gen WebP format for faster web performance."
        },
        "status": "active"
    },
    {
        "id": "png-to-webp",
        "name": "PNG to WEBP",
        "slug": "png-to-webp",
        "category": "Images",
        "description": "Convert PNG images to compressed WebP with alpha transparency preserved.",
        "template": "ImageToolTemplate",
        "keywords": [
            "png-to-webp",
            "png",
            "to",
            "webp",
            "images"
        ],
        "relatedTools": [
            "image-compressor",
            "image-resizer",
            "image-converter",
            "jpg-to-png"
        ],
        "executionType": "client",
        "seo": {
            "title": "PNG to WEBP - Free Online Tool | ToolBox",
            "description": "Convert PNG images to compressed WebP with alpha transparency preserved."
        },
        "status": "active"
    },
    {
        "id": "image-cropper",
        "name": "Image Cropper",
        "slug": "image-cropper",
        "category": "Images",
        "description": "Crop images to exact dimensions or standard aspect ratios (16:9, 4:3, 1:1).",
        "template": "ImageToolTemplate",
        "keywords": [
            "image-cropper",
            "image",
            "cropper",
            "images"
        ],
        "relatedTools": [
            "image-compressor",
            "image-resizer",
            "image-converter",
            "jpg-to-png"
        ],
        "executionType": "client",
        "seo": {
            "title": "Image Cropper - Free Online Tool | ToolBox",
            "description": "Crop images to exact dimensions or standard aspect ratios (16:9, 4:3, 1:1)."
        },
        "status": "active"
    },
    {
        "id": "image-rotator",
        "name": "Image Rotator",
        "slug": "image-rotator",
        "category": "Images",
        "description": "Rotate images by 90, 180, or 270 degrees with one click.",
        "template": "ImageToolTemplate",
        "keywords": [
            "image-rotator",
            "image",
            "rotator",
            "images"
        ],
        "relatedTools": [
            "image-compressor",
            "image-resizer",
            "image-converter",
            "jpg-to-png"
        ],
        "executionType": "client",
        "seo": {
            "title": "Image Rotator - Free Online Tool | ToolBox",
            "description": "Rotate images by 90, 180, or 270 degrees with one click."
        },
        "status": "active"
    },
    {
        "id": "image-flipper",
        "name": "Image Flipper",
        "slug": "image-flipper",
        "category": "Images",
        "description": "Flip images horizontally or vertically instantly.",
        "template": "ImageToolTemplate",
        "keywords": [
            "image-flipper",
            "image",
            "flipper",
            "images"
        ],
        "relatedTools": [
            "image-compressor",
            "image-resizer",
            "image-converter",
            "jpg-to-png"
        ],
        "executionType": "client",
        "seo": {
            "title": "Image Flipper - Free Online Tool | ToolBox",
            "description": "Flip images horizontally or vertically instantly."
        },
        "status": "active"
    },
    {
        "id": "image-quality-enhancer",
        "name": "Image Quality Enhancer",
        "slug": "image-quality-enhancer",
        "category": "Images",
        "description": "Enhance image clarity, sharpness, and contrast.",
        "template": "ImageToolTemplate",
        "keywords": [
            "image-quality-enhancer",
            "image",
            "quality",
            "enhancer",
            "images"
        ],
        "relatedTools": [
            "image-compressor",
            "image-resizer",
            "image-converter",
            "jpg-to-png"
        ],
        "executionType": "backend",
        "seo": {
            "title": "Image Quality Enhancer - Free Online Tool | ToolBox",
            "description": "Enhance image clarity, sharpness, and contrast."
        },
        "status": "active"
    },
    {
        "id": "image-background-remover",
        "name": "Image Background Remover",
        "slug": "image-background-remover",
        "category": "Images",
        "description": "Automatically remove image backgrounds with high precision edge detection.",
        "template": "ImageToolTemplate",
        "keywords": [
            "image-background-remover",
            "image",
            "background",
            "remover",
            "images"
        ],
        "relatedTools": [
            "image-compressor",
            "image-resizer",
            "image-converter",
            "jpg-to-png"
        ],
        "executionType": "backend",
        "seo": {
            "title": "Image Background Remover - Free Online Tool | ToolBox",
            "description": "Automatically remove image backgrounds with high precision edge detection."
        },
        "status": "active"
    },
    {
        "id": "image-metadata-remover",
        "name": "Image Metadata Remover",
        "slug": "image-metadata-remover",
        "category": "Images",
        "description": "Remove EXIF, GPS location, and camera metadata from your images for privacy.",
        "template": "ImageToolTemplate",
        "keywords": [
            "image-metadata-remover",
            "image",
            "metadata",
            "remover",
            "images"
        ],
        "relatedTools": [
            "image-compressor",
            "image-resizer",
            "image-converter",
            "jpg-to-png"
        ],
        "executionType": "client",
        "seo": {
            "title": "Image Metadata Remover - Free Online Tool | ToolBox",
            "description": "Remove EXIF, GPS location, and camera metadata from your images for privacy."
        },
        "status": "active"
    },
    {
        "id": "favicon-generator",
        "name": "Favicon Generator",
        "slug": "favicon-generator",
        "category": "Images",
        "description": "Generate multi-resolution favicon.ico and PNG icons for your website.",
        "template": "ImageToolTemplate",
        "keywords": [
            "favicon-generator",
            "favicon",
            "generator",
            "images"
        ],
        "relatedTools": [
            "image-compressor",
            "image-resizer",
            "image-converter",
            "jpg-to-png"
        ],
        "executionType": "client",
        "seo": {
            "title": "Favicon Generator - Free Online Tool | ToolBox",
            "description": "Generate multi-resolution favicon.ico and PNG icons for your website."
        },
        "status": "active"
    },
    {
        "id": "image-to-base64",
        "name": "Image to Base64",
        "slug": "image-to-base64",
        "category": "Images",
        "description": "Convert image files into Base64 encoded data URI strings for CSS/HTML embedding.",
        "template": "ImageToolTemplate",
        "keywords": [
            "image-to-base64",
            "image",
            "to",
            "base64",
            "images"
        ],
        "relatedTools": [
            "image-compressor",
            "image-resizer",
            "image-converter",
            "jpg-to-png"
        ],
        "executionType": "client",
        "seo": {
            "title": "Image to Base64 - Free Online Tool | ToolBox",
            "description": "Convert image files into Base64 encoded data URI strings for CSS/HTML embedding."
        },
        "status": "active"
    },
    {
        "id": "base64-to-image",
        "name": "Base64 to Image",
        "slug": "base64-to-image",
        "category": "Images",
        "description": "Decode Base64 strings and preview or download them as image files.",
        "template": "ImageToolTemplate",
        "keywords": [
            "base64-to-image",
            "base64",
            "to",
            "image",
            "images"
        ],
        "relatedTools": [
            "image-compressor",
            "image-resizer",
            "image-converter",
            "jpg-to-png"
        ],
        "executionType": "client",
        "seo": {
            "title": "Base64 to Image - Free Online Tool | ToolBox",
            "description": "Decode Base64 strings and preview or download them as image files."
        },
        "status": "active"
    },
    {
        "id": "image-color-picker",
        "name": "Image Color Picker",
        "slug": "image-color-picker",
        "category": "Images",
        "description": "Pick any color from an uploaded image to get HEX, RGB, and HSL codes.",
        "template": "ImageToolTemplate",
        "keywords": [
            "image-color-picker",
            "image",
            "color",
            "picker",
            "images"
        ],
        "relatedTools": [
            "image-compressor",
            "image-resizer",
            "image-converter",
            "jpg-to-png"
        ],
        "executionType": "client",
        "seo": {
            "title": "Image Color Picker - Free Online Tool | ToolBox",
            "description": "Pick any color from an uploaded image to get HEX, RGB, and HSL codes."
        },
        "status": "active"
    },
    {
        "id": "image-blur-tool",
        "name": "Image Blur Tool",
        "slug": "image-blur-tool",
        "category": "Images",
        "description": "Apply Gaussian blur to entire images or sensitive regions.",
        "template": "ImageToolTemplate",
        "keywords": [
            "image-blur-tool",
            "image",
            "blur",
            "tool",
            "images"
        ],
        "relatedTools": [
            "image-compressor",
            "image-resizer",
            "image-converter",
            "jpg-to-png"
        ],
        "executionType": "client",
        "seo": {
            "title": "Image Blur Tool - Free Online Tool | ToolBox",
            "description": "Apply Gaussian blur to entire images or sensitive regions."
        },
        "status": "active"
    },
    {
        "id": "image-watermark",
        "name": "Image Watermark",
        "slug": "image-watermark",
        "category": "Images",
        "description": "Overlay custom text or logo watermarks on photos to protect your work.",
        "template": "ImageToolTemplate",
        "keywords": [
            "image-watermark",
            "image",
            "watermark",
            "images"
        ],
        "relatedTools": [
            "image-compressor",
            "image-resizer",
            "image-converter",
            "jpg-to-png"
        ],
        "executionType": "client",
        "seo": {
            "title": "Image Watermark - Free Online Tool | ToolBox",
            "description": "Overlay custom text or logo watermarks on photos to protect your work."
        },
        "status": "active"
    },
    {
        "id": "emi-calculator",
        "name": "EMI Calculator",
        "slug": "emi-calculator",
        "category": "Calculators",
        "description": "Calculate Equated Monthly Installments (EMI) with principal and interest breakdown.",
        "template": "CalculatorTemplate",
        "keywords": [
            "emi-calculator",
            "emi",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "loan-calculator",
            "mortgage-calculator",
            "simple-interest-calculator",
            "compound-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "EMI Calculator - Free Online Tool | ToolBox",
            "description": "Calculate Equated Monthly Installments (EMI) with principal and interest breakdown."
        },
        "status": "active"
    },
    {
        "id": "loan-calculator",
        "name": "Loan Calculator",
        "slug": "loan-calculator",
        "category": "Calculators",
        "description": "Compute monthly payments, total repayment, and amortization schedule for loans.",
        "template": "CalculatorTemplate",
        "keywords": [
            "loan-calculator",
            "loan",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "mortgage-calculator",
            "simple-interest-calculator",
            "compound-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Loan Calculator - Free Online Tool | ToolBox",
            "description": "Compute monthly payments, total repayment, and amortization schedule for loans."
        },
        "status": "active"
    },
    {
        "id": "mortgage-calculator",
        "name": "Mortgage Calculator",
        "slug": "mortgage-calculator",
        "category": "Calculators",
        "description": "Calculate home mortgage payments including principal, interest, taxes, and insurance.",
        "template": "CalculatorTemplate",
        "keywords": [
            "mortgage-calculator",
            "mortgage",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "simple-interest-calculator",
            "compound-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Mortgage Calculator - Free Online Tool | ToolBox",
            "description": "Calculate home mortgage payments including principal, interest, taxes, and insurance."
        },
        "status": "active"
    },
    {
        "id": "simple-interest-calculator",
        "name": "Simple Interest Calculator",
        "slug": "simple-interest-calculator",
        "category": "Calculators",
        "description": "Calculate simple interest earnings or payments based on principal, rate, and time.",
        "template": "CalculatorTemplate",
        "keywords": [
            "simple-interest-calculator",
            "simple",
            "interest",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "mortgage-calculator",
            "compound-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Simple Interest Calculator - Free Online Tool | ToolBox",
            "description": "Calculate simple interest earnings or payments based on principal, rate, and time."
        },
        "status": "active"
    },
    {
        "id": "compound-interest-calculator",
        "name": "Compound Interest Calculator",
        "slug": "compound-interest-calculator",
        "category": "Calculators",
        "description": "Calculate compound interest growth over time with annual, monthly, or daily compounding.",
        "template": "CalculatorTemplate",
        "keywords": [
            "compound-interest-calculator",
            "compound",
            "interest",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "mortgage-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Compound Interest Calculator - Free Online Tool | ToolBox",
            "description": "Calculate compound interest growth over time with annual, monthly, or daily compounding."
        },
        "status": "active"
    },
    {
        "id": "percentage-calculator",
        "name": "Percentage Calculator",
        "slug": "percentage-calculator",
        "category": "Calculators",
        "description": "Find the percentage of a number, percentage value, or base value quickly.",
        "template": "CalculatorTemplate",
        "keywords": [
            "percentage-calculator",
            "percentage",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "mortgage-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Percentage Calculator - Free Online Tool | ToolBox",
            "description": "Find the percentage of a number, percentage value, or base value quickly."
        },
        "status": "active"
    },
    {
        "id": "percentage-increase-calculator",
        "name": "Percentage Increase Calculator",
        "slug": "percentage-increase-calculator",
        "category": "Calculators",
        "description": "Calculate the percentage increase from one value to another.",
        "template": "CalculatorTemplate",
        "keywords": [
            "percentage-increase-calculator",
            "percentage",
            "increase",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "mortgage-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Percentage Increase Calculator - Free Online Tool | ToolBox",
            "description": "Calculate the percentage increase from one value to another."
        },
        "status": "active"
    },
    {
        "id": "percentage-difference-calculator",
        "name": "Percentage Difference Calculator",
        "slug": "percentage-difference-calculator",
        "category": "Calculators",
        "description": "Calculate the absolute and relative percentage difference between two numbers.",
        "template": "CalculatorTemplate",
        "keywords": [
            "percentage-difference-calculator",
            "percentage",
            "difference",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "mortgage-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Percentage Difference Calculator - Free Online Tool | ToolBox",
            "description": "Calculate the absolute and relative percentage difference between two numbers."
        },
        "status": "active"
    },
    {
        "id": "discount-calculator",
        "name": "Discount Calculator",
        "slug": "discount-calculator",
        "category": "Calculators",
        "description": "Calculate the final price after percentage discounts and tax.",
        "template": "CalculatorTemplate",
        "keywords": [
            "discount-calculator",
            "discount",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "mortgage-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Discount Calculator - Free Online Tool | ToolBox",
            "description": "Calculate the final price after percentage discounts and tax."
        },
        "status": "active"
    },
    {
        "id": "tip-calculator",
        "name": "Tip Calculator",
        "slug": "tip-calculator",
        "category": "Calculators",
        "description": "Calculate restaurant tips and split bills evenly among multiple people.",
        "template": "CalculatorTemplate",
        "keywords": [
            "tip-calculator",
            "tip",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "mortgage-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Tip Calculator - Free Online Tool | ToolBox",
            "description": "Calculate restaurant tips and split bills evenly among multiple people."
        },
        "status": "active"
    },
    {
        "id": "age-calculator",
        "name": "Age Calculator",
        "slug": "age-calculator",
        "category": "Calculators",
        "description": "Calculate exact age in years, months, days, hours, and minutes from date of birth.",
        "template": "CalculatorTemplate",
        "keywords": [
            "age-calculator",
            "age",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "mortgage-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Age Calculator - Free Online Tool | ToolBox",
            "description": "Calculate exact age in years, months, days, hours, and minutes from date of birth."
        },
        "status": "active"
    },
    {
        "id": "bmi-calculator",
        "name": "BMI Calculator",
        "slug": "bmi-calculator",
        "category": "Calculators",
        "description": "Calculate Body Mass Index (BMI) and health category based on height and weight.",
        "template": "CalculatorTemplate",
        "keywords": [
            "bmi-calculator",
            "bmi",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "mortgage-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "BMI Calculator - Free Online Tool | ToolBox",
            "description": "Calculate Body Mass Index (BMI) and health category based on height and weight."
        },
        "status": "active"
    },
    {
        "id": "bmr-calculator",
        "name": "BMR Calculator",
        "slug": "bmr-calculator",
        "category": "Calculators",
        "description": "Calculate Basal Metabolic Rate (BMR) using Mifflin-St Jeor and Harris-Benedict formulas.",
        "template": "CalculatorTemplate",
        "keywords": [
            "bmr-calculator",
            "bmr",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "mortgage-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "BMR Calculator - Free Online Tool | ToolBox",
            "description": "Calculate Basal Metabolic Rate (BMR) using Mifflin-St Jeor and Harris-Benedict formulas."
        },
        "status": "active"
    },
    {
        "id": "calorie-calculator",
        "name": "Calorie Calculator",
        "slug": "calorie-calculator",
        "category": "Calculators",
        "description": "Estimate daily calorie requirements for weight maintenance, loss, or gain.",
        "template": "CalculatorTemplate",
        "keywords": [
            "calorie-calculator",
            "calorie",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "mortgage-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Calorie Calculator - Free Online Tool | ToolBox",
            "description": "Estimate daily calorie requirements for weight maintenance, loss, or gain."
        },
        "status": "active"
    },
    {
        "id": "time-calculator",
        "name": "Time Calculator",
        "slug": "time-calculator",
        "category": "Calculators",
        "description": "Add, subtract, multiply, or divide hours, minutes, and seconds.",
        "template": "CalculatorTemplate",
        "keywords": [
            "time-calculator",
            "time",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "mortgage-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Time Calculator - Free Online Tool | ToolBox",
            "description": "Add, subtract, multiply, or divide hours, minutes, and seconds."
        },
        "status": "active"
    },
    {
        "id": "date-difference-calculator",
        "name": "Date Difference Calculator",
        "slug": "date-difference-calculator",
        "category": "Calculators",
        "description": "Calculate the exact number of days, weeks, and months between two dates.",
        "template": "CalculatorTemplate",
        "keywords": [
            "date-difference-calculator",
            "date",
            "difference",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "mortgage-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Date Difference Calculator - Free Online Tool | ToolBox",
            "description": "Calculate the exact number of days, weeks, and months between two dates."
        },
        "status": "active"
    },
    {
        "id": "hours-calculator",
        "name": "Hours Calculator",
        "slug": "hours-calculator",
        "category": "Calculators",
        "description": "Calculate total worked hours, breaks, and wages for timesheets.",
        "template": "CalculatorTemplate",
        "keywords": [
            "hours-calculator",
            "hours",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "mortgage-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Hours Calculator - Free Online Tool | ToolBox",
            "description": "Calculate total worked hours, breaks, and wages for timesheets."
        },
        "status": "active"
    },
    {
        "id": "average-calculator",
        "name": "Average Calculator",
        "slug": "average-calculator",
        "category": "Calculators",
        "description": "Calculate Mean, Median, Mode, Range, and Geometric Mean for a dataset.",
        "template": "CalculatorTemplate",
        "keywords": [
            "average-calculator",
            "average",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "mortgage-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Average Calculator - Free Online Tool | ToolBox",
            "description": "Calculate Mean, Median, Mode, Range, and Geometric Mean for a dataset."
        },
        "status": "active"
    },
    {
        "id": "ratio-calculator",
        "name": "Ratio Calculator",
        "slug": "ratio-calculator",
        "category": "Calculators",
        "description": "Simplify ratios, scale ratios up or down, and solve for missing ratio variables.",
        "template": "CalculatorTemplate",
        "keywords": [
            "ratio-calculator",
            "ratio",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "mortgage-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Ratio Calculator - Free Online Tool | ToolBox",
            "description": "Simplify ratios, scale ratios up or down, and solve for missing ratio variables."
        },
        "status": "active"
    },
    {
        "id": "fraction-calculator",
        "name": "Fraction Calculator",
        "slug": "fraction-calculator",
        "category": "Calculators",
        "description": "Add, subtract, multiply, and divide fractions with step-by-step simplification.",
        "template": "CalculatorTemplate",
        "keywords": [
            "fraction-calculator",
            "fraction",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "mortgage-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Fraction Calculator - Free Online Tool | ToolBox",
            "description": "Add, subtract, multiply, and divide fractions with step-by-step simplification."
        },
        "status": "active"
    },
    {
        "id": "scientific-calculator",
        "name": "Scientific Calculator",
        "slug": "scientific-calculator",
        "category": "Calculators",
        "description": "Perform advanced mathematical operations including trigonometry, logarithms, and powers.",
        "template": "CalculatorTemplate",
        "keywords": [
            "scientific-calculator",
            "scientific",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "mortgage-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Scientific Calculator - Free Online Tool | ToolBox",
            "description": "Perform advanced mathematical operations including trigonometry, logarithms, and powers."
        },
        "status": "active"
    },
    {
        "id": "random-number-generator",
        "name": "Random Number Generator",
        "slug": "random-number-generator",
        "category": "Calculators",
        "description": "Generate single or multiple cryptographically random numbers within custom ranges.",
        "template": "CalculatorTemplate",
        "keywords": [
            "random-number-generator",
            "random",
            "number",
            "generator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "mortgage-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Random Number Generator - Free Online Tool | ToolBox",
            "description": "Generate single or multiple cryptographically random numbers within custom ranges."
        },
        "status": "active"
    },
    {
        "id": "probability-calculator",
        "name": "Probability Calculator",
        "slug": "probability-calculator",
        "category": "Calculators",
        "description": "Calculate independent, dependent, and conditional probabilities easily.",
        "template": "CalculatorTemplate",
        "keywords": [
            "probability-calculator",
            "probability",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "mortgage-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Probability Calculator - Free Online Tool | ToolBox",
            "description": "Calculate independent, dependent, and conditional probabilities easily."
        },
        "status": "active"
    },
    {
        "id": "gpa-calculator",
        "name": "GPA Calculator",
        "slug": "gpa-calculator",
        "category": "Calculators",
        "description": "Calculate semester and cumulative Grade Point Average (GPA) on a 4.0 scale.",
        "template": "CalculatorTemplate",
        "keywords": [
            "gpa-calculator",
            "gpa",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "mortgage-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "GPA Calculator - Free Online Tool | ToolBox",
            "description": "Calculate semester and cumulative Grade Point Average (GPA) on a 4.0 scale."
        },
        "status": "active"
    },
    {
        "id": "grade-calculator",
        "name": "Grade Calculator",
        "slug": "grade-calculator",
        "category": "Calculators",
        "description": "Calculate overall course grades and required final exam scores.",
        "template": "CalculatorTemplate",
        "keywords": [
            "grade-calculator",
            "grade",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "mortgage-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Grade Calculator - Free Online Tool | ToolBox",
            "description": "Calculate overall course grades and required final exam scores."
        },
        "status": "active"
    },
    {
        "id": "fuel-cost-calculator",
        "name": "Fuel Cost Calculator",
        "slug": "fuel-cost-calculator",
        "category": "Calculators",
        "description": "Calculate total fuel cost and consumption for trips based on distance and efficiency.",
        "template": "CalculatorTemplate",
        "keywords": [
            "fuel-cost-calculator",
            "fuel",
            "cost",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "mortgage-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Fuel Cost Calculator - Free Online Tool | ToolBox",
            "description": "Calculate total fuel cost and consumption for trips based on distance and efficiency."
        },
        "status": "active"
    },
    {
        "id": "electricity-cost-calculator",
        "name": "Electricity Cost Calculator",
        "slug": "electricity-cost-calculator",
        "category": "Calculators",
        "description": "Calculate electricity consumption and cost for appliances per hour, day, and month.",
        "template": "CalculatorTemplate",
        "keywords": [
            "electricity-cost-calculator",
            "electricity",
            "cost",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "mortgage-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Electricity Cost Calculator - Free Online Tool | ToolBox",
            "description": "Calculate electricity consumption and cost for appliances per hour, day, and month."
        },
        "status": "active"
    },
    {
        "id": "salary-calculator",
        "name": "Salary Calculator",
        "slug": "salary-calculator",
        "category": "Calculators",
        "description": "Convert salary between annual, monthly, bi-weekly, weekly, daily, and hourly rates.",
        "template": "CalculatorTemplate",
        "keywords": [
            "salary-calculator",
            "salary",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "mortgage-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Salary Calculator - Free Online Tool | ToolBox",
            "description": "Convert salary between annual, monthly, bi-weekly, weekly, daily, and hourly rates."
        },
        "status": "active"
    },
    {
        "id": "overtime-calculator",
        "name": "Overtime Calculator",
        "slug": "overtime-calculator",
        "category": "Calculators",
        "description": "Calculate overtime pay at 1.5x, 2x, or custom multiplier rates.",
        "template": "CalculatorTemplate",
        "keywords": [
            "overtime-calculator",
            "overtime",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "mortgage-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Overtime Calculator - Free Online Tool | ToolBox",
            "description": "Calculate overtime pay at 1.5x, 2x, or custom multiplier rates."
        },
        "status": "active"
    },
    {
        "id": "tax-calculator",
        "name": "Tax Calculator",
        "slug": "tax-calculator",
        "category": "Calculators",
        "description": "Estimate sales tax, VAT, or effective income tax rates on gross income.",
        "template": "CalculatorTemplate",
        "keywords": [
            "tax-calculator",
            "tax",
            "calculator",
            "calculators"
        ],
        "relatedTools": [
            "emi-calculator",
            "loan-calculator",
            "mortgage-calculator",
            "simple-interest-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Tax Calculator - Free Online Tool | ToolBox",
            "description": "Estimate sales tax, VAT, or effective income tax rates on gross income."
        },
        "status": "active"
    },
    {
        "id": "length-converter",
        "name": "Length Converter",
        "slug": "length-converter",
        "category": "Converters",
        "description": "Convert length units: meters, kilometers, miles, feet, inches, centimeters, yards.",
        "template": "ConverterTemplate",
        "keywords": [
            "length-converter",
            "length",
            "converter",
            "converters"
        ],
        "relatedTools": [
            "weight-converter",
            "height-converter",
            "temperature-converter",
            "area-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Length Converter - Free Online Tool | ToolBox",
            "description": "Convert length units: meters, kilometers, miles, feet, inches, centimeters, yards."
        },
        "status": "active"
    },
    {
        "id": "weight-converter",
        "name": "Weight Converter",
        "slug": "weight-converter",
        "category": "Converters",
        "description": "Convert weight units: kilograms, grams, pounds, ounces, stones, metric tons.",
        "template": "ConverterTemplate",
        "keywords": [
            "weight-converter",
            "weight",
            "converter",
            "converters"
        ],
        "relatedTools": [
            "length-converter",
            "height-converter",
            "temperature-converter",
            "area-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Weight Converter - Free Online Tool | ToolBox",
            "description": "Convert weight units: kilograms, grams, pounds, ounces, stones, metric tons."
        },
        "status": "active"
    },
    {
        "id": "height-converter",
        "name": "Height Converter",
        "slug": "height-converter",
        "category": "Converters",
        "description": "Convert height between feet/inches and centimeters/meters.",
        "template": "ConverterTemplate",
        "keywords": [
            "height-converter",
            "height",
            "converter",
            "converters"
        ],
        "relatedTools": [
            "length-converter",
            "weight-converter",
            "temperature-converter",
            "area-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Height Converter - Free Online Tool | ToolBox",
            "description": "Convert height between feet/inches and centimeters/meters."
        },
        "status": "active"
    },
    {
        "id": "temperature-converter",
        "name": "Temperature Converter",
        "slug": "temperature-converter",
        "category": "Converters",
        "description": "Convert temperatures between Celsius, Fahrenheit, and Kelvin.",
        "template": "ConverterTemplate",
        "keywords": [
            "temperature-converter",
            "temperature",
            "converter",
            "converters"
        ],
        "relatedTools": [
            "length-converter",
            "weight-converter",
            "height-converter",
            "area-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Temperature Converter - Free Online Tool | ToolBox",
            "description": "Convert temperatures between Celsius, Fahrenheit, and Kelvin."
        },
        "status": "active"
    },
    {
        "id": "area-converter",
        "name": "Area Converter",
        "slug": "area-converter",
        "category": "Converters",
        "description": "Convert area units: square meters, square feet, acres, hectares, square kilometers.",
        "template": "ConverterTemplate",
        "keywords": [
            "area-converter",
            "area",
            "converter",
            "converters"
        ],
        "relatedTools": [
            "length-converter",
            "weight-converter",
            "height-converter",
            "temperature-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Area Converter - Free Online Tool | ToolBox",
            "description": "Convert area units: square meters, square feet, acres, hectares, square kilometers."
        },
        "status": "active"
    },
    {
        "id": "volume-converter",
        "name": "Volume Converter",
        "slug": "volume-converter",
        "category": "Converters",
        "description": "Convert volume units: liters, milliliters, gallons, cubic meters, fluid ounces, cups.",
        "template": "ConverterTemplate",
        "keywords": [
            "volume-converter",
            "volume",
            "converter",
            "converters"
        ],
        "relatedTools": [
            "length-converter",
            "weight-converter",
            "height-converter",
            "temperature-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Volume Converter - Free Online Tool | ToolBox",
            "description": "Convert volume units: liters, milliliters, gallons, cubic meters, fluid ounces, cups."
        },
        "status": "active"
    },
    {
        "id": "speed-converter",
        "name": "Speed Converter",
        "slug": "speed-converter",
        "category": "Converters",
        "description": "Convert speed units: km/h, mph, m/s, knots, ft/s.",
        "template": "ConverterTemplate",
        "keywords": [
            "speed-converter",
            "speed",
            "converter",
            "converters"
        ],
        "relatedTools": [
            "length-converter",
            "weight-converter",
            "height-converter",
            "temperature-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Speed Converter - Free Online Tool | ToolBox",
            "description": "Convert speed units: km/h, mph, m/s, knots, ft/s."
        },
        "status": "active"
    },
    {
        "id": "time-converter",
        "name": "Time Converter",
        "slug": "time-converter",
        "category": "Converters",
        "description": "Convert time units: seconds, minutes, hours, days, weeks, months, years.",
        "template": "ConverterTemplate",
        "keywords": [
            "time-converter",
            "time",
            "converter",
            "converters"
        ],
        "relatedTools": [
            "length-converter",
            "weight-converter",
            "height-converter",
            "temperature-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Time Converter - Free Online Tool | ToolBox",
            "description": "Convert time units: seconds, minutes, hours, days, weeks, months, years."
        },
        "status": "active"
    },
    {
        "id": "data-storage-converter",
        "name": "Data Storage Converter",
        "slug": "data-storage-converter",
        "category": "Converters",
        "description": "Convert data units: Bytes, KB, MB, GB, TB, PB (Decimal and Binary / KiB, MiB).",
        "template": "ConverterTemplate",
        "keywords": [
            "data-storage-converter",
            "data",
            "storage",
            "converter",
            "converters"
        ],
        "relatedTools": [
            "length-converter",
            "weight-converter",
            "height-converter",
            "temperature-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Data Storage Converter - Free Online Tool | ToolBox",
            "description": "Convert data units: Bytes, KB, MB, GB, TB, PB (Decimal and Binary / KiB, MiB)."
        },
        "status": "active"
    },
    {
        "id": "energy-converter",
        "name": "Energy Converter",
        "slug": "energy-converter",
        "category": "Converters",
        "description": "Convert energy units: Joules, Kilojoules, Calories, Kilocalories, Watt-hours, BTU.",
        "template": "ConverterTemplate",
        "keywords": [
            "energy-converter",
            "energy",
            "converter",
            "converters"
        ],
        "relatedTools": [
            "length-converter",
            "weight-converter",
            "height-converter",
            "temperature-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Energy Converter - Free Online Tool | ToolBox",
            "description": "Convert energy units: Joules, Kilojoules, Calories, Kilocalories, Watt-hours, BTU."
        },
        "status": "active"
    },
    {
        "id": "pressure-converter",
        "name": "Pressure Converter",
        "slug": "pressure-converter",
        "category": "Converters",
        "description": "Convert pressure units: Pascal, Bar, PSI, Atmosphere (atm), Torr.",
        "template": "ConverterTemplate",
        "keywords": [
            "pressure-converter",
            "pressure",
            "converter",
            "converters"
        ],
        "relatedTools": [
            "length-converter",
            "weight-converter",
            "height-converter",
            "temperature-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Pressure Converter - Free Online Tool | ToolBox",
            "description": "Convert pressure units: Pascal, Bar, PSI, Atmosphere (atm), Torr."
        },
        "status": "active"
    },
    {
        "id": "frequency-converter",
        "name": "Frequency Converter",
        "slug": "frequency-converter",
        "category": "Converters",
        "description": "Convert frequency units: Hertz, Kilohertz, Megahertz, Gigahertz, RPM.",
        "template": "ConverterTemplate",
        "keywords": [
            "frequency-converter",
            "frequency",
            "converter",
            "converters"
        ],
        "relatedTools": [
            "length-converter",
            "weight-converter",
            "height-converter",
            "temperature-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Frequency Converter - Free Online Tool | ToolBox",
            "description": "Convert frequency units: Hertz, Kilohertz, Megahertz, Gigahertz, RPM."
        },
        "status": "active"
    },
    {
        "id": "currency-converter",
        "name": "Currency Converter",
        "slug": "currency-converter",
        "category": "Converters",
        "description": "Convert major world currencies (USD, EUR, GBP, INR, JPY, CAD, AUD) instantly.",
        "template": "ConverterTemplate",
        "keywords": [
            "currency-converter",
            "currency",
            "converter",
            "converters"
        ],
        "relatedTools": [
            "length-converter",
            "weight-converter",
            "height-converter",
            "temperature-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Currency Converter - Free Online Tool | ToolBox",
            "description": "Convert major world currencies (USD, EUR, GBP, INR, JPY, CAD, AUD) instantly."
        },
        "status": "active"
    },
    {
        "id": "number-base-converter",
        "name": "Number Base Converter",
        "slug": "number-base-converter",
        "category": "Converters",
        "description": "Convert numbers across Binary, Octal, Decimal, and Hexadecimal number bases.",
        "template": "ConverterTemplate",
        "keywords": [
            "number-base-converter",
            "number",
            "base",
            "converter",
            "converters"
        ],
        "relatedTools": [
            "length-converter",
            "weight-converter",
            "height-converter",
            "temperature-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Number Base Converter - Free Online Tool | ToolBox",
            "description": "Convert numbers across Binary, Octal, Decimal, and Hexadecimal number bases."
        },
        "status": "active"
    },
    {
        "id": "decimal-to-binary",
        "name": "Decimal to Binary",
        "slug": "decimal-to-binary",
        "category": "Converters",
        "description": "Convert decimal (base 10) numbers into binary (base 2) notation.",
        "template": "ConverterTemplate",
        "keywords": [
            "decimal-to-binary",
            "decimal",
            "to",
            "binary",
            "converters"
        ],
        "relatedTools": [
            "length-converter",
            "weight-converter",
            "height-converter",
            "temperature-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Decimal to Binary - Free Online Tool | ToolBox",
            "description": "Convert decimal (base 10) numbers into binary (base 2) notation."
        },
        "status": "active"
    },
    {
        "id": "binary-to-decimal",
        "name": "Binary to Decimal",
        "slug": "binary-to-decimal",
        "category": "Converters",
        "description": "Convert binary bits into decimal numbers with step explanation.",
        "template": "ConverterTemplate",
        "keywords": [
            "binary-to-decimal",
            "binary",
            "to",
            "decimal",
            "converters"
        ],
        "relatedTools": [
            "length-converter",
            "weight-converter",
            "height-converter",
            "temperature-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Binary to Decimal - Free Online Tool | ToolBox",
            "description": "Convert binary bits into decimal numbers with step explanation."
        },
        "status": "active"
    },
    {
        "id": "decimal-to-hexadecimal",
        "name": "Decimal to Hexadecimal",
        "slug": "decimal-to-hexadecimal",
        "category": "Converters",
        "description": "Convert base-10 numbers to hexadecimal (base 16) notation.",
        "template": "ConverterTemplate",
        "keywords": [
            "decimal-to-hexadecimal",
            "decimal",
            "to",
            "hexadecimal",
            "converters"
        ],
        "relatedTools": [
            "length-converter",
            "weight-converter",
            "height-converter",
            "temperature-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Decimal to Hexadecimal - Free Online Tool | ToolBox",
            "description": "Convert base-10 numbers to hexadecimal (base 16) notation."
        },
        "status": "active"
    },
    {
        "id": "roman-numeral-converter",
        "name": "Roman Numeral Converter",
        "slug": "roman-numeral-converter",
        "category": "Converters",
        "description": "Convert Roman numerals (I, V, X, L, C, D, M) to Arabic numbers and vice versa.",
        "template": "ConverterTemplate",
        "keywords": [
            "roman-numeral-converter",
            "roman",
            "numeral",
            "converter",
            "converters"
        ],
        "relatedTools": [
            "length-converter",
            "weight-converter",
            "height-converter",
            "temperature-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Roman Numeral Converter - Free Online Tool | ToolBox",
            "description": "Convert Roman numerals (I, V, X, L, C, D, M) to Arabic numbers and vice versa."
        },
        "status": "active"
    },
    {
        "id": "image-format-converter",
        "name": "Image Format Converter",
        "slug": "image-format-converter",
        "category": "Converters",
        "description": "Convert image files seamlessly between common web formats.",
        "template": "ConverterTemplate",
        "keywords": [
            "image-format-converter",
            "image",
            "format",
            "converter",
            "converters"
        ],
        "relatedTools": [
            "length-converter",
            "weight-converter",
            "height-converter",
            "temperature-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Image Format Converter - Free Online Tool | ToolBox",
            "description": "Convert image files seamlessly between common web formats."
        },
        "status": "active"
    },
    {
        "id": "file-size-converter",
        "name": "File Size Converter",
        "slug": "file-size-converter",
        "category": "Converters",
        "description": "Convert file sizes between bits, bytes, KB, MB, GB, and TB.",
        "template": "ConverterTemplate",
        "keywords": [
            "file-size-converter",
            "file",
            "size",
            "converter",
            "converters"
        ],
        "relatedTools": [
            "length-converter",
            "weight-converter",
            "height-converter",
            "temperature-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "File Size Converter - Free Online Tool | ToolBox",
            "description": "Convert file sizes between bits, bytes, KB, MB, GB, and TB."
        },
        "status": "active"
    },
    {
        "id": "word-counter",
        "name": "Word Counter",
        "slug": "word-counter",
        "category": "Text",
        "description": "Count words, characters, sentences, paragraphs, and estimate reading time in real-time.",
        "template": "TextToolTemplate",
        "keywords": [
            "word-counter",
            "word",
            "counter",
            "text"
        ],
        "relatedTools": [
            "character-counter",
            "sentence-counter",
            "case-converter",
            "uppercase-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Word Counter - Free Online Tool | ToolBox",
            "description": "Count words, characters, sentences, paragraphs, and estimate reading time in real-time."
        },
        "status": "active"
    },
    {
        "id": "character-counter",
        "name": "Character Counter",
        "slug": "character-counter",
        "category": "Text",
        "description": "Count characters with and without spaces, words, and letter frequency breakdown.",
        "template": "TextToolTemplate",
        "keywords": [
            "character-counter",
            "character",
            "counter",
            "text"
        ],
        "relatedTools": [
            "word-counter",
            "sentence-counter",
            "case-converter",
            "uppercase-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Character Counter - Free Online Tool | ToolBox",
            "description": "Count characters with and without spaces, words, and letter frequency breakdown."
        },
        "status": "active"
    },
    {
        "id": "sentence-counter",
        "name": "Sentence Counter",
        "slug": "sentence-counter",
        "category": "Text",
        "description": "Count total sentences, average sentence length, and readability scores.",
        "template": "TextToolTemplate",
        "keywords": [
            "sentence-counter",
            "sentence",
            "counter",
            "text"
        ],
        "relatedTools": [
            "word-counter",
            "character-counter",
            "case-converter",
            "uppercase-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Sentence Counter - Free Online Tool | ToolBox",
            "description": "Count total sentences, average sentence length, and readability scores."
        },
        "status": "active"
    },
    {
        "id": "case-converter",
        "name": "Case Converter",
        "slug": "case-converter",
        "category": "Text",
        "description": "Convert text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case.",
        "template": "TextToolTemplate",
        "keywords": [
            "case-converter",
            "case",
            "converter",
            "text"
        ],
        "relatedTools": [
            "word-counter",
            "character-counter",
            "sentence-counter",
            "uppercase-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Case Converter - Free Online Tool | ToolBox",
            "description": "Convert text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case."
        },
        "status": "active"
    },
    {
        "id": "uppercase-converter",
        "name": "Uppercase Converter",
        "slug": "uppercase-converter",
        "category": "Text",
        "description": "Transform all text characters to UPPERCASE instantly.",
        "template": "TextToolTemplate",
        "keywords": [
            "uppercase-converter",
            "uppercase",
            "converter",
            "text"
        ],
        "relatedTools": [
            "word-counter",
            "character-counter",
            "sentence-counter",
            "case-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Uppercase Converter - Free Online Tool | ToolBox",
            "description": "Transform all text characters to UPPERCASE instantly."
        },
        "status": "active"
    },
    {
        "id": "lowercase-converter",
        "name": "Lowercase Converter",
        "slug": "lowercase-converter",
        "category": "Text",
        "description": "Transform all text characters to lowercase instantly.",
        "template": "TextToolTemplate",
        "keywords": [
            "lowercase-converter",
            "lowercase",
            "converter",
            "text"
        ],
        "relatedTools": [
            "word-counter",
            "character-counter",
            "sentence-counter",
            "case-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Lowercase Converter - Free Online Tool | ToolBox",
            "description": "Transform all text characters to lowercase instantly."
        },
        "status": "active"
    },
    {
        "id": "title-case-converter",
        "name": "Title Case Converter",
        "slug": "title-case-converter",
        "category": "Text",
        "description": "Capitalize words following standard title capitalization conventions.",
        "template": "TextToolTemplate",
        "keywords": [
            "title-case-converter",
            "title",
            "case",
            "converter",
            "text"
        ],
        "relatedTools": [
            "word-counter",
            "character-counter",
            "sentence-counter",
            "case-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Title Case Converter - Free Online Tool | ToolBox",
            "description": "Capitalize words following standard title capitalization conventions."
        },
        "status": "active"
    },
    {
        "id": "remove-duplicate-lines",
        "name": "Remove Duplicate Lines",
        "slug": "remove-duplicate-lines",
        "category": "Text",
        "description": "Remove duplicate lines from text lists while preserving original order.",
        "template": "TextToolTemplate",
        "keywords": [
            "remove-duplicate-lines",
            "remove",
            "duplicate",
            "lines",
            "text"
        ],
        "relatedTools": [
            "word-counter",
            "character-counter",
            "sentence-counter",
            "case-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Remove Duplicate Lines - Free Online Tool | ToolBox",
            "description": "Remove duplicate lines from text lists while preserving original order."
        },
        "status": "active"
    },
    {
        "id": "remove-extra-spaces",
        "name": "Remove Extra Spaces",
        "slug": "remove-extra-spaces",
        "category": "Text",
        "description": "Strip leading, trailing, and consecutive multiple whitespace characters.",
        "template": "TextToolTemplate",
        "keywords": [
            "remove-extra-spaces",
            "remove",
            "extra",
            "spaces",
            "text"
        ],
        "relatedTools": [
            "word-counter",
            "character-counter",
            "sentence-counter",
            "case-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Remove Extra Spaces - Free Online Tool | ToolBox",
            "description": "Strip leading, trailing, and consecutive multiple whitespace characters."
        },
        "status": "active"
    },
    {
        "id": "text-sorter",
        "name": "Text Sorter",
        "slug": "text-sorter",
        "category": "Text",
        "description": "Sort lines alphabetically (A-Z or Z-A), numerically, or by length.",
        "template": "TextToolTemplate",
        "keywords": [
            "text-sorter",
            "text",
            "sorter",
            "text"
        ],
        "relatedTools": [
            "word-counter",
            "character-counter",
            "sentence-counter",
            "case-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Text Sorter - Free Online Tool | ToolBox",
            "description": "Sort lines alphabetically (A-Z or Z-A), numerically, or by length."
        },
        "status": "active"
    },
    {
        "id": "text-reverser",
        "name": "Text Reverser",
        "slug": "text-reverser",
        "category": "Text",
        "description": "Reverse entire text strings, words in sentences, or lines in lists.",
        "template": "TextToolTemplate",
        "keywords": [
            "text-reverser",
            "text",
            "reverser",
            "text"
        ],
        "relatedTools": [
            "word-counter",
            "character-counter",
            "sentence-counter",
            "case-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Text Reverser - Free Online Tool | ToolBox",
            "description": "Reverse entire text strings, words in sentences, or lines in lists."
        },
        "status": "active"
    },
    {
        "id": "find-and-replace",
        "name": "Find and Replace",
        "slug": "find-and-replace",
        "category": "Text",
        "description": "Search and replace text substrings with case-sensitive and regex matching.",
        "template": "TextToolTemplate",
        "keywords": [
            "find-and-replace",
            "find",
            "and",
            "replace",
            "text"
        ],
        "relatedTools": [
            "word-counter",
            "character-counter",
            "sentence-counter",
            "case-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Find and Replace - Free Online Tool | ToolBox",
            "description": "Search and replace text substrings with case-sensitive and regex matching."
        },
        "status": "active"
    },
    {
        "id": "lorem-ipsum-generator",
        "name": "Lorem Ipsum Generator",
        "slug": "lorem-ipsum-generator",
        "category": "Text",
        "description": "Generate placeholder dummy text by paragraphs, sentences, or words.",
        "template": "TextToolTemplate",
        "keywords": [
            "lorem-ipsum-generator",
            "lorem",
            "ipsum",
            "generator",
            "text"
        ],
        "relatedTools": [
            "word-counter",
            "character-counter",
            "sentence-counter",
            "case-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Lorem Ipsum Generator - Free Online Tool | ToolBox",
            "description": "Generate placeholder dummy text by paragraphs, sentences, or words."
        },
        "status": "active"
    },
    {
        "id": "text-diff-checker",
        "name": "Text Diff Checker",
        "slug": "text-diff-checker",
        "category": "Text",
        "description": "Compare two text snippets side-by-side to highlight additions, deletions, and edits.",
        "template": "TextToolTemplate",
        "keywords": [
            "text-diff-checker",
            "text",
            "diff",
            "checker",
            "text"
        ],
        "relatedTools": [
            "word-counter",
            "character-counter",
            "sentence-counter",
            "case-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Text Diff Checker - Free Online Tool | ToolBox",
            "description": "Compare two text snippets side-by-side to highlight additions, deletions, and edits."
        },
        "status": "active"
    },
    {
        "id": "markdown-previewer",
        "name": "Markdown Previewer",
        "slug": "markdown-previewer",
        "category": "Text",
        "description": "Write and preview GitHub-flavored markdown with live HTML rendering.",
        "template": "TextToolTemplate",
        "keywords": [
            "markdown-previewer",
            "markdown",
            "previewer",
            "text"
        ],
        "relatedTools": [
            "word-counter",
            "character-counter",
            "sentence-counter",
            "case-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Markdown Previewer - Free Online Tool | ToolBox",
            "description": "Write and preview GitHub-flavored markdown with live HTML rendering."
        },
        "status": "active"
    },
    {
        "id": "json-formatter",
        "name": "JSON Formatter",
        "slug": "json-formatter",
        "category": "Text",
        "description": "Format and beautify minified JSON with customizable 2 or 4 space indentation.",
        "template": "TextToolTemplate",
        "keywords": [
            "json-formatter",
            "json",
            "formatter",
            "text"
        ],
        "relatedTools": [
            "word-counter",
            "character-counter",
            "sentence-counter",
            "case-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "JSON Formatter - Free Online Tool | ToolBox",
            "description": "Format and beautify minified JSON with customizable 2 or 4 space indentation."
        },
        "status": "active"
    },
    {
        "id": "json-validator",
        "name": "JSON Validator",
        "slug": "json-validator",
        "category": "Text",
        "description": "Validate JSON syntax and identify exact line and character errors.",
        "template": "TextToolTemplate",
        "keywords": [
            "json-validator",
            "json",
            "validator",
            "text"
        ],
        "relatedTools": [
            "word-counter",
            "character-counter",
            "sentence-counter",
            "case-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "JSON Validator - Free Online Tool | ToolBox",
            "description": "Validate JSON syntax and identify exact line and character errors."
        },
        "status": "active"
    },
    {
        "id": "xml-formatter",
        "name": "XML Formatter",
        "slug": "xml-formatter",
        "category": "Text",
        "description": "Format, indent, and prettify XML documents for improved readability.",
        "template": "TextToolTemplate",
        "keywords": [
            "xml-formatter",
            "xml",
            "formatter",
            "text"
        ],
        "relatedTools": [
            "word-counter",
            "character-counter",
            "sentence-counter",
            "case-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "XML Formatter - Free Online Tool | ToolBox",
            "description": "Format, indent, and prettify XML documents for improved readability."
        },
        "status": "active"
    },
    {
        "id": "csv-to-json",
        "name": "CSV to JSON",
        "slug": "csv-to-json",
        "category": "Text",
        "description": "Convert CSV table data into structured JSON array of objects.",
        "template": "TextToolTemplate",
        "keywords": [
            "csv-to-json",
            "csv",
            "to",
            "json",
            "text"
        ],
        "relatedTools": [
            "word-counter",
            "character-counter",
            "sentence-counter",
            "case-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "CSV to JSON - Free Online Tool | ToolBox",
            "description": "Convert CSV table data into structured JSON array of objects."
        },
        "status": "active"
    },
    {
        "id": "text-to-slug",
        "name": "Text to Slug",
        "slug": "text-to-slug",
        "category": "Text",
        "description": "Convert strings into clean, URL-friendly slugs with lowercase hyphenation.",
        "template": "TextToolTemplate",
        "keywords": [
            "text-to-slug",
            "text",
            "to",
            "slug",
            "text"
        ],
        "relatedTools": [
            "word-counter",
            "character-counter",
            "sentence-counter",
            "case-converter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Text to Slug - Free Online Tool | ToolBox",
            "description": "Convert strings into clean, URL-friendly slugs with lowercase hyphenation."
        },
        "status": "active"
    },
    {
        "id": "json-minifier",
        "name": "JSON Minifier",
        "slug": "json-minifier",
        "category": "Developer",
        "description": "Minify JSON by removing whitespace and line breaks to reduce payload size.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "json-minifier",
            "json",
            "minifier",
            "developer"
        ],
        "relatedTools": [
            "json-to-csv",
            "xml-validator",
            "html-formatter",
            "html-minifier"
        ],
        "executionType": "client",
        "seo": {
            "title": "JSON Minifier - Free Online Tool | ToolBox",
            "description": "Minify JSON by removing whitespace and line breaks to reduce payload size."
        },
        "status": "active"
    },
    {
        "id": "json-to-csv",
        "name": "JSON to CSV",
        "slug": "json-to-csv",
        "category": "Developer",
        "description": "Convert structured JSON arrays into CSV format with downloadable output.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "json-to-csv",
            "json",
            "to",
            "csv",
            "developer"
        ],
        "relatedTools": [
            "json-minifier",
            "xml-validator",
            "html-formatter",
            "html-minifier"
        ],
        "executionType": "client",
        "seo": {
            "title": "JSON to CSV - Free Online Tool | ToolBox",
            "description": "Convert structured JSON arrays into CSV format with downloadable output."
        },
        "status": "active"
    },
    {
        "id": "xml-validator",
        "name": "XML Validator",
        "slug": "xml-validator",
        "category": "Developer",
        "description": "Validate XML strings against standard syntax and well-formedness rules.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "xml-validator",
            "xml",
            "validator",
            "developer"
        ],
        "relatedTools": [
            "json-minifier",
            "json-to-csv",
            "html-formatter",
            "html-minifier"
        ],
        "executionType": "client",
        "seo": {
            "title": "XML Validator - Free Online Tool | ToolBox",
            "description": "Validate XML strings against standard syntax and well-formedness rules."
        },
        "status": "active"
    },
    {
        "id": "html-formatter",
        "name": "HTML Formatter",
        "slug": "html-formatter",
        "category": "Developer",
        "description": "Prettify and clean up messy HTML source code with uniform indentation.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "html-formatter",
            "html",
            "formatter",
            "developer"
        ],
        "relatedTools": [
            "json-minifier",
            "json-to-csv",
            "xml-validator",
            "html-minifier"
        ],
        "executionType": "client",
        "seo": {
            "title": "HTML Formatter - Free Online Tool | ToolBox",
            "description": "Prettify and clean up messy HTML source code with uniform indentation."
        },
        "status": "active"
    },
    {
        "id": "html-minifier",
        "name": "HTML Minifier",
        "slug": "html-minifier",
        "category": "Developer",
        "description": "Minify HTML markup by removing comments and unnecessary whitespace.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "html-minifier",
            "html",
            "minifier",
            "developer"
        ],
        "relatedTools": [
            "json-minifier",
            "json-to-csv",
            "xml-validator",
            "html-formatter"
        ],
        "executionType": "client",
        "seo": {
            "title": "HTML Minifier - Free Online Tool | ToolBox",
            "description": "Minify HTML markup by removing comments and unnecessary whitespace."
        },
        "status": "active"
    },
    {
        "id": "css-formatter",
        "name": "CSS Formatter",
        "slug": "css-formatter",
        "category": "Developer",
        "description": "Format and organize CSS stylesheets with readable spacing and structure.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "css-formatter",
            "css",
            "formatter",
            "developer"
        ],
        "relatedTools": [
            "json-minifier",
            "json-to-csv",
            "xml-validator",
            "html-formatter"
        ],
        "executionType": "client",
        "seo": {
            "title": "CSS Formatter - Free Online Tool | ToolBox",
            "description": "Format and organize CSS stylesheets with readable spacing and structure."
        },
        "status": "active"
    },
    {
        "id": "css-minifier",
        "name": "CSS Minifier",
        "slug": "css-minifier",
        "category": "Developer",
        "description": "Compress CSS stylesheets for faster browser download and execution.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "css-minifier",
            "css",
            "minifier",
            "developer"
        ],
        "relatedTools": [
            "json-minifier",
            "json-to-csv",
            "xml-validator",
            "html-formatter"
        ],
        "executionType": "client",
        "seo": {
            "title": "CSS Minifier - Free Online Tool | ToolBox",
            "description": "Compress CSS stylesheets for faster browser download and execution."
        },
        "status": "active"
    },
    {
        "id": "javascript-formatter",
        "name": "JavaScript Formatter",
        "slug": "javascript-formatter",
        "category": "Developer",
        "description": "Beautify JavaScript and TypeScript code with clean indentation.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "javascript-formatter",
            "javascript",
            "formatter",
            "developer"
        ],
        "relatedTools": [
            "json-minifier",
            "json-to-csv",
            "xml-validator",
            "html-formatter"
        ],
        "executionType": "client",
        "seo": {
            "title": "JavaScript Formatter - Free Online Tool | ToolBox",
            "description": "Beautify JavaScript and TypeScript code with clean indentation."
        },
        "status": "active"
    },
    {
        "id": "javascript-minifier",
        "name": "JavaScript Minifier",
        "slug": "javascript-minifier",
        "category": "Developer",
        "description": "Minify JS scripts by stripping whitespace and comments.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "javascript-minifier",
            "javascript",
            "minifier",
            "developer"
        ],
        "relatedTools": [
            "json-minifier",
            "json-to-csv",
            "xml-validator",
            "html-formatter"
        ],
        "executionType": "client",
        "seo": {
            "title": "JavaScript Minifier - Free Online Tool | ToolBox",
            "description": "Minify JS scripts by stripping whitespace and comments."
        },
        "status": "active"
    },
    {
        "id": "sql-formatter",
        "name": "SQL Formatter",
        "slug": "sql-formatter",
        "category": "Developer",
        "description": "Format SQL queries with capitalized keywords and aligned clauses.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "sql-formatter",
            "sql",
            "formatter",
            "developer"
        ],
        "relatedTools": [
            "json-minifier",
            "json-to-csv",
            "xml-validator",
            "html-formatter"
        ],
        "executionType": "client",
        "seo": {
            "title": "SQL Formatter - Free Online Tool | ToolBox",
            "description": "Format SQL queries with capitalized keywords and aligned clauses."
        },
        "status": "active"
    },
    {
        "id": "sql-minifier",
        "name": "SQL Minifier",
        "slug": "sql-minifier",
        "category": "Developer",
        "description": "Minify SQL queries into single line statements.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "sql-minifier",
            "sql",
            "minifier",
            "developer"
        ],
        "relatedTools": [
            "json-minifier",
            "json-to-csv",
            "xml-validator",
            "html-formatter"
        ],
        "executionType": "client",
        "seo": {
            "title": "SQL Minifier - Free Online Tool | ToolBox",
            "description": "Minify SQL queries into single line statements."
        },
        "status": "active"
    },
    {
        "id": "base64-encoder",
        "name": "Base64 Encoder",
        "slug": "base64-encoder",
        "category": "Developer",
        "description": "Encode raw text or binary data into standard Base64 string format.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "base64-encoder",
            "base64",
            "encoder",
            "developer"
        ],
        "relatedTools": [
            "json-minifier",
            "json-to-csv",
            "xml-validator",
            "html-formatter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Base64 Encoder - Free Online Tool | ToolBox",
            "description": "Encode raw text or binary data into standard Base64 string format."
        },
        "status": "active"
    },
    {
        "id": "base64-decoder",
        "name": "Base64 Decoder",
        "slug": "base64-decoder",
        "category": "Developer",
        "description": "Decode Base64 strings back into original UTF-8 plain text.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "base64-decoder",
            "base64",
            "decoder",
            "developer"
        ],
        "relatedTools": [
            "json-minifier",
            "json-to-csv",
            "xml-validator",
            "html-formatter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Base64 Decoder - Free Online Tool | ToolBox",
            "description": "Decode Base64 strings back into original UTF-8 plain text."
        },
        "status": "active"
    },
    {
        "id": "url-encoder",
        "name": "URL Encoder",
        "slug": "url-encoder",
        "category": "Developer",
        "description": "Encode query parameters and URLs using standard percent-encoding.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "url-encoder",
            "url",
            "encoder",
            "developer"
        ],
        "relatedTools": [
            "json-minifier",
            "json-to-csv",
            "xml-validator",
            "html-formatter"
        ],
        "executionType": "client",
        "seo": {
            "title": "URL Encoder - Free Online Tool | ToolBox",
            "description": "Encode query parameters and URLs using standard percent-encoding."
        },
        "status": "active"
    },
    {
        "id": "url-decoder",
        "name": "URL Decoder",
        "slug": "url-decoder",
        "category": "Developer",
        "description": "Decode percent-encoded URL strings back into readable characters.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "url-decoder",
            "url",
            "decoder",
            "developer"
        ],
        "relatedTools": [
            "json-minifier",
            "json-to-csv",
            "xml-validator",
            "html-formatter"
        ],
        "executionType": "client",
        "seo": {
            "title": "URL Decoder - Free Online Tool | ToolBox",
            "description": "Decode percent-encoded URL strings back into readable characters."
        },
        "status": "active"
    },
    {
        "id": "jwt-decoder",
        "name": "JWT Decoder",
        "slug": "jwt-decoder",
        "category": "Developer",
        "description": "Decode JSON Web Tokens (JWT) to inspect Header, Payload, and expiration dates.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "jwt-decoder",
            "jwt",
            "decoder",
            "developer"
        ],
        "relatedTools": [
            "json-minifier",
            "json-to-csv",
            "xml-validator",
            "html-formatter"
        ],
        "executionType": "client",
        "seo": {
            "title": "JWT Decoder - Free Online Tool | ToolBox",
            "description": "Decode JSON Web Tokens (JWT) to inspect Header, Payload, and expiration dates."
        },
        "status": "active"
    },
    {
        "id": "uuid-generator",
        "name": "UUID Generator",
        "slug": "uuid-generator",
        "category": "Developer",
        "description": "Generate version 4 (v4) random Universally Unique Identifiers (UUIDs).",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "uuid-generator",
            "uuid",
            "generator",
            "developer"
        ],
        "relatedTools": [
            "json-minifier",
            "json-to-csv",
            "xml-validator",
            "html-formatter"
        ],
        "executionType": "client",
        "seo": {
            "title": "UUID Generator - Free Online Tool | ToolBox",
            "description": "Generate version 4 (v4) random Universally Unique Identifiers (UUIDs)."
        },
        "status": "active"
    },
    {
        "id": "hash-generator",
        "name": "Hash Generator",
        "slug": "hash-generator",
        "category": "Developer",
        "description": "Generate cryptographic MD5, SHA-1, SHA-256, and SHA-512 hashes.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "hash-generator",
            "hash",
            "generator",
            "developer"
        ],
        "relatedTools": [
            "json-minifier",
            "json-to-csv",
            "xml-validator",
            "html-formatter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Hash Generator - Free Online Tool | ToolBox",
            "description": "Generate cryptographic MD5, SHA-1, SHA-256, and SHA-512 hashes."
        },
        "status": "active"
    },
    {
        "id": "regex-tester",
        "name": "Regex Tester",
        "slug": "regex-tester",
        "category": "Developer",
        "description": "Test regular expressions against test strings with live match group capture.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "regex-tester",
            "regex",
            "tester",
            "developer"
        ],
        "relatedTools": [
            "json-minifier",
            "json-to-csv",
            "xml-validator",
            "html-formatter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Regex Tester - Free Online Tool | ToolBox",
            "description": "Test regular expressions against test strings with live match group capture."
        },
        "status": "active"
    },
    {
        "id": "timestamp-converter",
        "name": "Timestamp Converter",
        "slug": "timestamp-converter",
        "category": "Developer",
        "description": "Convert Unix epoch timestamps (seconds/milliseconds) to human-readable date/time.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "timestamp-converter",
            "timestamp",
            "converter",
            "developer"
        ],
        "relatedTools": [
            "json-minifier",
            "json-to-csv",
            "xml-validator",
            "html-formatter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Timestamp Converter - Free Online Tool | ToolBox",
            "description": "Convert Unix epoch timestamps (seconds/milliseconds) to human-readable date/time."
        },
        "status": "active"
    },
    {
        "id": "color-converter",
        "name": "Color Converter",
        "slug": "color-converter",
        "category": "Developer",
        "description": "Convert color codes between HEX, RGB, RGBA, HSL, and CMYK formats.",
        "template": "DeveloperToolTemplate",
        "keywords": [
            "color-converter",
            "color",
            "converter",
            "developer"
        ],
        "relatedTools": [
            "json-minifier",
            "json-to-csv",
            "xml-validator",
            "html-formatter"
        ],
        "executionType": "client",
        "seo": {
            "title": "Color Converter - Free Online Tool | ToolBox",
            "description": "Convert color codes between HEX, RGB, RGBA, HSL, and CMYK formats."
        },
        "status": "active"
    },
    {
        "id": "date-calculator",
        "name": "Date Calculator",
        "slug": "date-calculator",
        "category": "Date & Time",
        "description": "Add or subtract days, weeks, months, and years from any given date.",
        "template": "DateTimeToolTemplate",
        "keywords": [
            "date-calculator",
            "date",
            "calculator",
            "date & time"
        ],
        "relatedTools": [
            "days-between-dates",
            "business-days-calculator",
            "add-days-to-date",
            "subtract-days-from-date"
        ],
        "executionType": "client",
        "seo": {
            "title": "Date Calculator - Free Online Tool | ToolBox",
            "description": "Add or subtract days, weeks, months, and years from any given date."
        },
        "status": "active"
    },
    {
        "id": "days-between-dates",
        "name": "Days Between Dates",
        "slug": "days-between-dates",
        "category": "Date & Time",
        "description": "Calculate the total number of calendar days between two selected dates.",
        "template": "DateTimeToolTemplate",
        "keywords": [
            "days-between-dates",
            "days",
            "between",
            "dates",
            "date & time"
        ],
        "relatedTools": [
            "date-calculator",
            "business-days-calculator",
            "add-days-to-date",
            "subtract-days-from-date"
        ],
        "executionType": "client",
        "seo": {
            "title": "Days Between Dates - Free Online Tool | ToolBox",
            "description": "Calculate the total number of calendar days between two selected dates."
        },
        "status": "active"
    },
    {
        "id": "business-days-calculator",
        "name": "Business Days Calculator",
        "slug": "business-days-calculator",
        "category": "Date & Time",
        "description": "Calculate working business days between two dates, excluding weekends.",
        "template": "DateTimeToolTemplate",
        "keywords": [
            "business-days-calculator",
            "business",
            "days",
            "calculator",
            "date & time"
        ],
        "relatedTools": [
            "date-calculator",
            "days-between-dates",
            "add-days-to-date",
            "subtract-days-from-date"
        ],
        "executionType": "client",
        "seo": {
            "title": "Business Days Calculator - Free Online Tool | ToolBox",
            "description": "Calculate working business days between two dates, excluding weekends."
        },
        "status": "active"
    },
    {
        "id": "add-days-to-date",
        "name": "Add Days to Date",
        "slug": "add-days-to-date",
        "category": "Date & Time",
        "description": "Add a specific number of days, weeks, or months to a starting date.",
        "template": "DateTimeToolTemplate",
        "keywords": [
            "add-days-to-date",
            "add",
            "days",
            "to",
            "date",
            "date & time"
        ],
        "relatedTools": [
            "date-calculator",
            "days-between-dates",
            "business-days-calculator",
            "subtract-days-from-date"
        ],
        "executionType": "client",
        "seo": {
            "title": "Add Days to Date - Free Online Tool | ToolBox",
            "description": "Add a specific number of days, weeks, or months to a starting date."
        },
        "status": "active"
    },
    {
        "id": "subtract-days-from-date",
        "name": "Subtract Days from Date",
        "slug": "subtract-days-from-date",
        "category": "Date & Time",
        "description": "Subtract a specific number of days or months from a starting date.",
        "template": "DateTimeToolTemplate",
        "keywords": [
            "subtract-days-from-date",
            "subtract",
            "days",
            "from",
            "date",
            "date & time"
        ],
        "relatedTools": [
            "date-calculator",
            "days-between-dates",
            "business-days-calculator",
            "add-days-to-date"
        ],
        "executionType": "client",
        "seo": {
            "title": "Subtract Days from Date - Free Online Tool | ToolBox",
            "description": "Subtract a specific number of days or months from a starting date."
        },
        "status": "active"
    },
    {
        "id": "time-difference-calculator",
        "name": "Time Difference Calculator",
        "slug": "time-difference-calculator",
        "category": "Date & Time",
        "description": "Calculate exact difference in hours, minutes, and seconds between two times.",
        "template": "DateTimeToolTemplate",
        "keywords": [
            "time-difference-calculator",
            "time",
            "difference",
            "calculator",
            "date & time"
        ],
        "relatedTools": [
            "date-calculator",
            "days-between-dates",
            "business-days-calculator",
            "add-days-to-date"
        ],
        "executionType": "client",
        "seo": {
            "title": "Time Difference Calculator - Free Online Tool | ToolBox",
            "description": "Calculate exact difference in hours, minutes, and seconds between two times."
        },
        "status": "active"
    },
    {
        "id": "time-zone-converter",
        "name": "Time Zone Converter",
        "slug": "time-zone-converter",
        "category": "Date & Time",
        "description": "Convert times across global time zones (UTC, EST, PST, GMT, IST, JST).",
        "template": "DateTimeToolTemplate",
        "keywords": [
            "time-zone-converter",
            "time",
            "zone",
            "converter",
            "date & time"
        ],
        "relatedTools": [
            "date-calculator",
            "days-between-dates",
            "business-days-calculator",
            "add-days-to-date"
        ],
        "executionType": "client",
        "seo": {
            "title": "Time Zone Converter - Free Online Tool | ToolBox",
            "description": "Convert times across global time zones (UTC, EST, PST, GMT, IST, JST)."
        },
        "status": "active"
    },
    {
        "id": "unix-timestamp-converter",
        "name": "Unix Timestamp Converter",
        "slug": "unix-timestamp-converter",
        "category": "Date & Time",
        "description": "Convert Unix timestamps to local and UTC date strings.",
        "template": "DateTimeToolTemplate",
        "keywords": [
            "unix-timestamp-converter",
            "unix",
            "timestamp",
            "converter",
            "date & time"
        ],
        "relatedTools": [
            "date-calculator",
            "days-between-dates",
            "business-days-calculator",
            "add-days-to-date"
        ],
        "executionType": "client",
        "seo": {
            "title": "Unix Timestamp Converter - Free Online Tool | ToolBox",
            "description": "Convert Unix timestamps to local and UTC date strings."
        },
        "status": "active"
    },
    {
        "id": "countdown-calculator",
        "name": "Countdown Calculator",
        "slug": "countdown-calculator",
        "category": "Date & Time",
        "description": "Create a live real-time countdown to any future target date and time.",
        "template": "DateTimeToolTemplate",
        "keywords": [
            "countdown-calculator",
            "countdown",
            "calculator",
            "date & time"
        ],
        "relatedTools": [
            "date-calculator",
            "days-between-dates",
            "business-days-calculator",
            "add-days-to-date"
        ],
        "executionType": "client",
        "seo": {
            "title": "Countdown Calculator - Free Online Tool | ToolBox",
            "description": "Create a live real-time countdown to any future target date and time."
        },
        "status": "active"
    },
    {
        "id": "week-number-calculator",
        "name": "Week Number Calculator",
        "slug": "week-number-calculator",
        "category": "Date & Time",
        "description": "Determine ISO 8601 week number and day of the year for any date.",
        "template": "DateTimeToolTemplate",
        "keywords": [
            "week-number-calculator",
            "week",
            "number",
            "calculator",
            "date & time"
        ],
        "relatedTools": [
            "date-calculator",
            "days-between-dates",
            "business-days-calculator",
            "add-days-to-date"
        ],
        "executionType": "client",
        "seo": {
            "title": "Week Number Calculator - Free Online Tool | ToolBox",
            "description": "Determine ISO 8601 week number and day of the year for any date."
        },
        "status": "active"
    },
    {
        "id": "sip-calculator",
        "name": "SIP Calculator",
        "slug": "sip-calculator",
        "category": "Finance",
        "description": "Calculate returns on Systematic Investment Plans (SIP) with monthly compounding.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "sip-calculator",
            "sip",
            "calculator",
            "finance"
        ],
        "relatedTools": [
            "swp-calculator",
            "ppf-calculator",
            "fd-calculator",
            "rd-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "SIP Calculator - Free Online Tool | ToolBox",
            "description": "Calculate returns on Systematic Investment Plans (SIP) with monthly compounding."
        },
        "status": "active"
    },
    {
        "id": "swp-calculator",
        "name": "SWP Calculator",
        "slug": "swp-calculator",
        "category": "Finance",
        "description": "Calculate Systematic Withdrawal Plan (SWP) schedules and remaining balance.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "swp-calculator",
            "swp",
            "calculator",
            "finance"
        ],
        "relatedTools": [
            "sip-calculator",
            "ppf-calculator",
            "fd-calculator",
            "rd-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "SWP Calculator - Free Online Tool | ToolBox",
            "description": "Calculate Systematic Withdrawal Plan (SWP) schedules and remaining balance."
        },
        "status": "active"
    },
    {
        "id": "ppf-calculator",
        "name": "PPF Calculator",
        "slug": "ppf-calculator",
        "category": "Finance",
        "description": "Calculate Public Provident Fund (PPF) maturity amounts and interest accrued.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "ppf-calculator",
            "ppf",
            "calculator",
            "finance"
        ],
        "relatedTools": [
            "sip-calculator",
            "swp-calculator",
            "fd-calculator",
            "rd-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "PPF Calculator - Free Online Tool | ToolBox",
            "description": "Calculate Public Provident Fund (PPF) maturity amounts and interest accrued."
        },
        "status": "active"
    },
    {
        "id": "fd-calculator",
        "name": "FD Calculator",
        "slug": "fd-calculator",
        "category": "Finance",
        "description": "Calculate Fixed Deposit maturity amount and total interest earned.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "fd-calculator",
            "fd",
            "calculator",
            "finance"
        ],
        "relatedTools": [
            "sip-calculator",
            "swp-calculator",
            "ppf-calculator",
            "rd-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "FD Calculator - Free Online Tool | ToolBox",
            "description": "Calculate Fixed Deposit maturity amount and total interest earned."
        },
        "status": "active"
    },
    {
        "id": "rd-calculator",
        "name": "RD Calculator",
        "slug": "rd-calculator",
        "category": "Finance",
        "description": "Calculate Recurring Deposit investment returns with quarterly compounding.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "rd-calculator",
            "rd",
            "calculator",
            "finance"
        ],
        "relatedTools": [
            "sip-calculator",
            "swp-calculator",
            "ppf-calculator",
            "fd-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "RD Calculator - Free Online Tool | ToolBox",
            "description": "Calculate Recurring Deposit investment returns with quarterly compounding."
        },
        "status": "active"
    },
    {
        "id": "cagr-calculator",
        "name": "CAGR Calculator",
        "slug": "cagr-calculator",
        "category": "Finance",
        "description": "Calculate Compound Annual Growth Rate (CAGR) for your investments.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "cagr-calculator",
            "cagr",
            "calculator",
            "finance"
        ],
        "relatedTools": [
            "sip-calculator",
            "swp-calculator",
            "ppf-calculator",
            "fd-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "CAGR Calculator - Free Online Tool | ToolBox",
            "description": "Calculate Compound Annual Growth Rate (CAGR) for your investments."
        },
        "status": "active"
    },
    {
        "id": "xirr-calculator",
        "name": "XIRR Calculator",
        "slug": "xirr-calculator",
        "category": "Finance",
        "description": "Calculate Extended Internal Rate of Return for irregular cash flows.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "xirr-calculator",
            "xirr",
            "calculator",
            "finance"
        ],
        "relatedTools": [
            "sip-calculator",
            "swp-calculator",
            "ppf-calculator",
            "fd-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "XIRR Calculator - Free Online Tool | ToolBox",
            "description": "Calculate Extended Internal Rate of Return for irregular cash flows."
        },
        "status": "active"
    },
    {
        "id": "inflation-calculator",
        "name": "Inflation Calculator",
        "slug": "inflation-calculator",
        "category": "Finance",
        "description": "Calculate the future purchasing power of money based on inflation rates.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "inflation-calculator",
            "inflation",
            "calculator",
            "finance"
        ],
        "relatedTools": [
            "sip-calculator",
            "swp-calculator",
            "ppf-calculator",
            "fd-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Inflation Calculator - Free Online Tool | ToolBox",
            "description": "Calculate the future purchasing power of money based on inflation rates."
        },
        "status": "active"
    },
    {
        "id": "investment-return-calculator",
        "name": "Investment Return Calculator",
        "slug": "investment-return-calculator",
        "category": "Finance",
        "description": "Calculate Return on Investment (ROI) and annualized yields.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "investment-return-calculator",
            "investment",
            "return",
            "calculator",
            "finance"
        ],
        "relatedTools": [
            "sip-calculator",
            "swp-calculator",
            "ppf-calculator",
            "fd-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Investment Return Calculator - Free Online Tool | ToolBox",
            "description": "Calculate Return on Investment (ROI) and annualized yields."
        },
        "status": "active"
    },
    {
        "id": "loan-interest-calculator",
        "name": "Loan Interest Calculator",
        "slug": "loan-interest-calculator",
        "category": "Finance",
        "description": "Calculate total interest paid on loans with reducing balance vs flat rate.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "loan-interest-calculator",
            "loan",
            "interest",
            "calculator",
            "finance"
        ],
        "relatedTools": [
            "sip-calculator",
            "swp-calculator",
            "ppf-calculator",
            "fd-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Loan Interest Calculator - Free Online Tool | ToolBox",
            "description": "Calculate total interest paid on loans with reducing balance vs flat rate."
        },
        "status": "active"
    },
    {
        "id": "net-worth-calculator",
        "name": "Net Worth Calculator",
        "slug": "net-worth-calculator",
        "category": "Finance",
        "description": "Calculate total net worth by balancing assets and liabilities.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "net-worth-calculator",
            "net",
            "worth",
            "calculator",
            "finance"
        ],
        "relatedTools": [
            "sip-calculator",
            "swp-calculator",
            "ppf-calculator",
            "fd-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Net Worth Calculator - Free Online Tool | ToolBox",
            "description": "Calculate total net worth by balancing assets and liabilities."
        },
        "status": "active"
    },
    {
        "id": "salary-to-hourly-calculator",
        "name": "Salary to Hourly Calculator",
        "slug": "salary-to-hourly-calculator",
        "category": "Finance",
        "description": "Convert annual or monthly salary into equivalent hourly wage rate.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "salary-to-hourly-calculator",
            "salary",
            "to",
            "hourly",
            "calculator",
            "finance"
        ],
        "relatedTools": [
            "sip-calculator",
            "swp-calculator",
            "ppf-calculator",
            "fd-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Salary to Hourly Calculator - Free Online Tool | ToolBox",
            "description": "Convert annual or monthly salary into equivalent hourly wage rate."
        },
        "status": "active"
    },
    {
        "id": "gst-calculator",
        "name": "GST Calculator",
        "slug": "gst-calculator",
        "category": "Finance",
        "description": "Calculate Goods and Services Tax (GST) inclusion and exclusion amounts.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "gst-calculator",
            "gst",
            "calculator",
            "finance"
        ],
        "relatedTools": [
            "sip-calculator",
            "swp-calculator",
            "ppf-calculator",
            "fd-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "GST Calculator - Free Online Tool | ToolBox",
            "description": "Calculate Goods and Services Tax (GST) inclusion and exclusion amounts."
        },
        "status": "active"
    },
    {
        "id": "income-tax-calculator",
        "name": "Income Tax Calculator",
        "slug": "income-tax-calculator",
        "category": "Finance",
        "description": "Estimate income tax liabilities across standard tax brackets.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "income-tax-calculator",
            "income",
            "tax",
            "calculator",
            "finance"
        ],
        "relatedTools": [
            "sip-calculator",
            "swp-calculator",
            "ppf-calculator",
            "fd-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Income Tax Calculator - Free Online Tool | ToolBox",
            "description": "Estimate income tax liabilities across standard tax brackets."
        },
        "status": "active"
    },
    {
        "id": "retirement-calculator",
        "name": "Retirement Calculator",
        "slug": "retirement-calculator",
        "category": "Finance",
        "description": "Calculate target retirement corpus based on expenses and life expectancy.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "retirement-calculator",
            "retirement",
            "calculator",
            "finance"
        ],
        "relatedTools": [
            "sip-calculator",
            "swp-calculator",
            "ppf-calculator",
            "fd-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Retirement Calculator - Free Online Tool | ToolBox",
            "description": "Calculate target retirement corpus based on expenses and life expectancy."
        },
        "status": "active"
    },
    {
        "id": "mutual-fund-return-calculator",
        "name": "Mutual Fund Return Calculator",
        "slug": "mutual-fund-return-calculator",
        "category": "Finance",
        "description": "Estimate mutual fund lump-sum and SIP returns over time.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "mutual-fund-return-calculator",
            "mutual",
            "fund",
            "return",
            "calculator",
            "finance"
        ],
        "relatedTools": [
            "sip-calculator",
            "swp-calculator",
            "ppf-calculator",
            "fd-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Mutual Fund Return Calculator - Free Online Tool | ToolBox",
            "description": "Estimate mutual fund lump-sum and SIP returns over time."
        },
        "status": "active"
    },
    {
        "id": "break-even-calculator",
        "name": "Break-Even Calculator",
        "slug": "break-even-calculator",
        "category": "Finance",
        "description": "Calculate break-even unit volume and revenue based on fixed and variable costs.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "break-even-calculator",
            "break",
            "even",
            "calculator",
            "finance"
        ],
        "relatedTools": [
            "sip-calculator",
            "swp-calculator",
            "ppf-calculator",
            "fd-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Break-Even Calculator - Free Online Tool | ToolBox",
            "description": "Calculate break-even unit volume and revenue based on fixed and variable costs."
        },
        "status": "active"
    },
    {
        "id": "profit-margin-calculator",
        "name": "Profit Margin Calculator",
        "slug": "profit-margin-calculator",
        "category": "Finance",
        "description": "Calculate gross profit margin, markup percentage, and net profit.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "profit-margin-calculator",
            "profit",
            "margin",
            "calculator",
            "finance"
        ],
        "relatedTools": [
            "sip-calculator",
            "swp-calculator",
            "ppf-calculator",
            "fd-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Profit Margin Calculator - Free Online Tool | ToolBox",
            "description": "Calculate gross profit margin, markup percentage, and net profit."
        },
        "status": "active"
    },
    {
        "id": "markup-calculator",
        "name": "Markup Calculator",
        "slug": "markup-calculator",
        "category": "Finance",
        "description": "Calculate selling price and profit from cost and desired markup percentage.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "markup-calculator",
            "markup",
            "calculator",
            "finance"
        ],
        "relatedTools": [
            "sip-calculator",
            "swp-calculator",
            "ppf-calculator",
            "fd-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Markup Calculator - Free Online Tool | ToolBox",
            "description": "Calculate selling price and profit from cost and desired markup percentage."
        },
        "status": "active"
    },
    {
        "id": "savings-calculator",
        "name": "Savings Calculator",
        "slug": "savings-calculator",
        "category": "Finance",
        "description": "Calculate how long it takes to reach your savings goal with monthly deposits.",
        "template": "FinanceToolTemplate",
        "keywords": [
            "savings-calculator",
            "savings",
            "calculator",
            "finance"
        ],
        "relatedTools": [
            "sip-calculator",
            "swp-calculator",
            "ppf-calculator",
            "fd-calculator"
        ],
        "executionType": "client",
        "seo": {
            "title": "Savings Calculator - Free Online Tool | ToolBox",
            "description": "Calculate how long it takes to reach your savings goal with monthly deposits."
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

export function getToolsByCategory(category: string): ToolMetadata[] {
    const norm = category.toLowerCase().replace(/[-_]/g, ' ').trim();
    return TOOLS.filter(tool => {
        const catNorm = tool.category.toLowerCase().replace(/[-_]/g, ' ').trim();
        return catNorm === norm || 
               (norm === 'pdf' && catNorm === 'pdf') ||
               (norm === 'images' && (catNorm === 'images' || catNorm === 'image')) ||
               (norm === 'image' && (catNorm === 'images' || catNorm === 'image')) ||
               (norm === 'calculators' && (catNorm === 'calculators' || catNorm === 'calculator')) ||
               (norm === 'converters' && (catNorm === 'converters' || catNorm === 'converter')) ||
               (norm === 'date & time' && (catNorm === 'date & time' || catNorm === 'date and time' || catNorm === 'date time')) ||
               (norm === 'date-time' && (catNorm === 'date & time' || catNorm === 'date and time')) ||
               (norm === 'finance' && catNorm === 'finance');
    });
}

export function searchTools(query: string): ToolMetadata[] {
    if (!query || !query.trim()) return TOOLS;
    const lowerQuery = query.toLowerCase().trim();
    return TOOLS.filter(tool => 
        tool.name.toLowerCase().includes(lowerQuery) || 
        tool.description.toLowerCase().includes(lowerQuery) ||
        tool.keywords.some(k => k.toLowerCase().includes(lowerQuery)) ||
        tool.category.toLowerCase().includes(lowerQuery)
    );
}
