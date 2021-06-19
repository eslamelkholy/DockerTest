import { Writable, WritableOptions } from 'stream';
import { promises as fs } from 'fs';
import { dirname } from 'path';
import mkdirp from 'mkdirp-promise';
import { Chunk } from '../types/Streams/chunk';

export default class ToFileStream extends Writable {
  constructor(options: WritableOptions) {
    super({ ...options, objectMode: true });
  }

  _write(chunk: Chunk, encoding: BufferEncoding, cb: Function) {
    mkdirp(dirname(chunk.path))
      .then(() => fs.writeFile(chunk.path, chunk.content))
      .then(() => cb())
      .catch(cb);
  }
}

/**
 * Example on How To Use !!
  const tfs = new ToFileStream()
  tfs.write({ path: join('files', 'file1.txt'), content: 'Hello' })
  tfs.write({ path: join('files', 'file2.txt'), content: 'Node.js' })
  tfs.write({ path: join('files', 'file3.txt'), content: 'streams' })
  tfs.end(() => console.log('All files created'))
 */
