import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { INotificationState } from './notifications.types';
import { API_ROUTES } from '@constants/config';
import { getRequest } from '@services/api.service';

export const initialNotifications: INotificationState = {
  notifications: [],
  isLoading: false,
  isError: false,
};

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async (userId: string) => {
    console.log('userId', userId);

    const response = await getRequest(`${API_ROUTES.notifications.fetch}/${userId}`);
    console.log('response', response);

    return [...response];
  },
);

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: initialNotifications,
  reducers: {
    setNotificationRead: (state, action: PayloadAction<string>) => {
      const notification = state.notifications.find(
        (notification) => notification.id === action.payload,
      );
      if (notification) {
        notification.isSeen = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotifications.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.isLoading = false;
      state.notifications = action.payload;
    });
    builder.addCase(fetchNotifications.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const notificationsReducer = notificationsSlice.reducer;

export const { setNotificationRead } = notificationsSlice.actions;
