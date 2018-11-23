const express = require('express')
const app = express()
const nunjucks = require('nunjucks')

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'njk')

const users = ['Victor Hermes', 'Monique Rodrigues', 'Josiane R. Hermes']

app.get('/', (req, res) => {
  return res.render('list', { users })
})

app.get('/new', (req, res) => {
  return res.render('new')
})

app.post('/create', (req, res) => {
  users.push(req.body.user)
  return res.redirect('/')
})

/* Desafio */
app.get('/form_desafio', (req, res) => {
  res.render('form_desafio')
})

app.post('/confere', (req, res) => {
  if (req.body.idade >= 18) {
    return res.render('major', { idade: req.body.idade })
  } else {
    return res.render('minor', { idade: req.body.idade })
  }
})

app.listen(3000)

/* const middlewares = (req, res, next) => {
    console.log(
        `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
    );

    req.justatest = "Victor Hermes";

    return next();
};

app.use(middlewares);

app.get('/:nome', (req, res) => {
    return res.send(`Olá, ${req.justatest}. Dados com req.query: ${req.query.nome}`);
});

app.get('/login/:nome', (req, res) => {
    return res.send(`Dados com req.params => ${req.params.nome}`);
}); */
