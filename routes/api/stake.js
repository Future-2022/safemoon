const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const normalize = require('normalize-url');
const config = require('../../config');
const User = require('../../models/User');
const Stake = require('../../models/Stake');
const sql = require("../../config/mySql");

// @route    POST api/users/signUp
// @desc     Register user
// @access   Public
router.post(
  '/sendRequest',
  async (req, res) => {
    
    const { userPass, stakeAmount, walletAddress } = req.body;
    console.log(req.body);
    try {
      var date = new Date();
      // console.log(date);
      let newDate = new Date(date.setDate(date.getDate() + 30)); 
      //let stakesOfNow = await Stake.find({ $or: [ { 'waitStatus': 1 }, { 'waitStatus': 2 }, { 'waitStatus': 3 } ] });
      // stake = new Stake({
      //   userPass: userPass,
      //   stakeIndex: stakesOfNow.length + 1,
      //   stakeAmount: stakeAmount,
      //   endDate : newDate,
      //   waitStatus : 2,
      //   newFlag: 0,
      // });
          
      const userQuery = function() {
        return new Promise(function (resolve, reject) {
          const sqlString = `INSERT INTO stakes (waitStatus, userPass, stakeAmount, endDate, newFlag, walletAddress) value( 2, '${userPass}', ${stakeAmount}, '${newDate}', 0, '${walletAddress}')`;
          console.log('string', sqlString);
          sql.query(sqlString, function (err, results, fields) {
            if (err) return reject(err);
            return resolve(results);
          });
        });
      };
      
      userQuery().then(function(results) {
        console.log('res------', results);
        
        res.json({msg:'success'});
      }); 

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);
router.post(
  '/sendUnStakeRequest',
  async (req, res) => {
    
    const { userPass } = req.body;
    try {
      const userQuery = function() {
        return new Promise(function (resolve, reject) {
          const sqlString = `UPDATE  stakes SET waitStatus = 3 WHERE userPass = '${userPass}' `;
          console.log('string', sqlString);
          sql.query(sqlString, function (err, results, fields) {
            if (err) return reject(err);
            return resolve(results);
          });
        });
      };
      
      userQuery().then(function(stakes) {
        res.json({msg:'success'});
      }); 
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);
router.post(
  '/sendUnStakeResponse',
  async (req, res) => {
    
    const { userPass } = req.body;
    try {

      const userQuery = function() {
        return new Promise(function (resolve, reject) {
          const sqlString = `UPDATE  stakes SET waitStatus = 0 WHERE userPass = '${userPass}' `;
          console.log('string', sqlString);
          sql.query(sqlString, function (err, results, fields) {
            if (err) return reject(err);
            return resolve(results);
          });
        });
      };
      
      userQuery().then(function(stakes) {
        res.json({msg:'success'});
      }); 
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);
router.post(
  '/sendUnStakeRejectResponse',
  async (req, res) => {
    
    const { userPass } = req.body;
    try {

      const userQuery = function() {
        return new Promise(function (resolve, reject) {
          const sqlString = `UPDATE  stakes SET waitStatus = 2 WHERE userPass = '${userPass}' `;
          console.log('string', sqlString);
          sql.query(sqlString, function (err, results, fields) {
            if (err) return reject(err);
            return resolve(results);
          });
        });
      };
      
      userQuery().then(function(stakes) {
        res.json({msg:'success'});
      }); 
    

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);
router.post(
  '/changeNewFlag',
  async (req, res) => {
    
    const { id } = req.body;
    console.log(id);
    try {    
      const userQuery = function() {
        return new Promise(function (resolve, reject) {
          const sqlString = `UPDATE  stakes SET newFlag = 1 WHERE id = ${id} `;
          console.log('string', sqlString);
          sql.query(sqlString, function (err, results, fields) {
            if (err) return reject(err);
            return resolve(results);
          });
        });
      };
      
      userQuery().then(function(stakes) {
        res.json({msg:'changeNewFlag'});
      }); 
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

router.get(
  '/getStake',
  async (req, res) => {  
      try {
        // let stakes = await Stake.find({ $or: [ { 'waitStatus': 1 }, { 'waitStatus': 2 }, { 'waitStatus': 3 } ] }).sort({ 'endDate': -1, 'newFlag': 1});
        
        const userQuery = function() {
          return new Promise(function (resolve, reject) {
            const sqlString = `SELECT * from stakes WHERE waitStatus = 1 || waitStatus = 2 || waitStatus = 3 ORDER BY endDate DESC,  newFlag ASC`;
            console.log('string', sqlString);
            sql.query(sqlString, function (err, results, fields) {
              if (err) return reject(err);
              return resolve(results);
            });
          });
        };
        
        userQuery().then(function(stakes) {
          console.log(stakes);
          let nstakes = stakes.map((item) => {
            var current=Date.now()/1000; 
            var ms = Date.parse(item.endDate)/1000;
            if (current < ms && item.waitStatus !== 0) {          
              var reward = ((30 - (ms-current) / 60 / 60 / 24) * item.stakeAmount * 0.01).toFixed(3);
            }
            console.log('--reward',reward)
            item = Object.assign({ reward: reward }, item);
            return item;
          })
          res.json({stake:nstakes});
        }); 
        

        
      }
      catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
  }
);

// router.post(
//   '/changeStatus',
//   async (req, res) => {
//       const { ids, changeStatus } = req.body;  
//       try {  
//         var date = new Date();
//         console.log(date);
//         let newDate = new Date(date.setDate(date.getDate() + 30)); 
//         let stakes = await Stake.updateOne({'_id':ids},{$set:{'waitStatus':changeStatus, 'endDate':newDate}});        
//         console.log(stakes);
//         res.json({stake:stakes});
//       }
//       catch (err) {
//         console.error("err-end", err.message);
//         res.status(500).send('Server error');
//       }
//   }
// );

router.post(
  '/getById',
  async (req, res) => {
      const { userPass } = req.body;  
      try {          
        const userQuery = function() {
          return new Promise(function (resolve, reject) {
            const sqlString = `SELECT * from stakes WHERE userPass = '${userPass}'`;
            console.log('string', sqlString);
            sql.query(sqlString, function (err, results, fields) {
              if (err) return reject(err);
              return resolve(results);
            });
          });
        };
        
        userQuery().then(function(stake) {
          console.log('--stake', stake);
          var current=Date.now()/1000; 
          var ms = Date.parse(stake[0].endDate)/1000;
          if (current < ms && stake[0].waitStatus !== 0) {          
            var reward = ((30 - (ms-current) / 60 / 60 / 24) * stake[0].stakeAmount * 0.01).toFixed(3);
            console.log(reward);
            res.json({stake:stake, reward:reward});
          }
          else
            res.json({msg:'noStake'});
        }); 


        
      }
      catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
  }
);

router.post(
  '/delete',
  async (req, res) => {
      const { userPass } = req.body;  
      try {          
        Stake.deleteMany().then(res => {
          console.log('success delete')
        })
        res.json({msg:'delete success'});        
      }
      catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
  }
);


module.exports = router;
