const GameController = require('../controllers/Game.controller');

module.exports = (app) => {
    app.post('/api/Games', GameController.createGame)
    app.get('/api/getAll', GameController.allGames)
    app.get('/api/selectOneGame/:id', GameController.getOneGame)
    app.put('/api/updateGame/:id', GameController.updateGame)
    app.delete('/api/deleteGame/:id', GameController.deleteGame)

}