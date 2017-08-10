
const path = require('path');
const express = require('express');

const rootRoutes = require('./routes/root.js');
const storiesRouter = require('./routes/stories.js');
const charactersRoutes = require('./routes/characters.js');


let app = express();


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



app.use('/', rootRoutes);
app.use('/static', express.static(path.join(__dirname, '/public')));
app.use('/stories', storiesRouter);
app.use('/characters', charactersRoutes);


app.listen(3000, (err) => {
	if(err){
		console.log(`Problema ao subir o servidor ${err}`);
	}else{
		console.log(`Servidor rodando no http://localhost:3000`);
	}
});