const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));

app.get('/', function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post('/addition', function(req,res){

    var nbr1 = req.body.nbr1;   
    console.log(nbr1)
    var nbr2 = req.body.nbr2;   
    console.log(nbr2)
    var result = 0;
    result = parseInt(nbr1) + parseInt(nbr2);
    res.send('' + result);
    
})

app.listen(5214,function(){
    console.log('ok')
})