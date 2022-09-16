import { User } from './user.js';
import { Accomodation, City, Facility } from '../consts.js';
import { Coordinates } from './coorditates.js';

export type Offer = {
  title: string;
  description: string;
  publishedDate: Date;
  city: City;
  previewImg: string;
  photos: string[];
  isPremium: boolean;
  rating: number;
  type: Accomodation;
  roomsCount: number;
  guestsCount: number;
  price: number;
  facilities: Facility[];
  author: User;
  commentsCount: number;
  coordinates: Coordinates;
}
