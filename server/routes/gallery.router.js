const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    res.send(galleryItems);
}); // END GET Route

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    let sqlTxt = `
        DELE FROM "pictures"
        WHERE "id" = $1;
    `
    pool.query(sqlTxt, [id])
}).then(result => {
    res.sendStatus(200);
}).catch(error => {
    res.sendStatus(500);
})

module.exports = router;