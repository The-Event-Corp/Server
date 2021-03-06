const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const axios = require('axios')

module.exports = {
  signinFacebook: (req, res) => {
    const { accessToken, userID } = req.body;
    let url_user_info = `https://graph.facebook.com/me?fields=id,name,email&access_token=${accessToken}`; //disimpan di server
    axios
      .get(url_user_info)
      .then(result => {
        User.findOne({ email: result.data.email }).then(data => {
          if (data) {
            const token = jwt.sign(
              {
                userID: data.userID,
                name: data.name
              },
              process.env.JWT_SECRET_KEY
            );
            res.status(200).json({
              message: "Success login",
              token: token
            });
          } else {
            User.create({
              fullname: result.data.name,
              email: result.data.email
            }).then(() => {
              const token = jwt.sign(
                {
                  userID: userID,
                  name: result.data.name
                },
                process.env.JWT_SECRET_KEY
              );
              res.status(200).json({
                message: "Login success",
                token: token
              });
            });
          }
        });
      })
      .catch(err => {
        console.log(err.message);
      });
  },
  getDataUsers: (req, res) => {
    User.find({})
      .then(users => {
        res.status(200).json({
          message: "Success Get",
          data: users
        });
      })
      .catch(err => {
        res.status(500).json({
          message: "fail",
          err: err.message
        });
      });
  },

  registerUser: (req, res) => {
    const newUser = {
      fullname: req.body.fullname,
      email: req.body.email,
      password: req.body.password
    };
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(newUser.password, salt);
    newUser.password = hash;
    User.create(newUser)
      .then(userRegistered => {
        res.status(201).json({
          msg: "Successfully to create new User",
          data: userRegistered
        });
      })
      .catch(err => {
        res.status(400).json({
          msg: "failed to add new User",
          err: err.message
        });
      });
  },

  loginUser: (req, res) => {
    let userEmail = req.body.email;
    User.findOne({ email: userEmail })
      .then(user => {
        let plainPassword = req.body.password;
        if (user) {
          let hash = user.password;
          let isTrue = bcrypt.compareSync(plainPassword, hash);
          if (isTrue === true) {
            let token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
            res.status(201).json({
              msg: "Successfully to login",
              data: user,
              token: token
            });
          } else {
            res.status(401).json({
              msg: "Username or password wrong"
            });
          }
        } else {
          res.status(400).json({
            msg: "Cannot Found data"
          });
        }
      })
      .catch(err => {
        res.status(400).json({
          msg: "Failed to login",
          err: err.message
        });
      });
  }
};
