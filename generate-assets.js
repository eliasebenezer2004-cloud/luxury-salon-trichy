const fs = require('fs');
const path = require('path');
const https = require('https');

const dir = path.join(__dirname, 'public', 'models');

// Create the directory if it doesn't exist
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
    console.log('Created public/models directory.');
}

// Helper to download files
const downloadFile = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

// Asset definitions
const images = [
  { name: 'eucalyptus-minimalist.webp', size: '400x600', text: 'Eucalyptus' },
  { name: 'massage-oil-botanical.webp', size: '400x600', text: 'Massage+Oil' },
  { name: 'bridal-glow-portrait.webp', size: '800x1200', text: 'Bridal+Portrait' },
  { name: 'clay-bowl-botanical.webp', size: '800x800', text: 'Clay+Bowl' },
  { name: 'hot-stones-towel.webp', size: '800x800', text: 'Hot+Stones' },
  { name: 'salon-interior-arches.webp', size: '1600x900', text: 'Salon+Interior' },
  { name: 'serum-dropper-capture.webp', size: '800x1000', text: 'Serum+Dropper' },
  { name: 'towel-steam-scalp.webp', size: '800x1000', text: 'Towel+Steam' },
  { name: 'manicure-sandstone.webp', size: '800x1000', text: 'Manicure' },
  { name: 'cantonment-facade.webp', size: '600x800', text: 'Cantonment+Hub' },
  { name: 'thillai-nagar-lounge.webp', size: '600x800', text: 'Thillai+Nagar' },
  { name: 'kk-nagar-sanctuary.webp', size: '600x800', text: 'KK+Nagar' },
];

for (let i = 1; i <= 6; i++) {
  images.push({ name: `artisan-avatar-${i}.webp`, size: '600x800', text: `Artisan+0${i}` });
}

// Tiny sample video URL (W3Schools sample)
const videoUrl = 'https://www.w3schools.com/html/mov_bbb.mp4';
const videos = ['hero-fluid-stone.mp4', 'hair-spa-fluidity.mp4', 'incense-smoke-elevation.mp4'];

async function generateAll() {
  console.log('Downloading placeholder images...');
  for (const img of images) {
    const url = `https://placehold.co/${img.size}/F0EBE1/3E3A37.webp?text=${img.text}`;
    const dest = path.join(dir, img.name);
    await downloadFile(url, dest);
    console.log(`✅ Downloaded ${img.name}`);
  }

  console.log('\nDownloading placeholder videos...');
  for (const vid of videos) {
    const dest = path.join(dir, vid);
    await downloadFile(videoUrl, dest);
    console.log(`✅ Downloaded ${vid}`);
  }
  
  console.log('\n🎉 All assets generated successfully!');
}

generateAll();