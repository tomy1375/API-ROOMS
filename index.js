const express = require("express");
const cors = require("cors");
const app = express();

const port = 3002;
const rooms = require("../api/src/rooms"); 

app.use(cors());
app.use(express.json());

app.get("/api/rooms", (req, res) => {
 res.status(200).json(rooms)
});

app.listen(port, () => {
 console.log(`Server running at http://localhost:${port}`);
});
