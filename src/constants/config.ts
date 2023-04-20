export const APP_CONFIG = {
  BASE_API_URL: 'http://192.168.0.110:5000',
};

export const API_ROUTES = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    additional: '/auth/additional',
  },
  goods: {
    menuList: '/menu/list',
    productList: '/product/list',
    getProduct: '/product/get',
    getMenu: '/menu/get',
  },
};
