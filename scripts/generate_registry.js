const fs = require('fs');
const path = require('path');

const categories = ['PDF', 'Images', 'Calculators', 'Converters', 'Text', 'Developer', 'Date & Time', 'Finance'];

const rawTools = [
  // PDF (20)
  { name: 'Compress PDF', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate', desc: 'Reduce file size while optimizing for maximal PDF quality. Fast, easy, and secure.' },
  { name: 'Merge PDF', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate', desc: 'Combine multiple PDF documents into a single organized file in seconds.' },
  { name: 'Split PDF', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate', desc: 'Separate one page or a whole set for easy conversion into independent PDF files.' },
  { name: 'PDF to JPG', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate', desc: 'Convert each PDF page into a high-quality JPG image.' },
  { name: 'JPG to PDF', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate', desc: 'Convert JPG images to PDF documents instantly with custom layout.' },
  { name: 'PDF to PNG', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate', desc: 'Extract pages from PDF and save them as crisp PNG images.' },
  { name: 'PNG to PDF', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate', desc: 'Convert PNG images to PDF files with custom orientation and margins.' },
  { name: 'PDF to Word', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate', desc: 'Convert PDF files into editable DOCX Word documents accurately.' },
  { name: 'Word to PDF', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate', desc: 'Convert Microsoft Word DOC and DOCX files into standard PDF format.' },
  { name: 'PDF to Excel', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate', desc: 'Extract tabular data from PDF into editable Excel XLSX spreadsheets.' },
  { name: 'Excel to PDF', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate', desc: 'Convert Excel spreadsheets into clean, print-ready PDF files.' },
  { name: 'Rotate PDF', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate', desc: 'Rotate specific or all PDF pages 90, 180, or 270 degrees permanently.' },
  { name: 'Delete PDF Pages', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate', desc: 'Remove unwanted pages from your PDF document easily.' },
  { name: 'Extract PDF Pages', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate', desc: 'Extract specific pages from a PDF and save them as a new PDF document.' },
  { name: 'PDF Page Numbering', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate', desc: 'Add customizable page numbers to your PDF documents effortlessly.' },
  { name: 'PDF Password Protection', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate', desc: 'Protect your sensitive PDF files with strong AES encryption and passwords.' },
  { name: 'PDF Unlock', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate', desc: 'Remove password security and restrictions from your PDF files.' },
  { name: 'PDF Watermark', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate', desc: 'Add text or image watermarks across PDF pages with custom opacity and position.' },
  { name: 'PDF Metadata Editor', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate', desc: 'View, edit, or remove PDF metadata including Title, Author, and Subject.' },
  { name: 'PDF Repair', cat: 'PDF', type: 'backend', temp: 'PDFToolTemplate', desc: 'Recover and repair damaged or corrupted PDF files.' },
  
  // Images (20)
  { name: 'Image Compressor', cat: 'Images', type: 'backend', temp: 'ImageToolTemplate', desc: 'Reduce the file size of JPG, PNG, and WebP images without noticeable quality loss.' },
  { name: 'Image Resizer', cat: 'Images', type: 'backend', temp: 'ImageToolTemplate', desc: 'Resize image dimensions in pixels or percentage while maintaining aspect ratio.' },
  { name: 'Image Converter', cat: 'Images', type: 'client', temp: 'ImageToolTemplate', desc: 'Convert images between JPG, PNG, WEBP, GIF, BMP, and ICO formats instantly.' },
  { name: 'JPG to PNG', cat: 'Images', type: 'client', temp: 'ImageToolTemplate', desc: 'Convert JPG images to transparent PNG format with high fidelity.' },
  { name: 'PNG to JPG', cat: 'Images', type: 'client', temp: 'ImageToolTemplate', desc: 'Convert PNG images to lightweight JPG format with adjustable quality.' },
  { name: 'WEBP to JPG', cat: 'Images', type: 'client', temp: 'ImageToolTemplate', desc: 'Convert modern WebP images to widely compatible JPG format.' },
  { name: 'JPG to WEBP', cat: 'Images', type: 'client', temp: 'ImageToolTemplate', desc: 'Convert JPG images to next-gen WebP format for faster web performance.' },
  { name: 'PNG to WEBP', cat: 'Images', type: 'client', temp: 'ImageToolTemplate', desc: 'Convert PNG images to compressed WebP with alpha transparency preserved.' },
  { name: 'Image Cropper', cat: 'Images', type: 'client', temp: 'ImageToolTemplate', desc: 'Crop images to exact dimensions or standard aspect ratios (16:9, 4:3, 1:1).' },
  { name: 'Image Rotator', cat: 'Images', type: 'client', temp: 'ImageToolTemplate', desc: 'Rotate images by 90, 180, or 270 degrees with one click.' },
  { name: 'Image Flipper', cat: 'Images', type: 'client', temp: 'ImageToolTemplate', desc: 'Flip images horizontally or vertically instantly.' },
  { name: 'Image Quality Enhancer', cat: 'Images', type: 'backend', temp: 'ImageToolTemplate', desc: 'Enhance image clarity, sharpness, and contrast.' },
  { name: 'Image Background Remover', cat: 'Images', type: 'backend', temp: 'ImageToolTemplate', desc: 'Automatically remove image backgrounds with high precision edge detection.' },
  { name: 'Image Metadata Remover', cat: 'Images', type: 'client', temp: 'ImageToolTemplate', desc: 'Remove EXIF, GPS location, and camera metadata from your images for privacy.' },
  { name: 'Favicon Generator', cat: 'Images', type: 'client', temp: 'ImageToolTemplate', desc: 'Generate multi-resolution favicon.ico and PNG icons for your website.' },
  { name: 'Image to Base64', cat: 'Images', type: 'client', temp: 'ImageToolTemplate', desc: 'Convert image files into Base64 encoded data URI strings for CSS/HTML embedding.' },
  { name: 'Base64 to Image', cat: 'Images', type: 'client', temp: 'ImageToolTemplate', desc: 'Decode Base64 strings and preview or download them as image files.' },
  { name: 'Image Color Picker', cat: 'Images', type: 'client', temp: 'ImageToolTemplate', desc: 'Pick any color from an uploaded image to get HEX, RGB, and HSL codes.' },
  { name: 'Image Blur Tool', cat: 'Images', type: 'client', temp: 'ImageToolTemplate', desc: 'Apply Gaussian blur to entire images or sensitive regions.' },
  { name: 'Image Watermark', cat: 'Images', type: 'client', temp: 'ImageToolTemplate', desc: 'Overlay custom text or logo watermarks on photos to protect your work.' },

  // Calculators (30)
  { name: 'EMI Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Calculate Equated Monthly Installments (EMI) with principal and interest breakdown.' },
  { name: 'Loan Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Compute monthly payments, total repayment, and amortization schedule for loans.' },
  { name: 'Mortgage Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Calculate home mortgage payments including principal, interest, taxes, and insurance.' },
  { name: 'Simple Interest Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Calculate simple interest earnings or payments based on principal, rate, and time.' },
  { name: 'Compound Interest Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Calculate compound interest growth over time with annual, monthly, or daily compounding.' },
  { name: 'Percentage Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Find the percentage of a number, percentage value, or base value quickly.' },
  { name: 'Percentage Increase Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Calculate the percentage increase from one value to another.' },
  { name: 'Percentage Difference Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Calculate the absolute and relative percentage difference between two numbers.' },
  { name: 'Discount Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Calculate the final price after percentage discounts and tax.' },
  { name: 'Tip Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Calculate restaurant tips and split bills evenly among multiple people.' },
  { name: 'Age Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Calculate exact age in years, months, days, hours, and minutes from date of birth.' },
  { name: 'BMI Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Calculate Body Mass Index (BMI) and health category based on height and weight.' },
  { name: 'BMR Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Calculate Basal Metabolic Rate (BMR) using Mifflin-St Jeor and Harris-Benedict formulas.' },
  { name: 'Calorie Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Estimate daily calorie requirements for weight maintenance, loss, or gain.' },
  { name: 'Time Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Add, subtract, multiply, or divide hours, minutes, and seconds.' },
  { name: 'Date Difference Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Calculate the exact number of days, weeks, and months between two dates.' },
  { name: 'Hours Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Calculate total worked hours, breaks, and wages for timesheets.' },
  { name: 'Average Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Calculate Mean, Median, Mode, Range, and Geometric Mean for a dataset.' },
  { name: 'Ratio Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Simplify ratios, scale ratios up or down, and solve for missing ratio variables.' },
  { name: 'Fraction Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Add, subtract, multiply, and divide fractions with step-by-step simplification.' },
  { name: 'Scientific Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Perform advanced mathematical operations including trigonometry, logarithms, and powers.' },
  { name: 'Random Number Generator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Generate single or multiple cryptographically random numbers within custom ranges.' },
  { name: 'Probability Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Calculate independent, dependent, and conditional probabilities easily.' },
  { name: 'GPA Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Calculate semester and cumulative Grade Point Average (GPA) on a 4.0 scale.' },
  { name: 'Grade Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Calculate overall course grades and required final exam scores.' },
  { name: 'Fuel Cost Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Calculate total fuel cost and consumption for trips based on distance and efficiency.' },
  { name: 'Electricity Cost Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Calculate electricity consumption and cost for appliances per hour, day, and month.' },
  { name: 'Salary Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Convert salary between annual, monthly, bi-weekly, weekly, daily, and hourly rates.' },
  { name: 'Overtime Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Calculate overtime pay at 1.5x, 2x, or custom multiplier rates.' },
  { name: 'Tax Calculator', cat: 'Calculators', type: 'client', temp: 'CalculatorTemplate', desc: 'Estimate sales tax, VAT, or effective income tax rates on gross income.' },

  // Converters (20)
  { name: 'Length Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate', desc: 'Convert length units: meters, kilometers, miles, feet, inches, centimeters, yards.' },
  { name: 'Weight Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate', desc: 'Convert weight units: kilograms, grams, pounds, ounces, stones, metric tons.' },
  { name: 'Height Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate', desc: 'Convert height between feet/inches and centimeters/meters.' },
  { name: 'Temperature Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate', desc: 'Convert temperatures between Celsius, Fahrenheit, and Kelvin.' },
  { name: 'Area Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate', desc: 'Convert area units: square meters, square feet, acres, hectares, square kilometers.' },
  { name: 'Volume Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate', desc: 'Convert volume units: liters, milliliters, gallons, cubic meters, fluid ounces, cups.' },
  { name: 'Speed Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate', desc: 'Convert speed units: km/h, mph, m/s, knots, ft/s.' },
  { name: 'Time Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate', desc: 'Convert time units: seconds, minutes, hours, days, weeks, months, years.' },
  { name: 'Data Storage Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate', desc: 'Convert data units: Bytes, KB, MB, GB, TB, PB (Decimal and Binary / KiB, MiB).' },
  { name: 'Energy Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate', desc: 'Convert energy units: Joules, Kilojoules, Calories, Kilocalories, Watt-hours, BTU.' },
  { name: 'Pressure Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate', desc: 'Convert pressure units: Pascal, Bar, PSI, Atmosphere (atm), Torr.' },
  { name: 'Frequency Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate', desc: 'Convert frequency units: Hertz, Kilohertz, Megahertz, Gigahertz, RPM.' },
  { name: 'Currency Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate', desc: 'Convert major world currencies (USD, EUR, GBP, INR, JPY, CAD, AUD) instantly.' },
  { name: 'Number Base Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate', desc: 'Convert numbers across Binary, Octal, Decimal, and Hexadecimal number bases.' },
  { name: 'Decimal to Binary', cat: 'Converters', type: 'client', temp: 'ConverterTemplate', desc: 'Convert decimal (base 10) numbers into binary (base 2) notation.' },
  { name: 'Binary to Decimal', cat: 'Converters', type: 'client', temp: 'ConverterTemplate', desc: 'Convert binary bits into decimal numbers with step explanation.' },
  { name: 'Decimal to Hexadecimal', cat: 'Converters', type: 'client', temp: 'ConverterTemplate', desc: 'Convert base-10 numbers to hexadecimal (base 16) notation.' },
  { name: 'Roman Numeral Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate', desc: 'Convert Roman numerals (I, V, X, L, C, D, M) to Arabic numbers and vice versa.' },
  { name: 'Image Format Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate', desc: 'Convert image files seamlessly between common web formats.' },
  { name: 'File Size Converter', cat: 'Converters', type: 'client', temp: 'ConverterTemplate', desc: 'Convert file sizes between bits, bytes, KB, MB, GB, and TB.' },

  // Text (20)
  { name: 'Word Counter', cat: 'Text', type: 'client', temp: 'TextToolTemplate', desc: 'Count words, characters, sentences, paragraphs, and estimate reading time in real-time.' },
  { name: 'Character Counter', cat: 'Text', type: 'client', temp: 'TextToolTemplate', desc: 'Count characters with and without spaces, words, and letter frequency breakdown.' },
  { name: 'Sentence Counter', cat: 'Text', type: 'client', temp: 'TextToolTemplate', desc: 'Count total sentences, average sentence length, and readability scores.' },
  { name: 'Case Converter', cat: 'Text', type: 'client', temp: 'TextToolTemplate', desc: 'Convert text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, snake_case.' },
  { name: 'Uppercase Converter', cat: 'Text', type: 'client', temp: 'TextToolTemplate', desc: 'Transform all text characters to UPPERCASE instantly.' },
  { name: 'Lowercase Converter', cat: 'Text', type: 'client', temp: 'TextToolTemplate', desc: 'Transform all text characters to lowercase instantly.' },
  { name: 'Title Case Converter', cat: 'Text', type: 'client', temp: 'TextToolTemplate', desc: 'Capitalize words following standard title capitalization conventions.' },
  { name: 'Remove Duplicate Lines', cat: 'Text', type: 'client', temp: 'TextToolTemplate', desc: 'Remove duplicate lines from text lists while preserving original order.' },
  { name: 'Remove Extra Spaces', cat: 'Text', type: 'client', temp: 'TextToolTemplate', desc: 'Strip leading, trailing, and consecutive multiple whitespace characters.' },
  { name: 'Text Sorter', cat: 'Text', type: 'client', temp: 'TextToolTemplate', desc: 'Sort lines alphabetically (A-Z or Z-A), numerically, or by length.' },
  { name: 'Text Reverser', cat: 'Text', type: 'client', temp: 'TextToolTemplate', desc: 'Reverse entire text strings, words in sentences, or lines in lists.' },
  { name: 'Find and Replace', cat: 'Text', type: 'client', temp: 'TextToolTemplate', desc: 'Search and replace text substrings with case-sensitive and regex matching.' },
  { name: 'Lorem Ipsum Generator', cat: 'Text', type: 'client', temp: 'TextToolTemplate', desc: 'Generate placeholder dummy text by paragraphs, sentences, or words.' },
  { name: 'Text Diff Checker', cat: 'Text', type: 'client', temp: 'TextToolTemplate', desc: 'Compare two text snippets side-by-side to highlight additions, deletions, and edits.' },
  { name: 'Markdown Previewer', cat: 'Text', type: 'client', temp: 'TextToolTemplate', desc: 'Write and preview GitHub-flavored markdown with live HTML rendering.' },
  { name: 'JSON Formatter', cat: 'Text', type: 'client', temp: 'TextToolTemplate', desc: 'Format and beautify minified JSON with customizable 2 or 4 space indentation.' },
  { name: 'JSON Validator', cat: 'Text', type: 'client', temp: 'TextToolTemplate', desc: 'Validate JSON syntax and identify exact line and character errors.' },
  { name: 'XML Formatter', cat: 'Text', type: 'client', temp: 'TextToolTemplate', desc: 'Format, indent, and prettify XML documents for improved readability.' },
  { name: 'CSV to JSON', cat: 'Text', type: 'client', temp: 'TextToolTemplate', desc: 'Convert CSV table data into structured JSON array of objects.' },
  { name: 'Text to Slug', cat: 'Text', type: 'client', temp: 'TextToolTemplate', desc: 'Convert strings into clean, URL-friendly slugs with lowercase hyphenation.' },

  // Developer (25)
  { name: 'JSON Minifier', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate', desc: 'Minify JSON by removing whitespace and line breaks to reduce payload size.' },
  { name: 'JSON to CSV', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate', desc: 'Convert structured JSON arrays into CSV format with downloadable output.' },
  { name: 'XML Validator', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate', desc: 'Validate XML strings against standard syntax and well-formedness rules.' },
  { name: 'HTML Formatter', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate', desc: 'Prettify and clean up messy HTML source code with uniform indentation.' },
  { name: 'HTML Minifier', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate', desc: 'Minify HTML markup by removing comments and unnecessary whitespace.' },
  { name: 'CSS Formatter', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate', desc: 'Format and organize CSS stylesheets with readable spacing and structure.' },
  { name: 'CSS Minifier', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate', desc: 'Compress CSS stylesheets for faster browser download and execution.' },
  { name: 'JavaScript Formatter', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate', desc: 'Beautify JavaScript and TypeScript code with clean indentation.' },
  { name: 'JavaScript Minifier', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate', desc: 'Minify JS scripts by stripping whitespace and comments.' },
  { name: 'SQL Formatter', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate', desc: 'Format SQL queries with capitalized keywords and aligned clauses.' },
  { name: 'SQL Minifier', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate', desc: 'Minify SQL queries into single line statements.' },
  { name: 'Base64 Encoder', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate', desc: 'Encode raw text or binary data into standard Base64 string format.' },
  { name: 'Base64 Decoder', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate', desc: 'Decode Base64 strings back into original UTF-8 plain text.' },
  { name: 'URL Encoder', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate', desc: 'Encode query parameters and URLs using standard percent-encoding.' },
  { name: 'URL Decoder', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate', desc: 'Decode percent-encoded URL strings back into readable characters.' },
  { name: 'JWT Decoder', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate', desc: 'Decode JSON Web Tokens (JWT) to inspect Header, Payload, and expiration dates.' },
  { name: 'UUID Generator', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate', desc: 'Generate version 4 (v4) random Universally Unique Identifiers (UUIDs).' },
  { name: 'Hash Generator', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate', desc: 'Generate cryptographic MD5, SHA-1, SHA-256, and SHA-512 hashes.' },
  { name: 'Regex Tester', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate', desc: 'Test regular expressions against test strings with live match group capture.' },
  { name: 'Timestamp Converter', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate', desc: 'Convert Unix epoch timestamps (seconds/milliseconds) to human-readable date/time.' },
  { name: 'Color Converter', cat: 'Developer', type: 'client', temp: 'DeveloperToolTemplate', desc: 'Convert color codes between HEX, RGB, RGBA, HSL, and CMYK formats.' },

  // Date & Time (12)
  { name: 'Date Calculator', cat: 'Date & Time', type: 'client', temp: 'DateTimeToolTemplate', desc: 'Add or subtract days, weeks, months, and years from any given date.' },
  { name: 'Days Between Dates', cat: 'Date & Time', type: 'client', temp: 'DateTimeToolTemplate', desc: 'Calculate the total number of calendar days between two selected dates.' },
  { name: 'Business Days Calculator', cat: 'Date & Time', type: 'client', temp: 'DateTimeToolTemplate', desc: 'Calculate working business days between two dates, excluding weekends.' },
  { name: 'Add Days to Date', cat: 'Date & Time', type: 'client', temp: 'DateTimeToolTemplate', desc: 'Add a specific number of days, weeks, or months to a starting date.' },
  { name: 'Subtract Days from Date', cat: 'Date & Time', type: 'client', temp: 'DateTimeToolTemplate', desc: 'Subtract a specific number of days or months from a starting date.' },
  { name: 'Time Difference Calculator', cat: 'Date & Time', type: 'client', temp: 'DateTimeToolTemplate', desc: 'Calculate exact difference in hours, minutes, and seconds between two times.' },
  { name: 'Time Zone Converter', cat: 'Date & Time', type: 'client', temp: 'DateTimeToolTemplate', desc: 'Convert times across global time zones (UTC, EST, PST, GMT, IST, JST).' },
  { name: 'Unix Timestamp Converter', cat: 'Date & Time', type: 'client', temp: 'DateTimeToolTemplate', desc: 'Convert Unix timestamps to local and UTC date strings.' },
  { name: 'Countdown Calculator', cat: 'Date & Time', type: 'client', temp: 'DateTimeToolTemplate', desc: 'Create a live real-time countdown to any future target date and time.' },
  { name: 'Week Number Calculator', cat: 'Date & Time', type: 'client', temp: 'DateTimeToolTemplate', desc: 'Determine ISO 8601 week number and day of the year for any date.' },

  // Finance (20)
  { name: 'SIP Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate', desc: 'Calculate returns on Systematic Investment Plans (SIP) with monthly compounding.' },
  { name: 'SWP Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate', desc: 'Calculate Systematic Withdrawal Plan (SWP) schedules and remaining balance.' },
  { name: 'PPF Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate', desc: 'Calculate Public Provident Fund (PPF) maturity amounts and interest accrued.' },
  { name: 'FD Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate', desc: 'Calculate Fixed Deposit maturity amount and total interest earned.' },
  { name: 'RD Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate', desc: 'Calculate Recurring Deposit investment returns with quarterly compounding.' },
  { name: 'CAGR Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate', desc: 'Calculate Compound Annual Growth Rate (CAGR) for your investments.' },
  { name: 'XIRR Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate', desc: 'Calculate Extended Internal Rate of Return for irregular cash flows.' },
  { name: 'Inflation Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate', desc: 'Calculate the future purchasing power of money based on inflation rates.' },
  { name: 'Investment Return Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate', desc: 'Calculate Return on Investment (ROI) and annualized yields.' },
  { name: 'Loan Interest Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate', desc: 'Calculate total interest paid on loans with reducing balance vs flat rate.' },
  { name: 'Net Worth Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate', desc: 'Calculate total net worth by balancing assets and liabilities.' },
  { name: 'Salary to Hourly Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate', desc: 'Convert annual or monthly salary into equivalent hourly wage rate.' },
  { name: 'GST Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate', desc: 'Calculate Goods and Services Tax (GST) inclusion and exclusion amounts.' },
  { name: 'Income Tax Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate', desc: 'Estimate income tax liabilities across standard tax brackets.' },
  { name: 'Retirement Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate', desc: 'Calculate target retirement corpus based on expenses and life expectancy.' },
  { name: 'Mutual Fund Return Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate', desc: 'Estimate mutual fund lump-sum and SIP returns over time.' },
  { name: 'Break-Even Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate', desc: 'Calculate break-even unit volume and revenue based on fixed and variable costs.' },
  { name: 'Profit Margin Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate', desc: 'Calculate gross profit margin, markup percentage, and net profit.' },
  { name: 'Markup Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate', desc: 'Calculate selling price and profit from cost and desired markup percentage.' },
  { name: 'Savings Calculator', cat: 'Finance', type: 'client', temp: 'FinanceToolTemplate', desc: 'Calculate how long it takes to reach your savings goal with monthly deposits.' }
];

function slugify(text) {
  return text.toString().toLowerCase().trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, 'and')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

// Deduplicate tools by slug
const slugMap = new Map();
const finalTools = [];

rawTools.forEach(t => {
  const slug = slugify(t.name);
  if (!slugMap.has(slug)) {
    const toolObj = {
      id: slug,
      name: t.name,
      slug: slug,
      category: t.cat,
      description: t.desc,
      template: t.temp,
      keywords: [slug, ...slug.split('-'), t.cat.toLowerCase()],
      relatedTools: [],
      executionType: t.type,
      seo: {
        title: `${t.name} - Free Online Tool | ToolBox`,
        description: t.desc
      },
      status: 'active'
    };
    slugMap.set(slug, toolObj);
    finalTools.push(toolObj);
  }
});

// Configure related tools systematically by category
finalTools.forEach(tool => {
  const sameCat = finalTools.filter(t => t.category === tool.category && t.id !== tool.id);
  const related = sameCat.slice(0, 4).map(t => t.id);
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

export const TOOLS: ToolMetadata[] = ${JSON.stringify(finalTools, null, 4)};

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
`;

fs.writeFileSync(path.join(__dirname, '../data/registry.ts'), tsContent, 'utf-8');
console.log(`Registry generated successfully with ${finalTools.length} tools across ${categories.length} categories.`);
