
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.json());

app.post('/', (req, res) => { 
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var operator = String(req.body.op);
    var result = 0; 
    if (operator == 'Add') {
        result = num1 + num2;
        res.send({result: result});
    } else if (operator == 'Subtract') {
        result = num1 - num2;
        res.send({result: result});
    } else if (operator == 'Multiply') {
        result = num1 * num2;
        res.send({result: result});
    } else if (operator == 'Division') {
        result = num1 / num2;
        res.send({result: result});
    } else {
        res.send('Error');
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});