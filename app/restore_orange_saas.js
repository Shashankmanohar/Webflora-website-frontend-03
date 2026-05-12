const fs = require('fs');
const path = require('path');

const filesToRevert = [
  String.raw`c:\Users\shash\Downloads\Webflora-website\frontend\app\vegavan-ai\page.jsx`,
  String.raw`c:\Users\shash\Downloads\Webflora-website\frontend\app\Components\VegavanTeaser.jsx`,
  String.raw`c:\Users\shash\Downloads\Webflora-website\frontend\app\Components\AnnouncementBanner.jsx`
];

filesToRevert.forEach(file => {
  if (!fs.existsSync(file)) {
    console.log('Skipping: ' + file);
    return;
  }
  
  let content = fs.readFileSync(file, 'utf8');
  
  // 1. Hex reversions (#00FF88 -> #FF3B00)
  content = content.replace(/#00FF88/gi, '#FF3B00');
  
  // 2. RGBA reversions
  content = content.replace(/0,\s*255,\s*136/gi, '255, 59, 0');
  
  // 3. Tailwind Class Reversions
  // Emerald/Lime back to Orange/Amber/Purple gradients matching originals
  content = content.replace(/emerald-500/gi, 'orange-500');
  content = content.replace(/emerald-600/gi, 'orange-600');
  content = content.replace(/emerald-700/gi, 'orange-700');
  content = content.replace(/emerald-400/gi, 'orange-400');
  content = content.replace(/lime-600/gi, 'orange-600');
  content = content.replace(/lime-500/gi, 'orange-500');
  content = content.replace(/lime-400/gi, 'orange-400');
  content = content.replace(/lime-300/gi, 'yellow-500');
  content = content.replace(/to-emerald-600/g, 'to-purple-600'); // Restore dynamic gradients for subpage contrast if previously had them.

  fs.writeFileSync(file, content, 'utf8');
  console.log('Reverted branding for: ' + file);
});
