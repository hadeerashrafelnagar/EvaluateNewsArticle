// Configuration to be able to use env variables
const dotenv = require('dotenv');
dotenv.config();
const axios = require('axios')
var path = require('path')
const mockAPIResponse = require('./mockAPI.js')
// the base url
const apiUrl="https://api.meaningcloud.com/sentiment-2.1"
// Require Express to run server and routes
const express = require('express')
// Personal API Key
const MCApi=process.env.API_KEY
console.log(MCApi)
// Start up an instance of app
const app = express()
//configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// post request for new URL that coming from the frontend
app.post('/add-api', async (req, res) =>{
    // GET the url from the request body
    const url= req.body.url;
     // build the url
    const  baseUrl= `${apiUrl}?key=${MCApi}&url=${url}&lang=en`;
    // use Axios to deal with Data from API
    await axios.post(baseUrl).then((response) =>{
        res.send(response.data)
    })
})
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Server listening on port 8081!')
})


// export app to use it in the unit testing
module.exports = app;