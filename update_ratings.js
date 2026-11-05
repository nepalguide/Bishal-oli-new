import fs from 'fs';

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  let original = content;

  content = content.split('4.9 out of 5').join('5.0 out of 5');
  content = content.split('"ratingValue": "4.9"').join('"ratingValue": "5.0"');
  content = content.split('★ 4.9').join('★ 5.0');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf-8');
    console.log(`Updated ${file} to 5.0 out of 5!`);
  }
});
