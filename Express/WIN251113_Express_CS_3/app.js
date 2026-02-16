const express = require("express");
const app = express();
const productsRouter = require("./routes/products");

app.use(express.json())

app.use('/products', productsRouter);

app.get('/', (req, res) => {
  res.send('Welcome to Neighborhood Food Store!');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Neighborhood Food Store server running at http://localhost:${port}`);
});
