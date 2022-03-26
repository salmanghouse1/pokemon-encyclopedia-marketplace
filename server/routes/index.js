const router = require("express").Router();

const cardData = require("./api/carddata");

router.use("/api", cardData);



module.exports = router;