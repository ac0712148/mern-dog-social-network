const express = require('express');
const db = require('../models');

const router = express.Router();

// get Route to get all posts, should be in order of latest to oldest
router.get('/', (req, res) => {
    db.Post.find().sort({ timestamp: -1})
    .then((posts) => {
        res.status(200).json(posts);
    });
});

// Create a post
router.post('/', (req, res) => {
    db.Post.create(req.body)
    .then((post) => {
        res.status(201).json(post);
    }).catch((err) => {
        res.status(400).send(err);
    });
});