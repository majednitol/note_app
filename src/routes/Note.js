const express = require('express');

const Note = require('../Model/Note');
const router = express.Router();


router.post('/list', async(req, res) => {
    var note =await Note.find({ userid: req.body.userid })
    res.json(note);
})

router.post('/add', async(req, res) => { 
    await Note.deleteOne({ id: req.body.id })
    var newNote = new Note({
        id:req.body.id,
        userId: req.body.userid,
        title: req.body.title,
        content: req.body.content
    })
    await newNote.save()
    const response = { message: "Added note" + `id: ${req.body.id}` }
    res.json(response);
})

router.post('/delete', async (req, res) => { 
    await Note.deleteOne({ id: req.body.id })
    const response = { message: "note deleted" + `id: ${req.body.id}` }
    res.json(response);
})

module.exports = router