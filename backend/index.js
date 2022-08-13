// import express package
const express = require("express");
// require grid data
const data = require("./gridData");

// initialize express
const app = express();

// create port constant
const PORT = 5000;

// create route to send data
app.get("/api/grids", (request, response) => {
  response.status(200).json({ grids: data });
});

// start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
