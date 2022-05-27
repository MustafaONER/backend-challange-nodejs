const mongoose = require('mongoose');
const dbURL =
  'mongodb+srv://backendchallenge:mark4469@cluster0.t5qpl.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURL)
    .then((result) => { 
       
        console.log('connected')
    })
    .catch((err) => {console.log(err)
    });