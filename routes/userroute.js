const express = require("express");
const userDB = require("..//models/userschema");
const multer = require('multer');

const { postmethod, getmethod, putmethod, deletemethod ,userProfile} = require("../controllers/usercontroller");
const router = express.Router();

const storage = multer.diskStorage({
    destination : './public/userProfile',
    filename : function(req,file,cb){
        cb(null,file.originalname)
    }
});

const upload = multer({storage : storage});

const singleUpload = upload.single('profilePic');

router.post("/post", postmethod);
router.get("/get", getmethod);
router.put("/edit/:id", putmethod);
router.delete("/delete/:id", deletemethod);

router.post('/profile',singleUpload,userProfile);

module.exports = router;