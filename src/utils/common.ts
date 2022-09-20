import { Offer } from '../types/offer.js';
import { Accomodation, City, Facility } from './consts.js';

export const createOffer = (row: string): Offer => {
  const tokens = row.replace('\n', '').split('\t');
  const [title, description, publishedDate, city, previewImg, photos, isPremium, rating, type, roomsCount, guestsCount, price, facilities, name, email, avatarPath, password, isPro, commentsCount, latitude, longitude] = tokens;
  console.log(type);
  return {
    title,
    description,
    publishedDate: new Date(publishedDate),
    city: City[city as keyof typeof City],
    previewImg,
    photos: photos.split(';')
      .map((photo) => photo),
    isPremium: isPremium === 'true',
    rating: Number.parseInt(rating, 10),
    type: Accomodation[type as keyof typeof Accomodation],
    roomsCount: Number.parseInt(roomsCount, 10),
    guestsCount: Number.parseInt(guestsCount, 10),
    price: Number.parseInt(price, 10),
    facilities: facilities.split(';')
      .map((facility) => Facility[facility as keyof typeof Facility]),
    author: {name, email, avatar: avatarPath, password, isPro: isPro === 'true'},
    commentsCount: Number.parseInt(commentsCount, 10),
    coordinates: {latitude: Number(latitude), longitude: Number(longitude)}
  };
};

export const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : '';
