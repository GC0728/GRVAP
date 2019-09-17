// Global Values and Requires
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended:false }));
app.use(express.json());
app.use(express.static("public"));

