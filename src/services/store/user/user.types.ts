import { IAddress } from '@typings/types.address';

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: string;
  image: string;
  addresses: IAddress[];
}

export interface IUserState {
  user: IUser;
  access_token: string;
}

export interface IAddInfo {
  name: string;
  phone: string;
}

export interface ISetAddressActive {
  addressName: string;
}
