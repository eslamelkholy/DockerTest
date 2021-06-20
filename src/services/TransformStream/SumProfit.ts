import { Transform, TransformCallback } from 'stream';

export class SumProfit extends Transform {
  private total: number;
  constructor(options = {}) {
    super({ ...options, objectMode: true });
    this.total = 0;
  }

  _transform(record: any, enc: BufferEncoding, cb: TransformCallback) {
    this.total += Number.parseFloat(record.profit);
    cb();
  }

  _flush(cb) {
    this.push(this.total.toString());
    cb();
  }
}
