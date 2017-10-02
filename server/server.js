const express = require("express");
const _ = require("lodash");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("dist"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.post("/url", (req, res) => {
  const body = _.pick(req.body, ["url"]);

  axios
    .get(body.url)
    .then(response => {
      res.send(response.data);
    })
    .catch(e => {
      console.log(e);
    });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
