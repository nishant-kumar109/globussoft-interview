const express = require('express');
const app = express();
const chalk = require('chalk');
const routes = require('./routes/index');


app.use(express.json());
app.use('/user', routes.user);

app.listen(8080, () => {
  console.log(chalk.white.bgMagenta.bold(` Recipe Management Server secure and running 🚀🚀🚀 : 8080 `));
});