import React from 'react';
import * as Styled from './stars.styled';
import StarsButton from './stars-button';
import CustomText from '@components/atoms/CustomText/CustomText';
import Spacer from '@components/atoms/Spacer/Spacer';

interface StarsProps {
  stars: number;
  setStars: (stars: number) => void;
  canBeChanged?: boolean;
}

const StarsRating: React.FC<StarsProps> = ({ stars, setStars, canBeChanged }) => {
  const changeStars = (star: number) => {
    if (canBeChanged) {
      setStars(star);
    }
  };

  return (
    <Styled.RatingContainer>
      <Styled.RatingSection>
        <CustomText>Rating:</CustomText>
        <Styled.StarsContainer>
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <StarsButton
                onPress={changeStars}
                isPicked={index <= stars ? true : false}
                index={index}
                key={index}
              />
            );
          })}
        </Styled.StarsContainer>
      </Styled.RatingSection>
      <Styled.RatingSection>
        <CustomText>Status:</CustomText>
        <Spacer size={8} />
        <CustomText>Delivered</CustomText>
      </Styled.RatingSection>
    </Styled.RatingContainer>
  );
};

export default StarsRating;
