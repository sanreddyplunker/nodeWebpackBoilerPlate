import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/getNode',(req,res)=>{
    res.send({message:'returning from node'});
});

app.listen(3000,() => {
    console.log('listening UpResume')

})