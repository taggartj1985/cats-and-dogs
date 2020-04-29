const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


//`/` is the root route
// we're Not saying do a get.
// we're actually saying listen for a get from the client(s)
app.get('/', function(req, res){
  // when a Get is fetched on / - the the code in this function is triggered.
  // We get the request and response objects to use,
  // to help us make a decision about what to do.
  res.json({message: "Hi World"})
});


app.listen(3000, function(){
  console.log('App running on port 3000');
})
