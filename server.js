const express = require("express");
const mysql = require("mysql2");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the "my_flask_app/templates" directory
app.use(express.static(__dirname + '/my_flask_app/templates'));

// Database Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root", // Change to your MySQL username
    password: "Sumptuousten010304.", // Change to your MySQL password
    database: "todo_db"
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected...");
});

// Register User
app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the new user into the database
    db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, hashedPassword], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Database error" });
        }

        res.status(201).json({ message: "Registration successful" });
    });
});

// Login User
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    db.query("SELECT * FROM users WHERE username = ?", [username], async (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Database error" });
        }
        if (result.length === 0) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        const user = result[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid username or password" });
        }

        res.json({ message: "Login successful" });
    });
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});