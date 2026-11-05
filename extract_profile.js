import fs from 'fs';
import XLSX from 'xlsx';

const workbook = XLSX.readFile('Bishal Oli Profile.xlsx');
const sheetNames = workbook.SheetNames;
console.log('Sheet names found:', sheetNames);

const result = {};

sheetNames.forEach(name => {
  const sheet = workbook.Sheets[name];
  const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
  // filter completely empty rows
  result[name] = jsonData.filter(row => row.some(cell => cell !== null && cell !== ''));
});

fs.writeFileSync('extracted_profile.json', JSON.stringify(result, null, 2), 'utf-8');
console.log('Successfully saved to extracted_profile.json!');
