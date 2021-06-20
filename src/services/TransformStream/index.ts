import { createReadStream } from 'fs';
import { createGunzip } from 'zlib';
import parse from 'csv-parse';
import { FilterByCountry } from './FilterByCountry';
import { SumProfit } from './SumProfit';

const csvParser = parse({ columns: true });

createReadStream('data.csv.gz')
  .pipe(createGunzip())
  .pipe(csvParser)
  .pipe(new FilterByCountry('Italy'))
  .pipe(new SumProfit())
  .pipe(process.stdout);
