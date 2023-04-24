import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAddInfo, ISetAddressActive, IUser, IUserState } from '../user/user.types';
import { IAddress } from '@typings/types.address';

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
      if (payload.user.name === '' || payload.user.name === null) {
        state.user.name = `USER${payload.user.id.substring(0, 5)}`;
      }
    },
    updateUser: (state: IUserState, { payload }: PayloadAction<IUser>) => {
      state.user = payload;
    },
    addInfo: (state: IUserState, { payload }: PayloadAction<IAddInfo>) => {
      const { name, phone } = payload;

      state.user.name = name;
      state.user.phone = phone;
    },
    setAddresses: (state: IUserState, { payload }: PayloadAction<IAddress[]>) => {
      state.user.addresses = payload;
    },
    logOut: (state: IUserState) => {
      state.user = initialUser.user;
      state.access_token = initialUser.access_token;
    },
    setAddressActive: (state: IUserState, { payload }: PayloadAction<ISetAddressActive>) => {
      const { addressName } = payload;
      const addressIndex = state.user.addresses.findIndex(
        (address) => address.addressName === addressName,
      );
      state.user.addresses[addressIndex].isActive = !state.user.addresses[addressIndex].isActive;
    },
  },
});

export const { setUser, logOut, addInfo, setAddresses, updateUser, setAddressActive } =
  userSlice.actions;

export const userReducer = userSlice.reducer;
