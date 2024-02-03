const express = require('express');
const mongoose = require('mongoose');
const Note = require('./Model/Note');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
mongoose.connect('mongodb+srv://majadrahman7:majed2377@cluster0.qmy6v4g.mongodb.net/noteManager').then(() => {
    app.get('/', (req, res) => {
        const response = { statuscode: res.statusCode, message: "API Works!" };
        res.json(response);


    })

    // app.post('/list', async(req, res) => {
    //     var note = await Note.find({userid:req.body.uerid})
    //     res.json(note);
    // })

    const noteRouter = require('./routes/Note')
    app.use('/notes', noteRouter)
}).catch(err => {
    console.log(err)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("appp is listening at " + PORT)
})