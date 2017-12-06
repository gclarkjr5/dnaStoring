`use strict`

const express = require(`express`);
const router = require(`express`).Router();
const bodyParser = require(`body-parser`);

// Import transforming functions
const transform = require('./transformers/transform')
const transformDNA = require('./transformers/transformDNA')

router.use(bodyParser.json());

// Interpret the string a user posts to its DNA code equivalent
router.route('/string')
    .post((req, res) => {
        const codes = transform(req.body.input, req.body.type);
        res.json(codes)
    })

// Interpret the DNA a user posts to its string equivalent
router.route('/dna')
    .post((req, res) => {
        const string = transformDNA(req.body.input, req.body.type);
        res.json(string)
    })

module.exports = router;