var express = require('express');
var router = express.Router();
var models = require('../models/recordDB');
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false});
var parseJSON = bodyParser.json();

router.route('/')
    .post(parseUrlencoded, parseJSON, function (request, response) {
        var post = new models.Posts(request.body.post);
        post.save(function (error) {
            if (error) response.send(error);
            response.json({post: post});
        });


    })
    .get(parseUrlencoded, parseJSON, function (request, response) {
            models.Posts.find(function (error, posts) {
                if (error) response.send(error);
                response.json({post: posts});
            });
    });


router.route('/:post_id')
    .get(parseUrlencoded, parseJSON, function (request, response) {
        models.Posts.findById(request.params.post_id, function (error, post) {
            if (error) {
                response.send({error: error});
            }
            else {
                response.json({post: post});
            }
        });
    })
    .put(parseUrlencoded, parseJSON, function (request, response) {
        models.Posts.findById(request.params.post_id, function (error, post) {
            if (error) {
                response.send({error: error});
            }
            else {
                post.number = request.body.post.number;
                post.firstName = request.body.post.firstName;
                post.lastName = request.body.post.lastName;
                post.DOB = request.body.post.DOB;
                post.residency = request.body.post.residency;
                post.gender = request.body.post.gender;

                post.save(function (error) {
                    if (error) {
                        response.send({error: error});
                    }
                    else {
                        response.json({post: post});
                    }
                });
            }
        });
    });

module.exports = router;