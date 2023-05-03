import { INotification } from '@typings/types.notification';

export interface INotificationList {
  date: Date;
  notifications: INotification[];
}
