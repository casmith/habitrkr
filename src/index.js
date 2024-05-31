const express = require('express');
const _ = require('lodash');
const UsersRepository = require('./usersRepository');
const GoalsRepository = require('./goalsRepository');
const app = express();

const port = process.env.PORT || 3000;

const dbConfig = {
  user: process.env.DB_USER || 'habitrkr',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'habitrkr',
  password: process.env.DB_PASS || 'habitrkr',
  port: process.env.DB_PORT || 5432
};

const usersRepository = new UsersRepository(dbConfig);
const goalsRepository = new GoalsRepository(dbConfig);

app.use(express.json());

app.get('/users/:id', (req, res) => {
  usersRepository.get(req.params.id).then(user => res.send(user[0]));
});

app.get('/goals/search', (req, res) => {
  goalsRepository.find(req.query).then(goals => res.send(goals));
})

app.get('/goals/:id', (req, res) => {
  goalsRepository.get(req.params.id).then(goals => res.send(goals));
});

app.post('/goals', (req, res) => {
  const body = req.body;
  goalsRepository.insert(body.userId, body.label, body.target, body.period)
    .then(() => res.send("done"));
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
