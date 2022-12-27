import { Dispatch, SetStateAction } from 'react';

interface ButtonProps {
  number: number;
  setNumber: Dispatch<SetStateAction<number>>;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  goals: string[][];
}

const Button: React.FC<ButtonProps> = ({
  number,
  setNumber,
  setIsVisible,
  goals,
}) => {
  const onButtonClick = () => {
    setNumber(number);
    setIsVisible(true);
  };

  return (
    <div onClick={onButtonClick} className="h-28">
      <table className="table-sm text-center w-full h-full">
        <tbody>
          <tr>
            <td>{goals[number] ? goals[number][0] : ''}</td>
            <td>{goals[number] ? goals[number][1] : ''}</td>
            <td>{goals[number] ? goals[number][2] : ''}</td>
          </tr>
          <tr>
            <td>{goals[number] ? goals[number][3] : ''}</td>
            <td>
              {number !== 4 ? (goals[number] ? goals[number][4] : '') : ''}
            </td>
            <td>{goals[number] ? goals[number][5] : ''}</td>
          </tr>
          <tr>
            <td>{goals[number] ? goals[number][6] : ''}</td>
            <td>{goals[number] ? goals[number][7] : ''}</td>
            <td>{goals[number] ? goals[number][8] : ''}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Button;
