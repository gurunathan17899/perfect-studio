import fs from 'fs';
import path from 'path';

const imgDir = 'C:/Users/Home/.gemini/antigravity/scratch/chandrika-studios/public/assets/img';
if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });

const images = [
  'banner1.png', 'home-banner.jpg', 'about-banner.png', 'bg.png', 'why-bg.png',
  'testimonial-bg.png', 'cta-bg.png', 'cta-bg-right.png', 'portraits-left-bg.png',
  'portraits-right-bg.png', 'portraits-01.png', 'portraits-02.png', 'portraits-03.png', 'portraits-04.png',
  'finest work2.png', 'finest work5.png', 'finest work6.png', 'finest work7.png',
  'finest work9.png', 'finest work12.png', 'finest work13.png', 'finest work14.png',
  'finest work16.png', 'finest work17.png', 'finest work18.png', 'finest work19.png', 'finest work20.png'
];

async function download(url, dest) {
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    if (res.ok) {
      const buffer = await res.arrayBuffer();
      fs.writeFileSync(dest, Buffer.from(buffer));
      console.log(`Saved ${path.basename(dest)} (${(buffer.byteLength / 1024).toFixed(1)} KB)`);
    } else {
      console.log(`HTTP ${res.status}: ${url}`);
    }
  } catch (err) {
    console.error(`Error ${url}: ${err.message}`);
  }
}

async function run() {
  for (const img of images) {
    const encoded = encodeURI(img);
    await download(`https://chandrikastudios.com/assets/img/${encoded}`, path.join(imgDir, img));
  }
}

run();
