/*console.log('Filename:', __filename);
console.log(__dirname);*/

const path = require('path');
const fs = require('fs');

/*console.log(path.basename(__filename));
console.log(path.extname('.env'));

console.log(path.join(__filename,'utils','..', 'public'));
console.log(path.parse(__filename).name);
console.log(__filename.split(path.sep));*/



fs.writeFile(path.join(__dirname,'public', 'index.html'), `<html><head><meta charset="UTF-8"></head><body>Helow world</body></html>`,
(err)=>{
if(err) {
    throw err

}
console.log('All right');
}

)


