`use strict`

const express = require(`express`);
const router = require(`express`).Router();
const bodyParser = require(`body-parser`);

const interpret = require('./interpret')

router.use(bodyParser.json());

// Interpret the string a user posts to its DNA code equivalent
router.route('/string')
    .post((req, res) => {
        const codes = interpret(req.body.input);
        res.json(codes)
    })

module.exports = router;