import { TIconNames } from '@components/atoms/Icon';

import { APP_ROUTES } from '@constants/routes';

type TIconGetter = (type: string, isFocused: boolean) => TIconNames;

const getCurrentIcon = (type: string, isFocused: boolean) =>
  `${type}${isFocused ? 'Active' : ''}` as TIconNames;

const getIconsHashMap = (getter: TIconGetter, isFocused: boolean) => {
  const { profile, main, orders } = APP_ROUTES.main;
  return {
    [main.toLowerCase()]: getter('main', isFocused),
    [profile.toLowerCase()]: getter('profile', isFocused),
    [orders.toLowerCase()]: getter('orders', isFocused),
  };
};

export const getIcon = (isFocused: boolean) => getIconsHashMap(getCurrentIcon, isFocused);
