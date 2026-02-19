const express = require("express");
const router = express.Router();

// Route for /classes
router.get("/", (req, res) => {
    res.json(["Art Class - Tuesday 4pm", "Music Class - Thursday 3pm"]);
});

module.exports = router;
