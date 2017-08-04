const path = require('path');
const express = require('express');
const PORT = 3000;

let app = express();

const rootRoutes = require('./src/routes/root.js');

app.use('/static', express.static(path.join(__dirname, 'src/public')));
app.use('/', rootRoutes);

app.listen(PORT, (err) => {
	if(err){
		console.log(`Problema ao subir o servidor ${err}`);
	}else{
		console.log(`Servidor rodando http://localhost:${PORT}`);
	}
});