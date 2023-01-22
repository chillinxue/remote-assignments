const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello, My Server!");
});

app.get('/getData', (req, res) => {
    let number = req.query.number;
    if (!number) {
        res.send("Lack of Parameter");
    } else if (isNaN(number)) {
        res.send("Wrong Parameter");
    } else {
        let sum = 0;
        for (let i = 1; i <= number; i++) {
            sum += i;
        }
        res.send(`The sum of 1 to ${number} is ${sum}.`);
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.use(express.static('public'));
