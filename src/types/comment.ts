import { User } from './user.js';

export type Comment = {
  text: string;
  publishedDate: Date;
  rating: number;
  author: User;
}
