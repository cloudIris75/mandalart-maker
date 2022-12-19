import Image from 'next/image';
import { Dispatch, SetStateAction, useRef } from 'react';

interface ModalProps {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ isVisible, setIsVisible }) => {
  const modal = useRef<HTMLDivElement>(null);

  return (
    <>
      {isVisible ? (
        <div
          ref={modal}
          onClick={(e) => {
            if (e.target === modal.current) {
              setIsVisible(false);
            }
          }}
          className="absolute top-0 left-0 w-full h-full z-2 pointer-events-auto"
        >
          <div className="relative top-1/4 left-0 w-full pointer-events-none">
            <Image
              src="https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/images/1.PNG"
              alt="Mandalart Table"
              width={390}
              height={693}
              className="bg-white border border-border"
            ></Image>
            <table className="absolute top-2 left-0 z-3 w-full text-center border-separate border-spacing-y-2">
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
