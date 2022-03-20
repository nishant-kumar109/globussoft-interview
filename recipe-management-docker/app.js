const express = require('express');
const app = express();
const chalk = require('chalk');
const routes = require('./routes/recipes');

app.use('/', routes);

app.listen(8080, () => {
  console.log(chalk.white.bgMagenta.bold(` Recipe Management Server secure and running 🚀🚀🚀 : 8080 `));
});