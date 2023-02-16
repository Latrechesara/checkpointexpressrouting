const { config } = require('dotenv');
const express = require('express');
const { join } = require('path');
const router = express.Router()


const app = express();
app.use(express.static(join(__dirname, 'public')));


// Load environment variables
config();
router.use(function (req, res, next) {
    var date = new Date();
    if(date.getDay() > 0 && date.getDay() <4 && date.Hours()> 9 && date.getHours() < 17){
        next();
    }else{
        res.redirect('/offlinepage');;
    }
});
// Add routes
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/index', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'about.html'));
});

app.get('/store', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'store.html'));
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
