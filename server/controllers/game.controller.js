const { response } = require("express");
const Game = require("../models/Game.model");

module.exports = {
    allGames: (req,res) => {
        Game.find()
            .then((allGames) => {
                console.log(allGames)
                res.json(allGames)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    getOneGame: (req, res) => {
        Game.findOne({ _id: req.params.id})
            .then((oneGame) => {
                res.json(oneGame)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },
    
    updateGame: (req, res) => {
        // console.log('PARAMS*********', req.params)
        Game.findOneAndUpdate( { _id: req.params.id } ,req.body, { new: true, runValidators: true } )
            .then(updatedGame => {
                res.json(updatedGame)
            })
            .catch((err) => {
                res.status(500).json(err)
            });
    },
    deleteGame: (req, res) => {
        Game.deleteOne({_id: req.params.id})
            .then((response) => {
                res.json(response)
            })
            .catch((err) => {
                res.status(500).json(err)
            })
        },
        
    createGame: (req, res) => {
        Game.create(req.body)
        .then((newGame) => {console.log('newGame', newGame); res.json(newGame)})
        .catch((err) => res.status(500).json(err))
    }
};