import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

const backgroundImages = [
  {
    id: 1,
    image:
      'https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/images/1.PNG',
  },
  {
    id: 2,
    image:
      'https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/images/2.PNG',
  },
  {
    id: 3,
    image:
      'https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/images/3.PNG',
  },
  {
    id: 4,
    image:
      'https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/images/4.PNG',
  },
  {
    id: 5,
    image:
      'https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/images/main.PNG',
  },
  {
    id: 6,
    image:
      'https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/images/6.PNG',
  },
  {
    id: 7,
    image:
      'https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/images/7.PNG',
  },
  {
    id: 8,
    image:
      'https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/images/8.PNG',
  },
  {
    id: 9,
    image:
      'https://mandalart-bucket.s3.ap-northeast-2.amazonaws.com/images/9.PNG',
  },
];

interface ModalProps {
  number: number;
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ number, isVisible, setIsVisible }) => {
  const modal = useRef<HTMLDivElement>(null);
  const [backgroundURL, SetBackgroundURL] = useState('');
  const imageURL = backgroundImages.filter((image) => image.id === number)[0]
    .image;

  useEffect(() => {
    SetBackgroundURL(imageURL);
  }, [imageURL]);

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
              src={backgroundURL}
              alt="Mandalart Table"
              width={390}
              height={693}
              className="bg-white border border-border"
            ></Image>
            <table className="absolute top-0 left-0 z-3 w-full text-center border-separate border-spacing-y-2">
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
