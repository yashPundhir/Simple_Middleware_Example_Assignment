const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Array to store authenticated users
const authenticatedUsers = [];

// Custom middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
	// Check if the user is authenticated
	const token = req.headers.authorization;

	if (authenticatedUsers.includes(token)) {
		// User is authenticated, proceed to the next middleware
		next();
	} else {
		// User is not authenticated, send a 401 Unauthorized status
		res.status(401).json({ error: "Unauthorized" });
	}
};

//Home Route
app.get("/", (req, res) => {
	res.status(200).send("Hello World");
});

// Middleware to check authentication and then send post data
app.get("/post", isAuthenticated, (req, res) => {
	const posts = [
		{ id: 1, title: "Post 1", content: "Content for Post 1" },
		{ id: 2, title: "Post 2", content: "Content for Post 2" },
		{ id: 3, title: "Post 3", content: "Content for Post 3" },
		{ id: 4, title: "Post 4", content: "Content for Post 4" },
		{ id: 5, title: "Post 5", content: "Content for Post 5" },
		{ id: 6, title: "Post 6", content: "Content for Post 6" },
		{ id: 7, title: "Post 7", content: "Content for Post 7" },
		{ id: 8, title: "Post 8", content: "Content for Post 8" },
		{ id: 9, title: "Post 9", content: "Content for Post 9" },
		{ id: 10, title: "Post 10", content: "Content for Post 10" },
	];

	res.status(200).json(posts);
});

app.listen(4000, () => {
	console.log("Server is running on port 4000");
});
