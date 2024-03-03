const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const product_routes = require("./routes/product");

const app = express();
app.use(express.json());
app.use(cors());

const port = 5001;

app.use("/api/product", product_routes);

app.get('/', (req, res) => {
  res.send("hi i am alive");
});

require('dotenv').config();
mongoose.connect(process.env.databaseURL);

const database = mongoose.connection;

database.on('error', (err) => {
    console.log(err);
});

database.once('connected', () => {
    console.log("Database connected");
});

const dataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Model = mongoose.model('Data', dataSchema);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
