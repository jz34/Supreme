module.exports = function (app) {
  var facebookConfig = {
    clientID: '188336038634544',
    clientSecret: 'd869fafb588201598a0fcc4daf1eefcc',
    callbackURL: 'https://webproject-supreme.herokuapp.com/auth/facebook/callback'
  };

  app.put("/api/user/:userId", updateUser);
  app.get("/api/user/:userId", findUserById);
  app.get("/api/username/:username", findUserByUsername);
  //app.get("/api/user", findUserByCredentials);
  app.post("/api/user", createUser);
  app.delete("/api/user/:userId", deleteUser);
  app.get("/api/users", findAllUser);
  app.get("/api/usernames/:username", findUserByUsernames);
  app.post("/api/createuser", createUser)


  var bcrypt = require("bcrypt-nodejs");
  var userModel = require("../model/users/users.model.server");
  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var FacebookStrategy = require('passport-facebook').Strategy;


  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post('/api/register', register);
  app.post('/api/loggedIn', loggedIn);

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect: '/user/chooser',
      failureRedirect: '/login'
    }));

  app.get('/api/facebook', passport.authenticate('facebook', {scope: ['email']}));

  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  passport.use(new LocalStrategy(localStrategy));
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategy));

  function facebookStrategy(token, refreshToken, profile, done) {
    userModel
      .findFacebookUser(profile.id)
      .then(
        function (user) {
          if (user) {
            return done(null, user);
          } else {
            var names = profile.displayName.split(" ");
            var newFacebookUser = {
              username: "test",
              lastName: names[1],
              firstName: names[0],
              email: profile.emails ? profile.emails[0].value : "",
              facebook: {
                id: profile.id,
                token: token
              }
            };
            return userModel.createUser(newFacebookUser);
          }
        },
        function (err) {
          if (err) {
            return done(err);
          }
        }
      )
      .then(
        function (user) {
          return done(null, user);
        },
        function (err) {
          if (err) {
            return done(err);
          }
        }
      );
  }

  function loggedIn(req, res) {
    res.send(req.isAuthenticated() ? req.user : '0');
  }

  function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel
      .findUserByUsername(user.username)
      .then(function (data) {
        if (data) {
          res.status(400).send('Username is in use!');
          return;
        } else {
          userModel
            .createUser(user)
            .then(
              function (user) {
                if (user) {
                  req.login(user, function (err) {
                    if (err) {
                      res.status(400).send(err);
                    } else {
                      res.json(user);
                    }
                  });
                }
              }
            );
        }
      })

  }

  function login(req, res) {
    var user = req.user;
    res.json(user);
  }

  function logout(req, res) {
    req.logout();
    res.send(200);
  }

  function localStrategy(username, password, done) {
    userModel
      .findUserByUsername(username)
      .then(
        function (user) {
          if (user && bcrypt.compareSync(password, user.password)) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        },
        function (err) {
          if (err) {
            done(err);
          }
        });
  }

  function deserializeUser(user, done) {
    userModel.findUserById(user._id)
      .then(
        function (user) {
          done(null, user);
        },
        function (err) {
          done(err, null);
        }
      )
  }

  function serializeUser(user, done) {
    done(null, user);
  }

  function deleteUser(req, res) {
    var userId = req.params["userId"];
    userModel.deleteUser(userId).then(function (user) {
      res.status(200);
    })
  }

  function createUser(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel
      .findUserByUsername(user.username)
      .then(function (data) {
        if (data) {
          res.status(400).send('Username is in use!');
          return;
        } else {
          userModel
            .createUser(user)
            .then(
              res.json(user));
        }
      })
  }

  function findUserByUsername(req, res) {
    var username = req.params["username"];
    if (username) {
      userModel.findUserByUsername(username).then(function (user) {
        res.json(user);
      });
    }
  }

  function findUserById(req, res) {
    var userId = req.params["userId"];
    userModel.findUserById(userId).then(function (user) {
      res.json(user);
    })
  }


  function findUserByCredentials(req, res) {
    var username = req.query["username"];
    var password = req.query["password"];
    if (username && password) {
      var promise = userModel.findUserByCredentials(username, password);
      promise.then(function (user) {
        res.json(user);
        //console.log(user);
      })
      return;
    }
  }

  function updateUser(req, res) {
    var userId = req.params.userId;
    var user = req.body;
    userModel.updateUser(userId, user).then(function (user) {
      res.send(user);
    });
  }

  function findAllUser(req, res) {
    userModel.findAllUser().then(function (users) {
      res.send(users);
    });
  }

  function findUserByUsernames(req, res) {
    var username = req.params.username;
    userModel.findUserByUsernames(username).then(function (users) {
      res.send(users);
    });
  }
};
