const express = require('express');
const route = require('./routes/route');
const mongoose  = require('mongoose');

const app = express();

app.use(express.json());

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://Rajnagwanshi:abhishek1410@cluster0.qlrpwrw.mongodb.net/Assignment-14", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(3000, function () {
    console.log('Express app running on port ' + (3000))
});
