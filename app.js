const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());
const morgan = require('morgan');

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
app.get('/api/v1/tours/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id)
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tour: tour
        }
    })
})

app.post('/api/v1/tours', (req, res) => {
    // console.log(req.body);
    const newID = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ if: newId }, req.body)
    tours.push(newTour);
    fs.writeFile(`/Users/damanpreetsinghghatoura/Desktop/Natours_api/dev-data/data/tours-simple1.json`, JSON.stringify(tours), err => {
        res.status(201).json({
            status: `success`,
            data: {
                tours: newTour

            }
        })

    })

})
app.listen(port, () => {
    console.log('Running')
});

