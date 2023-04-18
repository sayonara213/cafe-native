import React from 'react';

import CustomText from '@components/atoms/CustomText/CustomText';
import Spacer from '@components/atoms/Spacer/Spacer';
import CustomCheckBox from '@components/molecules/check-box/check-box';

import { useAppDispatch, useAppSelector } from '@services/hooks/redux.hook';
import { setTypes } from '@services/store/goods/goods.reducer';

import { IFilter } from './filter-list.types';

import * as Styled from './filter-list.styled';

const filters: IFilter[] = [
  { name: 'Drinks', categories: ['Coffee', 'Tea', 'Juice', 'Water'] },
  { name: 'Food', categories: ['Sandwich', 'Burger', 'Pizza', 'Salad'] },
];

const FilterList: React.FC = () => {
  const types = useAppSelector((store) => store.goods.types);
  const dispatch = useAppDispatch();

  const handleFilter = (category: string) => {
    if (types.includes(category)) {
      dispatch(setTypes(types.filter((type) => type !== category)));
    } else {
      dispatch(setTypes([...types, category]));
    }
  };

  return (
    <Styled.FilterListContainer>
      {filters.map((filter) => (
        <Styled.FilterCategory key={filter.name}>
          <CustomText fontSize={20} fontFamily="Roboto-Medium" textAlign="left">
            {filter.name}
          </CustomText>
          <Spacer size={5} isBorder={true} />
          <Styled.FilterCategoryWrapper>
            {filter.categories.map((category) => (
              <Styled.ItemWrapper key={category}>
                <CustomCheckBox
                  label={category}
                  checked={types.includes(category)}
                  onPress={handleFilter}
                />
              </Styled.ItemWrapper>
            ))}
          </Styled.FilterCategoryWrapper>
        </Styled.FilterCategory>
      ))}
    </Styled.FilterListContainer>
  );
};

export default FilterList;
