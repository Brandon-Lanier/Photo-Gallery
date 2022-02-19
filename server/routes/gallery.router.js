const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

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

router.post('/', (req, res) => {
    const newPath = req.body.newPath;
    const newDesc = req.body.newDescription;
    const qryTxt = `
    INSERT INTO "pictures" ("path", "description") 
    VALUES ($1, $2);`
    pool.query(qryTxt, [newPath, newDesc])
    .then(response => {
        res.sendStatus(201);
    }).catch(err => {
        res.sendStatus(500);
    })
})

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