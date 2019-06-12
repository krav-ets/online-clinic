import Express from 'express';
import path from 'path';
import appointments from '../data/appointments.json';
import profile from '../data/profile.json';
import doctors from '../data/doctors.json';
import rooms from '../data/rooms.json';

const app = new Express();

app.use(Express.static(path.join(__dirname, 'public'), {
  dotfiles: 'ignore',
  index: false
}));


app.get('/api/v1', (req, res) => {
  const data = { appointments, doctors, rooms, profile };
  res.json(data);
});

app.get('*', (req, res, next) => {
  console.log('Request: [GET]', req.originalUrl)
  res.sendFile(path.resolve(__dirname, 'public/', 'index.html'));
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

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});