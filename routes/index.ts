/*
 * GET home page.
 */
import express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('index', { title: 'Ovunc Algin Tatlici' });
});

router.get('/homepage', function (req, res) {
    res.render('homepage', { title: 'Home' });
});

router.get('/aboutme', function (req, res) {
    res.render('aboutme', { title: 'About Me' });
});


router.get('/projects', function (req, res) {
    res.render('projects', { title: 'Projects' });
});

router.get('/services', function (req, res) {
    res.render('services', { title: 'Services' });
});

router.get('/contactme', function (req, res) {
    res.render('contactme', { title: 'Contact Me' });
});

router.get('/template', function (req, res) {
    res.render('template', { title: 'Template' });
});

export default router;