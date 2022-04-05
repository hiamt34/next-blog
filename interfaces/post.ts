import { ICategory, ITag } from ".";

export interface IPost {
    _id?: string;
    title: string;
    description: string;
    tags: ITag[] & string[];
    category: ICategory & string;
    imgs: string[];
    video: string;
    comment?: []; 


    active?: number | boolean;
    status?: 'hot' | 'normal';

    createdAt?: string;
    updatedAt?: string;
}

