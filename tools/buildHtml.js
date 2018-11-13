/* eslint-disable no-console */
import fs from 'fs';
import cheerio from 'cheerio';
import chalk from 'chalk';

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if (err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup);

  // standalone stylesheet used only in production, need to dynamically add here
  $('head').prepend('<link rel="stylesheet" href="styles.css">');

  fs.writeFile('dist/index.html', $.html(), 'utf8', function(err) {
    if (err) {
      return console.log(err);
    }
    console.log(chalk.green('index.html written to /dist'));
  });
});
