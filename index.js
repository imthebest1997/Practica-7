const express = require('express');
const hbs = require('hbs');
const app = express();

app.use(express.static(__dirname + '/public'));

//Motor de vistas de HBS de express
app.set('view engine', 'hbs');

//Helpers
require('./hbs/helpers');

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
    res.render("home",{
        nombre: "Cheems",
    });
});

app.get('/about', (req, res) => {
    res.render("about",{        
    });
});



//Solo esta enviando un archivo
// app.get("/",()=>{
//     res.sendFile(__dirname + '/public/index.html');
// });

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });

app.listen(port, () => {
    console.log('Server is running on port ${port}');
});
