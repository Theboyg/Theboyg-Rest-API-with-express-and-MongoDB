const express  = require("express")
const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
    res.send( "hey it's auth route. There is more route than" )
})

module.exports = indexRouter;