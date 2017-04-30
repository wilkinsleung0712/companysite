import { Photo } from './photo';
export interface User {
   userId: number;
   firstName: string;
   lastName: string;
   password: string;
   created: Date;
   photoList: Photo[];
   linkedPhotoList: Photo[];
   userName: string;
}
