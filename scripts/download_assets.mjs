import fs from 'fs';
import path from 'path';

const svgDir = 'C:/Users/Home/.gemini/antigravity/scratch/chandrika-studios/public/assets/svg';
const imgDir = 'C:/Users/Home/.gemini/antigravity/scratch/chandrika-studios/public/assets/img';

if (!fs.existsSync(svgDir)) fs.mkdirSync(svgDir, { recursive: true });
if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });

const svgs = [
  'logo.svg', 'footer-logo.svg', 'experienced-photographers.svg', 'modern-studio-spaces.svg',
  'high-quality-equipment.svg', 'customized-packages.svg', 'client-first-approach.svg',
  'footer-location.svg', 'footer-email.svg', 'footer-clock.svg', 'footer-whatsapp.svg',
  'left-arrow.svg', 'right-arrow.svg', 'share.svg', 'fb.svg', 'yt.svg', 'footer-insta.svg',
  'floating-insta.svg', 'floating-fb.svg', 'floating-yt.svg', 'floating-enquiry.svg',
  'floating-whatsapp.svg', 'floating-call.svg'
];

async function download(url, dest) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });
    if (res.ok) {
      const buffer = await res.arrayBuffer();
      fs.writeFileSync(dest, Buffer.from(buffer));
      console.log(`Saved ${path.basename(dest)} (${buffer.byteLength} bytes)`);
    } else {
      console.log(`Failed ${url}: ${res.status}`);
    }
  } catch (err) {
    console.error(`Error ${url}: ${err.message}`);
  }
}

async function run() {
  for (const s of svgs) {
    await download(`https://chandrikastudios.com/assets/svg/${s}`, path.join(svgDir, s));
  }
}

run();
