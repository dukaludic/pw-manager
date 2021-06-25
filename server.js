const express = require('express');
const app = express();
const port = 5000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const passwords = [
    {
        id: 1,
        title: "Facebook",
        username: "hello123",
        password: "asdf1141",
    },
    {
        id: 2,
        title: "Twitter",
        username: "world123",
        password: "hellouu12",
    },
    {
        id: 3,
        title: "Instagram",
        username: "doodle15",
        password: "helloworld11",
    },
];

app.get('/api/passwords', (req, res) => {
    res.json(passwords);
});

app.post('/api/passwords', (req, res) => {
    console.log(`CL: ${req.body}`)
    passwords.push(req.body);
    console.log(passwords)
})

app.listen(port, () => console.log(`Server started on port ${port}`));