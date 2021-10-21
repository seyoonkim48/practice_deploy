const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
app.use(cors({
  origin : ['http://localhost:3000'],
  credentials : true
}));
app.use(express.json());
app.use(cookieParser());
app.get('/', (_, res) => res.send('Hello World!'));
app.post('/login', (req, res) => {
  res.cookie('Cookie1', 'This is cookie', {
    httpOnly : true,
    maxAge: 60*60*1000
  });
  res.header({'authorization': 'Bearer Token'}).json({message : 'Login OK!!!', loginInfo : req.body, token : 'token'});
});
app.get('/check', (req, res) => {
  console.log(req);
  res.send('plz everything is alright');
})
const port = 80;
app.listen(port, () => console.log(`Listening at ==> port : ${port}!`));