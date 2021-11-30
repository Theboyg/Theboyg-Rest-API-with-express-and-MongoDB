const express  = require("express")
const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
    res.send( "hey it's users route. There is more route" )
})

module.exports = indexRouter;