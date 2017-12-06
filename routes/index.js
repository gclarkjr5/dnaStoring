`use strict`

const express = require(`express`);
const router = require(`express`).Router();
const bodyParser = require(`body-parser`);

const interpret = require('./interpret')
const interpretDNA = require('./interpretDNA')

router.use(bodyParser.json());

// Interpret the string a user posts to its DNA code equivalent
router.route('/string')
    .post((req, res) => {
        const codes = interpret(req.body.input, req.body.type);
        res.json(codes)
    })
router.route('/dna')
    .post((req, res) => {
        const string = interpretDNA(req.body.input, req.body.type);
        res.json(string)
    })

module.exports = router;