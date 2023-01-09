const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors())

const users = [
    {
        name: 'Ram'
    },
    {
        name: 'Kumar'
    }

]
app.get('/users', (req, res, next) => {
    res.send(users)
});

app.listen(9001, () => {
    console.log('app listening on 9001');
})