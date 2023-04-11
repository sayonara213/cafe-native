import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../user/user.types';

interface IUserState {
  user: IUser;
  access_token: string;
}

interface IAddInfo {
  name: string;
  phone: string;
}

export const initialUser: IUserState = {
  user: {
    id: '',
    name: '',
    email: '',
    role: '',
    image: '',
    phone: '',
    addresses: [],
  },
  access_token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialUser,
  reducers: {
    setUser: (state: IUserState, { payload }: PayloadAction<IUserState>) => {
      const { user, access_token } = payload;
      state.user = user;
      state.access_token = access_token;
    },
    addInfo: (state: IUserState, { payload }: PayloadAction<IAddInfo>) => {
      const { name, phone } = payload;

      state.user.name = name;
      state.user.phone = phone;
    },
    logOut: (state: IUserState) => {
      state.user = initialUser.user;
      state.access_token = initialUser.access_token;
    },
  },
});

export const { setUser, logOut, addInfo } = userSlice.actions;

export const userReducer = userSlice.reducer;