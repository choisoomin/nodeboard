const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("We are on posts");
});
router.get("/specific", (req, res) => {
    res.send("Specific post");
});
router.get("/specific2", (req, res) => {
    res.send("Specific2 post");
});
router.get("/specific3", (req, res) => {
    res.send("Specific3 post");
});
module.exports = router;