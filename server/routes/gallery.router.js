const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
// router.put('/like/:id', (req, res) => {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route

router.put('/like/:id', (req, res) => {
    const id = req.params.id;
    const qryTxt = `UPDATE "pictures" SET "likes" = likes + 1 WHERE "id"=$1`
    pool.query(qryTxt, [id])
    .then(result => {
        res.sendStatus(200)
    }).catch(err => {
        res.sendStatus(500);
    })
})

// GET
router.get('/', (req, res) => {
    const qryTxt = `SELECT * FROM "pictures" ORDER BY "id";`;
    pool.query(qryTxt)
    .then(response => {
        res.send(response.rows)
    }).catch(err => {
        console.log('Failed to GET pictures', err);
    })
})

// GET Route
// router.get('/', (req, res) => {
//     res.send(galleryItems);
// }); // END GET Route

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    let sqlTxt = `DELETE FROM "pictures" WHERE "id" = $1;`
    pool.query(sqlTxt, [id])
    .then(result => {
        res.sendStatus(200)
    }).catch(error => {
    res.sendStatus(500)
    })
})

module.exports = router;