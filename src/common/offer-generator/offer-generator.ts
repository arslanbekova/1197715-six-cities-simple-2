import dayjs from 'dayjs';
import { MockData } from '../../types/mock-data.js';
import { Accomodation, Facility, City } from '../../utils/consts.js';
import { generateRandomValue, getRandomItem, getRandomItems, getRandomString } from '../../utils/random.js';
import { OfferGeneratorInterface } from './offer-generator.interface.js';

const BOOLEAN_VALUES = [ 'true', 'false'];
enum WeekDay {
  First = 1,
  Last = 7
}
enum Rating {
  Min = 1,
  Max = 5,
  NumAfterDigit = 1,
}
enum Room {
  Min = 1,
  Max = 8,
}
enum Guest {
  Min = 1,
  Max = 10,
}
enum Price {
  Min = 100,
  Max = 100000,
}
enum Comment {
  Min = 1,
  Max = 5,
}
enum Coordinate {
  Min = 4,
  Max = 50,
  NumAfterDigit = 6,
}

export class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const publishedDate = dayjs().subtract(generateRandomValue(WeekDay.First, WeekDay.Last), 'day').toISOString();
    const city = getRandomItem<string>(Object.values(City));
    const previewImg = getRandomItem<string>(this.mockData.previewImgs);
    const photos = this.mockData.photos.join(';');
    const isPremium = getRandomItem<string>(BOOLEAN_VALUES);
    const rating = generateRandomValue(Rating.Min, Rating.Max, Rating.NumAfterDigit);
    const type = getRandomItem<string>(Object.values(Accomodation));
    const roomsCount = generateRandomValue(Room.Min, Room.Max);
    const guestsCount = generateRandomValue(Guest.Min, Guest.Max);
    const price = generateRandomValue(Price.Min, Price.Max);
    const facilities = getRandomItems<string>(Object.values(Facility)).join(';');
    const name = getRandomItem<string>(this.mockData.names);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatarPath = getRandomItem<string>(this.mockData.avatars);
    const password = getRandomString();
    const isPro = getRandomItem<string>(BOOLEAN_VALUES);
    const commentsCount = generateRandomValue(Comment.Min, Comment.Max);
    const latitude = generateRandomValue(Coordinate.Min, Coordinate.Max, Coordinate.NumAfterDigit);
    const longitude = generateRandomValue(Coordinate.Min, Coordinate.Max, Coordinate.NumAfterDigit);

    return [
      title, description, publishedDate, city, previewImg,
      photos, isPremium, rating, type, roomsCount, guestsCount,
      price, facilities, name, email, avatarPath, password, isPro,
      commentsCount, latitude, longitude
    ].join('\t');
  }
}
