
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.redirect('/');
  res.end(); // DON"T LEAVE IT HANGING
});

router.post('/add', function(req, res, next) {
  if(!req.body) return res.sendStatus(400);
  console.log(Object.keys(req.body));
  var page = Page.build({
    title: req.body.title,
    content: req.body.content
  })
  page.save()
  .then(function() {
    res.redirect('/')
  });
  // next();
});

router.get('/add', function(req, res, next) {
  res.render('addpage');
  next();
});

module.exports = router;
//DONT FORGET TO EXPORT YOUR BITS AND PIECES
