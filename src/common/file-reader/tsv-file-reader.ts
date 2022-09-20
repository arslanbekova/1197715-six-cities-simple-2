import EventEmitter from 'events';
import { createReadStream } from 'fs';
import { FileReaderInterface } from './file-reader.interface.js';

export default class TSVFileReader extends EventEmitter implements FileReaderInterface {
  constructor(public filename: string) {
    super();
  }

  public async read(): Promise<void> {
    const stream = createReadStream(this.filename, {
      highWaterMark: 16384, //16KB
      encoding: 'utf-8',
    });

    let readingLine = '';
    let endLinePosition = -1;
    let importedRowCount = 0;

    for await (const chunk of stream) {
      readingLine += chunk.toString();

      while((endLinePosition = readingLine.indexOf('\n')) >= 0) {
        const completedRow = readingLine.slice(0, endLinePosition + 1);
        readingLine = readingLine.slice(++endLinePosition);
        importedRowCount++;

        this.emit('line', completedRow);
      }
    }

    this.emit('end', importedRowCount);
  }
}
