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
  const tablePosition = () => {
    if (number === 0 || number === 3 || number == 6) {
      return 'left';
    } else if (number === 2 || number === 5 || number == 8) {
      return 'right';
    } else {
      return 'middle';
    }
  };

  const onButtonClick = () => {
    setNumber(number);
    setIsVisible(true);
  };

  return (
    <div onClick={onButtonClick} className="h-28">
      <table
        className={`table-sm text-center h-full ${
          tablePosition() === 'left'
            ? 'ml-2'
            : tablePosition() === 'right'
            ? 'mr-2'
            : 'mx-1'
        }`}
      >
        <tbody>
          <tr>
            <td>
              <pre>{goals[number] ? goals[number][0] : ''}</pre>
            </td>
            <td>
              <pre>{goals[number] ? goals[number][1] : ''}</pre>
            </td>
            <td>
              <pre>{goals[number] ? goals[number][2] : ''}</pre>
            </td>
          </tr>
          <tr>
            <td>
              <pre>{goals[number] ? goals[number][3] : ''}</pre>
            </td>
            <td>
              <pre>
                {number !== 4 ? (goals[4] ? goals[4][number] : '') : ''}
              </pre>
            </td>
            <td>
              <pre>{goals[number] ? goals[number][5] : ''}</pre>
            </td>
          </tr>
          <tr>
            <td>
              <pre>{goals[number] ? goals[number][6] : ''}</pre>
            </td>
            <td>
              <pre>{goals[number] ? goals[number][7] : ''}</pre>
            </td>
            <td>
              <pre>{goals[number] ? goals[number][8] : ''}</pre>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Button;
