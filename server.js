const express = require('express');
const app = express();
const router = express.Router();
const cache = require('memory-cache');

router.get('/', (_req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.use(router);
app.use(express.static(__dirname + '/src'));
app.use((req, res, next) => {
    const key = '__express__' + req.originalUrl || req.url;
    const cachedBody = cache.get(key);
    if(cachedBody) {
        res.send(cachedBody);
        return
    } else {
        res.sendResponse = res.sendFile(__dirname + '/index.html');
        res.sendResponse = (body) => {
            cache.put(key, body);
            res.sendResponse(body);
        };
        next();
    }
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server up and running!!!');
})