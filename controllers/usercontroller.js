const userDB = require('../models/userschema')

const postmethod = async (req, res) => {
  try {
    const userData = await userDB.create(req.body)
    console.log(userData);
    res.send(userData)
  } catch (error) {
    res.json({
      message: error
    });
  }
};

const getmethod = async (req, res) => {
  try {
    const finding = await userDB.find();
    res.json({
      data: finding
    })

  } catch (error) {
    error: "error..."
  }
};

const putmethod = async (req, res) => {
  try {
    const { userName, DOB, Age, Gender } = req.body;
    const editingData = req.params.id;
    const editedData = await userDB.findByIdAndUpdate(editingData, { userName, DOB, Age, Gender }, { test: true });
    res.json({
      detials: editedData
    })
  } catch (error) {
    error = error.message
  }
};

const deletemethod = async (req, res) => {
  try {
    const deletingData = req.params.id;
    const deletedData = await userDB.findByIdAndDelete(deletingData);
    res.json({
      deletedData: deletingData,
      data: "Data Deleted... "
    })
  } catch (error) {
    error = error.message
  }
};


const userProfile = async (req,res)=>{
  try {
    const userPic = req.file;
    res.json({
      profile : userPic
    })
  } catch (error) {
    res.json({
      Error : error.message
    })
  }
}


module.exports = { postmethod, getmethod, putmethod, deletemethod ,userProfile};