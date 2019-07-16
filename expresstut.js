var express = require('express');
var app = express();

app.set('port',process.env.PORT || 3000);

app.get('/',(req,res) => {
	res.send('express Works');
});

app.listen(app.get('port'),function(){
	console.log("Express Server Started");
});