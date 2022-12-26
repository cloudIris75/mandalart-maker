import { Dispatch, SetStateAction } from 'react';

interface ButtonProps {
  number: number;
  setNumber: Dispatch<SetStateAction<number>>;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const Button: React.FC<ButtonProps> = ({ number, setNumber, setIsVisible }) => {
  const onButtonClick = () => {
    setNumber(number);
    setIsVisible(true);
  };

  return <div onClick={onButtonClick} className="w-full h-full"></div>;
};

export default Button;
