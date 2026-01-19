const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');
const XLSX = require('xlsx');

const contentDir = path.join(__dirname, '../content');

async function readDocx(filePath) {
  try {
    const result = await mammoth.extractRawText({ path: filePath });
    return result.value;
  } catch (err) {
    return `Error reading ${filePath}: ${err.message}`;
  }
}

function readXlsx(filePath) {
  try {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json(sheet);
  } catch (err) {
    return `Error reading ${filePath}: ${err.message}`;
  }
}

async function main() {
  let output = {};
  if (fs.existsSync(contentDir)) {
      const files = fs.readdirSync(contentDir);

      for (const file of files) {
        const fullPath = path.join(contentDir, file);
        if (file.endsWith('.docx')) {
          output[file] = await readDocx(fullPath);
        } else if (file.endsWith('.xlsx')) {
          output[file] = readXlsx(fullPath);
        }
      }
  } else {
      output = { error: "Content directory not found" };
  }

  fs.writeFileSync('content.json', JSON.stringify(output, null, 2), 'utf8');
  console.log("Written to content.json");
}

main();
