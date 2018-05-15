const express = require('express');
const app = express();
app.set('view engine', 'pug');

app.use(express.static("public"));

app.get('/',(request, response) => {
    response.render("home");
});

app.get('/user/', (req,res) =>{
   const userName = req.query.user;
   console.log(userName);
   res.render("user");
});

app.listen(3000);
