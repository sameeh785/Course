// CommonJS format
let express = require('express')
let bodyParser = require('body-parser');



let multer = require('multer')
let fs = require('fs');



var storage = multer.diskStorage({
    
    destination:function(req, file, next) {
        
        let flag = users.find((user) =>{
            return user.name == req.body.name
        })
        if(flag){
            next(new Error("user alreadys"));
        }
        else{
            console.log(req.body.id)
            console.log(req.body.name)
            console.log(req.body.password)


            let path = './server/uploads/' + req.body.name;
            fs.mkdirSync(path);
            next(null, path)
        }
      
    },
    filename: function (req, file, next) {
        next(null, file.originalname)
    }
    

})

var upload = multer({ storage: storage })
let users = [];                      

let app = express();
app.use(bodyParser.urlencoded());
app.use(function(req, res, next){
    // console.log("asdas")
    next()
   
});

app.use(function(req, res, next){
    // console.log("asdas")
    next();
});

app.get('/', (req,res,next) =>{

}, (req, res) => {
    res.end("this is sgome")
    // res.json({
    //     game:"asds"
    // })
});

// app.use(bodyParser.urlencoded());




app.get('/data', (req, res) => {
    // res.end("adsads");
});


app.use(bodyParser.json());


app.post("/login", async (req, res) => {
      try{
    


    let targetUser = users.find((user) => {
        return user.name == req.body.name && user.password == req.body.password
    });

    res.json(targetUser);
    console.log("hhhh");
    console.log(users);
    console.log(targetUser + 'user');

  }
  catch (e){
      res.send(500,{error : e.message})

  }
    // res.sendfile('./data.mp4');

    // res.end("asdas");
    // res.json({ name: "Gamica" })

});



app.get('/result/:roll', (req, res) => {

    res.end(req.params.roll + " requested for result")

})





// ,upload.single('userFile')
app.post("/signup", async (req, res) => {
    try{
        console.log(req.body)
        users.push(req.body)
        res.end("hello g");
     
    }
    catch (e) {
        res.send(500, { error: e.message});

    }
   
    // res.sendfile('./data.mp4');

    // res.end("asdas");
    // res.json({ name: "Gamica" })

});

app.listen(8080, function () {
    console.log("Start starting");
})




// function  downloadVideo() {
//     return new Promise((success,error) =>{
//         setTimeout(() =>{

//             console.log("i am chali");
//             success(22);
//         },2000)
//     })
// }

// async function test(params) {
//     try{
//     let first = await downloadVideo();
//     let second =await SVGAnimatent(first);}
//     catch(e){
//         console.log(e)
//     }
// }