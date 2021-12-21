const registerUser = async (req, res)=>{
    const {full_name, email, password, tags, pic } = req.body;
    res.send({
        full_name, email
    })
}

module.exports = { registerUser }