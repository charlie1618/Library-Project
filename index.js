const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.use(express.static('public'));

var books_arr = [
    {id: 1, name: 'Metamorphosis', author: 'Franz Kafka'},
    {id: 2, name: 'The Alchemist', author: 'Paulo Coelho'},
    {id: 3, name: 'The Time Machine', author: 'H. G. Wells'}
]

app.get('/', function(req, res) {
    res.render('home', {
        books: books_arr
    });
});

app.get('/details', function(req, res) {
    var id = req.query.id - 1;

    res.render('details', books_arr[id]);
});

app.listen(4000);