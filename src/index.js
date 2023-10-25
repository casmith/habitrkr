const express = require('express');
const _ = require('lodash');
const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("Hello!"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
