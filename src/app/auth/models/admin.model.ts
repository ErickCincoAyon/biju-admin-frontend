export interface AdminModel {
    _id: string;
    uuid: string;
    name: string;
    surname: string;
    email: string;
    avatar:string;
    admin: string;
    phone?: string;
    active: boolean;
    updated: string;
    created: string;
}