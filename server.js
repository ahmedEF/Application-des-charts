const express = require('express');
const app = express();
const connectToDb = require('./db');
//middleware cors 
const cors = require('cors');

app.listen(3000, async () => {
    console.log('Server started on port 3000');
    // connect to the database

    const collection = await connectToDb();

    // setup endpoints for handling HTTP requests
    setupEndpoints(collection);
});
//allows the front-end to consume the endpoints
app.use(cors({origin: 'http://localhost:3001'}));

const setupEndpoints = (collection) => {

    // endpoint for retrieving data for chart of city and gender
    app.get('/chart', async (req, res) => {
        try {
            // use MongoDB find method to get data from collection

            const data = await collection.find({}, { projection: { _id: 0,City: 1, Gender: 1 } }).toArray();
            // send data as json to client

            res.json(data);
          } catch(err) {
          console.log(err);
          res.status(500).send('Error retrieving data from the database');
          }
          });
          
          // endpoint for retrieving data for chart of grossincome and productline
    app.get('/RevenueCategorie', async (req, res) => {
            try {

                // use MongoDB find method to get data from collection
                const data = await collection.find({}, { projection: { _id: 0,'gross income': 1, 'Product line': 1 } }).toArray();

                // send data as json to client
                res.json(data);
          } catch(err) {
          console.log(err);
          res.status(500).send('Error retrieving data from the database');
          }
          });
            // endpoint for retrieving data for chart of cogs and customertype

    app.get('/AchatType', async (req, res) => {
            try {

                // use MongoDB find method to get data from collection
                const data = await collection.find({}, { projection: { _id: 0,cogs: 1, 'Customer type': 1 } }).toArray();

                // send data as json to client
                res.json(data);
          } catch(err) {
          console.log(err);
          res.status(500).send('Error retrieving data from the database');
          }        
         });   

    // endpoint for retrieving data for chart of cogs and customertype
    app.get('/RatingparSexe', async (req, res) => {
          try {

              const data = await collection.find({}, { projection: { _id: 0,Rating: 1, Gender: 1 } }).toArray();

              // send data as json to client

              res.json(data);
        } catch(err) {
        console.log(err);
        res.status(500).send('Error retrieving data from the database');
        }        
       });  
          };