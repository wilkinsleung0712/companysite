import { Photo } from './photo';
export interface Comment {
    commentId: number;
    content: string;
    photo: Photo;
    userName: string;
    photoId: number;
    created: Date;
}
