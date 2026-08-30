const fs = require('fs');
const path = require('path');

const categories = ['PDF', 'Images', 'Calculators', 'Converters', 'Text', 'Developer', 'Date & Time', 'Finance'];

const rawTools = [
  // PDF
  { name: 'Compress PDF', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate' },
  { name: 'Merge PDF', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate' },
  { name: 'Split PDF', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate' },
  { name: 'PDF to JPG', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate' },
  { name: 'JPG to PDF', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate' },
  { name: 'PDF to PNG', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate' },
  { name: 'PNG to PDF', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate' },
  { name: 'PDF to Word', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate' },
  { name: 'Word to PDF', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate' },
  { name: 'PDF to Excel', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate' },
  { name: 'Excel to PDF', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate' },
  { name: 'Rotate PDF', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate' },
  { name: 'Delete PDF Pages', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate' },
  { name: 'Extract PDF Pages', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate' },
  { name: 'PDF Page Numbering', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate' },
  { name: 'PDF Password Protection', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate' },
  { name: 'PDF Unlock', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate' },
  { name: 'Watermark PDF', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate' },
  { name: 'PDF Metadata Editor', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate' },
  { name: 'PDF Repair', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate' },
  
  // Images
  { name: 'Image Compressor', cat: 'Images', type: 'backend', temp: 'ImageToolTemplate' },
  { name: 'Image Resizer', cat: 'Images', type: 'backend', temp: 'ImageToolTemplate' },
  { name: 'Image Converter', cat: 'Images', type: 'client', temp: 'ImageToolTemplate' },
  { name: 'JPG to PNG', cat: 'Images', type: 'client', temp: 'ImageToolTemplate' },
  { name: 'PNG to JPG', cat: 'Images', type: 'client', temp: 'ImageToolTemplate' },
  { name: 'WEBP to JPG', cat: 'Images', type: 'client', temp: 'ImageToolTemplate' },
  { name: 'JPG to WEBP', cat: 'Images', type: 'client', temp: 'ImageToolTemplate' },
  { name: 'PNG to WEBP', cat: 'Images', type: 'client', temp: 'ImageToolTemplate' },
  { name: 'Image Cropper', cat: 'Images', type: 'client', temp: 'ImageToolTemplate' },
  { name: 'Image Rotator', cat: 'Images', type: 'client', temp: 'ImageToolTemplate' },
  { name: 'Image Flipper', cat: 'Images', type: 'client', temp: 'ImageToolTemplate' },
  { name: 'Image Quality Enhancer', cat: 'Images', type: 'backend', temp: 'ImageToolTemplate' },
  { name: 'Image Background Remover', cat: 'Images', type: 'backend', temp: 'ImageToolTemplate' },
  { name: 'Image Metadata Remover', cat: 'Images', type: 'client', temp: 'ImageToolTemplate' },
  { name: 'Favicon Generator', cat: 'Images', type: 'client', temp: 'ImageToolTemplate' },
  { name: 'Image to Base64', cat: 'Images', type: 'client', temp: 'ImageToolTemplate' },
  { name: 'Base64 to Image', cat: 'Images', type: 'client', temp: 'ImageToolTemplate' },
  { name: 'Image Color Picker', cat: 'Images', type: 'client', temp: 'ImageToolTemplate' },
  { name: 'Image Blur Tool', cat: 'Images', type: 'client', temp: 'ImageToolTemplate' },
  { name: 'Image Watermark', cat: 'Images', type: 'client', temp: 'ImageToolTemplate' },

  // Calculators
  { name: 'EMI Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'Loan Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'Mortgage Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'Simple Interest Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'Compound Interest Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'Percentage Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'Percentage Increase Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'Percentage Difference Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'Discount Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'Tip Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'Age Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'BMI Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'BMR Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'Calorie Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'Time Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'Date Difference Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'Hours Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'Average Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'Ratio Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'Fraction Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'Scientific Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'Random Number Generator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'Probability Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'GPA Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'Grade Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'Fuel Cost Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'Electricity Cost Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'Salary Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'Overtime Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },
  { name: 'Tax Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate' },

  // Converters
  { name: 'Length Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate' },
  { name: 'Weight Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate' },
  { name: 'Height Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate' },
  { name: 'Temperature Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate' },
  { name: 'Area Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate' },
  { name: 'Volume Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate' },
  { name: 'Speed Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate' },
  { name: 'Time Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate' },
  { name: 'Data Storage Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate' },
  { name: 'Energy Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate' },
  { name: 'Pressure Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate' },
  { name: 'Frequency Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate' },
  { name: 'Currency Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate' },
  { name: 'Number Base Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate' },
  { name: 'Decimal to Binary', cat: 'Converters', type: 'client', temp: 'ConverterTemplate' },
  { name: 'Binary to Decimal', cat: 'Converters', type: 'client', temp: 'ConverterTemplate' },
  { name: 'Decimal to Hexadecimal', cat: 'Converters', type: 'client', temp: 'ConverterTemplate' },
  { name: 'Roman Numeral Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate' },
  { name: 'Image Format Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate' },
  { name: 'File Size Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate' },

  // Text
  { name: 'Word Counter', cat: 'Text', type: 'client', temp: 'TextToolTemplate' },
  { name: 'Character Counter', cat: 'Text', type: 'client', temp: 'TextToolTemplate' },
  { name: 'Sentence Counter', cat: 'Text', type: 'client', temp: 'TextToolTemplate' },
  { name: 'Case Converter', cat: 'Text', type: 'client', temp: 'TextToolTemplate' },
  { name: 'Uppercase Converter', cat: 'Text', type: 'client', temp: 'TextToolTemplate' },
  { name: 'Lowercase Converter', cat: 'Text', type: 'client', temp: 'TextToolTemplate' },
  { name: 'Title Case Converter', cat: 'Text', type: 'client', temp: 'TextToolTemplate' },
  { name: 'Remove Duplicate Lines', cat: 'Text', type: 'client', temp: 'TextToolTemplate' },
  { name: 'Remove Extra Spaces', cat: 'Text', type: 'client', temp: 'TextToolTemplate' },
  { name: 'Text Sorter', cat: 'Text', type: 'client', temp: 'TextToolTemplate' },
  { name: 'Text Reverser', cat: 'Text', type: 'client', temp: 'TextToolTemplate' },
  { name: 'Find and Replace', cat: 'Text', type: 'client', temp: 'TextToolTemplate' },
  { name: 'Lorem Ipsum Generator', cat: 'Text', type: 'client', temp: 'TextToolTemplate' },
  { name: 'Text Diff Checker', cat: 'Text', type: 'client', temp: 'TextToolTemplate' },
  { name: 'Markdown Previewer', cat: 'Text', type: 'client', temp: 'TextToolTemplate' },
  { name: 'JSON Formatter', cat: 'Text', type: 'client', temp: 'TextToolTemplate' },
  { name: 'JSON Validator', cat: 'Text', type: 'client', temp: 'TextToolTemplate' },
  { name: 'XML Formatter', cat: 'Text', type: 'client', temp: 'TextToolTemplate' },
  { name: 'CSV to JSON', cat: 'Text', type: 'client', temp: 'TextToolTemplate' },
  { name: 'Text to Slug', cat: 'Text', type: 'client', temp: 'TextToolTemplate' },

  // Developer
  { name: 'JSON Minifier', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate' },
  { name: 'JSON to CSV', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate' },
  { name: 'XML Validator', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate' },
  { name: 'HTML Formatter', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate' },
  { name: 'HTML Minifier', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate' },
  { name: 'CSS Formatter', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate' },
  { name: 'CSS Minifier', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate' },
  { name: 'JavaScript Formatter', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate' },
  { name: 'JavaScript Minifier', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate' },
  { name: 'SQL Formatter', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate' },
  { name: 'SQL Minifier', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate' },
  { name: 'Base64 Encoder', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate' },
  { name: 'Base64 Decoder', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate' },
  { name: 'URL Encoder', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate' },
  { name: 'URL Decoder', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate' },
  { name: 'JWT Decoder', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate' },
  { name: 'UUID Generator', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate' },
  { name: 'Hash Generator', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate' },
  { name: 'Regex Tester', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate' },
  { name: 'Timestamp Converter', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate' },
  { name: 'Color Converter', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate' },

  // Date & Time
  { name: 'Date Calculator', cat: 'Date & Time', type: 'client', temp: 'DateTimeToolTemplate' },
  { name: 'Days Between Dates', cat: 'Date & Time', type: 'client', temp: 'DateTimeToolTemplate' },
  { name: 'Business Days Calculator', cat: 'Date & Time', type: 'client', temp: 'DateTimeToolTemplate' },
  { name: 'Add Days to Date', cat: 'Date & Time', type: 'client', temp: 'DateTimeToolTemplate' },
  { name: 'Subtract Days from Date', cat: 'Date & Time', type: 'client', temp: 'DateTimeToolTemplate' },
  { name: 'Time Difference Calculator', cat: 'Date & Time', type: 'client', temp: 'DateTimeToolTemplate' },
  { name: 'Time Zone Converter', cat: 'Date & Time', type: 'client', temp: 'DateTimeToolTemplate' },
  { name: 'Unix Timestamp Converter', cat: 'Date & Time', type: 'client', temp: 'DateTimeToolTemplate' },
  { name: 'Countdown Calculator', cat: 'Date & Time', type: 'client', temp: 'DateTimeToolTemplate' },
  { name: 'Week Number Calculator', cat: 'Date & Time', type: 'client', temp: 'DateTimeToolTemplate' },

  // Finance
  { name: 'SIP Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate' },
  { name: 'SWP Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate' },
  { name: 'PPF Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate' },
  { name: 'FD Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate' },
  { name: 'RD Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate' },
  { name: 'CAGR Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate' },
  { name: 'XIRR Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate' },
  { name: 'Inflation Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate' },
  { name: 'Investment Return Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate' },
  { name: 'Loan Interest Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate' },
  { name: 'Net Worth Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate' },
  { name: 'Salary to Hourly Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate' },
  { name: 'GST Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate' },
  { name: 'Income Tax Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate' },
  { name: 'Retirement Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate' },
  { name: 'Mutual Fund Return Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate' },
  { name: 'Break-Even Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate' },
  { name: 'Profit Margin Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate' },
  { name: 'Markup Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate' },
  { name: 'Savings Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate' }
];

function slugify(text) {
  return text.toString().toLowerCase().trim().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-');
}

const finalTools = rawTools.map((t, index) => {
  const slug = slugify(t.name);
  return {
    id: slug,
    name: t.name,
    slug: slug,
    category: t.cat,
    description: 'Free online ' + t.name + ' tool. Fast, secure, and easy to use.',
    template: t.temp,
    keywords: [slug, ...slug.split('-')],
    relatedTools: [],
    executionType: t.type,
    seo: {
      title: t.name + ' - ToolBox',
      description: 'Use our ' + t.name + ' tool for free.'
    },
    status: 'active'
  };
});

// Post process to add random related tools (from same category)
finalTools.forEach(tool => {
  const sameCat = finalTools.filter(t => t.category === tool.category && t.id !== tool.id);
  // Pick up to 3 random related tools
  const related = [];
  for(let i=0; i<Math.min(3, sameCat.length); i++) {
    const r = sameCat[Math.floor(Math.random() * sameCat.length)];
    if(!related.includes(r.id)) related.push(r.id);
  }
  tool.relatedTools = related;
});

const tsContent = `export type ToolCategory = 'PDF' | 'Images' | 'Calculators' | 'Converters' | 'Text' | 'Developer' | 'Date & Time' | 'Finance';

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

export const TOOLS: ToolMetadata[] = ${JSON.stringify(finalTools, null, 4)};

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
`;

fs.writeFileSync(path.join(__dirname, '../data/registry.ts'), tsContent, 'utf-8');
console.log('Registry generated successfully with ' + finalTools.length + ' tools.');
