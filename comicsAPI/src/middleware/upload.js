const util = require('util');
const multer = require('multer');
let fs = require('fs-extra');
const rename = require('../utils/helper')
const maxSize = 2 * 1024 * 1024;


let storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        const title = rename(req.body.title); 
        const character = rename(req.body.character);
        const year = rename(req.body.year);

        const path = __basedir + `/covers/${character}/${year}/${title}`
        fs.mkdirsSync(path);
        console.log('destination: ', path)
        console.log('originalname ', file.originalname)
        cb(null, path)
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname);
    }
});

let uploadFile = multer({
    storage: storage, 
    limits: {fileSize: maxSize},
}).single('coverImage');

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = {
    uploadFileMiddleware, 
    uploadFile
};