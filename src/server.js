const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/assets/index.html')
});

app.use(router);
app.use(express.static(`${__dirname}/assets`));

app.listen(process.env.PORT || 5500, () => {
    console.log('SERVIDOR RODANDO!!!')
});