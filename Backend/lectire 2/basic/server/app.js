
// CommonJS format
let express = require('express')
let bodyParser =  require('body-parser');

let app = express();

app.get('/', (req, res)=>{
    res.end("this is sgome")
    // res.json({
    //     game:"asds"
    // })
});

app.use(bodyParser.json());

let users = [];

app.post("/login", (req, res) => {

    let targetUser = users.find((user)=>{
        return user.name == req.body.name &&   user.pasword == req.body.password
    });
   
    res.json(targetUser);
    // res.sendfile('./data.mp4');

    // res.end("asdas");
    // res.json({ name: "Gamica" })

});


app.post("/signup", (req, res) => {

    console.log(req.body)
    users.push(req.body)
    res.end("hello g");
    // res.sendfile('./data.mp4');

    // res.end("asdas");
    // res.json({ name: "Gamica" })

});

app.listen(8080, function () {
    console.log("Start starting");
})