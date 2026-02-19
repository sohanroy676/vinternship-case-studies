const express = require("express");
const router = express.Router();

// 1. Add a new route /contact in routes/contact.js that returns the center’s contact info as JSON.
router.get("/", (req, res) => {
    res.json({
        email: "info@greenfieldcenter.org",
        phone: "555-123-4567",
    });
});

module.exports = router;
