import { readFileSync } from 'fs';
import { Offer } from '../../types/offer.js';
import { AccomodationStrings, CityStrings, FacilityStrings} from './types.js';
import { Accomodation, City, Facility } from '../../utils/consts.js';
import { FileReaderInterface } from './file-reader.interface.js';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }
    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([title, description, publishedDate, city, previewImg, photos, isPremium, rating, type, roomsCount, guestsCount, price, facilities, name, email, avatarPath, password, isPro, commentsCount, latitude, longitude]) => ({
        title,
        description,
        publishedDate: new Date(publishedDate),
        city: City[city as CityStrings],
        previewImg,
        photos: photos.split(';')
          .map((photo) => photo),
        isPremium: isPremium === 'true',
        rating: Number.parseInt(rating, 10),
        type: Accomodation[type as AccomodationStrings],
        roomsCount: Number.parseInt(roomsCount, 10),
        guestsCount: Number.parseInt(guestsCount, 10),
        price: Number.parseInt(price, 10),
        facilities: facilities.split(';')
          .map((facility) => Facility[facility as FacilityStrings]),
        author: {name, email, avatarPath, password, isPro: isPro === 'true'},
        commentsCount: Number.parseInt(commentsCount, 10),
        coordinates: {latitude: Number(latitude), longitude: Number(longitude)}
      }));
  }
}
