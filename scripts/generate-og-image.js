const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create a 1200x630 canvas
const canvas = createCanvas(1200, 630);
const ctx = canvas.getContext('2d');

// Create gradient background
const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
gradient.addColorStop(0, '#667eea');
gradient.addColorStop(1, '#764ba2');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 1200, 630);

// Add pattern overlay
ctx.save();
ctx.globalAlpha = 0.1;
ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
ctx.lineWidth = 2;
for (let i = -1200; i < 1200; i += 40) {
  ctx.beginPath();
  ctx.moveTo(i, 0);
  ctx.lineTo(i + 630, 630);
  ctx.stroke();
}
ctx.restore();

// Add decorative circles with blur effect
ctx.save();
ctx.globalAlpha = 0.1;
ctx.filter = 'blur(80px)';
ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
ctx.beginPath();
ctx.arc(1100, 100, 150, 0, Math.PI * 2);
ctx.fill();
ctx.beginPath();
ctx.arc(100, 530, 200, 0, Math.PI * 2);
ctx.fill();
ctx.restore();

// Center content
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';

// Add fire emoji
ctx.font = '80px sans-serif';
ctx.fillText('🔥', 600, 180);

// Main title
ctx.fillStyle = 'white';
ctx.font = 'bold 72px sans-serif';
ctx.fillText('FIRE Calculator', 600, 280);

// Subtitle
ctx.font = '28px sans-serif';
ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
ctx.fillText('Calculate Your Path to Financial Independence', 600, 340);

// Feature pills
const features = ['Free Tool', 'Monte Carlo', '5 FIRE Types', 'Visual Charts'];
const pillWidth = 160;
const pillHeight = 45;
const pillY = 420;
const spacing = 20;
const totalWidth = (pillWidth * features.length) + (spacing * (features.length - 1));
const startX = (1200 - totalWidth) / 2;

ctx.font = '18px sans-serif';
features.forEach((feature, index) => {
  const x = startX + (index * (pillWidth + spacing)) + (pillWidth / 2);
  
  // Draw pill background
  ctx.save();
  ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.roundRect(x - pillWidth/2, pillY - pillHeight/2, pillWidth, pillHeight, 22);
  ctx.fill();
  ctx.stroke();
  ctx.restore();
  
  // Draw text
  ctx.fillStyle = 'white';
  ctx.fillText(feature, x, pillY);
});

// URL at bottom
ctx.font = '20px sans-serif';
ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
ctx.fillText('firecalculator.com', 600, 560);

// Save the image
const outputPath = path.join(__dirname, '..', 'public', 'og-image.png');
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync(outputPath, buffer);

console.log('✅ OG image generated successfully at:', outputPath);
console.log('📐 Dimensions: 1200x630px');
console.log('📁 File size:', (buffer.length / 1024).toFixed(2), 'KB');