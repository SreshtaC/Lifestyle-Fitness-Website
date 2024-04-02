const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const User = require("./model/User");
const path = require('path');
const bcrypt = require("bcryptjs");
const app = express();
app.use(express.urlencoded({ extended: true }));
mongoose.connect("mongodb://localhost/27017");
app.use(session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false
}));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));

//=====================
// ROUTES
//=====================

app.get("/", function (req, res) {
	res.render("home");
});

app.get("/register", function (req, res) {
	res.render("register");
});

app.post("/register", async (req, res) => {
    try {
        const existingUser = await User.findOne({
            $or: [ { email: req.body.email }, { username: req.body.user }, { phNo: req.body.phone } ]
        });
        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(req.body.pass, 10);
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            phNo: req.body.phone,
            username: req.body.user,
            password: hashedPassword,
            confpass: req.body.cpass
        });
        res.redirect('/login?signupSuccess=true');
    } catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.get("/login", function (req, res) {
	res.render("login");
});

app.post("/login", async function(req, res){
	try {
		const user = await User.findOne({ username: req.body.user }); //check if user exists
		if (user) {
			const passwordMatch = await bcrypt.compare(req.body.pass, user.password);
			if (passwordMatch) {
				req.session.user = user;
				res.render("main");
			} else {
				res.status(400).json({ error: "password doesn't match" });
			}
			} else {
				res.status(400).json({ error: "User doesn't exist" });
			}
		} catch (error) {
			res.status(400).json({ error });
		}
});

app.get("/main", isLoggedIn, function (req, res) {
	res.render("main");
});

function isLoggedIn(req, res, next) {
	if (req.session && req.session.user) {
        return next(); 
    } else {
        res.redirect("/login"); 
    }
}
app.get("/fitness", function (req, res) {
	res.render("fitness");
});
app.get("/nutrition", function (req, res) {
	res.render("nutrition");
});
app.get("/mental_health", function (req, res) {
	res.render("mental_health");
});
app.get("/contact", function (req, res) {
	res.render("contact");
});
app.get("/logout", function (req, res) {
	req.logout(function(err) {
		if (err) { return next(err); }
		res.redirect('/');
	});
});

let port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log("Server Has Started!");
});
