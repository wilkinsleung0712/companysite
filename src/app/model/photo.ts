import { User } from "app/model/user";

export interface Photo {
   photoId: number;
   photoName: string;
   imageName: string;
   title: string;
   description: string;
   user: User;
   likes: number;
   likedByUsers: User[];
   commentList: Comment[];
   created: Date;
}
