const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const requestIp = require('request-ip');
const User = require('../../models/User');
const sql = require("../../config/mySql");
// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
  '/login',
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { userPass } = req.body;

    try {
      const userQuery = function() {
        return new Promise(function (resolve, reject) {
          sql.query(`SELECT * FROM users where userPass = '${userPass}'`, function (err, results, fields) {
            if (err) return reject(err);
            return resolve(results);
          });
        });
      };
      
      userQuery().then(function(results) {
        console.log('result', results)
        if (!results) {
          console.log('no User');
          var clientIp = requestIp.getClientIp(req);
          console.log(clientIp);
          const newUser = new User({
            userPass: userPass,
            ipAddress: clientIp
          });
          newUser.save();
          const payload = {
            user: {
              id: results[0].id
            }
          };
  
          jwt.sign(
            payload,
            'secret',
            { expiresIn: '5 days' },
            (err, token) => {
              if (err) throw err;
              res.json({ token });
            }
          );
        }
  
        else {
          console.log("this is ");
          const payload = {
            user: {
              id: results.id
            }
          };
  
          jwt.sign(
            payload,
            'secret',
            { expiresIn: '5 days' },
            (err, token) => {
              if (err) throw err;
              console.log(token);
              res.json({ token });
            }
          );
        }
      });      
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

router.get('/getUser', async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


module.exports = router;
