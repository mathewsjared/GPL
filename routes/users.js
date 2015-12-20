'use strict';

var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    user     : 'iansmith',
    password : 'password',
    database : 'gpldb'
  },
  searchPath: 'knex,public',
  debug: true
});

var express = require('express'),
    router = express.Router();


// GET ‘/’ - shows all resources TODO
router.get('/', function(req, res) {
  var users = function(){
    return knex.select('*').from('users').then(function(data) {
      res.render('users', {
        title: 'All Users',
        data: data
      });
    });
  };
  users();
});

// GET ‘/new’ - shows new create new resource page TODO
router.get('/new', function(req, res) {
  res.send('Takes you to Create new user page');
});

// POST ‘/new’ - creates individual TODO
router.post('/new', function(req, res) {
  res.send('Posts new user to users table');
});

// GET ‘/:id’ - shows individual resource TODO
router.get('/:id', function(req, res) {
  res.send('Takes you to specific user you searched for by ID');
});

// PUT ‘/:id’ - updates individual resource TODO
router.put('/:id', function(req, res) {
  res.send('updates individual user in users table');
});

// DELETE ‘/:id’ - removes resource TODO
router.delete('/:id', function(req, res) {
  res.send('deletes user by ID');
});

// GET ‘/:id/edit’ - shows edit page of individual resource TODO
router.get('/:id/edit', function(req, res) {
  res.send('takes you to edit individual user page');
});

module.exports = router;
