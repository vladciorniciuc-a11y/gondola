const { execSync } = require('child_process');

console.log('Obfuscating js/script.src.js -> js/script.js ...');
const cmd = 'npx.cmd javascript-obfuscator "js/script.src.js" --output "js/script.js" --compact true --string-array true --string-array-encoding base64 --string-array-threshold 1 --reserved-names "addToCart,setGrams,stepGrams,stepSauce,stepDrink,modifyCartItem,removeCartItem,openResetModal,closeResetModal,confirmResetCart,openClosedWarningModal,closeClosedWarningModal,confirmPreOrder,filterMenu,openOrderSuccessModal,closeOrderSuccessModal"';

try {
    execSync(cmd, { stdio: 'inherit', shell: true });
    console.log('✓ Successfully generated obfuscated js/script.js!');
} catch (err) {
    console.error('Error during obfuscation:', err);
    process.exit(1);
}
