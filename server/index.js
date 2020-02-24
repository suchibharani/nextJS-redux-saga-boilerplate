
const path = require('path')
const express = require('express')
const compression = require('compression')
const next = require('next')
const helmet = require('helmet')
// let fs = require('fs');
const routes = require('../routes')
const port = parseInt(process.env.PORT, 10) || 3200
// const port = 3500;
const dev = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'staging';
const app = next({ dev })
console.log(process.env.NODE_ENV);



const handler = routes.getRequestHandler(app, ({req, res, route, query}) => {
  app.render(req, res, route.page, query)
})  


app.prepare().then(() => {
  const server = express()
  server.use(helmet())
  server.use(compression())
  const staticPath = path.join(__dirname, '../static')
  server.use('/static', express.static(staticPath, {
    maxAge: '30d',
    immutable: true
  }))
  // Redirect non trailing slash to trailing slash
  if(process.env.NODE_ENV != "development"){
    server.use(function(req, res, next){
      var qsi = req.originalUrl.indexOf('?');
      var path = req.originalUrl;
        // console.warn(path)
        if(qsi > -1) path = path.substr(0, qsi);
        if(path.substr(-1) === '/' || ~path.indexOf('.')) return next();
        var qs = '';
        if(qsi > -1) qs = req.originalUrl.substr(qsi);
        var redirect = path + '/' + qs;
        res.redirect(301, redirect);
  
        console.log('301 redirected ' + req.originalUrl + ' to ' + redirect);
      
    });
  }
  server.use(handler).listen(port)
})
