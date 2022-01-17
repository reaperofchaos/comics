'use strict';

module.exports = function(app) {
    var comic = require('../controller/comic.controllers.js');
    // respond with "hello world" when a GET request is made to the homepage
    app.route('/comics')
       .get(comic.listAll)
       .post(comic.create)
       .delete(comic.deleteAll);

    app.route('/comics/:comicId')
       .get(comic.getById)
       .put(comic.updateById)
       .delete(comic.deleteById);
    app.use(function(req, res) {
         res.status(404).send({url: req.originalUrl + ' not found'})
      });
};