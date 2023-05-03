import { INotification } from '@typings/types.notification';

export interface INotificationState {
  notifications: INotification[];
  isLoading: boolean;
  isError: boolean;
}
