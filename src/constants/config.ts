export const APP_CONFIG = {
  BASE_API_URL: 'http://192.168.0.110:5000',
};

export const API_ROUTES = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    additional: '/auth/additional',
    retrieve: '/auth/retrieve-user',
  },
  goods: {
    menuList: '/menu/list',
    productList: '/product/list',
    getProduct: '/product/get',
    getMenu: '/menu/get',
  },
  user: {
    getAddresses: '/address/user',
    updateUser: '/user',
    updateAvatar: '/user/photo',
    updateAddress: '/address',
  },
  order: {
    create: '/order/add',
    getList: '/order/list',
  },
  notifications: {
    setToken: '/user-device/save',
  },
};
