const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cors({
  origin : 'http://deploy-practice-client.s3-website.ap-northeast-2.amazonaws.com',
  credentials : true
}));
app.use(cookieParser());
app.get('/', (_, res) => res.send('Hello World!!!'));
app.post('/login', (req, res) => {
  res.cookie('Cookie1', 'This is cookie', {
    httpOnly : true,
    maxAge: 60*60*1000
  });
  res.json({message : 'Login OK!!!', loginInfo : req.body, token : 'token'});
});
app.get('/check', (req, res) => {
  console.log(req);
  res.send('plz everything is alright');
})
const port = 80;

app.listen(port, () => console.log(`Listening at ==> port : ${port}`));
