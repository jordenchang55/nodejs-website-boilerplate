// app-server.js
import bodyParser from 'body-parser'
import compression from 'compression'
import express from 'express'
import es6Renderer from 'express-es6-template-engine';

const app = express();
app.engine('html', es6Renderer);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(bodyParser.json());
app.use(compression());
app.use(express.static(__dirname + '/public'));

require('./routes')(app);
app.listen(3000);
