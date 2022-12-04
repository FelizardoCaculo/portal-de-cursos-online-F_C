const express = require('express');
const app = express();
const router = express.Router();

router.get('/', (_req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.use(router);
app.use(express.static(__dirname + '/src'));

app.listen(process.env.PORT || 3000, () => {
    console.log('Server up and running!!!')
})