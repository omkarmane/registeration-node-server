


const express = require('express');

const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

app.use (cors())
// There are several deprecations in the MongoDB Node.js driver 
// Set mongoose options to fix all deprecation warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// DB connection
mongoose.connect(`mongodb://localhost:27017/ecokrypt-dpinterns`);

// verification of DB connection
mongoose.connection.on('connected', () => {
  console.log('Mongoose connection is successful ');
});
// define mongoose schema
const loginSchema = new mongoose.Schema({
  message: String
});

// get model from schema for collection
// Please note that we are using plural form for db collection ('healthchecks') and singular form ('healthcheck') for model name 
// as by default mongoose add 's' at the end of model
loginModel = mongoose.model('login', loginSchema);

app.post('/regForm', function(req,res){ 
  var firstName = req.body.firstname; 
  var lastName = req.body.lastname; 
  var email =req.body.email; 
  var pass = req.body.password; 
 
  var data = { 
      "firstName":firstName, 
      "lastName":lastName, 
      "email":email, 
      "password":pass, 
      
  } 
db.collection('user').insertOne(data,function(err){ 
      if (err) throw err; 
      console.log("Record inserted Successfully"); 
            
  }); 
        
  return ; 
}) 


app.post('/',function(req,res){ 
res.set({ 
  'Access-control-Allow-Origin': '*'
  }); 
return res.redirect('app.component.html'); 
})//.listen(3000) 


app.listen(3000, () => {
  console.log(`Node server started on port:3000`);
});



