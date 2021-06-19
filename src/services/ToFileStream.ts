import { Writable, WritableOptions } from 'stream';
import { promises as fs } from 'fs';
import { dirname } from 'path';
import mkdirp from 'mkdirp-promise';
import { Chunk } from '../../types/Streams/chunk';

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
