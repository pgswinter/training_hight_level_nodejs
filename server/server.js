import config, {nodeEnv} from './config'
import apiRouter from '../api'

import express from 'express'
import bodyParser from 'body-parser';

const server = express();
server.use(bodyParser.json());

server.set('view engine', 'ejs');

import serverRender from './serverRender';

server.get(['/','/portfolio/:idPerson'], (req,res) => {
  serverRender(req.params.idPerson)
    .then(({initialMarkup, initialData}) => {
      res.render('index',{
        initialMarkup,
        initialData
      });
    })
    .catch(error => {
    	console.log(error);
    	res.status(404).send('Bad request');
    });
})

server.use('/api',apiRouter);
server.use(express.static("views")) // Set current patch inside the folder

server.listen(config.port, config.host, ()=>{
	console.log('express listening on port',config.port)
})