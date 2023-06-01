const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
    name : {
        type: String,
        minlength: [3, 'More Please!']
    },
    
    year : {
        type: Number
        // maxlength:[4, "That's too many numbers"],
        // minlength: [1, 'Need more']
    },

    genre : {
        type : String,
        enum : [
            "Action",
            "Shooter",
            "Sports",
            "Platform",
            "Survival",
            "Role Playing",
            "Real Time Strategy",
            "Racing"
        ]
    },

    collab : {
       type: Boolean 
    },

    boxArt : {
        type: String
    }

}, {timestamps: true})

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;