/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production'; // disables Babel dev config for hot reloading (not desired for production)

console.log('Generating minified bundle for production via Webpack.  This will take a moment...');

webpack(webpackConfig).run((err, stats) => {
  if (err) { // fatal error occurred
    console.log(chalk.bgRed(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
  }

  console.log(`Webpack stats: ${stats}`);

  // build succeeded
  console.log(chalk.green('App compiled in production mode and written to /dist.'));

  return 0;
});
