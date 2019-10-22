import { IUserProfile } from './iuser-profile';

export interface IUser {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    token?: string;
    profile:IUserProfile;
}
