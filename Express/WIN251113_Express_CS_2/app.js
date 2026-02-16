const express = require('express');
const app = express();
const eventsRouter = require('./routes/events');
const classesRouter = require('./routes/classes');
const contactRouter = require('./routes/contact');

app.use(express.json());
app.use(express.static('public'));

// Mount the events router at /events
app.use('/events', eventsRouter);

// Mount the events router at /classes
app.use('/classes', classesRouter);

// 2. Mount it in app.js at /contact
app.use('/contact', contactRouter);

app.get('/', (req, res) => {
  res.send('Welcome to Greenfield Community Center!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Community Center server running at http://localhost:${port}`);
});

// 3. Test by visiting http://localhost:3000/contact.
// OUTPUT at /contact:
// {"email":"info@greenfieldcenter.org","phone":"555-123-4567"}