import { IUser } from "./user";

export interface IRecipe{
    splice(arg0: number): any;
    _id:string;
    title:string;
    imageUrl:string;
    description:string;
    prepTime:string;
    cookTime:string;
    ingredients:string;
    likes:string[];
    subscribers:string[];
    userId:IUser;
    created_at:string;
    updatedAt:string;
    __v:number;

   
}


