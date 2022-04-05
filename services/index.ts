import { ICategory, ICategorys, IInstagram, IPost, ITag, Response } from "../interfaces";
import client from "./client"
const baseUrl = process.env.baseURL
class Services<T> {
    public uri: string
    constructor(uri: string) {
        this.uri = uri
    }

    public getAll = (): Promise<Response<T[]>> => {
        const url = baseUrl + this.uri;
        return client.get(url);
    };

    public getDetail = (_id?: string): Promise<Response<T>> => {
        const url = baseUrl + `${this.uri}/detail/${_id}`;
        return client.get(url);
    };

}

export interface GetAllPosts {
    payload: IPost[];
    meta: {
        perPage: number;
        total: number;
        currentPage: number;
    }
}
class PostService extends Services<IPost> {
    public getAllPost = (params: any = {}): Promise<Response<GetAllPosts>> => {     
           
        const url = baseUrl + this.uri;
        return client.get(url, { params });
    }
}

export const postService = new PostService('posts')
export const tagService = new Services<ITag>('tags')
export const categoryService = new Services<ICategorys<ICategory>>('categories')
export const instagramService = new Services<IInstagram>('instagrams')

