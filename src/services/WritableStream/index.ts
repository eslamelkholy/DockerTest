import { join } from 'path';
import ToFileStream from './ToFileStream.js';

const tfs = new ToFileStream();

tfs.write({ path: join('files', 'file1.txt'), content: 'Hello' });
tfs.write({ path: join('files', 'file2.txt'), content: 'Node.js' });
tfs.write({ path: join('files', 'file3.txt'), content: 'streams' });
tfs.end(() => console.log('All files created'));

// const users: Array<Object> = [
//   { name: 'Eslam1', job: 'Software Engineer' },
//   { name: 'Eslam2', job: 'Software Engineer' },
//   { name: 'Eslam3', job: 'Software Engineer' },
//   { name: 'Eslam4', job: 'Software Engineer' },
//   { name: 'Eslam5', job: 'Software Engineer' },
//   { name: 'Eslam6', job: 'Software Engineer' },
// ];

// const json2csvParser = new Parser();
// const csv = json2csvParser.parse(users);

// console.log(csv);
