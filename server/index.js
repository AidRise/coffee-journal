const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello from the server for the coffee journal!!');
});

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});