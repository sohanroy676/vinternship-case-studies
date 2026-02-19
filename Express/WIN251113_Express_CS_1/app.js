const express = require("express");
const app = express();
const port = 3000;

// Route for the homepage
// OUTPUT: Welcome to Greenfield Community Center!
app.get("/", (req, res) => {
    res.send("Welcome to Greenfield Community Center!");
});

// Route for the event page
// OUTPUT: ["Yoga Class - Monday 7pm","Gardening Workshop - Wednesday 5pm","Book Club - Friday 6pm"]
app.get("/events", (req, res) => {
    const events = [
        "Yoga Class - Monday 7pm",
        "Gardening Workshop - Wednesday 5pm",
        "Book Club - Friday 6pm",
    ];
    res.json(events);
});

// 1. Add a new route /contact that returns the center’s contact email and phone as a JSON object.
// OUTPUT: {"email":"greenfield@gmail.com","phone":"1234567890"}
app.get("/contact", (req, res) => {
    res.json({ email: "greenfield@gmail.com", phone: "1234567890" });
});

// Start the server
app.listen(port, () => {
    console.log(`Community Center server running at http://localhost:${port}`);
});

// 2. Test it by visiting http://localhost:3000/contact.
