const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse').default || require('pdf-parse');

const pdfPath = path.join(__dirname, 'info', 'G.B.S. Profile_.pdf');

async function readPDF() {
  try {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdfParse(dataBuffer);
    fs.writeFileSync('reference_profile.txt', data.text, 'utf8');
    console.log('Reference PDF extracted successfully');
  } catch (err) {
    console.error('Error:', err.message);
  }
}

readPDF();
