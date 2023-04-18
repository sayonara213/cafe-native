import { API_ROUTES } from '@constants/config';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getRequest } from '@services/api.service';
import { FetchGoodsPayload, MenuListState } from './goods.types';

const initialState: MenuListState = {
  menuList: [],
  menuListLoading: false,
  menuListError: null,

  productList: [],
  productListLoading: false,
  productListError: null,

  orderBy: {
    name: 'name',
    order: 'asc',
  },
  types: [],
  search: '',
};

export const fetchMenuList = createAsyncThunk(
  'menuList/fetchMenuList',
  async (payload: FetchGoodsPayload) => {
    const { orderBy, types } = payload;
    const typesString = types
      .map((type) => `&types=${type}`)
      .join('')
      .toLowerCase();
    const getMenuApi = `${API_ROUTES.goods.menuList}?sortBy=${orderBy?.name}&order=${orderBy?.order}${typesString}`;
    const response = await getRequest(getMenuApi);
    return [...response];
  },
);

export const fetchProductList = createAsyncThunk(
  'productList/fetchProductList',
  async (payload: FetchGoodsPayload) => {
    const { orderBy, types } = payload;
    const typesString = types
      .map((type) => `&types=${type}`)
      .join('')
      .toLowerCase();
    const getProductApi = `${API_ROUTES.goods.productList}/param?sortBy=${orderBy?.name}&order=${orderBy?.order}${typesString}`;
    const response = await getRequest(getProductApi);
    return [...response];
  },
);

const menuListSlice = createSlice({
  name: 'menuList',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchMenuList.pending, (state) => {
      state.menuListLoading = true;
    });
    builder.addCase(fetchMenuList.fulfilled, (state, action) => {
      state.menuListLoading = false;
      state.menuList = action.payload;
    });
    builder.addCase(fetchMenuList.rejected, (state) => {
      state.menuListLoading = false;
      state.menuListError = 'error';
    });
    builder.addCase(fetchProductList.pending, (state) => {
      state.productListLoading = true;
    });
    builder.addCase(fetchProductList.fulfilled, (state, action) => {
      state.productListLoading = false;
      state.productList = action.payload;
    });
    builder.addCase(fetchProductList.rejected, (state) => {
      state.productListLoading = false;
      state.productListError = 'error';
    });
  },
  reducers: {
    setOrderBy: (state, action) => {
      state.orderBy = action.payload;
    },
    setTypes: (state, action) => {
      state.types = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default menuListSlice.reducer;

export const { setOrderBy, setTypes, setSearch } = menuListSlice.actions;
