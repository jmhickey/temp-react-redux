import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0.00');
console.log(`Testing number formatting: ${courseValue} should be the amount.`); // eslint-disable-line no-console
