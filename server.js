const express = require('express');
const app = express();
const port = 5000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const fs = require('fs');

let passwordData = fs.readFileSync('passwords.json')
let passwords = JSON.parse(passwordData);
console.log(passwords)

app.get('/api/passwords', (req, res) => {
    res.json(passwords.passwords);
});

app.post('/api/passwords', (req, res) => {
    passwords.passwords.push(req.body);
    const data = JSON.stringify(req.body);
    fs.writeFile('passwords.json', data, err => {
        if (err) {
            console.log(err);
        }
    });
    // console.log(passwords)
})

app.listen(port, () => console.log(`Server started on port ${port}`));