const express = require("express");

const app = express();

const PORT = 3535;
const HOSTNAME = 'localhost';



app.get('/', (req, res) => {
    res.send('HEllo');
    
})

app.listen(PORT, () => {
    console.log(`Server running at ${HOSTNAME}: ${PORT}`);
})