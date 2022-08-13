// require express package
const express = require("express");
// require cors
const cors = require("cors");
// require grid data
const data = require("./gridData");

// initialize express
const app = express();

// initialize cors without limitations
app.use(cors());
// create port constant
const PORT = 5000;

// create route to send data
app.get("/api/grids", (request, response) => {
  response.status(200).json({ grids: data });
});

// start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
