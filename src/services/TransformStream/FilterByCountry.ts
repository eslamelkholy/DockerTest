import { Transform, TransformCallback } from 'stream';

export class FilterByCountry extends Transform {
  private filteredColumn: string;

  constructor(filteredColumn: string, options = {}) {
    super({ ...options, objectMode: true });
    this.filteredColumn = filteredColumn;
  }

  _transform(record: any, enc: BufferEncoding, cb: TransformCallback) {
    if (record.country === this.filteredColumn) {
      this.push(record);
    }
    cb();
  }
}
