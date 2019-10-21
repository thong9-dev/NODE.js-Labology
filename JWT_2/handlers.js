const jwt = require("jsonwebtoken");

const jwt_SecretKey = "my_secret_key";
const jwtExpirySeconds = 300;

// const users = {
//   qqq1: { _password: "qqq1", _class: "admin" },
//   qqq2: { _password: "qqq2", _class: "user" }
// };

var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Qwer1234",
    database: "nodelogin"
});

const signIn = (req, res) => {
    // Get credentials from JSON body
    const { username, password } = req.body;
    //
    // if (!username || !password || users[username]._password !== password) {
    if (!username || !password) {
        // return 401 error is username or password doesn't exist, or if password does
        // not match the password in our records
        return res.json({
            status: "E",
            message: "!_username || !_password || users[_username] !== _password"
        });
        return res.status(401).end();
    }
    //
    if (username && password) {
        // res.send("Username and Password!");

        connection.query(
            "SELECT * FROM accounts WHERE username = ? AND password = ?", [username, password],
            function(error, results, fields) {
                if (results.length == 1) {
                    // request.session.loggedin = true;
                    // request.session.username = username;
                    // res.redirect("/home");

                    // res.send("LOGIN OK ::" + results[0].email);
                    console.log("Result :: " + results[0].email);

                    // Create a new token with the username in the payload
                    // and which expires 300 seconds after issue
                    const TOKEN = jwt.sign({ username: username, email: results[0].email },
                        jwt_SecretKey, {
                            algorithm: "HS256",
                            expiresIn: jwtExpirySeconds
                        }
                    );
                    console.log("Token:", TOKEN);

                    // set the cookie as the token string, with a similar max age as the token
                    // here, the max age is in milliseconds, so we multiply by 1000
                    res
                        .cookie("HNM_token", TOKEN, { maxAge: jwtExpirySeconds * 1000 })
                        .json({
                            status: "S",
                            username: username,
                            email: results[0].email,
                            Token: TOKEN
                        })
                        .end();
                } else {
                    res.send("Incorrect Username and/or Password!");
                }
                // res.end();
            }
        );
    } else {
        response.send("Please enter Username and Password!");
        // response.end();
    }
};

const welcome = (req, res) => {
    // We can obtain the session token from the requests cookies, which come with every request
    const token = req.cookies.HNM_token;

    // if the cookie is not set, return an unauthorized error
    if (!token) {
        return res
            .status(401)
            .json({
                status: "S",
                message: "Cookies :: token left"
            })
            .end();
    }

    var payload;
    try {
        // Parse the JWT string and store the result in `payload`.
        // Note that we are passing the key in this method as well. This method will throw an error
        // if the token is invalid (if it has expired according to the expiry time we set on sign in),
        // or if the signature does not match
        payload = jwt.verify(token, jwt_SecretKey);
    } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
            // if the error thrown is because the JWT is unauthorized, return a 401 error
            return res.status(401).end();
        }
        // otherwise, return a bad request error
        return res.status(400).end();
    }

    // Finally, return the welcome message to the user, along with their
    // username given in the token
    res.send(`Welcome ${payload.username}!`);
};
const refresh = (req, res) => {
    // (BEGIN) The code uptil this point is the same as the first part of the `welcome` route
    const token = req.cookies.HNM_token;

    if (!token) {
        return res.status(401).end();
    }

    var payload;
    try {
        payload = jwt.verify(token, jwt_SecretKey);
    } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
            return res.status(401).end();
        }
        return res.status(400).end();
    }
    // (END) The code uptil this point is the same as the first part of the `welcome` route

    // We ensure that a new token is not issued until enough time has elapsed
    // In this case, a new token will only be issued if the old token is within
    // 30 seconds of expiry. Otherwise, return a bad request status
    const nowUnixSeconds = Math.round(Number(new Date()) / 1000);
    if (payload.exp - nowUnixSeconds > 30) {
        return res.status(400).end();
    }

    // Now, create a new token for the current user, with a renewed expiration time
    const newToken = jwt.sign({ username: payload.username }, jwt_SecretKey, {
        algorithm: "HS256",
        expiresIn: jwtExpirySeconds
    });

    // Set the new token as the users `token` cookie
    res.cookie("token", newToken, { maxAge: jwtExpirySeconds * 1000 });
    res.end();
};

module.exports = {
    signIn,
    welcome,
    refresh
};