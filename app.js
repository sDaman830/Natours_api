const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());
// app.get('/', (req, res) => {

//     res.status(200).json({ message: 'Hello from the server', app: 'Natours' });
// })
const port = 3000;

// app.post('/', (req, res) => {
//     res.send('POST');
// })
const tours = JSON.parse(fs.readFileSync(`/Users/damanpreetsinghghatoura/Desktop/Natours_api/dev-data/data/tours-simple.json`));
app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours: tours
        }
    })
})

app.post('/api/v1/tours', (req, res) => {
    // console.log(req.body);

    res.send('Done');
})
app.listen(port, () => {
    console.log('Running')
});

