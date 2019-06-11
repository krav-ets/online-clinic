import Express from 'express';
import path from 'path';
import data from './data';

const app = new Express();

app.use(Express.static(path.join(__dirname, 'public'), {
  dotfiles: 'ignore',
  index: false
}));


app.get('/api/v1', (req, res) => {
  res.json(data);
});

app.get('*', (req, res, next) => {
  console.log('Request: [GET]', req.originalUrl)
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});



app.use(function(req, res, next) {
  console.log('404')
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.sendStatus(err.status || 500);
});

app.listen(3000, () => {
  console.log('App listening on port 3000!');
});