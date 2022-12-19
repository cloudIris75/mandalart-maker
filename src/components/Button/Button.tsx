import { Dispatch, SetStateAction } from 'react';

interface ButtonProps {
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const Button: React.FC<ButtonProps> = ({ setIsVisible }) => {
  return (
    <div onClick={() => setIsVisible(true)} className="w-full h-full"></div>
  );
};

export default Button;
