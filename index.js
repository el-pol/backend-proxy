const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/proxy", (req, res) => {
	const urlToProxy = "https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en";
	axios.get(urlToProxy).then(response => res.send(response.data));
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});