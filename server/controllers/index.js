const User = require('../models/User')

exports.addFavorite = async (req, res) => {
    const { email, station } = req.body;
    try{
        const user = await User.findOne({ email });
        if(!user) {
            const newUser =  await User.create({ email, favorites:[ station] });
            return res.status(201).json({success: true, newUser});
        }        
        const updatedUser = await User.findOneAndUpdate({email}, {
            $push: { favorites: station},
        });
        return res.status(201).json({success: true, updatedUser});
    } catch (error){
        res.status(500).json({success: false, error:error.message});
    }
}

exports.getFavorites = async (req, res) => {
    const email = req.params.user;
    try {
        const { favorites } = await User.find({email});
        res.status(200).json({success: true, favorites});
    } catch (error){
        res.status(500).json({success: false, error:error.message});
    }
}
