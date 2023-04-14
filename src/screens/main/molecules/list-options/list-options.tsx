import React from 'react';

import RNPickerSelect from 'react-native-picker-select';

import * as Styled from './list-options.styled';
import CustomButton from '@components/atoms/CustomButton/CustomButton';
import { StyleSheet } from 'react-native';
import { theme } from '@theme/theme';
import { useAppDispatch } from '@services/hooks/redux.hook';
import { ISortValue } from './list-options.types';
import { setOrderBy } from '@services/store/goods/goods.reducer';

const sortList: ISortValue[] = [
  { value: { name: 'price', order: 'asc' }, label: 'Price Asc' },
  { value: { name: 'price', order: 'desc' }, label: 'Price Desc' },
  { value: { name: 'name', order: 'asc' }, label: 'Name Asc' },
  { value: { name: 'name', order: 'desc' }, label: 'Name Desc' },
  { value: { name: 'weight', order: 'asc' }, label: 'Weight Asc' },
  { value: { name: 'weight', order: 'desc' }, label: 'Weight Desc' },
  { value: { name: 'createdAt', order: 'asc' }, label: 'Date Asc' },
  { value: { name: 'createdAt', order: 'desc' }, label: 'Date Desc' },
];

const ListOptions: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSort = (value: ISortValue) => {
    dispatch(setOrderBy(value));
  };

  return (
    <Styled.ListOptionsContainer>
      <Styled.HalfWrap>
        <CustomButton icon="filter" type="purple">
          Filters
        </CustomButton>
      </Styled.HalfWrap>
      <Styled.HalfWrap>
        <RNPickerSelect
          onValueChange={handleSort}
          items={sortList}
          style={pickerSelectStyles}
          placeholder={{ label: 'Sort by', value: null }}
        />
      </Styled.HalfWrap>
    </Styled.ListOptionsContainer>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    fontFamily: theme.fontFamily.medium,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: theme.colors.purple,
    width: 150,
  },
});

export default ListOptions;
