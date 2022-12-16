import { Dispatch, SetStateAction } from 'react';

interface ButtonProps {
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const Button: React.FC<ButtonProps> = ({ setIsVisible }) => {
  const onButtonClick = () => {
    setIsVisible(true);
  };

  return <button onClick={onButtonClick} className="w-full h-full"></button>;
};

export default Button;
