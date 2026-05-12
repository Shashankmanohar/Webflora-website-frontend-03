const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  String.raw`c:\Users\shash\Downloads\Webflora-website\frontend\app\vegavan-ai\page.jsx`,
  String.raw`c:\Users\shash\Downloads\Webflora-website\frontend\app\Components\VegavanTeaser.jsx`
];

filesToUpdate.forEach(file => {
  if (!fs.existsSync(file)) {
    console.log('Skipping missing file: ' + file);
    return;
  }
  
  let content = fs.readFileSync(file, 'utf8');
  
  // 1. Direct hex replacements (#FF3B00 -> #00FF88)
  content = content.replace(/#FF3B00/gi, '#00FF88');
  
  // 2. Precise RGBA replacements
  content = content.replace(/255,\s*59,\s*0/gi, '0, 255, 136');
  content = content.replace(/255,59,0/gi, '0,255,136');
  
  // 3. Tailwind Color Class Replacements
  // Purple -> Emerald
  content = content.replace(/purple-600/gi, 'emerald-600');
  content = content.replace(/purple-500/gi, 'emerald-500');
  content = content.replace(/rgba\(168,85,247/gi, 'rgba(16, 185, 129'); // hex corresponding to purple-500 to emerald
  
  // Blue -> Lime (absolutely non-blue, high contrast)
  content = content.replace(/blue-600/gi, 'lime-600');
  content = content.replace(/blue-500/gi, 'lime-500');
  content = content.replace(/blue-400/gi, 'emerald-400'); 
  content = content.replace(/rgba\(6,182,212/gi, 'rgba(132, 204, 22'); // cyan-500 to lime-500
  content = content.replace(/indigo-600/gi, 'emerald-800'); // Deep gradient
  
  // Orange -> Emerald/Lime
  content = content.replace(/orange-600/gi, 'emerald-500');
  content = content.replace(/orange-500/gi, 'emerald-400');
  content = content.replace(/orange-400/gi, 'lime-400');
  content = content.replace(/yellow-500/gi, 'lime-300');
  
  // Missing cleanup from previous chunk fail
  content = content.replace(/to-cyan-600/g, 'to-emerald-600');

  fs.writeFileSync(file, content, 'utf8');
  console.log('Restricted Rebrand Completed for: ' + file);
});
