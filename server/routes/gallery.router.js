const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.put('/like/:id', (req, res) => {
    const id = req.params.id; // Database ID of the image we are adding likes to
    const qryTxt = `UPDATE "pictures" SET "likes" = likes + 1 WHERE "id"=$1` 
    pool.query(qryTxt, [id])
    .then(result => {
        res.sendStatus(200)
    }).catch(err => {
        res.sendStatus(500);
    })
})

// GET router
router.get('/', (req, res) => {
    const qryTxt = `SELECT * FROM "pictures" ORDER BY "id" DESC;`;
    pool.query(qryTxt) //Query the database with the text above.
    .then(response => {
        res.send(response.rows) // If successful, return the whole database
    }).catch(err => {
        console.log('Failed to GET pictures', err);
    })
})

router.post('/', (req, res) => {
    const newPath = req.body.newPath; //User input of URL path
    const newDesc = req.body.newDescription; //User input of description
    const qryTxt = `
    INSERT INTO "pictures" ("path", "description") 
    VALUES ($1, $2);`
    pool.query(qryTxt, [newPath, newDesc]) // Query database to add new image
    .then(response => {
        res.sendStatus(201);
    }).catch(err => {
        res.sendStatus(500);
    })
})

router.delete('/:id', (req, res) => {
    let id = req.params.id; //Database ID of the image we are trying to delete
    let sqlTxt = `DELETE FROM "pictures" WHERE "id" = $1;`
    pool.query(sqlTxt, [id])
    .then(result => {
        res.sendStatus(200)
    }).catch(error => {
        res.sendStatus(500)
    })
})

module.exports = router;