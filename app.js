const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});
app.use(express.static(`${__dirname}/public`));

console.log(process.env.PORT)
app.use('/', router);
app.listen(process.env.PORT || 5000);

console.log('Running at Port ' + (process.env.PORT || 5000));