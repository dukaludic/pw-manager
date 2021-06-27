const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const fs = require("fs");

// let passwordData = fs.readFileSync('passwords.json')
// let passwords = JSON.parse(fs.readFileSync("passwords.json"));
// console.log(passwords);

app.get("/api/passwords", (req, res) => {
  let passwords = JSON.parse(fs.readFileSync("passwords.json"));
  res.json(passwords.passwords);
});

app.post("/api/passwords", (req, res) => {
  const passwordsData = JSON.parse(fs.readFileSync("passwords.json"));
  const reqData = req.body;
  console.log("x", passwordsData.passwords, reqData);
  passwordsData.passwords.push(reqData);
  console.log("y", passwordsData.passwords, reqData);
  fs.writeFileSync("passwords.json", JSON.stringify(passwordsData), (err) => {
    if (err) {
      console.log(err);
    }
  });
  res.status(200).send();
});

app.listen(port, () => console.log(`Server started on port ${port}`));
