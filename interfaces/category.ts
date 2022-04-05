export interface ICategory {
    _id?: string;
    name: string;
    status?: string;
}

export interface ICategorys<T> {
    countPost: number;
    _id?: string;
    name: string;
    status?: T;
}