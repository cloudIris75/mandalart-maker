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

  return (
    <div onClick={onButtonClick} className="h-28">
      <table className="table-sm text-center w-full h-full">
        <tbody>
          <tr>
            <td>코딩</td>
            <td>개발</td>
            <td>기상</td>
          </tr>
          <tr>
            <td>건강</td>
            <td></td>
            <td>식단</td>
          </tr>
          <tr>
            <td>영어</td>
            <td>일본어</td>
            <td>성적</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Button;
