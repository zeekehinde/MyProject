const User = require("../model/usermodel")


const registration = async(req, res)=>{
    const{fullname, username, email, selectType}=req.body
    console.log(fullname, username, email, selectType)
    
    if(fullname ==="" || username === "" || email ===""|| selectType=== ""){
        res.status(400).json({status:"failed", message: "invalid data"})
    }
    const user = new User({
        fullname,
        username,
        email,
        selectType
    })

    try {
        await user.save();
        res.status(200).json({status: "success", message: "success", user})
    } catch (error) {
        res.status(500).send('internal error')
    }
}

module.exports = {registration}