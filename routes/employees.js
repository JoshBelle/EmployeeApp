const express = require('express');
const router = require('router');
const auth = require('../middleware/auth');

router.get('/', auth, () => console.log('get all employees'));

router.get('/:id', auth, () => console.log('get single employees'));

router.post('/add', auth, () => console.log('add employee'));

router.post('/remove/:id', auth, () => console.log('removed employee'));

router.put('/remove/:id', auth, () => console.log('removed employee'));

module.exports = router
