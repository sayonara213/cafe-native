import React from 'react';
import { StarButton, StarButtonText } from './stars.styled';

interface StarsButtonProps {
  onPress: (index: number) => void;
  isPicked: boolean;
  index: number;
}

const StarsButton: React.FC<StarsButtonProps> = ({ onPress, index, isPicked }) => {
  const handleClick = () => {
    onPress(index);
  };

  return (
    <StarButton onPress={handleClick}>
      <StarButtonText isPicked={isPicked}>&#9733;</StarButtonText>
    </StarButton>
  );
};

export default StarsButton;
